import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);
const [isVisible, setIsVisible] = useState(true);
const headerRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // For shadow/background change
    setIsScrolled(currentScrollY > 20);

    // For hide/show behavior
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

return (
  <>
    <header 
      ref={headerRef}
      className={`fixed top-0 left-1/2 -translate-x-1/2 mt-[1%] w-[calc(100%-16px)] max-w-[99vw] z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#FAEBDC] shadow-md' : 'bg-[#FAEBDC]'} rounded-full ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
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
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link to="/#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</Link>
            <Link to="/#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">Use cases</Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/signup" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium transition-colors">
              Sign Up
            </Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Let's talk
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className={`lg:hidden fixed top-[80px] left-1/2 -translate-x-1/2 w-[calc(100%-16px)] max-w-[99vw] z-40 bg-[#FAEBDC] shadow-lg rounded-b-2xl transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
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
    )}
  </>
);
};

export default Header;