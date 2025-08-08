import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TrustedBy = () => {
  const clients = [
    { id: 1, name: 'startup', icon: <ArrowRight className="w-6 h-6" /> },
    { id: 2, name: 'Logoipsum', icon: <div className="w-6 h-6 bg-white bg-opacity-20 rounded" /> },
    { id: 3, name: 'Logoipsum', icon: <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full" /> },
    { id: 4, name: 'company', icon: <div className="w-6 h-6 bg-white bg-opacity-20 rounded" /> },
    { id: 5, name: 'Logo', icon: <div className="w-6 h-6 bg-white bg-opacity-20 rounded" /> },
  ];

  return (
    <section className="bg-orange-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
      <div 
  className="inline-block font-[500px] px-3 py-1 mb-4 rounded-md"
  style={{ 
    backgroundColor: 'white' ,
    color: '#FE6037'
    
  }}
>
  OUR CLIENTS
</div>
        <h2 className="text-3xl font-bold text-white mb-12">
          Trusted by high-growth<br />
          startups across industries
        </h2>
        
        {/* Desktop View - Visible on medium screens and up */}
        <div className="hidden md:flex flex-wrap justify-around items-center gap-8 opacity-80">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center space-x-2 text-white">
              {client.icon}
              <span className="text-lg font-medium">{client.name}</span>
            </div>
          ))}
        </div>
        
        {/* Mobile View - Visible on small screens only */}
        <div className="md:hidden w-full">
          <div className="relative pb-10"> {/* Added padding-bottom for pagination space */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination', // Custom pagination container
              }}
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="flex items-center justify-center space-x-2 text-white py-4 h-full">
                    {client.icon}
                    <span className="text-lg font-medium">{client.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom pagination container positioned below the slider */}
            <div className="swiper-pagination absolute bottom-0 left-0 right-0 !mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;