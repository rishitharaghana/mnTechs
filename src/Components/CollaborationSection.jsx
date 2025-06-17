import React from "react";
import { Button } from "./Ui/Button";
import { ArrowRight, Wrench, BookOpen, Zap, Rocket } from "lucide-react";

const CollaborationSection = () => {
  const features = [
    {
      icon: Wrench,
      title: "Thinking Big",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: BookOpen,
      title: "Starting Small",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Zap,
      title: "Creating Fast",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Rocket,
      title: "Innovating Scale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="px-10 bg-gray-50">
      <div className="flex items-center mb-16">
        <div className="w-4 h-0.5 bg-orange-500"></div>
        <div className="flex-1 h-px bg-gray-800"></div>
        <div className="w-4 h-0.5 bg-orange-500"></div>
      </div>
      <div className="">
        <div className="text-left mb-16">
          <p className="text-orange-500 font-medium mb-4">
            • Discover Our Company
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            How We <span className="text-orange-500">Collaborate</span> With You
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-left">
                
                <div className="flex gap-5 place-items-center mb-4">
                  <div className="relative">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="">
                    <h3 className="text-xl m-auto! font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
         
          <button className="group flex items-center gap-3">
            <span className="font-semibold text-gray-900 text-lg">
              Learn More
            </span>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </button>

          
          <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full transition-all duration-300 font-medium">
            How We Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
