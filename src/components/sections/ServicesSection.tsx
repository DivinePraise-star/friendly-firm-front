
import { ArrowRight, Cloud, Database, Earth, Layout, BarChart3, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Earth,
    title: "Deforestation Monitoring",
    description: "Real-time satellite monitoring of forest cover changes across Uganda, with detailed analytics on deforestation rates.",
  },
  {
    icon: Droplet,
    title: "Water Quality Assessment",
    description: "Continuous tracking of water pollution levels in lakes, rivers, and other water bodies using advanced sensing technologies.",
  },
  {
    icon: Cloud,
    title: "Climate Data Analysis",
    description: "Comprehensive climate data collection and analysis to predict drought and flood patterns for early intervention.",
  },
  {
    icon: Layout,
    title: "Interactive Mapping",
    description: "User-friendly interactive maps showing environmental changes, risk zones, and conservation areas.",
  },
  {
    icon: BarChart3,
    title: "Environmental Reporting",
    description: "Regular reports and alerts on environmental changes, designed for stakeholders from government agencies to local communities.",
  },
  {
    icon: Database,
    title: "Data Repository",
    description: "Centralized repository of historical and current environmental data, accessible for research and conservation planning.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            We provide comprehensive monitoring and analysis services to help Uganda build resilience against droughts and floods through environmental protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="w-14 h-14 bg-company-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-company-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-company-600 hover:text-company-700 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-company-600 hover:bg-company-700">
            Access Environmental Data
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
