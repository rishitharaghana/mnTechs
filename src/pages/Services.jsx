import React from "react";
import { CiCloud } from "react-icons/ci";
import { ArrowRight } from "lucide-react";
import map from "../assets/map.png";
import Approach from "../Services/Approach";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Safegaurd from "../Services/Safegaurd";
import BackgroundCarousel from "../Components/Ui/Backgroundcarousel";
import SaasApplications from "../Services/SaasApplications";
import ServiceFooter from "../Services/ServiceFooter";
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
    <div>
      <Navigation />
      <div className="relative top-20">
        <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>

        <div
          className="relative z-10 px-10 py-32"
          style={{
            backgroundImage: `url(${map})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-sm text-gray-600 mb-4">
            <Link to="/" className="text-black font-medium hover: text-orange">
              Home
            </Link>
            <span className="text-orange-500 mx-2">●</span>
            <span className="text-gray-500">Service</span>
          </div>
          <div className="flex items-center gap-10 md:gap-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              SAAS DEVELOPMENT SERVICES
            </h1>
            <img
              src="/deco-2.svg"
              alt="Decoration"
              className="w-40 md:w-50 h-auto transform rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="relative py-16 px-6 md:px-20 bg-white">
        <img
          src={map}
          alt="hexagon background"
          className="absolute right-10 top-10 opacity-10 pointer-events-none hidden md:block"
          style={{ height: "150px" }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex items-center gap-6 max-w-3xl">
            <div className="bg-gray-100 p-6 rounded-full text-4xl text-orange-500">
              <CiCloud />
            </div>
            <p className="text-lg text-gray-800">
              At MnTech Services, we craft cutting-edge SaaS solutions tailored
              to your business needs. From startup ideas to enterprise platforms
              — we turn innovation into scalable reality.
            </p>
          </div>
          <div className="p-10 bg-white">
            <button className="px-10 py-4 border-2  border-orange-500 font-medium text-lg rounded-full text-black bg-white hover:bg-orange-500 hover:text-white transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <div className="w-8 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-8 h-1 bg-orange-500"></div>
        </div>

        <div>
          <div className="mt-8 flex   gap-2 text-black font-medium text-lg">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Services and Solutions
          </div>
          <h2 className="text-xl md:text-5xl  text-center text-black mb-16">
            Our Saas Development Services Let You Win Big
          </h2>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
            Incidunt tenetur harum rerum et quam dolorem a voluptatem nam
            reiciendis sit?
          </p>
        </div>
      </div>
      <div className="px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-black relative">
                  {service.id}
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
                </div>
                <h3 className="text-lg font-semibold  text-black">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-12 px-2">
          <button className="border-2 border-orange-500 text-black font-medium py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
            Tell us about your project
          </button>
          <div className="text-orange-500 text-3xl hover:translate-x-1 transition-transform cursor-pointer">
            see more →
          </div>
        </div>
      </div>
      <div className="flex items-center mt-12">
        <div className="w-8 h-1 bg-orange-500"></div>
        <div className="flex-1 border-t border-gray-200"></div>
        <div className="w-8 h-1 bg-orange-500"></div>
      </div>
      <Safegaurd />

      <div className="py-16 bg-white text-center">
        <div className="flex items-center mt-12 px-4 md:px-20">
          <div className="w-4 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-4 h-1 bg-orange-500"></div>
        </div>
      </div>
      <Approach />
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};
export default Services;
