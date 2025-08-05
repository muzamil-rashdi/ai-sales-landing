import React from 'react';
import { ArrowRight } from 'lucide-react';

const TrustedBy = () => {
  return (
    <section className="bg-orange-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-orange-200 text-sm font-medium mb-4">OUR CLIENTS</div>
        <h2 className="text-3xl font-bold text-white mb-12">
          Trusted by high-growth<br />
          startups across industries
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="flex items-center space-x-2 text-white">
            <ArrowRight className="w-6 h-6" />
            <span className="text-lg font-medium">startup</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
            <span className="text-lg font-medium">Logoipsum</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
            <span className="text-lg font-medium">Logoipsum</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
            <span className="text-lg font-medium">company</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
            <span className="text-lg font-medium">Logo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;