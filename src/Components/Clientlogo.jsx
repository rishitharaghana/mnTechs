import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: "audiojungle", display: "audiojungle" },
    { name: "codecanyon", display: "codecanyon" },
    { name: "graphicriver", display: "graphicriver" },
    { name: "photodune", display: "photodune" },
    { name: "themeforest", display: "themeforest" },
    { name: "videohive", display: "videohive" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center space-x-3 mx-8 sm:mx-12 lg:mx-16 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-800 font-semibold text-base sm:text-lg lg:text-xl whitespace-nowrap">
                  {logo.display}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;