import React from "react";
import { CiCloud } from "react-icons/ci";

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
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://itsulu-react.netlify.app/img/deco/map.png')",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="relative z-10 px-10 py-32">
          <div className="text-sm text-gray-600 mb-4">
            <span className="text-black font-medium">Home</span>
            <span className="text-orange-500 mx-2">●</span>
            <span className="text-gray-500">Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            SAAS DEVELOPMENT SERVICES
          </h1>
        </div>
      </div>

      {/* Info Section with Icon and Button */}
      <div className="relative py-16 px-6 md:px-20 bg-white">
        {/* Background Hexagon Graphic */}
        <img
          src="https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148400085.jpg?uid=R201977210&ga=GA1.1.1087874630.1733635507&semt=ais_items_boosted&w=740"
          alt="hexagon background"
          className="absolute right-10 top-10 opacity-10 pointer-events-none hidden md:block"
          style={{ height: "150px" }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Icon + Text */}
          <div className="flex items-center gap-6 max-w-3xl">
            <div className="bg-gray-100 p-6 rounded-full text-4xl text-orange-500">
              <CiCloud />
            </div>
            <p className="text-lg text-gray-800">
              At MnTech Services, we craft cutting-edge SaaS solutions tailored to your business needs.
              From startup ideas to enterprise platforms — we turn innovation into scalable reality.
            </p>
          </div>

          {/* Get in Touch Button */}
          <button className="border-2 border-orange-500 text-black font-medium py-3 px-8 rounded-full hover:bg-orange-500 hover:text-white transition">
            Get in Touch
          </button>
        </div>

        {/* Divider Line */}
        <div className="flex items-center mt-12">
          <div className="w-8 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-8 h-1 bg-orange-500"></div>
        </div>
      </div>

      {/* Services Grid */}
           {/* Services Grid */}
           <div className="px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-black relative">
                  {service.id}
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Button and Arrow */}
        <div className="flex items-center justify-between mt-12 px-2">
          <button className="border-2 border-orange-500 text-black font-medium py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
            Tell us  about your project
          </button>
          <div className="text-orange-500 text-3xl hover:translate-x-1 transition-transform cursor-pointer">
            →
          </div>
          
        </div>
        
      </div>
      {/* Divide line */}
      <div className="flex items-center mt-12">
          <div className="w-8 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-8 h-1 bg-orange-500"></div>
        </div>

    </div>
  );
};

export default Services;
