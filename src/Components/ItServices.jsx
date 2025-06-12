import React from "react";
import { Bell, Bookmark, Box, Cloud, Settings, Zap } from "lucide-react";
import { Card, CardContent } from "./Ui/Card";
import { Separator } from "./Ui/Separator";
const ServicesSection = () => {
  const itServices = [
    {
      id: "01",
      title: "Dedicated Team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Cloud,
    },
    {
      id: "02",
      title: "QA and Testing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Bell,
    },
    {
      id: "03",
      title: "SaaS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Box,
    },
  ];
  const itSolutions = [
    {
      id: "01",
      title: "Blockchain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Settings,
    },
    {
      id: "02",
      title: "Artificial Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Zap,
    },
    {
      id: "03",
      title: "Internet of Things",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Bookmark,
    },
  ];
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div
        className="absolute z-50 top-0 right-0 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url('/ITservices Pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="">
        <div className="text-start mb-16">
          <h2 className="font-size-[42px] sm:text-4xl lg:text-5xl font-semibold text-[#121820] mb-4">
            How We Can <span className="text-orange-500">Help You</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-600 text-[#121820]">
                IT Services
              </h3>
            </div>
            <div className="flex items-center my-8">
              <div className="w-4 h-0.5 bg-orange-500"></div>
              <div className="flex-1 h-px bg-gray-800"></div>
              <div className="w-4 h-0.5 bg-orange-500"></div>
            </div>
            <div className="space-y-0">
              {itServices.map((service, index) => (
                <div key={service.id}>
                  <ServiceItem service={service} index={index} />
                  {index < itServices.length - 1 && (
                    <div className="flex items-center my-8">
                      <div className="w-4 h-0.5 bg-orange-500"></div>
                      <div className="flex-1 h-px bg-gray-800"></div>
                      <div className="w-4 h-0.5 bg-orange-500"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-600 text-[#121820]">
                IT Solutions
              </h3>
            </div>
            <div className="flex items-center my-8">
              <div className="w-4 h-0.5 bg-orange-500"></div>
              <div className="flex-1 h-px bg-gray-800"></div>
              <div className="w-4 h-0.5 bg-orange-500"></div>
            </div>
            <div className="space-y-0">
              {itSolutions.map((service, index) => (
                <div key={service.id}>
                  <ServiceItem service={service} index={index} />
                  {index < itSolutions.length - 1 && (
                    <div className="flex items-center my-8">
                      <div className="w-4 h-0.5 bg-orange-500"></div>
                      <div className="flex-1 h-px bg-gray-800"></div>
                      <div className="w-4 h-0.5 bg-orange-500"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const ServiceItem = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <div className="group flex items-start gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-gray-300">
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors duration-300" />
        </div>

        <div className="absolute -bottom-0 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 rounded-full"></div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-orange-500 font-semibold text-sm">
            {service.id}
          </span>
          <h4 className="text-lg sm:text-xl font-semibold text-[#121820] group-hover:text-orange-500 transition-colors duration-300">
            {service.title}
          </h4>
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: "rgba(18, 24, 32, 0.4)" }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};
export default ServicesSection;
