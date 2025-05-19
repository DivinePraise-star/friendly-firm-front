
import { useState, useEffect } from "react";
import { Menu, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/36679d31-08af-49c7-b76e-82d9c57bfeb8.png" 
                alt="AQUAWOOD UGANDA Logo" 
                className="h-10 w-10 mr-2" 
              />
              <span className={`text-2xl font-heading font-bold ${isScrolled || isMenuOpen ? 'text-company-800' : 'text-white'}`}>AQUAWOOD</span>
              <span className={`ml-1 text-2xl font-heading font-light ${isScrolled || isMenuOpen ? 'text-company-500' : 'text-company-100'}`}>UGANDA</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-company-500 font-medium transition-colors`}>
                About
              </a>
              <a href="#services" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-company-500 font-medium transition-colors`}>
                Services
              </a>
              <a href="#methodology" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-company-500 font-medium transition-colors`}>
                Methodology
              </a>
              <a href="#data" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-company-500 font-medium transition-colors`}>
                Data Insights
              </a>
              <a href="#map" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-company-500 font-medium transition-colors`}>
                Map View
              </a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-company-500 font-medium transition-colors`}>
                Contact
              </a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-company-600 hover:bg-company-700 text-white">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white'}`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-company-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-company-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#methodology"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-company-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Methodology
            </a>
            <a
              href="#data"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-company-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Data Insights
            </a>
            <a
              href="#map"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-company-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Map View
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-company-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-company-600 hover:bg-company-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
