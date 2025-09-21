# Portfolio Image Scraping Scripts

This directory contains scripts for collecting portfolio images for the AAMT Architecture website.

## Scripts

### 1. `scrape-portfolio.js`
Main scraping script that attempts to collect images from the AAMT Studio website.

**Usage:**
```bash
npm run scrape
```

**Features:**
- Scrapes images from multiple potential AAMT websites
- Downloads images with proper naming convention
- Creates a manifest.json with image metadata
- Handles various image sources (img tags, background images, data attributes)
- Configurable through `config.js`

### 2. `sample-images.js`
Fallback script that downloads sample architecture images from Unsplash.

**Usage:**
```bash
npm run sample-images
```

**Features:**
- Downloads high-quality architecture images
- Provides immediate portfolio content
- Creates proper manifest.json
- Uses clean naming convention

### 3. `config.js`
Configuration file for the scraping scripts.

**Configurable options:**
- Target websites to scrape
- Output directories
- Image filtering criteria
- Download settings
- Browser options

## Output

Both scripts create:
- `public/portfolio/` - Directory containing downloaded images
- `public/portfolio/manifest.json` - Metadata about all downloaded images

## Image Naming Convention

Images are named as: `portfolio-XXX.jpg` where XXX is a zero-padded number (001, 002, etc.)

## Manifest Structure

```json
{
  "scrapedAt": "2025-09-21T07:54:24.106Z",
  "totalImages": 5,
  "sourceWebsite": "sample-images",
  "images": [
    {
      "filename": "portfolio-001.jpg",
      "originalUrl": "https://...",
      "alt": "Image description",
      "category": "Commercial",
      "width": 800,
      "height": 600,
      "size": 123094,
      "downloadedAt": "2025-09-21T07:54:22.964Z",
      "source": "sample"
    }
  ]
}
```

## Dependencies

- `puppeteer` - Web scraping and browser automation
- `axios` - HTTP client for downloading images
- `fs-extra` - Enhanced file system operations
- `path` - Node.js path utilities

## Notes

- The main scraping script tries multiple websites if the primary one fails
- Images are filtered to only include actual image files (JPG, PNG, WebP, etc.)
- Download is limited to prevent overwhelming the target website
- All scripts include proper error handling and logging
