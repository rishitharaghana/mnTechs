import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientCarousel = () => {
  const clients = [
    {
      id: 1,
      name: 'audiojungle',
      logo: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      alt: 'AudioJungle Logo'
    },
    {
      id: 2,
      name: 'codecanyon',
      logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      alt: 'CodeCanyon Logo'
    },
    {
      id: 3,
      name: 'graphicriver',
      logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      alt: 'GraphicRiver Logo'
    },
    {
      id: 4,
      name: 'photodune',
      logo: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      alt: 'PhotoDune Logo'
    },
    {
      id: 5,
      name: 'themeforest',
      logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      alt: 'ThemeForest Logo'
    },
    {
      id: 6,
      name: 'videohive',
      logo: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      alt: 'VideoHive Logo'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: 'ease-in-out',
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-500"></div>
    ),
    dotsClass: "slick-dots !flex !justify-center !items-center !bottom-[-50px] !gap-2"
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="relative pb-16">
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="px-2">
                <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-gray-300 cursor-pointer overflow-hidden">
                  
                  {/* Orange dot effect - appears on hover */}
                  <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-orange-500 rounded-full opacity-0 group-hover:w-20 group-hover:h-20 group-hover:opacity-20 transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                  
                  {/* Content container with zoom effect */}
                  <div className="relative z-10 flex items-center justify-center space-x-3 transition-transform duration-300 group-hover:scale-110">
                    
                    {/* Logo image */}
                    <div className="flex-shrink-0">
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className="w-8 h-8 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    
                    {/* Company name */}
                    <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700 whitespace-nowrap">
                      {client.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        /* Optimize slick dots */
        .slick-dots li button:before {
          display: none;
        }
        
        .slick-dots li {
          margin: 0 4px;
        }
        
        .slick-dots li div {
          transition: all 0.3s ease;
        }
        
        .slick-dots li.slick-active div {
          background-color: #f97316;
          transform: scale(1.3);
        }
        
        /* Optimize carousel performance */
        .slick-track {
          display: flex;
          align-items: center;
          will-change: transform;
        }
        
        .slick-slide {
          transition: none;
          will-change: transform;
        }
        
        .slick-slide > div {
          height: 100%;
        }
        
        .slick-list {
          overflow: hidden;
        }
        
        /* Smooth animations */
        .slick-slide .group {
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;