import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientCarousel = () => {
  const [clients, setClients] = useState([]);
  const [title, setTitle] = useState('Trusted by Industry Leaders');

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/dynamic/client');
      const data = res.data;

      if (Array.isArray(data) && data.length > 0) {
        setTitle(data[0].title || 'Trusted by Industry Leaders');
        setClients(data[0].clients || []);
      } else {
        setClients([]);
      }
    } catch (err) {
      console.error('Error fetching clients:', err);
      setClients([]);
    }
  };

  const settings = {
    dots: false,
    infinite: clients.length > 1,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        {clients.length === 0 ? (
          <div className="text-center text-gray-500">No clients found</div>
        ) : (
          <Slider
            {...settings}
            className="[&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-list]:overflow-hidden [&_.slick-slide]:transition-none"
          >
            {clients.map((client, idx) => (
              <div key={idx} className="px-2 h-full">
                <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-gray-300 cursor-pointer overflow-hidden will-change-transform">
                  
                  {/* Pulsing orange glow on hover */}
                  <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-orange-500 rounded-full opacity-0 group-hover:w-20 group-hover:h-20 group-hover:opacity-20 transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 z-0"></div>
                  
                  <div className="relative z-10 flex items-center justify-center space-x-3 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={client.image}
                      alt={client.company_name}
                      className="w-8 h-8 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/40';
                      }}
                    />
                    <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700 whitespace-nowrap">
                      {client.company_name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default ClientCarousel;
