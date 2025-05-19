
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold text-white">AQUAWOOD</span>
              <span className="ml-1 text-2xl font-heading font-light text-company-300">GROUP UGANDA LTD</span>
            </div>
            <p className="mb-4 text-gray-400">
              Utilizing innovative technology to monitor deforestation and water pollution, enhancing drought and flood resilience across Uganda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-company-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-company-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-company-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-company-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-company-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-company-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#methodology" className="text-gray-400 hover:text-company-400 transition-colors">Methodology</a>
              </li>
              <li>
                <a href="#data" className="text-gray-400 hover:text-company-400 transition-colors">Data Insights</a>
              </li>
              <li>
                <a href="#map" className="text-gray-400 hover:text-company-400 transition-colors">Interactive Map</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-company-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Environmental Reports</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Data API Access</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Partner Organizations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Government Initiatives</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Community Projects</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-company-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  Plot 35, Nakasero, <br />
                  Kampala, Uganda<br />
                  P.O.BOX: 188147 Kampala GPO
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-company-400" />
                <p className="text-gray-400">+256 760 101469, +256 778 004967</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-company-400" />
                <p className="text-gray-400">aquawooduganda@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AQUAWOOD GROUP UGANDA LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
