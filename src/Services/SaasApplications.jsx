import React from 'react'
import { Database, HandCoins, TrendingUp, ShoppingCart, Calculator, University, Hospital, Users } from 'lucide-react';

const SaasApplications = () => {
  const services = [
    {
      icon: Database,
      title: "CRMs Platforms"
    },
    {
      icon: HandCoins,
      title: "Payroll Management"
    },
    {
      icon: TrendingUp,
      title: "APP Development"
    },
    {
      icon: ShoppingCart,
      title: "ECommerce "
    },
    {
      icon: Calculator,
      title: "Invoice"
    },
    {
      icon: University,
      title: "Education Management"
    },
    {
      icon: Hospital,
      title: "Hospital Management"
    },
    {
      icon: Users,
      title: "HRMS"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
  
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g stroke="#f97316" strokeWidth="2" fill="none">
            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" />
            <polygon points="80,35 110,50 110,80 80,95 50,80 50,50" />
            <polygon points="110,50 140,65 140,95 110,110 80,95 80,65" />
            <polygon points="140,65 170,80 170,110 140,125 110,110 110,80" />
            <polygon points="50,80 80,95 80,125 50,140 20,125 20,95" />
            <polygon points="80,95 110,110 110,140 80,155 50,140 50,110" />
          </g>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-30 -translate-y-48 translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
     
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            <span className="text-orange-500 font-medium">Always The Best</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Types Of <span className="text-orange-500">SaaS Applications</span> We Deliver
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="flex items-center space-x-3 text-white">
                <div className="flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-lg font-medium">{service.title}</span>
              </div>
            );
          })}
        </div>

     
        <div className="text-center">
          <button className="bg-transparent border-2 border-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors duration-300">
            Reach out to us
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaasApplications;