import React from 'react';

import Button from '../ui/button';  

const peopleImages = [
  {
    src: "/assets/images/image1.png",
    background: "linear-gradient(180deg, rgba(254, 96, 55, 0), #FE6037 100%)",
    borderRadius: "1000px",
  },
  {
    src: "/assets/images/image2.png",
    background: "linear-gradient(180deg, #FE6037 0%,  rgba(254, 96, 55, 0) 100%)",
    borderRadius: "1000px 1000px 0 0",
  },
  {
    src: "/assets/images/image3.png",
   background: "linear-gradient(180deg,  rgba(254, 96, 55, 0) 0%, #FE6037 100%)",
    borderRadius: "1000px",
  },
  {
    src: "/assets/images/image4.jpg",
    background: "linear-gradient(360deg, #FE6037 0%,  rgba(254, 96, 55, 0) 100%)",
    borderRadius: "1000px 1000px 0 0",
  },
];

const Hero = () => {
  return (
    <section className="bg-[#FEFAF6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center mb-16">
          <Button text={"BUSINESS & SOLUTION"}/>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Let AI handle outreach, So<br />
            you can focus on closing
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop spending hours drafting cold emails and chasing leads. Our AI-powered sales 
            assistant does the heavy lifting for you — from writing personalized outreach to 
            scheduling meetings directly in your calendar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-colors">
              Let's talk
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-full font-medium transition-colors">
              Learn more
            </button>
          </div>
        </div>

        {/* Images Section */}
       <div className="w-full mt-16 overflow-hidden">
  <div
    className="
      flex flex-nowrap 
      justify-start md:justify-between 
      gap-6 
      overflow-x-auto md:overflow-visible 
      px-0 md:px-4 
      scrollbar-hide
      min-w-full
      scroll-snap-x scroll-snap-mandatory
    "
  >


            {peopleImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative transition duration-300 group"
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: img.borderRadius,
                  background: img.background,
                  overflow: 'hidden',
                }}
              >
                {/* Grayscale image with hover to color */}
                <img
                  src={img.src}
                  alt={`Person ${index + 1}`}
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  style={{ borderRadius: img.borderRadius }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
