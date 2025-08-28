import React, { useEffect, useRef } from "react";
import Button from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for staggered left content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section enters viewport
          end: "bottom 20%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".problem-btn", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".problem-heading",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".problem-text",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".problem-list-item",
          {
            x: -30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".problem-learn-btn",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      // Image animations
      gsap.from(".problem-main-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".problem-overlay-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        y: -50,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup GSAP
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-satoshi bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content column */}
          <div>
            <div className="problem-btn">
              <Button text={"FACING CHALLENGES"} />
            </div>

            <h2 className="problem-heading font-satoshi text-2xl md:text-3xl font-[500] text-gray-900 mb-8">
              Manual outreach work is
              <br />
              slowing you down.
              <br />
              Here's how we're fixing it.
            </h2>

            <p className="problem-text font-satoshi text-base text-gray-600 mb-8 text-justify md:text-left">
              Cold outreach is time-consuming and hard to scale. Writing emails,
              remembering follow-ups, and scheduling calls eats up your day —
              especially when you're doing it all yourself. For busy founders
              and small teams, it quickly becomes a drain on time, energy, and
              growth.
            </p>

            <div className="font-satoshi space-y-4 mb-8">
              {[
                "Comment and tag teammates directly within contracts",
                "Assign tasks and review notes in real-time",
                "Keep all communication contextually linked to clauses",
              ].map((item, index) => (
                <div
                  key={index}
                  className="problem-list-item flex items-center space-x-3"
                >
                  <div className="w-4 h-0.5 bg-orange-500 "></div>
                  <span className="text-black ">{item}</span>
                </div>
              ))}
            </div>

            <button className="problem-learn-btn font-satoshi border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
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
                className="problem-main-img w-full h-full object-cover filter grayscale rounded-lg"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(254, 96, 55, 0) 0%, rgba(254, 96, 55, 0.2) 100%)",
                }}
              />

              {/* Second image with responsive positioning */}
              <div
                className="absolute z-10 w-[47%] max-w-[240px] aspect-[240/256] 
                          top-[-22%] right-[0%]  
                          sm:top-[-2%] sm:right-[-5%]  
                          md:top-[-10%] md:right-[-10%]  
                          lg:top-[-11%] lg:right-[-11%]"
              >
                <img
                  src="/assets/images/prbimage2.png"
                  alt="Additional illustration"
                  className="problem-overlay-img w-full h-full object-contain drop-shadow-lg"
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
