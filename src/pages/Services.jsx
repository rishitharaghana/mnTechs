import React, { useEffect, useState } from "react";
import { CiCloud } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Safegaurd from "../Services/Safegaurd";
import SaasApplications from "../Services/SaasApplications";
import ServiceFooter from "../Services/ServiceFooter";
import BreadCrumb from "./BreadCrumb";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const Services = () => {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    ngrokAxiosInstance
      .get("/service")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setServiceData(res.data[0]);
        }
      })
      .catch((err) => {
        console.error(
          "Error fetching service data:",
          err.response ? err.response.data : err.message
        );
      });
  }, []);

  if (!serviceData) return null;

  const { topBanner, sectionTitle, heading, subtitle, services, callToAction } =
    serviceData;

  return (
    <div>
      <BreadCrumb
        title="Services"
        paragraph="Driven by Consistency, Commitment, and Customer Satisfaction – we deliver beyond expectations, every time."
      />
      <Navigation />

      <div className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-20 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6 max-w-xs sm:max-w-3xl">
            <div className="relative bg-gray-100 shadow-2xl p-4 sm:p-6 rounded-full text-2xl sm:text-4xl text-[#1d80bb]">
              <span className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 h-3 bg-[#1d80bb] rounded-full"></span>
              <CiCloud />
            </div>
            <p className="text-base sm:text-lg text-gray-800 font-bold">
              {topBanner?.title}
            </p>
          </div>
          <div className="p-4 sm:p-10">
            <button
              onClick={() => navigate(topBanner?.buttonLink || "/contact")}
              className="px-6 sm:px-8 py-2 sm:py-3 border-1  cursor-pointer border-[#5a5a5c] shadow-lg font-medium text-base sm:text-lg rounded-full text-white bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] hover:bg-[#1d80bb] hover:text-white transition-all duration-300"
            >
              {topBanner?.buttonText || "Get in Touch"}
            </button>
          </div>
        </div>

        <div className="flex items-center mt-6 sm:mt-12">
          <div className="w-4 sm:w-8 h-1 bg-[#1d80bb]"></div>
          <div className="flex-1 border-t border-gray-200 mx-2 sm:mx-4"></div>
          <div className="w-4 sm:w-8 h-1 bg-[#1d80bb]"></div>
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="flex items-center gap-1 sm:gap-2 text-black font-medium text-base sm:text-lg">
            <span className="w-2 h-2 bg-[#1d80bb] rounded-full"></span>
            {sectionTitle}
          </div>
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-5xl text-start text-black mt-2 sm:mt-4 mb-4 sm:mb-6">
            {heading}
          </h2>
          <p className="text-black text-sm sm:text-base">{subtitle}</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-20 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {services?.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl sm:text-2xl font-bold text-black relative">
                  {String(index + 1).padStart(2, "0")}
                  <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-3 h-3 bg-[#1d80bb] rounded-full"></span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 px-2">
          <button
            onClick={() => navigate(callToAction?.buttonLink || "/contact")}
            className="border-2 border-[#1d80bb] text-black cursor-pointer font-medium py-2 px-6 sm:px-8 rounded-full hover:bg-[#1d80bb] hover:text-white transition-all duration-300"
          >
            {callToAction?.buttonText || "Tell us about your project"}
          </button>
        </div>
      </div>

      <div className="flex items-center mt-6 sm:mt-12">
        <div className="w-4 sm:w-8 h-1 bg-[#1d80bb]"></div>
        <div className="flex-1 border-t border-gray-200 mx-2 sm:mx-4"></div>
        <div className="w-4 sm:w-8 h-1 bg-[#1d80bb]"></div>
      </div>

      <Safegaurd />
      <div className="py-12 sm:py-16 bg-white text-center">
        <div className="flex items-center mt-6 sm:mt-12 px-4 md:px-20">
          <div className="w-4 sm:w-8 h-1 bg-[#1d80bb]"></div>
          <div className="flex-1 border-t border-gray-200 mx-2 sm:mx-4"></div>
          <div className="w-4 sm:w-8 h-1 bg-[#1d80bb]"></div>
        </div>
      </div>
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default Services;
