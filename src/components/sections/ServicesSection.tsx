
import { ArrowRight, Globe, Smartphone, Cloud, Layout, BarChart3, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications designed for performance, scalability, and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to optimize your business operations.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Intuitive, user-centered designs that elevate your brand and increase engagement.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven strategies to increase visibility, attract customers, and drive growth.",
  },
  {
    icon: HeadphonesIcon,
    title: "Consulting Services",
    description: "Expert advice and guidance to help you navigate the digital landscape and achieve your goals.",
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
            We offer comprehensive digital solutions tailored to meet your specific business needs and objectives.
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
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
