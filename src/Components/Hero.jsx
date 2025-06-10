import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';

const Hero = () => {
  const features = [
    { name: 'Dedicated Team', info: 'Our team is committed to your success with expert professionals.' },
    { name: 'Developers', info: 'Skilled developers building scalable and efficient solutions.' },
    { name: 'Designers', info: 'Creative designers crafting intuitive and engaging user experiences.' }
  ];

  const [openTooltip, setOpenTooltip] = useState(null);
  const [hoveredTooltip, setHoveredTooltip] = useState(null);  // Added hoveredTooltip state
  const containerRef = useRef(null);

  // Close tooltip if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenTooltip(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Background image effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-white text-lg">
                The Next <span className="text-orange-500 font-semibold">Gen</span>
              </div>
              
              <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight">
                WE PROVIDE <span className="block">SERVICES</span>
                <span className="block">AND SOLUTIONS</span>
              </h1>
              
              <div className="text-orange-500 text-4xl lg:text-5xl font-bold italic">
                To Enterprise
              </div>
            </div>

            <p className="text-white-400 text-lg max-w-lg">
              MNTECHS provides end-to-end service solutions designed to optimize performance and drive growth.
              We partner with businesses to turn complex challenges into strategic advantages.
            </p>

            <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
              Let's Talk
            </button>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-8" ref={containerRef}>
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="relative flex items-center space-x-4 group cursor-pointer"
                onMouseLeave={() => setHoveredTooltip(null)}  // Added to clear hover on leave
              >
                {/* Plus icon with click and hover handlers */}
                <div
                  className="w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300"
                  onClick={() => setOpenTooltip(openTooltip === index ? null : index)}
                  onMouseEnter={() => setHoveredTooltip(index)}      // Added hover enter
                  onMouseLeave={() => setHoveredTooltip(null)}       // Added hover leave
                >
                  <Plus
                    className={`h-6 w-6 transition-colors duration-300 ${
                      openTooltip === index || hoveredTooltip === index
                        ? 'text-white'
                        : 'text-orange-500 group-hover:text-white'
                    }`}
                  />
                </div>

                <span className="text-white text-xl font-semibold group-hover:text-orange-500 transition-colors duration-300">
                  {feature.name}
                </span>

                {/* Tooltip: show if clicked or hovered */}
                {(openTooltip === index || hoveredTooltip === index) && (
                  <div className="absolute top-full left-12 mt-2 w-64 p-3 bg-gray-800 rounded-md shadow-lg text-white text-sm z-20">
                    {feature.info}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
