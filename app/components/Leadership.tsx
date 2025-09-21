import { ImageWithFallback } from "./figma/ImageWithFallback";

const leaders = [
  {
    id: 1,
    name: "John Smith",
    title: "Principal Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "With over 15 years of experience in sustainable architecture and urban planning."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Design Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face",
    bio: "Specializes in innovative residential design and interior architecture solutions."
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in large-scale commercial projects and construction management."
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Sustainability Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Leading our green building initiatives and LEED certification processes."
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
            Meet our experienced team of architects and designers who bring passion and expertise to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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