
import { BarChart3, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataSection = () => {
  return (
    <section id="data" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Data Insights</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            Our satellite imagery and machine learning algorithms provide valuable insights into environmental changes across Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stats */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-semibold">Forest Coverage</h3>
                <BarChart3 className="text-company-600" />
              </div>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold">41.3%</div>
                <div className="flex items-center text-red-500 text-sm mb-1">
                  <ArrowDown size={14} className="mr-1" />
                  2.6%
                </div>
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                Uganda's forest coverage has declined from 43.9% to 41.3% over the past year, primarily in the central and eastern regions.
              </p>
              
              {/* Chart Placeholder */}
              <div className="mt-4 h-48 bg-white rounded-lg p-2">
                <div className="flex h-full items-end space-x-2">
                  {[80, 95, 88, 75, 63, 59, 55].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end">
                      <div 
                        className={`w-full ${height < 60 ? 'bg-red-400' : 'bg-green-400'} rounded-t-sm`} 
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-1">{2017 + i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-semibold">Water Quality</h3>
                <BarChart3 className="text-company-600" />
              </div>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold">62.8%</div>
                <div className="flex items-center text-green-500 text-sm mb-1">
                  <ArrowUp size={14} className="mr-1" />
                  3.2%
                </div>
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                Water bodies meeting quality standards have improved from 59.6% to 62.8% over the past year, with significant improvements in Lake Victoria.
              </p>
              
              {/* Chart Placeholder */}
              <div className="mt-4 h-48 bg-white rounded-lg p-2">
                <div className="flex h-full items-end space-x-2">
                  {[50, 48, 45, 51, 55, 59, 62].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end">
                      <div 
                        className={`w-full ${height < 50 ? 'bg-yellow-400' : 'bg-blue-400'} rounded-t-sm`} 
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-1">{2017 + i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Findings */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-heading font-semibold mb-4">Key Environmental Findings</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-900">Deforestation Hotspots</div>
                <p className="text-sm text-gray-600 mt-1">Northern Uganda shows the highest rate of forest loss, primarily due to agricultural expansion and charcoal production.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-900">Water Pollution Sources</div>
                <p className="text-sm text-gray-600 mt-1">Industrial discharge and agricultural runoff remain the primary sources of water pollution, particularly in urban areas.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-900">Drought Vulnerability</div>
                <p className="text-sm text-gray-600 mt-1">Areas with high deforestation rates show 35% higher vulnerability to drought conditions during dry seasons.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="font-medium text-gray-900">Flood Risk Correlation</div>
                <p className="text-sm text-gray-600 mt-1">Watershed areas with over 30% deforestation experience 40% more severe flooding during rainy seasons.</p>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-company-600 hover:bg-company-700">
              Download Full Report
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-company-500 text-company-600 hover:bg-company-50">
            Access Historical Data
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
