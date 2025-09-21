// Hero component with clean background and Miami-focused content

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      {/* Minimal Line Art Overlay */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M100 400 L300 200 L500 300 L700 150 L900 250 L1100 100" 
            stroke="rgba(34, 197, 94, 0.2)" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M200 600 L400 500 L600 550 L800 450 L1000 500" 
            stroke="rgba(34, 197, 94, 0.15)" 
            strokeWidth="1.5" 
            fill="none"
          />
          <path 
            d="M50 300 L250 100 L450 200 L650 50 L850 150 L1050 0" 
            stroke="rgba(34, 197, 94, 0.1)" 
            strokeWidth="1" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-gray-900 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          20 Years of Miami Architecture
          <span className="block text-green-600">Experience - Now Focused on YOU</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
          Creating innovative architectural solutions that blend modern design with timeless elegance in the heart of Miami
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl">
            View Portfolio
          </button>
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg">
            Get Consultation
          </button>
        </div>
      </div>
    </section>
  );
}