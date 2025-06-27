import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Wrench, BookOpen, Zap, Rocket, Code, Globe, Users, Server, Handshake,
} from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";
import { Link } from "react-router-dom";

const iconMap = {
  wrench: Wrench,
  bookOpen: BookOpen,
  zap: Zap,
  rocket: Rocket,
  code: Code,
  globe: Globe,
  users: Users,
  handShake: Handshake,
  server: Server,
};

const CollaborationSection = () => {
  const [collabData, setCollabData] = useState(null);

  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
          const res = await ngrokAxiosInstance.get('/dynamic/collaboration');
        setCollabData(res.data[0]); 
      } catch (error) {
        console.error("Error fetching collaborations:", error);
      }
    };

    fetchCollaborations();
  }, []);

  if (!collabData) return null;

  return (
    <section className="md:px-10 px-4 pb-5 bg-gray-50">
      <div className="flex items-center mb-16">
        <div className="w-4 h-0.5 bg-orange-500" />
        <div className="flex-1 h-px bg-gray-800" />
        <div className="w-4 h-0.5 bg-orange-500" />
      </div>

      <div className="text-left mb-16">
        <p className="text-orange-500 font-medium mb-4">
          {collabData.sectionSubtitle}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          {collabData.sectionTitle.split(" ").map((word, i) =>
            word.toLowerCase() === "collaborate" ? (
              <span key={i} className="text-orange-500">{word} </span>
            ) : (
              word + " "
            )
          )}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {collabData.features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon] || Wrench;
          return (
            <div key={index} className="text-left">
              <div className="flex gap-5 items-center mb-4">
                <div className="relative">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
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
        <Link to ="/services" >
        <button className="group flex items-center cursor-pointer gap-3">
          <span className="font-semibold text-gray-900 text-lg">Learn More</span>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </button>
        </Link>

      </div>
    </section>
  );
};

export default CollaborationSection;
