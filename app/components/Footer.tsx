import { Building, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building className="w-8 h-8 text-green-400" />
              <span className="text-xl font-semibold">AAMT Architecture Miami</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Miami&apos;s premier architecture firm creating innovative design solutions for over 20 years. 
              Specializing in modern residential, commercial, and urban design throughout South Florida.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">f</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">in</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">ig</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Architectural Design</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Urban Planning</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#portfolio" className="hover:text-green-400 transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#leadership" className="hover:text-green-400 transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span>201 SE 2nd Ave<br />Miami, FL 33131</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>(305) 927-5330</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>info@aamtStudio.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 AAMT Architecture Miami. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}