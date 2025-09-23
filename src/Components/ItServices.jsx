import React, { useEffect, useState } from "react";
import {
  Bell,
  Bookmark,
  Box,
  Cloud,
  Settings,
  ShoppingCart,
  Zap,
} from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const iconMap = {
  Cloud: Cloud,
  Bell: Bell,
  Box: Box,
  Settings: Settings,
  Zap: Zap,
  Bookmark: Bookmark,
  ShoppingCart: ShoppingCart,
};

const ItServices = () => {
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    ngrokAxiosInstance
      .get("/serviceSection")
      .then((res) => setSectionData(res.data))
      .catch((err) =>
        console.error(
          "Error fetching service section:",
          err.response ? err.response.data : err.message
        )
      );
  }, []);

  if (!sectionData) return null;

  const { sectionTitle, itServicesTitle, productsTitle, itServices, products } =
    sectionData;

  return (
    <section className="max-w-[1536px] w-full mx-auto relative md:py-15 md:mt-0 mt-5 py-4 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
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
        <div className="text-start lg:mb-7 md:mb-6 mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#121820] mb-3 sm:mb-4">
            ● {sectionTitle?.split(" ").map((word, index) =>
              word.toLowerCase() === "help" ? (
                <span key={index} className="text-[#1d80bb]">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-12 gap-5 sm:gap-8 lg:gap-16">
          <ServiceList title={itServicesTitle} data={itServices} />
          {sectionData.products?.length > 0 && (
            <ServiceList
              title={sectionData.productsTitle || "Products"}
              data={sectionData.products}
            />
          )}
        </div>
      </div>
    </section>
  );
};

const ServiceList = ({ title, data }) => (
  <div>
    {title?.trim() && (
      <div className="flex items-center md:mb-12 mb-4">
        <h3 className="text-2xl sm:text-3xl font-600 text-[#121820]">
          {title}
        </h3>
      </div>
    )}
    <div className="hidden sm:flex items-center md:my-8 my-5">
      <div className="w-4 h-0.5 bg-[#1d80bb]"></div>
      <div className="flex-1 h-px bg-gray-800"></div>
      <div className="w-4 h-0.5 bg-[#1d80bb]"></div>
    </div>
    <div className="space-y-0">
      {data.map((item, index) => {
        const Icon = iconMap[item.icon] || Cloud;
        const id = String(index + 1).padStart(2, "0");

        return (
          <div key={id}>
            <ServiceItem
              id={id}
              title={item.title}
              description={item.description}
              Icon={Icon}
            />
            {index < data.length - 1 && (
              <div className="hidden sm:flex items-center md:my-8 my-4">
                <div className="w-4 h-0.5 bg-[#1d80bb]"></div>
                <div className="flex-1 h-px bg-gray-800"></div>
                <div className="w-4 h-0.5 bg-[#1d80bb]"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const ServiceItem = ({ id, title, description, Icon }) => (
  <div className="group flex flex-col sm:flex-row items-start gap-6 sm:p-4 rounded-lg transition-all duration-300 hover:bg-gray-300">
    <div className="hidden sm:block relative flex-shrink-0">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
        <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#1d80bb] transition-colors duration-300" />
      </div>
      <div className="absolute -bottom-0 -right-1 w-4 h-4 bg-[#1d80bb] rounded-full flex items-center justify-center">
        <div className="w-2 h-2 rounded-full"></div>
      </div>
    </div>
    <div className="flex-1 gap-4 mb-6 sm:mb-0 border-1 sm:border-0 border-gray-200 p-4 sm:p-0 rounded-lg sm:rounded-none shadow-lg sm:shadow-none">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#1d80bb] font-semibold text-sm">{id}</span>
        <h4 className="text-lg sm:text-xl font-semibold text-[#121820] group-hover:text-[#1d80bb] transition-colors duration-300">
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
