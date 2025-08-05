import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            BUSINESS & SOLUTION
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Let AI handle outreach, So<br />
            you can focus on closing
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop spending hours drafting cold emails and chasing leads. Our AI-powered sales 
            assistant does the heavy lifting for you — from writing personalized outreach to 
            scheduling meetings directly in your calendar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-colors">
              Let's talk
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-full font-medium transition-colors">
              Learn more
            </button>
          </div>
        </div>

        {/* Hero Images */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-32 h-32 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Person {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;