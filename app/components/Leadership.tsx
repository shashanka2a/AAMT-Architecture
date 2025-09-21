import { ImageWithFallback } from "./figma/ImageWithFallback";

const leaders = [
  {
    id: 1,
    name: "Abdul Allam",
    title: "Principal",
    image: "/Abdul.png",
    bio: "Co-founder and Principal with over 20 years of experience in modern architectural design and urban planning throughout South Florida."
  },
  {
    id: 2,
    name: "Quincy Brown",
    title: "Principal",
    image: "/quincy.png",
    bio: "Co-founder and Principal specializing in innovative commercial and residential architecture with a focus on sustainable design solutions."
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our founding principals who bring over 20 years of combined experience and passion to every architectural project in Miami and South Florida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div key={leader.id} className="text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-green-600 transition-colors duration-300">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-green-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-green-600 font-medium mb-3">
                {leader.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}