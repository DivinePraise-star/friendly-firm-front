
import { Target, Users, Globe, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">About Our Company</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            For over a decade, we've been at the forefront of digital innovation, helping businesses transform and thrive in an ever-changing landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2010, ACME Corporation began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital agency with a global presence.
            </p>
            <p className="text-gray-600 mb-6">
              Our team consists of industry veterans, creative thinkers, and technical experts who work together to deliver exceptional results for our clients. We pride ourselves on our collaborative approach, attention to detail, and commitment to excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Mission</h4>
                <p className="text-sm text-gray-500 mt-2">To empower businesses through innovative technology solutions</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Team</h4>
                <p className="text-sm text-gray-500 mt-2">Talented professionals committed to your success</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Reach</h4>
                <p className="text-sm text-gray-500 mt-2">Serving clients across the globe</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Values</h4>
                <p className="text-sm text-gray-500 mt-2">Excellence, innovation, integrity, and collaboration</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-company-300 to-company-500 opacity-30 blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="Team working together" 
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                <span className="block text-3xl font-bold text-company-600">250+</span>
                <span className="text-sm text-gray-600">Projects Completed</span>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                <span className="block text-3xl font-bold text-company-600">50+</span>
                <span className="text-sm text-gray-600">Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
