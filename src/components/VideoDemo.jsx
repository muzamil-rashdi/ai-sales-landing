import React from 'react';

const VideoDemo = () => {
return (
  <section className="font-satoshi bg-[#FEFAF6] py-8 md:py-16 px-4 sm:px-6 lg:px-20">
    <div className="max-w-7xl mx-auto relative">
      {/* Container for both images */}
      <div className="relative">
        {/* Image 1 - Main video image (beneath) */}
        <div className="font-satoshi relative overflow-hidden rounded-xl md:rounded-3xl shadow-[0px_4px_100px_0px_rgba(254,96,55,0.24)]">
          <img
            src="/assets/images/videoimg.png"
            alt="Video demo"
            className="w-full h-auto"
          />
        </div>

        {/* Image 2 - ARR icon (on top) */}
        <div className="font-satoshi absolute right-4 bottom-4 md:right-8 md:bottom-8"
          style={{
            width: 'clamp(60px, 15vw, 170px)',
            height: 'clamp(60px, 15vw, 170px)',
            border: '2px solid transparent',
            borderRadius: '50%',
            backdropFilter: 'blur(12px)',
            padding: '2px',
            zIndex: 10
          }}
        >
          <img
            src="/assets/images/arricon.png"
            alt="ARR Icon"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
};

export default VideoDemo;