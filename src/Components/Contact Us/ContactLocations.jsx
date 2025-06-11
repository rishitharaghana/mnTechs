import React from 'react';

const ContactLocations = () => {
  const locations = [
    {
      country: 'Telangana',
      city: 'Hyderabad.',
      address: '401, 8-3-6-5/1/1/4, Astral Hasini Residency, J.P. Nagar, Yella Reddy Guda, Hyderabad - 500073, Telangana',
      phone: '+91 9701888071',
      email: 'support@meetowner.in'
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center space-y-4 border-b border-gray-300 pb-6 w-full sm:w-auto"
          >
            <h3 className="text-lg font-semibold text-black">{loc.country}</h3>
            <div className="flex items-center justify-center space-x-2 text-black">
              <span className="text-orange-500">●</span>
              <p className="font-semibold">{loc.city}</p>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">{loc.address}</p>
            <div className="h-0.5 w-12 bg-orange-500" />
            <p className="text-orange-500 font-semibold">{loc.phone}</p>
            <p className="text-orange-500 font-semibold">{loc.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLocations;
