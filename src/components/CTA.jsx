import React from 'react';

const CTA = () => {
return (
  <section className="bg-orange-500 py-20 px-4 sm:px-6 lg:px-8 lg:mx-20 rounded-xl">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block bg-white text-orange-400 px-4 py-2 rounded-md text-sm font-medium mb-8">
        READY TO ELEVATE
      </div>
      
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
        Proceed toward your<br />
        next achievement
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors">
          Let's talk
        </button>
        <button className="border border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full font-medium transition-colors">
          Learn more
        </button>
      </div>

      <div className="relative">

        
        <div className="flex justify-center items-end space-x-4">
          <div className="w-24 h-12 bg-blue-600 rounded-t-full"></div>
          <div className="w-24 h-16 bg-yellow-400 rounded-t-full"></div>
          <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">
              
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default CTA;