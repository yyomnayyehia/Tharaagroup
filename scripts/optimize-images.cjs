const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '../src/assets');

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  let count = 0;
  
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, `${baseName}.webp`);

      if (fs.existsSync(outputPath)) {
        console.log(`Skipping ${file} - webp already exists`);
        continue;
      }

      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      count++;
    }
  }
  
  console.log(`Optimized ${count} images to WebP.`);
}

optimizeImages().catch(console.error);
