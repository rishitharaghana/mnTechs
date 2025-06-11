import React from "react";
import { ArrowRight } from "lucide-react";
const SkillsSection = () => {
  const skills = [
    { name: "Software Development", percentage: 65 },
    { name: "Web Development", percentage: 90 },
    { name: "UX / UI Design", percentage: 50 },
    { name: "App Development", percentage: 95 },
    { name: "Internet of Things", percentage: 60 },
    { name: "Artificial Intelligence", percentage: 90 },
    { name: "Blockchain", percentage: 80 },
  ];
  return (
    <section className="py-20 px-10 bg-white">
      <div className="">
        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
                Our Skill
              </p>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Business <span className="text-orange-500">Success</span> With
              <br />
              Technology
            </h2>
          </div>
          <div className="lg:pl-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here.
            </p>
          </div>
        </div>
        {}
        <div className="space-y-12">
          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="space-y-4">
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
            ))}
          </div>
          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-end">
            {skills.slice(4, 7).map((skill, index) => (
              <div key={index + 4} className="space-y-4">
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
            ))}
            {}
            <div className="flex justify-start lg:justify-center items-end pb-2">
              <button className="group flex items-center gap-3">
                <span className="font-semibold text-gray-900 text-lg">
                  More
                </span>
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
