import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import BreadCrumb from "./BreadCrumb";
import Contacts from "../Components/Contacts";
import ServiceFooter from "../Services/ServiceFooter";
import ngrokAxiosInstance from "../Hooks/axiosInstance";
import { useNavigate } from "react-router-dom";
import ValuesSection from "../Components/ValueSection";
import MetaPage from "./MetaPage";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await ngrokAxiosInstance.get("/dynamic/about");
      setAboutData(res.data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  if (!aboutData) return null;

  const {
    subtitle,
    title,
    highlight,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    image,
  } = aboutData;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />
      <BreadCrumb
        title="About Us"
        paragraph="Driven by Consistency, Commitment, and Customer Satisfaction – we deliver beyond expectations, every time."
      />
      <MetaPage
        title="About MN Techs | Leading Software Solutions Company Hyderabad"
        description="Know about MN Techs, a leading software solutions company in Hyderabad offering custom web, mobile, AI, and enterprise software development"
      />
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#1d80bb] rounded-full animate-pulse"></div>
                  <span className="text-base font-semibold text-[#5a5a5c] tracking-wide uppercase">
                    {subtitle}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  {title.split(" ").map((word, i) =>
                    word === highlight ? (
                      <span key={i} className="text-[#1d80bb]">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h2>
              </div>

              <div className="space-y-5">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {paragraph1}
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {paragraph2}
                </p>
              </div>

              <button
                onClick={() => navigate(buttonLink || "/")}
                className="px-6 py-3 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] border border-white text-white text-base font-semibold rounded-full shadow-2xl hover:bg-[#fbaf43] transition-all duration-300 ring-1 ring-[#1d80bb] ring-offset-3"
              >
                {buttonText}
              </button>
            </div>

            {/* Right Image Section */}
            <div className="relative group animate-fade-in">
              <div className="overflow-hidden rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={`${ngrokAxiosInstance.defaults.baseURL.replace(
                    /\/$/,
                    ""
                  )}/${image.replace(/^\/+/, "").replace(/\\/g, "/")}`}
                  alt="About Section"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1d80bb] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#5a5a5c] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
      <ValuesSection />
      <Contacts />
      <ServiceFooter />
    </div>
  );
};

export default About;