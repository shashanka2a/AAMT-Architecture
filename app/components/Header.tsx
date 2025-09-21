import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-medium text-gray-900">
          AAMT Architecture Miami
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="text-gray-600 hover:text-green-600 transition-colors">Portfolio</a>
          <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
          <a href="#leadership" className="text-gray-600 hover:text-green-600 transition-colors">Leadership</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
        </nav>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Get Quote
        </Button>
      </div>
    </header>
  );
}