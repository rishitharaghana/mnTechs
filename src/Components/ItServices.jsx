import React, { useEffect, useState } from "react";
import { Bell, Bookmark, Box, Cloud, Settings, Zap } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const iconMap = {
  Cloud: Cloud,
  Bell: Bell,
  Box: Box,
  Settings: Settings,
  Zap: Zap,
  Bookmark: Bookmark,
};

const ItServices = () => {
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    fetchSectionData();
  }, []);

  const fetchSectionData = async () => {
    try {
      const response = await ngrokAxiosInstance.get('/dynamic/serviceSection');
      setSectionData(response.data);
    } catch (error) {
      console.error("Error fetching service section:", error);
    }
  };

  if (!sectionData) return null;

  const {
    sectionTitle,
    itServicesTitle,
    itSolutionsTitle,
    itServices,
    itSolutions
  } = sectionData;

  return (
    <section className="relative md:py-16 py-4 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div
        className="absolute z-50 top-0 right-0 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url('/ITservices Pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div>
        <div className="text-start mb-16">
          <h2 className="font-size-[42px] sm:text-4xl lg:text-5xl font-semibold text-[#121820] mb-4">
            {sectionTitle?.split(" ").map((word, index) =>
              word.toLowerCase() === "help" ? (
                <span key={index} className="text-orange-500">{word} </span>
              ) : (
                word + " "
              )
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ServiceList title={itServicesTitle} data={itServices} />
        {itSolutions?.length > 0 && (
  <ServiceList title={itSolutionsTitle || "IT Solutions"} data={itSolutions} />
)}

        </div>
      </div>
    </section>
  );
};

const ServiceList = ({ title, data }) => (
  <div>
    {title?.trim() && (
      <div className="flex items-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-600 text-[#121820]">{title}</h3>
      </div>
    )}
    <div className="flex items-center my-8">
      <div className="w-4 h-0.5 bg-orange-500"></div>
      <div className="flex-1 h-px bg-gray-800"></div>
      <div className="w-4 h-0.5 bg-orange-500"></div>
    </div>
    <div className="space-y-0">
      {data.map((item, index) => {
        const Icon = iconMap[item.icon] || Cloud;
        const id = String(index + 1).padStart(2, "0");

        return (
          <div key={id}>
            <ServiceItem id={id} title={item.title} description={item.description} Icon={Icon} />
            {index < data.length - 1 && (
              <div className="flex items-center my-8">
                <div className="w-4 h-0.5 bg-orange-500"></div>
                <div className="flex-1 h-px bg-gray-800"></div>
                <div className="w-4 h-0.5 bg-orange-500"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);


const ServiceItem = ({ id, title, description, Icon }) => (
  <div className="group flex items-start gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-gray-300">
    <div className="relative flex-shrink-0">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
        <Icon className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors duration-300" />
      </div>
      <div className="absolute -bottom-0 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 rounded-full"></div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-orange-500 font-semibold text-sm">{id}</span>
        <h4 className="text-lg sm:text-xl font-semibold text-[#121820] group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h4>
      </div>
      <p className="text-sm sm:text-base leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  </div>
);

export default ItServices;
  