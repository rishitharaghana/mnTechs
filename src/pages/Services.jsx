import React from "react";
import { CiCloud } from "react-icons/ci";
import { ArrowRight } from "lucide-react";
import map from "../assets/map.png";
import Approach from "../Services/Approach";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
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
      <div className="relative">
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
            <Link to="/" className="text-black font-medium hover:underline">
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
          <button className="border-1 border-orange-500 font-medium py-3 px-8 rounded-full hover:bg-orange-500 hover:text-orange transition">
            Get in Touch
          </button>
        </div>
        <div className="flex items-center mt-12">
          <div className="w-8 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-8 h-1 bg-orange-500"></div>
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
          <button className="border-2 border-orange-500 text-white font-medium py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
            Tell us about your project
          </button>
          <div className="text-orange-500 text-3xl hover:translate-x-1 transition-transform cursor-pointer">
            →
          </div>
        </div>
      </div>
      <div className="flex items-center mt-12">
        <div className="w-8 h-1 bg-orange-500"></div>
        <div className="flex-1 border-t border-gray-200"></div>
        <div className="w-8 h-1 bg-orange-500"></div>
      </div>
      <section className="py-16 px-4 bg-white text-center">
        <p className="text-orange-500 font-medium mb-2">● Safeguard Modern</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Ready To Take The Next Step?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Get a Live Demo</h3>
            <p className="text-gray-400 mb-8">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold">
              Request a Free Demo
              <span className="bg-gray-200 p-2 rounded-full">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Start Now</h3>
            <p className="text-gray-400 mb-8">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold">
              Get In Touch
              <span className="bg-gray-200 p-2 rounded-full">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>
      <div className="py-16 bg-white text-center">
        <div className="flex items-center mt-12 px-4 md:px-20">
          <div className="w-4 h-1 bg-orange-500"></div>
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="w-4 h-1 bg-orange-500"></div>
        </div>
      </div>
      <Approach />
    </div>
  );
};
export default Services;
