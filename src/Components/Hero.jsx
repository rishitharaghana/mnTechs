
import { Plus } from 'lucide-react';

const Hero = () => {
  const features = [
    'Dedicated Team',
    'Developers',
    'Designers'
  ];

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

            <p className="text-gray-400 text-lg max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
              Let's Talk
            </button>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={feature} className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <Plus className="h-6 w-6 text-orange-500 group-hover:text-white" />
                </div>
                <span className="text-white text-xl font-semibold group-hover:text-orange-500 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;