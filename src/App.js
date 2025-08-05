import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
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
      <Footer />
    </div>
  );
}

export default App;