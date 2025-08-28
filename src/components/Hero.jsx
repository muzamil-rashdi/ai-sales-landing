import React, { useEffect, useRef } from 'react';
import Button from '../ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const peopleImages = [
  {
    src: "/assets/images/image1.png",
    background: "linear-gradient(180deg, rgba(254, 96, 55, 0), #FE6037 100%)",
    borderRadius: "1000px",
  },
  {
    src: "/assets/images/image2.png",
    background: "linear-gradient(180deg, #FE6037 0%,  rgba(254, 96, 55, 0) 100%)",
    borderRadius: "1000px 1000px 0 0",
  },
  {
    src: "/assets/images/image3.png",
    background: "linear-gradient(180deg,  rgba(254, 96, 55, 0) 0%, #FE6037 100%)",
    borderRadius: "1000px",
  },
  {
    src: "/assets/images/image4.jpg",
    background: "linear-gradient(360deg, #FE6037 0%,  rgba(254, 96, 55, 0) 100%)",
    borderRadius: "1000px 1000px 0 0",
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Create a master timeline for the hero section
    const masterTL = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Animate the button first
    masterTL.fromTo(buttonRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    // Animate the heading with a cool text reveal effect
    masterTL.fromTo(headingRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.05 },
      "-=0.3"
    );

    // Animate the paragraph
    masterTL.fromTo(paragraphRef.current, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      "-=0.5"
    );

    // Animate the CTA buttons with a nice stagger
    masterTL.fromTo(ctaButtonsRef.current.children, 
      { y: 30, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.7, 
        stagger: 0.15,
        ease: "back.out(1.7)" 
      },
      "-=0.3"
    );

    // Animate the images container
    masterTL.fromTo(imagesContainerRef.current, 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.2"
    );

    // Animate each image with a cool staggered effect
    masterTL.to(imageRefs.current, {
      y: 0,
      opacity: 1,
      rotation: 0,
      scale: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.5)",
    }, "-=0.5");

    // Add scroll-triggered animations for images
    imageRefs.current.forEach((img, index) => {
      gsap.to(img, {
        y: -20,
        rotation: index % 2 === 0 ? -2 : 2,
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      });
    });

    // Add a subtle floating animation to the images on hover
    imageRefs.current.forEach((img) => {
      img.addEventListener('mouseenter', () => {
        gsap.to(img, {
          y: -15,
          scale: 1.05,
          duration: 0.5,
          ease: "power1.out"
        });
      });
      
      img.addEventListener('mouseleave', () => {
        gsap.to(img, {
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power1.out"
        });
      });
    });

    // Parallax effect for the entire hero section
    gsap.to(heroRef.current, {
      y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.05,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add image references
  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <section ref={heroRef} className="bg-[#FEFAF6] py-10 px-0 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center mb-16">
          <div ref={buttonRef} style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <Button text={"BUSINESS & SOLUTION"} />
          </div>

          <h1 
            ref={headingRef}
            className="font-satoshi text-3xl md:text-5xl font-500 text-gray-900 mb-8 leading-tight"
            style={{ opacity: 0, transform: 'translateY(50px)' }}
          >
            Let AI handle outreach, So <br className='hidden md:block' />
            you can focus on
            closing
          </h1>

          <p 
            ref={paragraphRef}
            className="font-satoshi text-sm font-normal text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-[130%] tracking-[0px] text-center px-2 md:text-center md:px-6"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            Stop spending hours drafting cold emails and chasing leads. Our AI-powered sales <br className='hidden md:block'/> 
            assistant does the heavy lifting for you — from writing personalized outreach to <br className='hidden md:block'/>
            scheduling meetings directly in your calendar.
          </p>

          <div 
            ref={ctaButtonsRef}
            className="font-satoshi flex flex-row sm:flex-row gap-1 justify-center items-center"
          >
            <button className="font-satoshi bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors transform opacity-0">
              Let's talk
            </button>
            <button className="font-satoshi border border-orange-500 text-orange-500 hover:bg-orange-50 px-5 py-3 md:px-8 md:py-4 rounded-full font-medium transition-colors transform opacity-0">
              Learn more
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div ref={imagesContainerRef} className="w-full mt-16 relative overflow-hidden" style={{ opacity: 0, transform: 'translateY(60px)' }}>
          {/* Left gradient */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FEFAF6] to-transparent pointer-events-none z-10" />

          {/* Right gradient */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FEFAF6] to-transparent pointer-events-none z-10" />

          <div
            className="
              flex flex-nowrap 
              justify-start md:justify-between 
              gap-6 
              overflow-x-auto md:overflow-visible 
              px-0 md:px-4 
              scrollbar-hide
              min-w-full
              scroll-snap-x scroll-snap-mandatory
            "
          >
            {peopleImages.map((img, index) => (
              <div
                key={index}
                ref={addImageRef}
                className="flex-shrink-0 relative transition duration-300 group opacity-0 transform translateY(40px) rotate(5deg) scale(0.9)"
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: img.borderRadius,
                  background: img.background,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={img.src}
                  alt={`Person ${index + 1}`}
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  style={{ borderRadius: img.borderRadius }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;