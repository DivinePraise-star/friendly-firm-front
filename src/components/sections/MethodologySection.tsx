
import { Droplet, Database, Earth, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Earth,
    title: "Satellite Imagery Collection",
    description: "We collect high-resolution satellite imagery from multiple sources, covering the entire territory of Uganda with regular updates.",
  },
  {
    icon: Database,
    title: "Machine Learning Analysis",
    description: "Our advanced algorithms process the imagery to detect changes in forest cover, water bodies, and potential pollution sources.",
  },
  {
    icon: BarChart3,
    title: "Data Interpretation",
    description: "Environmental scientists analyze the processed data to identify patterns, trends, and areas of concern requiring intervention.",
  },
  {
    icon: Droplet,
    title: "Stakeholder Reporting",
    description: "Findings are compiled into actionable reports for government agencies, conservation groups, and local communities.",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Methodology</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            We employ cutting-edge technology and rigorous scientific methods to monitor and analyze environmental changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-company-300 to-company-500 opacity-30 blur"></div>
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80" 
              alt="Satellite imagery and data analysis" 
              className="relative rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">How Our Monitoring Works</h3>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-12 h-12 bg-company-100 rounded-full flex items-center justify-center relative">
                      <step.icon className="h-6 w-6 text-company-700" />
                      
                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-full h-[calc(100%-1.5rem)] w-0.5 bg-company-100 left-1/2 -translate-x-1/2"></div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-medium text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-heading font-medium text-gray-900 mb-2">Technical Specifications:</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Satellite imagery with 10-30m resolution from multiple providers</li>
                <li>• Deep learning algorithms with 92% accuracy in forest cover classification</li>
                <li>• Spectral analysis for water quality assessment</li>
                <li>• Weekly data updates for high-priority regions</li>
                <li>• Integration with historical climate and environmental datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
