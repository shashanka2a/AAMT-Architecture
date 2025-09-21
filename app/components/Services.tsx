import { Building, Compass, PenTool, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    id: 1,
    icon: Building,
    title: "Architectural Services",
    description: "Complete architectural design from concept to construction documentation for residential and commercial projects."
  },
  {
    id: 2,
    icon: Compass,
    title: "Urban Design",
    description: "Strategic planning and design for urban developments, focusing on sustainable and livable communities."
  },
  {
    id: 3,
    icon: PenTool,
    title: "Interior Design",
    description: "Comprehensive interior design services that create functional and aesthetically pleasing spaces."
  },
  {
    id: 4,
    icon: Users,
    title: "Project Management",
    description: "Full project management services ensuring timely delivery and quality construction oversight."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive architectural and design services to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-green-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}