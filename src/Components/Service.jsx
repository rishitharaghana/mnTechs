
import { Cloud, Monitor, Zap, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Dedicated Team',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Cloud,
      category: 'IT Services'
    },
    {
      id: '02',
      title: 'QA and Testing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Monitor,
      category: 'IT Services'
    },
    {
      id: '04',
      title: 'Blockchain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Settings,
      category: 'IT Solutions'
    },
    {
      id: '05',
      title: 'Artificial Intelligence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Zap,
      category: 'IT Solutions'
    }
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Can <span className="text-orange-500">Help You</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* IT Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">IT Services</h3>
            <div className="w-16 h-1 bg-orange-500 mb-12"></div>
            
            <div className="space-y-12">
              {services.filter(service => service.category === 'IT Services').map((service) => (
                <div key={service.id} className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{service.id}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">IT Solutions</h3>
            <div className="w-16 h-1 bg-orange-500 mb-12"></div>
            
            <div className="space-y-12">
              {services.filter(service => service.category === 'IT Solutions').map((service) => (
                <div key={service.id} className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{service.id}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;