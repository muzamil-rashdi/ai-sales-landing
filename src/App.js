import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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


function AppWrapper() {
const location = useLocation();
const isAuthPage = ['/login', '/signup', '/reset-password'].includes(location.pathname);

return (
  <div id="1" className="min-h-screen ">
    {!isAuthPage && <Header />}
    <Routes>
      <Route path="/" element={
        <main className="pt-16 bg-[#FEFAF6]">
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
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