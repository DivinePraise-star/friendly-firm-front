
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold text-white">ACME</span>
              <span className="ml-1 text-2xl font-heading font-light text-company-300">Corp</span>
            </div>
            <p className="mb-4 text-gray-400">
              Providing innovative solutions for modern businesses since 2010. Our mission is to empower organizations through technology.
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
                <a href="#team" className="text-gray-400 hover:text-company-400 transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-company-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-company-400 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Mobile Applications</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Cloud Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-company-400 transition-colors">Consulting Services</a>
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
                  123 Business Avenue, <br />
                  San Francisco, CA 94107
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-company-400" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-company-400" />
                <p className="text-gray-400">contact@acmecorp.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ACME Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
