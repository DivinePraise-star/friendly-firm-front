
import { MapPin, Layers, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Interactive Map</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            Explore our interactive map showing deforestation patterns, water pollution levels, and environmental risk zones across Uganda.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 relative">
          <div className="absolute top-6 right-6 z-10 flex space-x-2">
            <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
              <Layers size={16} className="mr-1" />
              Layers
            </Button>
            <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
              <Filter size={16} className="mr-1" />
              Filter
            </Button>
          </div>
          
          {/* Map Placeholder - In a real application, this would be an interactive map */}
          <div className="relative rounded-lg overflow-hidden h-[500px] bg-gray-200 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm py-3 px-6 rounded-lg text-center">
              <MapPin className="mx-auto text-company-600 mb-2" size={28} />
              <p className="text-gray-600">Interactive Map: Here you would see forest coverage and water quality data across Uganda</p>
              <Button className="mt-4 bg-company-600 hover:bg-company-700">Load Full Map</Button>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
              <div className="text-sm font-medium mb-2">Legend</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  <span>Forest Cover</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Deforestation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Clean Water</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span>Polluted Water</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-company-600">78,500 km²</div>
              <div className="text-sm text-gray-500">Total Forest Area</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">-2.6%</div>
              <div className="text-sm text-gray-500">Annual Deforestation Rate</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-company-600">69%</div>
              <div className="text-sm text-gray-500">Water Bodies Monitored</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">42</div>
              <div className="text-sm text-gray-500">High Risk Zones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
