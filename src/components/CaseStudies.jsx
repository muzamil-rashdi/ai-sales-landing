import React from 'react';
import Button from '../ui/button';

const CaseStudies = () => {
return (
  <section className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
        <div>
          <Button text={"CASE STUDY"} />
          <h2 className="font-satoshi text-[26px] sm:text-4xl font-[500] text-gray-900 mb-4">
            Client success stories through<br />
            our solutions
          </h2>
          
          <p className="text-sm text-gray-600">
            Cold outreach is time-consuming and hard to scale. Writing emails, remembering follow-ups, and scheduling calls eats up your day.
          </p>
        </div>
        
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors mt-8 sm:mt-0">
          Explore all
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Healthcare Case Study */}
        <div className="bg-[#FEFAF6] rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="/assets/images/healthcare.png" 
              alt="Healthcare Team Meeting"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(254, 96, 55, 0) 0%, rgba(254, 96, 55, 0.2) 100%)'
              }}
            />
          </div>
          <div className="p-8">
            <Button text={"HEALTHCARE"} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Making an Impact: Transforming a Healthcare Platform's Rebuild
            </h3>
          </div>
        </div>

        {/* Startup Case Study */}
        <div className="bg-[#FEFAF6] rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="relative h-64 overflow-hidden">
            <img 
              src="/assets/images/startup.png" 
              alt="Startup Team Meeting"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(254, 96, 55, 0) 0%, rgba(254, 96, 55, 0.2) 100%)'
              }}
            />
          </div>
          <div className="p-8">
            <Button text={"STARTUP"} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Optimizing Conversions: A Tech Startup's Leap
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default CaseStudies;