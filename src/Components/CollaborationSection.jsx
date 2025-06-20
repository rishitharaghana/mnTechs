import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import {
  Wrench,
  BookOpen,
  Zap,
  Rocket,
  Code,
  Globe,
  Users,
  Server,
  Handshake,
} from "lucide-react";

const iconMap = {
  wrench: Wrench,
  bookOpen: BookOpen,
  zap: Zap,
  rocket: Rocket,
  code: Code,
  globe: Globe,
  users: Users,
  server: Server,
  handShake: Handshake,
};

const CollaborationSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/dynamic/collaboration");
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching collaborations:", error);
      }
    };

    fetchCollaborations();
  }, []);

  return (
    <section className="md:px-10 px-4 bg-gray-50">
      <div className="flex items-center mb-16">
        <div className="w-4 h-0.5 bg-orange-500"></div>
        <div className="flex-1 h-px bg-gray-800"></div>
        <div className="w-4 h-0.5 bg-orange-500"></div>
      </div>

      <div className="text-left mb-16">
        <p className="text-orange-500 font-medium mb-4">• Discover Our Company</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mt-6 mb-10">
          How We <span className="text-orange-500 leading-snug">Collaborate</span> With You
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon] || Wrench;
          return (
            <div key={index} className="text-left">
              <div className="flex gap-5 place-items-center mb-4">
                <div className="relative">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
        <button className="group flex items-center gap-3">
          <span className="font-semibold text-gray-900 text-lg">Learn More</span>
          <div className="md:w-12 w-8 md:h-12 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </button>

        <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-50 md:px-8 px-4 py-2 md:py-3 rounded-full transition-all duration-300 font-medium">
          How We Work
        </button>
      </div>
    </section>
  );
};

export default CollaborationSection;
