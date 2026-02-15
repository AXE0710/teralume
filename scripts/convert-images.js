const fs = require('fs');
const path = require('path');

// Ensure sharp is installed: npm install sharp
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('Error: "sharp" library is required. Please run: npm install sharp');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function convertImagesRecursive(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }

  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertImagesRecursive(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.webp', '.avif'].includes(ext)) {
        const targetPath = fullPath.replace(new RegExp(`${ext}$`), '.png');
        
        // Check if PNG already exists to avoid re-processing
        if (!fs.existsSync(targetPath)) {
          console.log(`Converting: ${entry.name} -> ${path.basename(targetPath)}`);
          try {
            await sharp(fullPath).toFile(targetPath);
            // Uncomment the next line if you want to delete the original file after conversion
            // await fs.promises.unlink(fullPath);
          } catch (err) {
            console.error(`Failed to convert ${entry.name}:`, err.message);
          }
        }
      }
    }
  }
}

console.log(`Scanning ${PUBLIC_DIR} for images to convert...`);
convertImagesRecursive(PUBLIC_DIR)
  .then(() => console.log('Conversion complete.'))
  .catch(err => console.error('Fatal error:', err));