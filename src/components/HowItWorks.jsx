import React, { useEffect, useRef } from "react";
import Button from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "Reach out",
      description:
        "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
    },
    {
      number: 2,
      title: "Follow up",
      description:
        "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
    },
    {
      number: 3,
      title: "Book meetings",
      description:
        "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
    },
    {
      number: 4,
      title: "Scale more",
      description:
        "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading + button
      gsap.from(".howitworks-btn, .howitworks-heading, .howitworks-desc, .howitworks-learn", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Steps stagger animation
      gsap.from(".howitworks-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        x: 60,
        opacity: 0,
        scale: 0.95,
        stagger: 0.25,
        duration: 0.9,
        ease: "power3.out",
      });

      // Preview button + heading
      gsap.from(".howitworks-preview-btn, .howitworks-preview-heading", {
        scrollTrigger: {
          trigger: ".howitworks-preview",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-20 pb-5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="howitworks-btn">
              <Button text={"HOW IT WORKS"} />
            </div>

            <h2 className="howitworks-heading font-satoshi text-[26px] md:text-4xl font-500 text-gray-1000 mb-8">
              A streamline approach for lasting results.
              <br />
              Here's how we're <br className="block sm:hidden" />
              working.
            </h2>

            <p className="howitworks-desc font-satoshi text-lg text-gray-800 mb-8 text-[14px] leading-[130%]">
              Cold outreach is time-consuming and hard to scale. Writing emails,
              remembering follow-ups, and scheduling calls eats up your day.
            </p>

            <button className="howitworks-learn font-satoshi border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
              Learn more
            </button>
          </div>

          {/* Steps */}
          <div className="font-satoshi space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`howitworks-step font-satoshi rounded-2xl p-6 ${
                  step.active ? "bg-orange-500 text-white" : "bg-orange-50"
                }`}
              >
                <div className="font-satoshi flex items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step.active
                        ? "bg-white text-orange-500"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3
                      className={`font-satoshi text-xl font-semibold mb-2 ${
                        step.active ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={
                        step.active ? "text-orange-100" : "text-gray-600"
                      }
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="howitworks-preview mt-20 text-center">
          <div className="howitworks-preview-btn">
            <Button text={"PREVIEW THE PRODUCT"} />
          </div>

          <h2 className="howitworks-preview-heading font-satoshi text-[28px] md:text-4xl font-[500] text-gray-1000 mb-0">
            A modern interface built for
            <br />
            outreach management
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
