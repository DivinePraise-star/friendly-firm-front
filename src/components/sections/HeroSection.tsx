
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-company-900 to-company-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h8v4H0V0zm0%2012h20v4H0v-4zm12%2012h20v4H12v-4z%22%2F%3E%3C%2Fsvg%3E')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-48 md:pb-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Monitoring for
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-company-100 to-company-400 block">
                Environmental Resilience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-company-100 mb-8 md:max-w-lg">
              AQUAWOOD GROUP UGANDA LTD uses satellite imagery and machine learning to monitor deforestation and water pollution, enhancing drought and flood resilience across Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-company-500 hover:bg-company-600 text-white font-medium px-8">
                Explore Data
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <span>Join Our Effort</span>
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-company-300 to-company-500 opacity-30 blur"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden flex justify-center items-center p-6">
                <img 
                  src="/lovable-uploads/36679d31-08af-49c7-b76e-82d9c57bfeb8.png" 
                  alt="AQUAWOOD GROUP UGANDA LTD Logo" 
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
