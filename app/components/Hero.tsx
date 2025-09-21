import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from '../assets/4f65e82fadbaeafb19786d4a910f5e8102d78cc1.png';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={exampleImage}
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Minimal Line Art Overlay */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M100 400 L300 200 L500 300 L700 150 L900 250 L1100 100" 
            stroke="rgba(34, 197, 94, 0.3)" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M200 600 L400 500 L600 550 L800 450 L1000 500" 
            stroke="rgba(34, 197, 94, 0.3)" 
            strokeWidth="1.5" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          20 Years of Miami Architecture
          <span className="block text-green-400">Experience - Now Focused on YOU</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Creating innovative architectural solutions that blend modern design with timeless elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors">
            View Portfolio
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-colors">
            Get Consultation
          </button>
        </div>
      </div>
    </section>
  );
}