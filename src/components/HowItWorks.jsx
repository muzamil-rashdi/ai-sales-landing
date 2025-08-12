import React from 'react';
import Button from '../ui/button';  
const HowItWorks = () => {
const steps = [
  {
    number: 1,
    title: "Reach out",
    description: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs."
  },
  {
    number: 2,
    title: "Follow up",
    description: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs."
  },
  {
    number: 3,
    title: "Book meetings",
    description: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
  },
  {
    number: 4,
    title: "Scale more",
    description: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs."
  }
];

return (
  <section className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-20 pb-5">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <Button text={"HOW IT WORKS"}/>
          
          <h2 className="font-satoshi text-[26px] md:text-4xl font-500 text-gray-1000 mb-8">
            A streamline approach for
            lasting results.<br />
            Here's how we're <br className='block sm:hidden' />working.
          </h2>
          
          <p className="text-lg text-gray-800 mb-8 text-[14px] leading-[130%] ">
            Cold outreach is time-consuming and hard to scale. Writing emails, 
            remembering follow-ups, and scheduling calls eats up your day.
          </p>

          <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
            Learn more
          </button>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 ${step.active ? 'bg-orange-500 text-white' : 'bg-orange-50'}`}
            >
              <div className="flex items-center space-x-4">
<div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
step.active ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'
}`}>
{step.number}
</div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${step.active ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  <p className={step.active ? 'text-orange-100' : 'text-gray-600'}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Section */}
      <div className="mt-20 text-center">
        <Button text={"PREVIEW THE PRODUCT"}/>
        
        <h2 className="font-satoshi text-[28px] md:text-4xl font-[500] text-gray-1000 mb-0">
          A modern interface built for<br />
          outreach management
        </h2>
      </div>
    </div>
  </section>
);
};

export default HowItWorks;