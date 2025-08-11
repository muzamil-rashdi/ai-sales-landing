import React from 'react';
import Button from '../ui/button';  

const About = () => {
  const industries = [
    { name: "Nonprofit", color: "bg-pink-300" },
    { name: "Tech Company", color: "bg-yellow-500" },
    { name: "Consulting Firm", color: "bg-orange-300" },
    { name: "Corporate", color: "bg-blue-600" },
    { name: "Small Business", color: "bg-teal-400" },
    { name: "E-commerce Store", color: "bg-yellow-400" },
    { name: "Startup", color: "bg-blue-500" },
    { name: "Marketing Agency", color: "bg-orange-500" }
  ];

  return (
    <section className="bg-[#FEFAF6] py-12 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <Button text={"WHO WE ARE"}/>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-16">
          Transforming businesses<br />
          with expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-16">
            <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">3+ Years</div>   
            <div className="text-xs md:text-sm text-orange-200 mt-1 md:mt-2">Proven Experience</div>
          </div>
          
          <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-16">
            <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">11+ Clients</div>
            <div className="text-xs md:text-sm text-orange-200 mt-1 md:mt-2">Trusted Partnerships</div>
          </div>
          
          <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-16">
            <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">41+ Projects</div>
            <div className="text-xs md:text-sm text-orange-200 mt-1 md:mt-2">Impactful Results</div>
          </div>
        </div>

         <div className="bg-[#FAEBDC] rounded-2xl p-[3vw] md:p-8">
          <Button text={"INDUSTRIES WE SERVE"} />
          <h3 className="text-[5.5vw] md:text-3xl font-bold text-gray-900 mb-[3vw] md:mb-12">
            Industry-specific expertise to<br />
            drive your success
          </h3>

          <div className="space-y-[0vw]  ">
            {/* Row 1 */}
            <div className="flex justify-center gap-[1vw] md:gap-4 ">
              {industries.slice(0, 2).map((industry, index) => (
                <span
                  key={index}
                  className={`${industry.color} text-white px-[2vw] py-[0.8vw] md:px-6 md:py-3 rounded-full text-[2vw] md:text-base font-medium hover:scale-105 transition-transform cursor-pointer whitespace-nowrap ${index===1?'ml-20 mr-16':''}`}
                >
                  {industry.name}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex justify-center ">
              {industries.slice(2).map((industry, index) => (
                <span
                  key={index}
                  className={`${industry.color} text-white px-[1.3vw] py-[1vw] lg:px-6 md:py-3 rounded-full text-[2vw] lg:text-base font-medium hover:scale-105 transition-transform cursor-pointer whitespace-nowrap ${
                    index === industries.slice(2).length - 1
                      ? "rotate-[22deg] relative -top-[3vw] -left-[2.5vw] lg:-top-5 md:-left-7"
                      : ""
                  }${index===0?'ml-2':''}`}
                >
                  {industry.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;