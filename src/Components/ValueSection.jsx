import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const ValuesSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchValues();
  }, []);

  const fetchValues = async () => {
    try {
      const res = await ngrokAxiosInstance.get("/dynamic/value");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching values:", error);
    }
  };

  if (!data || !data.values) {
    console.warn("ValuesSection: Invalid or empty data from backend", data);
    return (
      <div className="text-center text-[#5a5a5c] text-lg font-medium py-16">
        No values found
      </div>
    );
  }

  const { mainTitle, highlight, suffix, values } = data;

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1114] mb-12 leading-tight">
        ● {mainTitle}{" "}
        <span className="text-[#1d80bb] font-bold">{highlight}</span> {suffix}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((item, index) => (
          <div
            key={item._id || index}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative w-16 h-16 bg-gradient-to-br from-[#1d80bb] to-[#5a5a5c] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#1d80bb] rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-lg font-semibold text-[#0f1114] mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[#5a5a5c] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;