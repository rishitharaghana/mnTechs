import React from "react";
import { CiCloud } from "react-icons/ci";
import { ArrowRight } from "lucide-react";
import map from "../assets/map.png";
import { Link, useNavigate } from "react-router-dom"; // Corrected import for navigation
import Navigation from "../Components/Navigation";
import Safegaurd from "../Services/Safegaurd";
import SaasApplications from "../Services/SaasApplications";
import ServiceFooter from "../Services/ServiceFooter";
// import PageBanner from "./PageBanner";
import BreadCrumb from "./BreadCrumb";

const services = [
  {
    id: "01",
    title: "SaaS Development Consulting",
    desc: "We guide you through business analysis, tech strategy, and cloud architecture design for scalable SaaS solutions.",
  },
  {
    id: "02",
    title: "SaaS Design and Prototyping",
    desc: "We craft intuitive UI/UX with rapid prototypes to validate ideas before full-scale development.",
  },
  {
    id: "03",
    title: "End-to-End SaaS Development",
    desc: "From backend APIs to frontend dashboards, we build full-fledged SaaS platforms that grow with you.",
  },
  {
    id: "04",
    title: "Migration to SaaS",
    desc: "We help modernize legacy systems and transition your app to a secure, scalable SaaS model.",
  },
  {
    id: "05",
    title: "Third Party Integrations",
    desc: "We integrate your SaaS app with payment gateways, CRMs, analytics tools, and more.",
  },
  {
    id: "06",
    title: "SaaS Support and Maintenance",
    desc: "Ensure your SaaS product stays updated, secure, and running smoothly with our ongoing support.",
  },
];

const Services = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handler for "Tell us about your project" and "See More" navigation
  const handleTellUs = () => {
    navigate("/contact"); // Programmatic navigation to contact page
  };

  return (
    <div>
      <BreadCrumb title='Services' />
      <Navigation />
      <div className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-20 overflow-hidden">
        <img
          src={map}
          alt="hexagon background"
          className="absolute z-10 inset-0 w-full h-full object-cover opacity-20"
          style={{ height: "150px" }}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6 max-w-xs sm:max-w-3xl">
            <div className="relative bg-gray-100 shadow-2xl p-4 sm:p-6 rounded-full text-2xl sm:text-4xl text-orange-500">
              <span className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 h-3 bg-orange-500 rounded-full"></span>
              <CiCloud />
            </div>
            <p className="text-base sm:text-lg text-gray-800 font-bold">
              At MnTech Services, we craft cutting-edge SaaS solutions tailored
              to your business needs. From startup ideas to enterprise platforms
              we turn innovation into scalable reality.
            </p>
          </div>
          <div className="p-4 sm:p-10">
            <button 
            onClick={handleTellUs} className="px-6 sm:px-10 py-2 sm:py-4 border-2 border-orange-500 font-medium text-base sm:text-lg rounded-full text-black bg-white hover:bg-orange-500 hover:text-white transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="flex items-center mt-6 sm:mt-12">
          <div className="w-4 sm:w-8 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200 mx-2 sm:mx-4"></div>
          <div className="w-4 sm:w-8 h-1 bg-orange-500"></div>
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center gap-1 sm:gap-2 text-black font-medium text-base sm:text-lg">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Services and Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-start text-black mt-2 sm:mt-4 mb-4 sm:mb-6">
            Our SaaS Development Services Let You Win Big
          </h2>
          <p className="text-black text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Incidunt tenetur harum rerum et quam dolorem a voluptatem nam
            reiciendis sit?
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-20 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-4">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white flex items-center justify-center text-xl sm:text-2xl font-bold text-black relative">
                  {service.id}
                  <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-3 h-3 bg-orange-500 rounded-full"></span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 px-2">
          <button
            className="border-2 border-orange-500 text-black font-medium py-2 px-6 sm:px-8 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Tell us about your project
          </button>
          <button className="group flex items-center gap-2 sm:gap-3 mt-4 sm:mt-0">
            <span className="font-semibold text-gray-900 text-base sm:text-lg">
              See More
            </span>
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-center mt-6 sm:mt-12">
        <div className="w-4 sm:w-8 h-1 bg-orange-500"></div>
        <div className="flex-1 border-t border-gray-200 mx-2 sm:mx-4"></div>
        <div className="w-4 sm:w-8 h-1 bg-orange-500"></div>
      </div>
      <Safegaurd />
      <div className="py-12 sm:py-16 bg-white text-center">
        <div className="flex items-center mt-6 sm:mt-12 px-4 md:px-20">
          <div className="w-4 sm:w-8 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200 mx-2 sm:mx-4"></div>
          <div className="w-4 sm:w-8 h-1 bg-orange-500"></div>
        </div>
      </div>
      <PageBanner />
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default Services;