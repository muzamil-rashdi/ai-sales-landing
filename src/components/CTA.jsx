import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const chartRefs = useRef([]);

  useEffect(() => {
    // Only run animations in browser environment
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate the entire section entrance
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stagger animation for content elements
      gsap.fromTo([badgeRef.current, headingRef.current, buttonsRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { 
          opacity: 0,
          scale: 1.1,
          filter: "grayscale(1) blur(5px)"
        },
        {
          opacity: 1,
          scale: 1,
          filter: "grayscale(1) blur(0px)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Chart animations
      if (chartRefs.current.length) {
        chartRefs.current.forEach((chart, index) => {
          if (chart) {
            // Store original height
            const originalHeight = chart.offsetHeight;
            
            // Set initial state
            gsap.set(chart, { height: 50 });
            
            // Animate to full height
            gsap.to(chart, {
              height: originalHeight,
              duration: 1,
              delay: index * 0.2,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: chart.parentElement,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }

      // Button hover animations
      const buttons = buttonsRef.current?.querySelectorAll('button');
      if (buttons) {
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    }, sectionRef);

    // Clean up
    return () => ctx.revert();
  }, []);

  // Function to add chart elements to refs array
  const addToChartRefs = (el) => {
    if (el && !chartRefs.current.includes(el)) {
      chartRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="bg-orange-500  px-0 sm:px-0 lg:px-0 mx-1 lg:mx-20 sm:mx-1 md:mx-1 xs:mx-2 rounded-xl overflow-hidden ">
      <div className="max-w-6xl mx-auto text-center">
        <div ref={badgeRef} className="font-satoshi inline-block bg-white text-orange-400 px-4 py-2 rounded-md text-sm font-medium mb-6 mt-8">
          READY TO ELEVATE
        </div>
        
        <h2 ref={headingRef} className="font-satoshi text-3xl sm:text-4xl sm:text-5xl font-[500] text-white mb-12">
          Proceed toward your<br />
          next achievement
        </h2>
        
        <div ref={buttonsRef} className="font-satoshi flex flex-row sm:flex-row gap-1 justify-center items-center mb-12">
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-5 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors">
            Let's talk
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-orange-500 px-5 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors">
            Learn more
          </button>
        </div>

        <div className="font-satoshi flex relative">
          {/* Updated image container with clipping */}
          <div className="relative w-full overflow-hidden rounded-xl ">
            <div className="relative" style={{ width: '133.33%', marginLeft: '-33.33%' }}>
              <img
                ref={imageRef}
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
              <div ref={addToChartRefs} className="w-72 h-36 bg-blue-600 rounded-b-full"></div>
              <div ref={addToChartRefs} className="w-72 h-36  bg-yellow-400 rounded-b-full"></div>
            </div>
            <div ref={addToChartRefs} className="w-16 h-72 bg-gray-900 flex items-center justify-center text-white text-xs"></div>
            <div ref={addToChartRefs} className="w-16 h-72 bg-gray-900 flex items-center justify-center text-white text-xs"></div>
            <div ref={addToChartRefs} className="w-16 h-72 bg-gray-900 flex items-center justify-center text-white text-xs"></div>
            <div ref={addToChartRefs} className="w-36 h-72 bg-black rounded-l-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;