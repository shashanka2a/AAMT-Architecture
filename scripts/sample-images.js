const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

// Sample architecture images from Unsplash
const SAMPLE_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    alt: 'Modern Office Building',
    category: 'Commercial'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    alt: 'Contemporary House Design',
    category: 'Residential'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
    alt: 'Modern Glass Building',
    category: 'Commercial'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
    alt: 'Minimalist Architecture',
    category: 'Residential'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    alt: 'Urban Development',
    category: 'Urban'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    alt: 'Sustainable Architecture',
    category: 'Green'
  }
];

async function downloadSampleImages() {
  const outputDir = path.join(__dirname, '..', 'public', 'portfolio');
  const manifestFile = path.join(outputDir, 'manifest.json');
  
  console.log('🎨 Downloading sample architecture images...');
  
  // Create output directory
  await fs.ensureDir(outputDir);
  
  const downloadedImages = [];
  
  for (let i = 0; i < SAMPLE_IMAGES.length; i++) {
    const image = SAMPLE_IMAGES[i];
    const filename = `portfolio-${String(i + 1).padStart(3, '0')}.jpg`;
    const filepath = path.join(outputDir, filename);
    
    try {
      console.log(`⬇️  Downloading: ${filename}`);
      
      const response = await axios({
        method: 'GET',
        url: image.url,
        responseType: 'stream',
        timeout: 30000
      });
      
      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);
      
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
      
      const stats = fs.statSync(filepath);
      const imageInfo = {
        filename,
        originalUrl: image.url,
        alt: image.alt,
        category: image.category,
        width: 800,
        height: 600,
        size: stats.size,
        downloadedAt: new Date().toISOString(),
        source: 'sample'
      };
      
      downloadedImages.push(imageInfo);
      console.log(`✅ Downloaded: ${filename} (${Math.round(stats.size / 1024)}KB)`);
      
    } catch (error) {
      console.error(`❌ Failed to download ${image.url}:`, error.message);
    }
  }
  
  // Save manifest
  const manifest = {
    scrapedAt: new Date().toISOString(),
    totalImages: downloadedImages.length,
    sourceWebsite: 'sample-images',
    images: downloadedImages
  };
  
  await fs.writeJson(manifestFile, manifest, { spaces: 2 });
  console.log(`📄 Manifest saved: ${manifestFile}`);
  
  console.log(`\n🎉 Sample images download complete!`);
  console.log(`📁 Images saved to: ${outputDir}`);
  console.log(`📊 Total downloaded: ${downloadedImages.length} images`);
}

if (require.main === module) {
  downloadSampleImages();
}

module.exports = downloadSampleImages;
