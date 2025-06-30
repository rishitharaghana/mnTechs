import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import BackgroundCarousel from "./Ui/Backgroundcarousel";
import ngrokAxiosInstance from "../Hooks/axiosInstance";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  const fetchHeroData = async () => {
    try {
      const res = await ngrokAxiosInstance.get("/dynamic/hero");
      if (res.data.length > 0) {
        const latest = res.data[0];

        const feature_items =
          latest.features?.map((item) => ({
            label: item.title,
            tooltip_title: item.tooltip_title,
            tooltip_description: item.tooltip_text,
          })) || [];

        setHeroData({ ...latest, feature_items });
      }
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  useEffect(() => {
    fetchHeroData(); 
  }, []);

  if (!heroData) return null;

  return (
  <section className="relative pt-10 md:pb-20 pb-10 text-white">

      <div className="absolute bg-black bg-opacity-60 inset-0"></div>
      <div className="relative z-10 flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 lg:h-block lg:h-full ms:h-hidden px-4 md:px-10">

        <p className="text-white text-lg font-light mb-8">
          {heroData.intro_heading}{" "}
          <span className="text-orange-500 font-semibold">
            {heroData.intro_highlight}
          </span>
        </p>

        <div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white font-syne mb-2 sm:mb-4 md:mb-6">
            <span className="block mb-2">{heroData.title_lines}</span>
            <span className="block mb-2">{heroData.subheading}</span>
            <span className="mil-font-3 mil-accent text-2xl md:text-3xl font-black block md:mb-10 mb-5 mt-4">
              {heroData.description}
            </span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center lg:gap-10 gap-5">
          <Link to = "/contact">
          <button className="lg:w-max md:w-[100%] sm:w-[40%] lg:px-6 px-3 py-3 border-2 cursor-pointer border-orange-500 text-white hover:bg-orange-500 hover:text-white bg-transparent transition-all duration-300 rounded-full">
            {heroData.button_text}
          </button>
          </Link>
          <p className="text-gray-300 max-w-xl">{heroData.paragraph_text}</p>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
