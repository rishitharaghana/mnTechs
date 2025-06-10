


import React from 'react';

import { Button } from './Ui/Button';
import { ArrowRight } from 'lucide-react';
import { Progress } from './Progress';

const SkillsSection = () => {
  const skills = [
    { name: 'Software Development', percentage: 65 },
    { name: 'Web Development', percentage: 90 },
    { name: 'UX / UI Design', percentage: 50 },
    { name: 'App Development', percentage: 95 },
    { name: 'Internet of Things', percentage: 60 },
    { name: 'Artificial Intelligence', percentage: 90 },
    { name: 'Blockchain', percentage: 80 }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-orange-500 font-medium mb-4">• Our Skill</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Business <span className="text-orange-500">Success</span> With
              <br />
              Technology
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-gray-600 leading-relaxed text-lg mb-12">
              It is a long established fact that a reader will be distracted by the readable content of a 
              page when looking at its layout. The point of using Lorem Ipsum is that it has a more-
              or-less normal distribution of letters, as opposed to using content here.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 text-lg">{skill.name}</span>
                  <span className="text-gray-600 font-medium">{skill.percentage}%</span>
                </div>
                <div className="relative">
                  <div className="w-full h-1 bg-gray-200 rounded-full">
                    <div 
                      className="h-1 bg-orange-500 rounded-full relative"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-start mt-12 ">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


