import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientCarousel = () => {
  const [clients, setClients] = useState([]);

 
  const fetchClients = async () => {
    try {
      const res = await fetch('http://localhost:5000/dynamic/client');
      const data = await res.json();
      setClients(data);
    } catch (err) {
      console.error('Failed to fetch clients:', err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // POST
  const addClient = async (newClient) => {
    try {
      const res = await fetch('http://localhost:5000/dynamic/client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient),
      });
      const result = await res.json();
      if (res.ok) fetchClients();
      else console.error(result.error);
    } catch (err) {
      console.error('Failed to add client:', err);
    }
  };

  // PUT
  const updateClient = async (id, updatedClient) => {
    try {
      const res = await fetch(`http://localhost:5000/dynamic/client/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedClient),
      });
      const result = await res.json();
      if (res.ok) fetchClients();
      else console.error(result.error);
    } catch (err) {
      console.error('Failed to update client:', err);
    }
  };

  // DELETE
  const deleteClient = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/dynamic/client/${id}`, {
        method: 'DELETE',
      });
      const result = await res.json();
      if (res.ok) fetchClients();
      else console.error(result.error);
    } catch (err) {
      console.error('Failed to delete client:', err);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: 'ease-in-out',
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
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="relative">
          {clients.length === 0 ? (
            <div className="text-center text-gray-500">No clients found</div>
          ) : (
            <Slider
              {...settings}
              className="[&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-list]:overflow-hidden [&_.slick-slide]:transition-none"
            >
              {clients.map((client) => (
                <div key={client._id} className="px-2 h-full">
                  <div className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-gray-300 cursor-pointer overflow-hidden will-change-transform">
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-orange-500 rounded-full opacity-0 group-hover:w-20 group-hover:h-20 group-hover:opacity-20 transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 z-0"></div>

                    <div className="relative z-10 flex items-center justify-center space-x-3 transition-transform duration-300 group-hover:scale-110">
                      <div className="flex-shrink-0">
                        <img
                          src={client.image}
                          alt={client.company_name}
                          className="w-8 h-8 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/40'; // fallback image
                          }}
                        />
                      </div>
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
      </div>
    </section>
  );
};

export default ClientCarousel;
