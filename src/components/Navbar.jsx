import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo.webp';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      if (!isHome) return;
      const sections = ['about', 'services', 'projects', 'testimonials', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Handle clicks on anchor links — navigate home first if not there
  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${hash}`);
    }
  };

  const navLinks = [
    { href: 'about',         label: 'About Us',      id: 'about' },
    { href: 'services',      label: 'Services',      id: 'services' },
    { href: 'projects',      label: 'Portfolio',     id: 'projects' },
    { href: 'process',       label: 'Process',       id: 'process' },
  ];

  const isDark = scrolled || !isHome;

  return (
    <>
      <nav
        className={`navbar ${isDark ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container navbar-content">
          <Link to="/" className="logo-link" aria-label="Tharaa Real Estate — Home">
            <img src={logoImg} alt="Tharaa Real Estate Logo" className="logo-img" />
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {navLinks.map(({ href, label, id }) => (
              <li key={id}>
                <a
                  href={`/#${href}`}
                  className={`nav-link ${isHome && activeSection === id ? 'active' : ''} ${!isHome && href === 'projects' ? 'active' : ''}`}
                  onClick={(e) => handleAnchorClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="btn-primary nav-cta"
                id="nav-contact-btn"
                onClick={(e) => handleAnchorClick(e, 'contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger — stays inside nav so it's above the drawer */}
          <button
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            style={{ position: 'relative', zIndex: 1200 }}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — rendered OUTSIDE <nav> so z-index is not trapped */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {navLinks.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={`/#${href}`}
                className="mobile-link"
                onClick={(e) => handleAnchorClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="btn-primary mobile-cta"
              onClick={(e) => handleAnchorClick(e, 'contact')}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
