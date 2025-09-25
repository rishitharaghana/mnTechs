import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ngrokAxiosInstance from "../Hooks/axiosInstance";

const SkillsSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await ngrokAxiosInstance.get("/dynamic/ourSkills");

      setData(res.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  if (!data) return null;

  const { title, highlight, skills, buttonLink, buttonText } =
    data;

  return (
    <section className="md:py-8 py-7 md:px-10 px-4 bg-white">
      <div className="max-w-[1536px] w-full mx-auto">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-16 items-start mb-5">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#1d80bb] rounded-full"></div>
              <p className="text-[#1d80bb] font-semibold tracking-wide uppercase text-sm">
                Our Skill
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-snug">
              {title?.split(" ").map((word, idx) =>
                word === highlight ? (
                  <span key={idx} className="text-[#1d80bb]">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>
          </div>
          {/* <div className="lg:pl-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div> */}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12 md:pt-7 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-6 lg:gap-12 sm:mb-4 mb-8">
            {skills.slice(0, 8).map((skill) => (
              <SkillBar key={skill._id || skill.name} skill={skill} />
            ))}
          </div>
          <div className="flex justify-end pb-2">
            <Link
              to={buttonLink || "/about"}
              className="group flex items-center gap-3"
            >
              <span className="font-semibold text-gray-900 sm:text-lg text-md">
                {buttonText && "More Skills"}
              </span>
              <div className="sm:w-8 sm:h-8 w-7 h-7 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-[orange-600] ring-1 ring-[#1d80bb] ring-offset-3">
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill }) => (
  <div className="space-y-4">
    <h3 className="font-semibold text-gray-900 text-md md:text-lg mb-2 leading-tight">
      {skill.name}
    </h3>
    <div className="relative">
      <div className="sm:w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] rounded-full border border-[#1d80bb] transition-all duration-1000 ease-out relative"
          style={{ width: `${skill.percentage}%` }}
        >
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#1d80bb] to-[#fff] rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </div>
      {/* <div className="w-[20%] flex justify-end mt-2">
        <span className="text-gray-600 font-medium text-sm">
          {skill.percentage}%
        </span>
      </div> */}
    </div>
  </div>
);

export default SkillsSection;
