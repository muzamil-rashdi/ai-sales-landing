import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const ctaButtonsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // Initialize GSAP animations
  useEffect(() => {
    // Logo animation
    gsap.fromTo(logoRef.current, 
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Navigation items animation (desktop)
    if (window.innerWidth >= 1024) {
      gsap.fromTo(navItemsRef.current, 
        { opacity: 0, y: -10 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.4,
          ease: "power2.out",
          delay: 0.9
        }
      );
    }

    // CTA buttons animation (desktop)
    if (window.innerWidth >= 1024) {
      gsap.fromTo(ctaButtonsRef.current, 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.4
        }
      );
    }

    // Mobile menu button animation
    gsap.fromTo(mobileMenuButtonRef.current, 
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        // Open menu animation
        gsap.fromTo(mobileMenuRef.current, 
          { 
            opacity: 0,
            height: 0,
            y: -20
          },
          { 
            opacity: 1,
            height: "auto",
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          }
        );
        
        // Animate menu items with stagger
        const menuItems = mobileMenuRef.current.querySelectorAll('a');
        gsap.fromTo(menuItems, 
          { opacity: 0, y: -10 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.3, 
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.1
          }
        );
      } else {
        // Close menu animation
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [isMenuOpen]);

  // Handle scroll effects with GSAP
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // For shadow/background change
      setIsScrolled(currentScrollY > 20);

      // For hide/show behavior with smooth GSAP animation
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        if (isVisible) {
          gsap.to(headerRef.current, {
            y: -headerRef.current.offsetHeight,
            duration: 0.4,
            ease: "power2.out"
          });
          setIsVisible(false);
        }
      } else {
        // Scrolling up - show header
        if (!isVisible) {
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isVisible]);

  // Add hover animations for desktop nav items
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const navItems = navItemsRef.current;
      
      navItems.forEach(item => {
        if (!item) return;
        
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -2,
            duration: 0.2,
            ease: "power1.out"
          });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            duration: 0.2,
            ease: "power1.out"
          });
        });
      });
      
      // CTA button hover animations
      const ctaButtons = ctaButtonsRef.current;
      
      ctaButtons.forEach(button => {
        if (!button) return;
        
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: "power1.out"
          });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power1.out"
          });
        });
      });
    }
  }, []);

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-1/2 -translate-x-1/2 mt-[1%] w-[calc(100%-16px)] max-w-[99vw] z-50 ${isScrolled ? 'bg-[#FAEBDC] shadow-md' : 'bg-[#FAEBDC]'} rounded-full`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" ref={logoRef}>
              <img 
                src="/assets/logos/main-logo.png" 
                alt="AI Sales Logo"
                className="h-8 w-auto" 
              />
            </Link>

            {/* Mobile "Let's talk" button */}
            <div className="lg:hidden">
              <button className="bg-[#FE6037] hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm">
                Let's talk
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="font-satoshi hidden lg:flex items-center space-x-8">
              <Link 
                to="/#features" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                ref={el => navItemsRef.current[0] = el}
              >
                Features
              </Link>
              <Link 
                to="/#how-it-works" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                ref={el => navItemsRef.current[1] = el}
              >
                How it works
              </Link>
              <Link 
                to="/#use-cases" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                ref={el => navItemsRef.current[2] = el}
              >
                Use cases
              </Link>
              <Link 
                to="/#pricing" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                ref={el => navItemsRef.current[3] = el}
              >
                Pricing
              </Link>
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                ref={el => navItemsRef.current[4] = el}
              >
                Login
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="font-satoshi hidden lg:flex items-center space-x-4">
              <Link 
                to="/signup" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition-colors"
                ref={el => ctaButtonsRef.current[0] = el}
              >
                Sign Up
              </Link>
              <button 
                className="font-satoshi bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
                ref={el => ctaButtonsRef.current[1] = el}
              >
                Let's talk
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div 
        ref={mobileMenuRef}
        className="font-satoshi lg:hidden fixed top-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-16px)] max-w-[99vw] z-40 bg-[#FAEBDC] shadow-lg rounded-b-2xl overflow-hidden"
        style={{ display: isMenuOpen ? 'block' : 'none', height: 0, opacity: 0 }}
      >
        <div className="font-satoshi px-2 pt-2 pb-3 space-y-1">
          <Link to="/#features" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/#how-it-works" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>How it works</Link>
          <Link to="/#use-cases" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Use cases</Link>
          <Link to="/#pricing" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link to="/login" className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="block w-full text-left bg-gray-100 text-gray-800 px-3 py-2 rounded-lg mt-2" onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;