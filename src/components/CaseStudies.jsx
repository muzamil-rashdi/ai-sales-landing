import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const caseStudyRefs = [useRef(null), useRef(null)];

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

      // Stagger animation for heading elements
      gsap.fromTo([headingRef.current, textRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Case study card animations
      caseStudyRefs.forEach((ref, index) => {
        if (ref.current) {
          gsap.fromTo(ref.current,
            { 
              opacity: 0,
              y: 60,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Hover animations for case study cards
          const image = ref.current.querySelector('img');
          const overlay = ref.current.querySelector('.absolute');
          
          // Scale up on hover
          ref.current.addEventListener('mouseenter', () => {
            gsap.to(ref.current, {
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out"
            });
            
            // Enhance the gradient overlay on hover
            gsap.to(overlay, {
              background: 'linear-gradient(180deg, rgba(254, 96, 55, 0) 0%, rgba(254, 96, 55, 0.4) 100%)',
              duration: 0.5
            });
          });

          // Scale back to normal on mouse leave
          ref.current.addEventListener('mouseleave', () => {
            gsap.to(ref.current, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
            
            // Revert the gradient overlay
            gsap.to(overlay, {
              background: 'linear-gradient(180deg, rgba(254, 96, 55, 0) 0%, rgba(254, 96, 55, 0.2) 100%)',
              duration: 0.5
            });
          });
        }
      });
    }, sectionRef);

    // Clean up
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
          <div>
            <Button text={"CASE STUDY"} />
            <h2 ref={headingRef} className="font-satoshi text-[26px] sm:text-4xl font-[500] text-gray-900 mb-4">
              Client success stories through<br />
              our solutions
            </h2>
            
            <p ref={textRef} className="font-satoshi text-sm text-gray-600">
              Cold outreach is time-consuming and hard to scale. Writing emails, remembering follow-ups, and scheduling calls eats up your day.
            </p>
          </div>
          
          <button ref={buttonRef} className="font-satoshi border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors mt-8 sm:mt-0">
            Explore all
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Healthcare Case Study */}
          <div ref={caseStudyRefs[0]} className="bg-[#FEFAF6] rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
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
              <h3 className="font-satoshi text-2xl font-bold text-gray-900 mb-4">
                Making an Impact: Transforming a Healthcare Platform's Rebuild
              </h3>
            </div>
          </div>

          {/* Startup Case Study */}
          <div ref={caseStudyRefs[1]} className="bg-[#FEFAF6] rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
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
              <h3 className="font-satoshi text-[23px] font-bold text-gray-900 mb-4">
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