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

  const { title, highlight, description, skills, buttonLink, buttonText } =
    data;

  return (
    <section className="md:py-20 py-10 md:px-10 px-4 bg-white">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mb-5">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
                Our Skill
              </p>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title?.split(" ").map((word, idx) =>
                word === highlight ? (
                  <span key={idx} className="text-orange-500">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>
          </div>
          <div className="lg:pl-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6 lg:gap-12">
            {skills.slice(0, 4).map((skill) => (
              <SkillBar key={skill._id || skill.name} skill={skill} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6 lg:gap-12 items-end">
            {skills.slice(4).map((skill) => (
              <SkillBar key={skill._id || skill.name} skill={skill} />
            ))}
            <div className="flex justify-start lg:justify-center items-end pb-2">
              <Link
                to={buttonLink || "/about"}
                className="group flex items-center gap-3"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {buttonText || "More"}
                </span>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
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
    <h3 className="font-semibold text-gray-900 text-lg leading-tight">
      {skill.name}
    </h3>
    <div className="relative">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${skill.percentage}%` }}
        >
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <span className="text-gray-600 font-medium text-sm">
          {skill.percentage}%
        </span>
      </div>
    </div>
  </div>
);

export default SkillsSection;
