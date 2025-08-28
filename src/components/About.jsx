import React, { useEffect, useRef } from 'react';
import Button from '../ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef([]);
  const industriesRef = useRef(null);
  const industryItemsRef = useRef([]);

  useEffect(() => {
    // Create animations only on client side
    if (typeof window !== 'undefined') {
      // Section entrance animation
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Heading animation
      gsap.fromTo(headingRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats cards animation
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.fromTo(stat, 
            { opacity: 0, scale: 0.8 },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 0.6,
              delay: index * 0.15,
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Industries section animation
      gsap.fromTo(industriesRef.current, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: industriesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Industry items animation with staggered delay
      industryItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item, 
            { opacity: 0, y: 20, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 0.5,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: item,
                start: "top 100%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }

    // Clean up ScrollTrigger on component unmount
    return () => {
      if (typeof window !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  // Add refs to stats elements
  const addToStatsRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  // Add refs to industry items
  const addToIndustryItemsRefs = (el) => {
    if (el && !industryItemsRef.current.includes(el)) {
      industryItemsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#FEFAF6] py-12 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">

        <Button text={"WHO WE ARE"}/>
        
        <h2 ref={headingRef} className="font-satoshi text-[28px] md:text-4xl font-[500] text-gray-1000 mb-8 md:mb-16">
          Transforming businesses 
          <br className='hidden sm:block' /> with expertise
        </h2>

        <div className="font-satoshi grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          <div ref={addToStatsRefs} className="bg-orange-500 text-white rounded-2xl p-8 md:p-16">
            <div className="text-4xl md:text-4xl font-bold mb-2 md:mb-4">3+ Years</div>   
            <div className="text-3xs md:text-sm text-orange-200 mt-1 md:mt-2">Proven Experience</div>
          </div>
          
          <div ref={addToStatsRefs} className="font-satoshi bg-orange-500 text-white rounded-2xl p-8 md:p-16">
            <div className="text-4xl md:text-4xl font-bold mb-2 md:mb-4">11+ Clients</div>
            <div className="text-3xs md:text-sm text-orange-200 mt-1 md:mt-2">Trusted Partnerships</div>
          </div>
          
          <div ref={addToStatsRefs} className="font-satoshi bg-orange-500 text-white rounded-2xl p-8 md:p-16">
            <div className="text-4xl md:text-4xl font-bold mb-2 md:mb-4">41+ Projects</div>
            <div className="text-3xs md:text-sm text-orange-200 mt-1 md:mt-2">Impactful Results</div>
          </div>
        </div>

         <div ref={industriesRef} className="font-satoshi bg-[#FAEBDC] rounded-2xl p-[3vw] md:p-8">
          <Button text={"INDUSTRIES WE SERVE"} />
          <h3 className="font-satoshi text-[5vw] md:text-3xl font-500 text-gray-900 mb-[3vw] md:mb-12">
            Industry-specific expertise to<br />
            drive your success
          </h3>

          <div className="font-satoshi space-y-[0vw]">
            {/* Row 1 */}
            <div className="flex justify-center gap-[1vw] md:gap-4">
              {industries.slice(0, 2).map((industry, index) => (
                <span
                  ref={addToIndustryItemsRefs}
                  key={index}
                  className={`${industry.color} text-white px-[2vw] py-[0.8vw] md:px-6 md:py-3 rounded-full text-[2vw] md:text-base font-medium hover:scale-105 transition-transform cursor-pointer whitespace-nowrap ${index===1?'ml-20 mr-16':''}`}
                >
                  {industry.name}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="font-satoshi flex justify-center">
              {industries.slice(2).map((industry, index) => (
                <span
                  ref={addToIndustryItemsRefs}
                  key={index}
                  className={`${industry.color} text-white px-[1.3vw] py-[1vw] lg:px-6 md:py-3 rounded-full text-[1.8vw] lg:text-base font-medium hover:scale-105 transition-transform cursor-pointer whitespace-nowrap ${
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