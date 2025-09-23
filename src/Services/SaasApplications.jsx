import React, { useEffect, useState } from "react";
import {
  Database,
  HandCoins,
  TrendingUp,
  ShoppingCart,
  Calculator,
  University,
  Hospital,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const ICON_MAP = {
  Database,
  HandCoins,
  TrendingUp,
  ShoppingCart,
  Calculator,
  University,
  Hospital,
  Users,
};

const SaasApplications = () => {
  const [data, setData] = useState({
    sectionTitle: "",
    heading: "",
    subtitle: "",
    services: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ngrokAxiosInstance.get(
          "/dynamic/saasApplication"
        );
        if (response.data.length > 0) setData(response.data[0]);
      } catch (error) {
        console.error(
          "Error fetching SaaS application data:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative py-20 bg-black/90 overflow-hidden">
      <div className="absolute top-0 left-0 w-[220px] h-[140px] opacity-20 hidden sm:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g stroke="#1d80bb" strokeWidth="2" fill="none">
            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" />
            <polygon points="80,35 110,50 110,80 80,95 50,80 50,50" />
            <polygon points="110,50 140,65 140,95 110,110 80,95 80,65" />
            <polygon points="140,65 170,80 170,110 140,125 110,110 110,80" />
            <polygon points="50,80 80,95 80,125 50,140 20,125 20,95" />
            <polygon points="80,95 110,110 110,140 80,155 50,140 50,110" />
          </g>
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1d80bb] rounded-full opacity-30 -translate-y-48 translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-5">
            <span className="text-[#1d80bb] text-xl font-medium">
              {data.sectionTitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.heading.split(" ").map((word, index) =>
              word.toLowerCase() === "saas" ? (
                <span key={index} className="text-[#1d80bb]">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>
          <p className="text-[#5a5a5c] text-lg max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {data.services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Users;
            return (
              <div key={index} className="flex items-center gap-4 text-white">
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#1d80bb]" />
                </div>
                <span className="text-lg font-large">{service.title}</span>
              </div>
            );
          })}
        </div>

        <Link to="/contact">
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] text-white cursor-pointer font-semibold py-3 px-4 md:py-3 md:px-6 rounded-full transition-colors duration-200 text-md md:text-lg">
              Reach out to us
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SaasApplications;