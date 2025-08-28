import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialRef = useRef(null);
  const companyRef = useRef(null);
  const legalRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
        markers: false // Set to true if you want to see scroll trigger markers
      }
    });

    // Set initial state for all elements
    gsap.set([
      logoRef.current, 
      descriptionRef.current, 
      socialRef.current, 
      companyRef.current, 
      legalRef.current, 
      bottomRef.current
    ], { 
      y: 30, 
      opacity: 0 
    });

    // Animate the entire footer container sliding up
    tl.fromTo(footerRef.current, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out" 
      }
    )
    // Then animate inner elements in sequence with staggered timing
    .to(logoRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.6")
    .to(descriptionRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4")
    .to(socialRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.3")
    .to([companyRef.current, legalRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.3")
    .to(bottomRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.2");

    // Clean up function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#FEFAF6] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div ref={logoRef} className="flex items-center space-x-2 mb-6">
              <img 
                src="/assets/logos/main-logo.png" 
                alt="AI Sales Logo"
                className="h-8 w-auto" 
              />
            </div>
            
            <p ref={descriptionRef} className="font-satoshi text-[14px] text-gray-600 mb-6 max-w-md">
              Lorem ipsum dolor sit amet consectetur.<br className='block md:hidden '/> Adipiscing <br className='hidden md:block'/> 
              egestas volutpat tincidunt semper<br className='block md:hidden'/> et adipiscing <br className='hidden md:block'/>
              sagittis eget nunc. Ac tortor<br className='block md:hidden'/> sagittis condimentum <br className='hidden md:block'/>
              adipiscing. In sit.
            </p>
            <hr className="border-t border-gray-300 my-4 sm:mr-[42.6%]" />
            <div ref={socialRef}>
              <p className="text-gray-900 font-medium mb-2">Follow us:</p>
              <div className="font-satoshi flex space-x-3">
                <div className="rounded-full w-10 h-10 bg-[#FAEBDC] rounded flex items-center justify-center">
                  <span className="text-[20px] font-bold bg-gradient-to-r from-[#FE6037] via-[#77C6B3] to-[#3861F9] bg-clip-text text-transparent">Be</span>
                </div>
                <div className="rounded-full w-10 h-10 bg-[#FAEBDC] rounded flex items-center justify-center">
                  <span className="text-[20px] font-bold bg-gradient-to-r from-[#FE6037] via-[#77C6B3] to-[#3861F9] bg-clip-text text-transparent">in</span>
                </div>
                <div className="rounded-full w-10 h-10 bg-[#FAEBDC] rounded flex items-center justify-center">
                  <span className="text-[20px] font-bold bg-gradient-to-r from-[#FE6037] via-[#77C6B3] to-[#3861F9] bg-clip-text text-transparent">G</span>
                </div>
                <div className="rounded-full w-10 h-10 bg-[#FAEBDC] rounded flex items-center justify-center">
                  <span className="text-[20px] font-bold bg-gradient-to-r from-[#FE6037] via-[#77C6B3] to-[#3861F9] bg-clip-text text-transparent">G</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className='flex flex-row '>
            <div ref={companyRef} className='mx-20 ml-0 sm:ml-[100%] '> 
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Book now</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Job</a>
              </div>
            </div>

            {/* Legal Links */}
            <div ref={legalRef}>
              <h3 className="font-satoshi font-semibold text-gray-900 mb-4">Legal</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div ref={bottomRef} className="font-satoshi border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start">
          <p className="text-gray-500 text-sm">Dark View © 2025. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0 ">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Privacy policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">GTC</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;