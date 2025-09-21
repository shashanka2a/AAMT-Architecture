# AAMT Architecture - Next.js Website

A modern, responsive architecture website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** components for accessibility
- **Responsive design** for all devices
- **Static export** ready for deployment
- **SEO optimized** with proper metadata

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:

```bash
npm run build
```

The build artifacts will be stored in the `out/` directory, ready for static deployment.

### Static Export

The project is configured for static export, making it suitable for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   └── figma/          # Custom components
│   ├── assets/             # Static assets
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Public assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Deployment

This project is configured for static export and can be deployed to any static hosting service. The build process generates optimized static files in the `out/` directory.

## License

This project is private and proprietary to AAMT Architecture.