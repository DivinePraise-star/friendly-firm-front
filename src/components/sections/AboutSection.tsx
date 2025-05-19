
import { Target, Users, Globe, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">About AQUAWOOD UGANDA</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            We're dedicated to monitoring and combating deforestation and water pollution across Uganda, using innovative technology to enhance drought and flood resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              AQUAWOOD UGANDA was established to address the critical environmental challenges facing our nation. Deforestation and water pollution are significant concerns that exacerbate the impacts of droughts and floods on communities and ecosystems.
            </p>
            <p className="text-gray-600 mb-6">
              Our innovative application utilizes satellite imagery and machine learning algorithms to monitor, track, and report environmental changes in real-time, providing valuable data to stakeholders and communities to take proactive measures.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Objective</h4>
                <p className="text-sm text-gray-500 mt-2">To develop and deploy innovative monitoring technology for environmental resilience</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Team</h4>
                <p className="text-sm text-gray-500 mt-2">Environmental scientists, data analysts, and community advocates</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Globe className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Impact</h4>
                <p className="text-sm text-gray-500 mt-2">Monitoring ecosystems across Uganda for sustainable development</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-company-700" />
                </div>
                <h4 className="font-heading font-medium text-gray-900">Our Vision</h4>
                <p className="text-sm text-gray-500 mt-2">A resilient Uganda with protected forests and clean water resources</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-company-300 to-company-500 opacity-30 blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
                alt="Ugandan forest ecosystem" 
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                <span className="block text-3xl font-bold text-company-600">30%+</span>
                <span className="text-sm text-gray-600">Forest Cover Monitored</span>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg text-center">
                <span className="block text-3xl font-bold text-company-600">50+</span>
                <span className="text-sm text-gray-600">Water Bodies Tracked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
