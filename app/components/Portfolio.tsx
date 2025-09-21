import { ImageWithFallback } from "./figma/ImageWithFallback";

// Portfolio items using local images from the scraped collection
const portfolioItems = [
  {
    id: 1,
    title: "Modern Office Building",
    image: "/portfolio/portfolio-001.jpg",
    category: "Commercial"
  },
  {
    id: 2,
    title: "Contemporary House Design",
    image: "/portfolio/portfolio-002.jpg",
    category: "Residential"
  },
  {
    id: 3,
    title: "Minimalist Architecture",
    image: "/portfolio/portfolio-004.jpg",
    category: "Residential"
  },
  {
    id: 4,
    title: "Urban Development",
    image: "/portfolio/portfolio-005.jpg",
    category: "Urban"
  },
  {
    id: 5,
    title: "Sustainable Architecture",
    image: "/portfolio/portfolio-006.jpg",
    category: "Green"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest architectural projects that showcase innovation, sustainability, and design excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-green-600 text-sm rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}