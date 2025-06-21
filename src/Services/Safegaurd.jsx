import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const Safeguard = () => {
  const [data, setData] = useState({ title: "", subtitle: "", cards: [] });

 
  const fetchSafeguard = async () => {
    try {
      
      const res = await ngrokAxiosInstance.get("http://localhost:5000/dynamic/safeguard");
      const allData = await res.json();
      if (allData.length > 0) {
        setData(allData[0]); 
      }
    } catch (error) {
      console.error("Error fetching safeguard data:", error);
    }
  };

  const postSafeguard = async () => {
    const payload = {
      title: "Safeguard Modern",
      subtitle: "Ready To Take The Next Step?",
      cards: [
        {
          title: "Get a Live Demo",
          description: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor...",
        },
        {
          title: "Start Now",
          description: "In on my jointure horrible margaret suitable he followed speedily...",
        },
      ],
    };

    try {
      const res = await fetch("http://localhost:5000/dynamic/safeguard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log("Safeguard created");
        fetchSafeguard(); 
      }
    } catch (error) {
      console.error("Error posting safeguard:", error);
    }
  };

  const updateSafeguard = async (id) => {
    const updated = {
      title: "Updated Title",
      subtitle: "Updated Subtitle",
      cards: [
        {
          title: "Updated Card 1",
          description: "Updated card 1 description",
        },
        {
          title: "Updated Card 2",
          description: "Updated card 2 description",
        },
      ],
    };

    try {
      const res = await fetch(`http://localhost:5000/dynamic/safeguard/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (res.ok) {
        console.log("Safeguard updated");
        fetchSafeguard();
      }
    } catch (error) {
      console.error("Error updating safeguard:", error);
    }
  };

  const deleteSafeguard = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/dynamic/safeguard/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        console.log("Safeguard deleted");
        fetchSafeguard();
      }
    } catch (error) {
      console.error("Error deleting safeguard:", error);
    }
  };

  useEffect(() => {
    fetchSafeguard();
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-center">
      <p className="text-orange-500 font-medium mb-2">● {data.title}</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-12">{data.subtitle}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {data.cards.map((card, index) => (
          <div
            key={index}
            className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition hover:border-orange-500"
          >
            <h3 className="text-xl text-black font-semibold mb-4">
              {card.title}
            </h3>
            <p className="text-gray-400 mb-8">{card.description}</p>
            <button className="flex items-center gap-2 text-black font-semibold">
              {index === 0 ? "Request a Free Demo" : "Get In Touch"}
              <span className="bg-gray-200 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:translate-x-1">
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
