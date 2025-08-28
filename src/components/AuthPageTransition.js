// components/AuthPageTransition.js
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const AuthPageTransition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef(null);

  useEffect(() => {
    const isAuthPage = ['/login', '/signup', '/reset-password'].includes(location.pathname);

    if (!isAuthPage) {
      gsap.set(transitionRef.current, { clearProps: "all" });
      return;
    }
    

    // Reset styles before animation
    gsap.set(transitionRef.current, {
      opacity: 0,
      y: 40,
      filter: "blur(12px)",
      transformPerspective: 1200,
    });

    // Main content animation
    gsap.to(transitionRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
    });

    // Subtle background gradient shimmer
    const shimmer = document.createElement('div');
    shimmer.className =
      'fixed inset-0 bg-gradient-to-br from-orange-500/10 via-orange-300/5 to-transparent pointer-events-none';
    shimmer.style.zIndex = '30';
    shimmer.style.opacity = '0';
    document.body.appendChild(shimmer);

    gsap.fromTo(
      shimmer,
      { opacity: 0 },
      {
        opacity: 0.4,
        duration: 0.8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
        onComplete: () => shimmer.remove(),
      }
    );

    // Subtle glow effect on the content (brand color)
    gsap.fromTo(
      transitionRef.current,
      { boxShadow: '0 0 0px rgba(254, 97, 50, 0)' },
      {
        boxShadow: '0 0 40px rgba(254, 97, 50, 0.25)',
        duration: 0.6,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      }
    );
  }, [location.pathname]);

  const isAuthPage = ['/login', '/signup', '/reset-password'].includes(location.pathname);

  if (isAuthPage) {
    return (
      <div ref={transitionRef} className="opacity-0 relative">
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthPageTransition;
