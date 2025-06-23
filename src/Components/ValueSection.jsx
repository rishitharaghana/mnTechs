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
  return <div className="text-center text-red-500">No values found</div>;
}

const { mainTitle, highlight, suffix, values } = data;


  return (
    <section className="bg-[#f8f8f8] py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#0f1114]">
        {mainTitle} <span className="text-orange-500 font-bold">{highlight}</span> {suffix}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto">
        {values.map((item, index) => (
          <div key={item._id || index} className="flex flex-col items-center px-4">
            <div className="relative w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-black" />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-orange-500 rounded-full"></span>
            </div>
            <h3 className="text-lg font-semibold text-[#0f1114] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
