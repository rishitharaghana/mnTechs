import React, { useEffect, useState } from "react";
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
        const res = await ngrokAxiosInstance.get("/dynamic/collaboration");
        setCollabData(res.data[0]);
      } catch (error) {
        console.error("Error fetching collaborations:", error);
      }
    };

    fetchCollaborations();
  }, []);

  if (!collabData) return null;

  return (
    <section className="md:px-10 px-4 pb-8 bg-white">
      <div className="max-w-[1536px] w-full mx-auto">
        <div className="text-left md:mb-9 pt-10 sm:mb-10 mb-6">
          <p className="text-[#1d80bb] font-medium mb-3 sm:mb-4">
            {collabData.sectionSubtitle}
          </p>
          <h1 className="text-2xl sm:text-3xl leading-snug lg:text-4xl font-bold text-gray-900 md:mb-6 mb-4 ">
            {collabData.sectionTitle.split(" ").map((word, i) =>
              word.toLowerCase() === "collaborate" ? (
                <span key={i} className="text-[#1d80bb]">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6 md:mb-16 mb-10">
          {collabData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Wrench;
            return (
              <div
                key={index}
                className="text-left md:p-0 p-5 border border-gray-500 rounded-md md:border-0 md:rounded-none md:border-transparent"
              >
                <div className="flex gap-5 items-center mb-4">
                  <div className="relative">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#1d80bb] rounded-full" />
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

        <div className="flex flex-col sm:flex-row gap-6 justify-end items-end sm:items-center">
          <Link to="/services">
            <button className="group flex items-center cursor-pointer gap-3">
              <span className="font-semibold text-gray-900 text-md sm:text-lg">
                Learn More
              </span>
              <div className="sm:w-8 w-7 sm:h-8 h-7 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-[orange-600] ring-1 ring-[#1d80bb] ring-offset-3">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
