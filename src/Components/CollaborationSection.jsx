
import React from 'react';
import { Button } from './Ui/Button';
import { ArrowRight } from 'lucide-react';

const CollaborationSection = () => {
  const features = [
    {
      icon: '🔥',
      title: 'Thinking Big',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: '📚',
      title: 'Starting Small',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: '⚡',
      title: 'Creating Fast',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: '🚀',
      title: 'Innovating Scale',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <section className="px-4 bg-gray-50">
      <div className="flex items-center mb-16">
          <div className="w-4 h-0.5 bg-orange-500"></div>
          <div className="flex-1 h-px bg-gray-800"></div>
          <div className="w-4 h-0.5 bg-orange-500"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4">• Discover Our Company</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            How We <span className="text-orange-500">Collaborate</span> With You
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full">
            How We Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;