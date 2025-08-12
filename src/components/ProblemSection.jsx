import React from 'react';
import Button from '../ui/button';

const ProblemSection = () => {
return (
  <section className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content column */}
        <div>
          <Button text={"FACING CHALLENGES"}/>
          <h2 className="font-satoshi text-2xl md:text-3xl font-[500] text-gray-900 mb-8">
            Manual outreach work is<br />
            slowing you down.<br />
            Here's how we're fixing it.
          </h2>
<p className="font-satoshi text-base text-gray-600 mb-8 text-justify md:text-left">
  Cold outreach is time-consuming and hard to scale. Writing emails, remembering 
  follow-ups, and scheduling calls eats up your day — especially when you're 
  doing it all yourself. For busy founders and small teams, it quickly becomes a 
  drain on time, energy, and growth.
</p>

          <div className="space-y-4 mb-8">
            {[
              "Comment and tag teammates directly within contracts",
              "Assign tasks and review notes in real-time",
              "Keep all communication contextually linked to clauses"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-4 h-0.5 bg-orange-500 "></div>
                <span className="text-black ">{item}</span>
              </div>
            ))}
          </div>
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
            Learn more
          </button>
        </div>

        {/* Right image column */}
        <div className="relative">
          <div className="relative w-full aspect-[510/534] max-w-[510px] mx-auto">
            {/* Black and white main image */}
            <img 
              src="/assets/images/prbimage.png" 
              alt="Problem illustration"
              className="w-full h-full object-cover filter grayscale rounded-lg"
            />
            
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(254, 96, 55, 0) 0%, rgba(254, 96, 55, 0.2) 100%)'
              }}
            />
            
            {/* Second image with responsive positioning */}
            <div className="absolute z-10 w-[47%] max-w-[240px] aspect-[240/256] 
                          top-[-22%] right-[0%]  /* Mobile positioning - adjusted to stay inside */
                          sm:top-[-2%] sm:right-[-5%]  /* Small tablet positioning */
                          md:top-[-10%] md:right-[-10%]  /* Desktop positioning */
                          lg:top-[-11%] lg:right-[-11%]">  
              <img 
                src="/assets/images/prbimage2.png" 
                alt="Additional illustration"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default ProblemSection;