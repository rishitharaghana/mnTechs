import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const Safeguard = () => {
  const [data, setData] = useState({ title: "", subtitle: "", cards: [] });

  const fetchSafeguard = async () => {
    try {
      const res = await ngrokAxiosInstance.get("/dynamic/safeguard");
      if (Array.isArray(res.data) && res.data.length > 0) {
        setData(res.data[0]);
      }
    } catch (error) {
      console.error("Error fetching safeguard data:", error);
    }
  };

  useEffect(() => {
    fetchSafeguard();
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className=" text-[#1d80bb] text-4xl font-bold mb-2">● {data.title}</h2>
      <p className=" font-medium text-gray-900 mb-12">{data.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {data.cards.map((card, index) => (
          <div
            key={index}
            className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition hover:border-[#1d80bb]"
          >
            <h3 className="text-xl text-black font-semibold mb-4">
              {card.title}
            </h3>
            <p className="text-gray-400 mb-8">{card.description}</p>
            <button className="flex items-center gap-2 text-black font-semibold">
              {index === 0 ? "Request a Free Demo" : "Get In Touch"}
              <span className="ring-1 ring-[#1d80bb] ring-offset-3 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] text-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-100 hover:bg-[#fbaf43] hover:ring-[#1d80bb]">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Safeguard;
