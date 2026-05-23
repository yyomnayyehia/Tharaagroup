require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Security Middleware ────────────────────────────────────────────────────
app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '10kb' }));

// Rate limiter — max 20 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

// ─── Email Transporter ──────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password
  },
});

// ─── Routes ─────────────────────────────────────────────────────────────────

// Health check — Railway uses this to confirm the server is alive
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Tharaa API is running.' });
});

// Contact form — sends an email to the business inbox
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  try {
    // Email to the business
    await transporter.sendMail({
      from: `"Tharaa Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a1a2e; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px 0;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td><td style="padding: 8px 0;">${message}</td></tr>
          </table>
          <p style="margin-top: 32px; font-size: 12px; color: #999;">Sent from tharaagroup.com contact form</p>
        </div>
      `,
    });

    // Auto-reply to the visitor
    await transporter.sendMail({
      from: `"Tharaa Group" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Tharaa Group',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 32px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a1a2e;">Thank You, ${name}!</h2>
          <p style="color: #555; line-height: 1.7;">We have received your message and will be in touch with you shortly.</p>
          <p style="color: #555; line-height: 1.7;">In the meantime, feel free to browse our portfolio at <a href="${process.env.CLIENT_URL}" style="color: #c9a84c;">our website</a>.</p>
          <br/>
          <p style="color: #555;">Warm regards,<br/><strong>Tharaa Group</strong></p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// Projects API — returns all projects (ready for future DB integration)
app.get('/api/projects', (req, res) => {
  // TODO: Replace with DB query when database is connected
  res.status(200).json({
    success: true,
    message: 'Projects endpoint ready. Connect a database to serve real data.',
    data: [],
  });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong on the server.' });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Tharaa API running on port ${PORT}`);
});
