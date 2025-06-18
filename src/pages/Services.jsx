import React from "react";
import { CiCloud } from "react-icons/ci";
import { ArrowRight } from "lucide-react";
import map from "../assets/map.png";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Safegaurd from "../Services/Safegaurd";
import SaasApplications from "../Services/SaasApplications";
import ServiceFooter from "../Services/ServiceFooter";
import BreadCrumb from "./BreadCrumb";

const services = [
  {
    id: "01",
    title: "Invoice and Billing System",
    desc: "Automate your billing processes with ease. Our system helps generate professional invoices, track payments, manage taxes, and maintain accurate financial records. It reduces manual errors and ensures faster transactions with clients and vendors.",
  },
  {
    id: "02",
    title: "Payroll Management",
    desc: "Simplify salary processing, tax calculations, employee benefits, and compliance. Our payroll solution ensures timely and accurate payments, auto-generates payslips, and integrates seamlessly with HR and accounting systems.",
  },
  {
    id: "03",
    title: "CRM (Customer Relationship Management)",
    desc: "Build better relationships with your customers. Our CRM system helps manage leads, track customer interactions, schedule follow-ups, and analyze sales performance,empowering your team to convert more leads into loyal clients.",
  },
  {
    id: "04",
    title: "HRMS (Human Resources Management System)",
    desc: "Manage your workforce efficiently. From employee onboarding and attendance tracking to performance reviews and leave management, our HRMS solution centralizes all HR operations under one platform.",
  },
  {
    id: "05",
    title: "Hospital Management System",
    desc: "Streamline healthcare operations with our all-in-one hospital software. It covers patient records, appointment scheduling, billing, pharmacy, diagnostics, and staff management,ensuring smooth coordination and improved patient care.",
  },
  {
    id: "06",
    title: "School and College Management System",
    desc: "A complete academic management solution for educational institutions. Automate admissions, fee collections, student and staff records, attendance, timetable scheduling, and online report cards all from one dashboard.",
  },
  {
    id: "07",
    title: "Large Scale E-commerce Management",
    desc: "Efficiently run your online store. Our e-commerce solution includes product catalog management, inventory control, order processing, payment integration, customer support, and analytics for large and growing businesses.",
  },
  {
    id: "08",
    title: "Artificial Intelligence Chatbots",
    desc: "Offer 24/7 customer support and engagement with intelligent AI chatbots. They can answer queries, guide purchases, schedule appointments, and enhance user experience,reducing response time and boosting satisfaction.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleTellUs = () => {
    navigate("/contact");
  };

  return (
    <div>
      <BreadCrumb title="Services" />
      <Navigation />
      <div className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-20 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6 max-w-xs sm:max-w-3xl">
            <div className="relative bg-gray-100 shadow-2xl p-4 sm:p-6 rounded-full text-2xl sm:text-4xl text-orange-500">
              <span className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 h-3 bg-orange-500 rounded-full"></span>
              <CiCloud />
            </div>
            <p className="text-base sm:text-lg text-gray-800 font-bold">
              Smart Tech Solutions Designed for Your Growth.
            </p>
          </div>
          <div className="p-4 sm:p-10">
            <button
              onClick={handleTellUs}
              className="px-6 sm:px-10 py-2 sm:py-4 border-2 border-orange-500 font-medium text-base sm:text-lg rounded-full text-black bg-white hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
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
            MN Techs delivers innovative, customized software solutions.
          </h2>
          <p className="text-black text-sm sm:text-base">
            Transform your operations with our digital tools.
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-20 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl sm:text-2xl font-bold text-black relative">
                  {service.id}
                  <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-3 h-3 bg-orange-500 rounded-full"></span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
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
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default Services;