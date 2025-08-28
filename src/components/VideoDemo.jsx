import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoDemo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const arrIconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate video image on scroll
      gsap.from(videoRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Animate ARR icon with floating effect
      gsap.fromTo(
        arrIconRef.current,
        { scale: 0, opacity: 0, rotate: -180 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Floating animation loop
      gsap.to(arrIconRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="font-satoshi bg-[#FEFAF6] py-8 md:py-16 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Container for both images */}
        <div className="relative">
          {/* Image 1 - Main video image */}
          <div
            ref={videoRef}
            className="font-satoshi relative overflow-hidden rounded-xl md:rounded-3xl shadow-[0px_4px_100px_0px_rgba(254,96,55,0.24)]"
          >
            <img
              src="/assets/images/videoimg.png"
              alt="Video demo"
              className="w-full h-auto"
            />
          </div>

          {/* Image 2 - ARR icon (on top) */}
          <div
            ref={arrIconRef}
            className="font-satoshi absolute right-4 bottom-4 md:right-8 md:bottom-8"
            style={{
              width: "clamp(60px, 15vw, 170px)",
              height: "clamp(60px, 15vw, 170px)",
              border: "2px solid transparent",
              borderRadius: "50%",
              backdropFilter: "blur(12px)",
              padding: "2px",
              zIndex: 10,
            }}
          >
            <img
              src="/assets/images/arricon.png"
              alt="ARR Icon"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
