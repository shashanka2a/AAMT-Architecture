module.exports = {
  // Target website to scrape
  targetWebsite: 'https://aamtstudio.com',
  
  // Alternative websites to try if the main one doesn't work
  fallbackWebsites: [
    'https://www.aamtstudio.com',
    'https://aamt-architecture.com',
    'https://www.aamt-architecture.com'
  ],
  
  // Output configuration
  outputDir: 'public/portfolio',
  manifestFile: 'public/portfolio/manifest.json',
  
  // Image filtering
  imageExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'],
  minImageSize: 1024, // Minimum file size in bytes
  maxImages: 50, // Maximum number of images to download
  
  // Download settings
  concurrency: 3, // Number of concurrent downloads
  timeout: 30000, // Download timeout in milliseconds
  
  // Browser settings
  browserOptions: {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
};
