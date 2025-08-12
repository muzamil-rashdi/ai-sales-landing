import React from 'react';

const CTA = () => {
return (
  <section className="bg-orange-500  px-0 sm:px-0 lg:px-0 lg:mx-20 sm:mx-1 md:mx-1 xs:mx-2 rounded-xl overflow-hidden ">
    <div className="max-w-6xl mx-auto text-center">
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

      <div className="flex relative">
        {/* Updated image container with clipping */}
        <div className="relative w-full overflow-hidden rounded-xl ">
          <div className="relative" style={{ width: '133.33%', marginLeft: '-33.33%' }}>
            <img
              src="/assets/images/CTAimg.png"
              alt="CTA"
              className="w-full h-full object-cover filter grayscale"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(254,96,55,0) 0%, rgba(254,96,55,0.4) 100%)",
              }}
            ></div>
          </div>
        </div>
        {/* Rest of your bar chart code remains unchanged */}
        <div className="flex justify-center items-end space-x-4">
           <div className="flex flex-col">
                <div className="w-72 h-36 bg-blue-600 rounded-b-full"></div>
                <div className="w-72 h-36  bg-yellow-400 rounded-b-full"></div>
           </div>
           <div className="w-16 h-72 bg-gray-900 flex items-center justify-center text-white text-xs"></div>
           <div className="w-16 h-72 bg-gray-900 flex items-center justify-center text-white text-xs"></div>
           <div className="w-16 h-72 bg-gray-900 flex items-center justify-center text-white text-xs"></div>
           <div className="w-36 h-72 bg-black rounded-l-full"></div>
        </div>
      </div>
    </div>
  </section>
);
};

export default CTA;