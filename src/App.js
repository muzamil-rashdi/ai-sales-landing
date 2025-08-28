
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProblemSection from './components/ProblemSection';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import VideoDemo from './components/VideoDemo';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';


// App.js updates
// App.js final version
import React, {useRef,useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import AuthPageTransition from './components/AuthPageTransition';

function AppWrapper() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/reset-password'].includes(location.pathname);

  return (
    <div id="1" className="min-h-screen font-satoshi">
      {!isAuthPage && <Header />}
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          // No transition for landing page
          <main className="pt-16 bg-[#FEFAF6] font-satoshi">
            <Hero />
            <TrustedBy />
            <ProblemSection />
            <Comparison />
            <HowItWorks />
            <VideoDemo />
            <About />
            <Testimonials />
            <CaseStudies />
            <CTA />
          </main>
        }/>
        
        <Route path="/login" element={
          // Transition only for auth pages
          <AuthPageTransition>
            <Login />
          </AuthPageTransition>
        } />
        
        <Route path="/signup" element={
          <AuthPageTransition>
            <SignUp />
          </AuthPageTransition>
        } />
        
        <Route path="/reset-password" element={
          <AuthPageTransition>
            <ResetPassword />
          </AuthPageTransition>
        } />
      </Routes>
      
      {!isAuthPage && <Footer />}
    </div>
  );
}
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;