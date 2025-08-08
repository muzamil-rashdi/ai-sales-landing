import React from 'react';
import Button from '../ui/button';  
const About = () => {
  const industries = [
    { name: "Nonprofit", color: "bg-pink-300" },
    { name: "Consulting Firm", color: "bg-orange-300" },
    { name: "Corporate", color: "bg-blue-600" },
    { name: "Small Business", color: "bg-teal-400" },
    { name: "E-commerce Store", color: "bg-yellow-400" },
    { name: "Tech Company", color: "bg-yellow-500" },
    { name: "Startup", color: "bg-blue-500" },
    { name: "Marketing Agency", color: "bg-orange-500" }
  ];

  return (
    <section className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        <Button text={"WHO WE ARE"}/>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Transforming businesses<br />
          with expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-orange-500 text-white rounded-2xl p-16">
            <div className="text-4xl font-bold mb-4">3+ Years</div>   
            <div className="text-sm text-orange-200 mt-2">Proven Experience</div>
          </div>
          
          <div className="bg-orange-500 text-white rounded-2xl p-16">
            <div className="text-4xl font-bold mb-4">11+ Clients</div>
            <div className="text-sm text-orange-200 mt-2">Trusted Partnerships</div>
          </div>
          
          <div className="bg-orange-500 text-white rounded-2xl p-16">
            <div className="text-4xl font-bold mb-4">41+ Projects</div>

            <div className="text-sm text-orange-200 mt-2">Impactful Results</div>
          </div>
        </div>

        <div className="bg-[#FAEBDC] rounded-2xl p-8">

           <Button text={"INDUSTRIES WE SERVE"}/>
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Industry-specific expertise to<br />
            drive your success
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className={`${industry.color} text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer`}
              >
                {industry.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;