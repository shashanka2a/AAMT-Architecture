const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const config = require('./config');

// Configuration from config file
const AAMT_WEBSITE = config.targetWebsite;
const OUTPUT_DIR = path.join(__dirname, '..', config.outputDir);
const MANIFEST_FILE = path.join(__dirname, '..', config.manifestFile);
const IMAGE_EXTENSIONS = config.imageExtensions;

class PortfolioScraper {
  constructor() {
    this.browser = null;
    this.page = null;
    this.downloadedImages = [];
  }

  async init() {
    console.log('🚀 Starting AAMT Portfolio Scraper...');
    
    // Create output directory
    await fs.ensureDir(OUTPUT_DIR);
    
    // Launch browser
    this.browser = await puppeteer.launch(config.browserOptions);
    
    this.page = await this.browser.newPage();
    
    // Set user agent to avoid blocking
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Set viewport
    await this.page.setViewport({ width: 1920, height: 1080 });
  }

  async scrapeImages() {
    console.log('🔍 Scraping images from AAMT Studio website...');
    
    const websitesToTry = [AAMT_WEBSITE, ...config.fallbackWebsites];
    
    for (const website of websitesToTry) {
      try {
        console.log(`🌐 Trying website: ${website}`);
        
        // Navigate to the website
        await this.page.goto(website, { 
          waitUntil: 'networkidle2',
          timeout: config.timeout 
        });

        // Wait a bit for dynamic content to load
        await new Promise(resolve => setTimeout(resolve, 3000));

      // Extract all image URLs
      const imageUrls = await this.page.evaluate(() => {
        const images = [];
        
        // Get all img elements
        const imgElements = document.querySelectorAll('img');
        imgElements.forEach(img => {
          if (img.src && img.src.startsWith('http')) {
            images.push({
              url: img.src,
              alt: img.alt || '',
              width: img.naturalWidth || img.width,
              height: img.naturalHeight || img.height
            });
          }
        });

        // Get background images from CSS
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
          const style = window.getComputedStyle(element);
          const bgImage = style.backgroundImage;
          if (bgImage && bgImage !== 'none') {
            const urlMatch = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
            if (urlMatch && urlMatch[1].startsWith('http')) {
              images.push({
                url: urlMatch[1],
                alt: element.alt || element.title || '',
                width: element.offsetWidth,
                height: element.offsetHeight,
                type: 'background'
              });
            }
          }
        });

        // Get images from data attributes
        const dataImageElements = document.querySelectorAll('[data-src], [data-image], [data-bg]');
        dataImageElements.forEach(element => {
          const dataSrc = element.dataset.src || element.dataset.image || element.dataset.bg;
          if (dataSrc && dataSrc.startsWith('http')) {
            images.push({
              url: dataSrc,
              alt: element.alt || element.title || '',
              width: element.offsetWidth,
              height: element.offsetHeight,
              type: 'data-attribute'
            });
          }
        });

        return images;
      });

        console.log(`📸 Found ${imageUrls.length} potential images`);

        // Filter for actual image files
        const validImages = imageUrls.filter(img => {
          const url = img.url.toLowerCase();
          return IMAGE_EXTENSIONS.some(ext => url.includes(ext)) || 
                 url.includes('image') || 
                 url.includes('photo') ||
                 url.includes('portfolio');
        }).slice(0, config.maxImages); // Limit number of images

        console.log(`✅ Filtered to ${validImages.length} valid image URLs`);

        if (validImages.length > 0) {
          return validImages;
        }
        
      } catch (error) {
        console.error(`❌ Error scraping ${website}:`, error.message);
        continue;
      }
    }
    
    console.log('⚠️  No images found on any of the tried websites');
    return [];
  }

  async downloadImage(imageData, index) {
    try {
      const url = imageData.url;
      const extension = this.getImageExtension(url);
      const filename = `portfolio-${String(index + 1).padStart(3, '0')}${extension}`;
      const filepath = path.join(OUTPUT_DIR, filename);

      console.log(`⬇️  Downloading: ${filename}`);

      const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream',
        timeout: config.timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
      });

      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', () => {
          const stats = fs.statSync(filepath);
          const imageInfo = {
            filename,
            originalUrl: url,
            alt: imageData.alt || '',
            width: imageData.width || 0,
            height: imageData.height || 0,
            type: imageData.type || 'img',
            size: stats.size,
            downloadedAt: new Date().toISOString()
          };
          
          this.downloadedImages.push(imageInfo);
          console.log(`✅ Downloaded: ${filename} (${Math.round(stats.size / 1024)}KB)`);
          resolve(imageInfo);
        });
        
        writer.on('error', reject);
      });

    } catch (error) {
      console.error(`❌ Failed to download ${imageData.url}:`, error.message);
      return null;
    }
  }

  getImageExtension(url) {
    const urlLower = url.toLowerCase();
    if (urlLower.includes('.jpg') || urlLower.includes('.jpeg')) return '.jpg';
    if (urlLower.includes('.png')) return '.png';
    if (urlLower.includes('.webp')) return '.webp';
    if (urlLower.includes('.gif')) return '.gif';
    if (urlLower.includes('.svg')) return '.svg';
    return '.jpg'; // Default fallback
  }

  async saveManifest() {
    const manifest = {
      scrapedAt: new Date().toISOString(),
      totalImages: this.downloadedImages.length,
      sourceWebsite: AAMT_WEBSITE,
      images: this.downloadedImages
    };

    await fs.writeJson(MANIFEST_FILE, manifest, { spaces: 2 });
    console.log(`📄 Manifest saved: ${MANIFEST_FILE}`);
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async run() {
    try {
      await this.init();
      
      const images = await this.scrapeImages();
      
      if (images.length === 0) {
        console.log('⚠️  No images found to download');
        return;
      }

      console.log(`\n🔄 Downloading ${images.length} images...\n`);

      // Download images with concurrency limit
      for (let i = 0; i < images.length; i += config.concurrency) {
        const batch = images.slice(i, i + config.concurrency);
        await Promise.all(
          batch.map((image, batchIndex) => 
            this.downloadImage(image, i + batchIndex)
          )
        );
      }

      await this.saveManifest();

      console.log(`\n🎉 Scraping complete!`);
      console.log(`📁 Images saved to: ${OUTPUT_DIR}`);
      console.log(`📊 Total downloaded: ${this.downloadedImages.length} images`);

    } catch (error) {
      console.error('💥 Scraping failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// Run the scraper
if (require.main === module) {
  const scraper = new PortfolioScraper();
  scraper.run();
}

module.exports = PortfolioScraper;
