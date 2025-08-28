import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import Button from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Comparison = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading and button
      gsap.from(".comparison-btn, .comparison-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Cards slide-in (desktop & mobile)
      gsap.from(".traditional-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: -150,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(".ai-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: 150,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });

      // VS image bounce effect
      gsap.from(".vs-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.8)",
        delay: 0.2,
      });

      // List items stagger animation
      gsap.from(".comparison-list-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: -30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
      });

      // Images float upward
      gsap.from(".comparison-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const traditionalItems = [
    "Manually finding leads.",
    "Writing every email from scratch.",
    "Inconsistent follow-ups.",
    "Manual meeting scheduling.",
    "Scaling means hiring.",
    "Burnout and fatigue.",
    "Generic messaging.",
  ];

  const aiItems = [
    "Automated lead discovery.",
    "AI-written, human-sounding emails.",
    "Smart, timed follow-ups.",
    "Calendar syncing and auto-scheduling.",
    "Scales with you.",
    "More time for high-impact work.",
    "Dynamic personalization.",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FEFAF6] py-20 px-0 sm:px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="comparison-btn">
            <Button text={"OUR CLIENT'S"} />
          </div>
          <h2 className="comparison-heading font-satoshi sd:w-auto text-3xl md:text-4xl font-500 text-gray-900 leading-tight mb-4">
            Traditional outreach vs AI-powered sales
            <br />
            What's the real difference?
          </h2>
        </div>

        {/* Mobile layout */}
        <div className="font-satoshi flex flex-col lg:hidden m-4 md:m-0">
          {/* Traditional Outreach */}
          <div className="traditional-card bg-[#FAEBDC] rounded-2xl p-8 relative flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="font-satoshi text-3xl font-600 text-gray-900 mb-6">
                Traditional outreach
              </h3>
              <p className="font-satoshi text-gray-600 mb-8">
                From endless back-and-forth to missed deadlines and hidden
                risks, traditional contract management is outdated. Our AI
                automates the heavy lifting—so your team can stay compliant, and
                focus on what matters.
              </p>

              <div className="font-satoshi space-y-4 mb-8">
                {traditionalItems.map((item, index) => (
                  <div
                    key={index}
                    className="comparison-list-item flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4 -mx-8 -mb-8">
              <img
                src="/assets/images/stressed.png"
                alt="Stressed Person"
                className="comparison-img w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto object-contain"
              />
            </div>
          </div>

          {/* VS */}
          <div className="flex justify-center bg-[#FEFAF6]">
            <img
              src="/assets/images/versesmobile.png"
              alt="VS"
              className="vs-img w-[213.46px] h-[127.76px] mx-auto -mt-2 -mb-2"
            />
          </div>

          {/* AI Card */}
          <div className="ai-card relative rounded-2xl p-[2px] bg-gradient-to-b from-[#FE6037] via-[#77C6B3] to-[#3861FA] flex flex-col h-full">
            <div className="bg-white rounded-[calc(1rem-2px)] p-8 flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-6">
                  <img
                    src="/assets/logos/main-logo.png"
                    alt="With AI sales"
                    className="h-8"
                  />
                </div>
                <p className="font-satoshi text-gray-600 mb-8">
                  From endless back-and-forth to missed deadlines and hidden
                  risks, traditional contract management is outdated. Our AI
                  automates the heavy lifting—so your team can stay compliant,
                  and focus on what matters.
                </p>

                <div className="space-y-4 mb-8">
                  {aiItems.map((item, index) => (
                    <div
                      key={index}
                      className="comparison-list-item flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4 -mx-8 -mb-8">
                <img
                  src="/assets/images/happyrobot.png"
                  alt="Happy AI Robot"
                  className="comparison-img w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-start">
          {/* Traditional */}
          <div className="traditional-card bg-[#FAEBDC] rounded-2xl p-8 relative flex flex-col h-full flex-1">
            <div className="flex-grow">
              <h3 className="font-satoshi text-3xl font-bold text-gray-900 mb-6">
                Traditional outreach
              </h3>
              <p className="font-satoshi text-gray-600 mb-8">
                From endless back-and-forth to missed deadlines and hidden
                risks, traditional contract management is outdated. Our AI
                automates the heavy lifting—so your team can stay compliant, and
                focus on what matters.
              </p>
              <div className="font-satoshi space-y-4 mb-8">
                {traditionalItems.map((item, index) => (
                  <div
                    key={index}
                    className="comparison-list-item flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4 -mx-8 -mb-8">
              <img
                src="/assets/images/stressed.png"
                alt="Stressed Person"
                className="comparison-img w-full max-w-[400px] mx-auto object-contain"
              />
            </div>
          </div>

          {/* VS */}
          <div className="flex justify-center" style={{ width: "174px" }}>
            <img
              src="/assets/images/versesdesktop.png"
              alt="VS"
              className="vs-img w-[174px] h-[98px] -ml-[1px] -mr-[1px] self-start"
            />
          </div>

          {/* AI */}
          <div className="ai-card relative rounded-2xl p-[2px] bg-gradient-to-b from-[#FE6037] via-[#77C6B3] to-[#3861FA] flex flex-col h-full flex-1">
            <div className="bg-white rounded-[calc(1rem-2px)] p-8 flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-6">
                  <img
                    src="/assets/logos/main-logo.png"
                    alt="With AI sales"
                    className="h-8"
                  />
                </div>
                <p className="font-satoshi text-gray-600 mb-8">
                  From endless back-and-forth to missed deadlines and hidden
                  risks, traditional contract management is outdated. Our AI
                  automates the heavy lifting—so your team can stay compliant,
                  and focus on what matters.
                </p>
                <div className="font-satoshi space-y-4 mb-8">
                  {aiItems.map((item, index) => (
                    <div
                      key={index}
                      className="comparison-list-item flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4 -mx-8 -mb-8">
                <img
                  src="/assets/images/happyrobot.png"
                  alt="Happy AI Robot"
                  className="comparison-img w-full max-w-[400px] mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
