import React, { useEffect, useState } from "react";
import { Bell, Bookmark, Box, Cloud, Settings, Zap } from "lucide-react";
import axios from "axios";

const iconMap = {
  "Cloud": Cloud,
  "Bell": Bell,
  "Box": Box,
  "Settings": Settings,
  "Zap": Zap,
  "Bookmark": Bookmark,
};

const ItServices = () => {
  const [itServices, setItServices] = useState([]);
  const [itSolutions, setItSolutions] = useState([]);

  useEffect(() => {
    fetchItServices();
    fetchItSolutions();
  }, []);

  const fetchItServices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/dynamic/itServices");
      const services = response.data.map((item, index) => ({
        id: String(index + 1).padStart(2, "0"),
        ...item,
        icon: iconMap[item.icon] || Cloud, 
      }));
      setItServices(services);
    } catch (error) {
      console.error("Error fetching IT Services:", error);
    }
  };

  // PUT - Update Service
const updateService = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:5000/dynamic/itServices/${id}`, updatedData);
    console.log("Service updated:", response.data);
    fetchItServices();
  } catch (error) {
    console.error("Error updating IT Service:", error);
  }
};

// DELETE - Remove Service
const deleteService = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/dynamic/itServices/${id}`);
    console.log("Service deleted");
    fetchItServices(); // Refresh list
  } catch (error) {
    console.error("Error deleting IT Service:", error);
  }
};
  const fetchItSolutions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/dynamic/itSolutions");
      const solutions = response.data.map((item, index) => ({
        id: String(index + 1).padStart(2, "0"),
        ...item,
        icon: iconMap[item.icon] || Settings,
      }));
      setItSolutions(solutions);
    } catch (error) {
      console.error("Error fetching IT Solutions:", error);
    }
  };
const updateSolution = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:5000/dynamic/itSolutions/${id}`, updatedData);
    console.log("Solution updated:", response.data);
    fetchItSolutions(); // Refresh list
  } catch (error) {
    console.error("Error updating IT Solution:", error);
  }
};
const deleteSolution = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/dynamic/itSolutions/${id}`);
    console.log("Solution deleted");
    fetchItSolutions(); // Refresh list
  } catch (error) {
    console.error("Error deleting IT Solution:", error);
  }
};

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div
        className="absolute z-50 top-0 right-0 w-32 h-32 opacity-10"
        style={{
          backgroundImage: `url('/ITservices Pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div>
        <div className="text-start mb-16">
          <h2 className="font-size-[42px] sm:text-4xl lg:text-5xl font-semibold text-[#121820] mb-4">
            How We Can <span className="text-orange-500">Help You</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
       
          <ServiceList title="IT Services" data={itServices} />

        
          <ServiceList title="IT Solutions" data={itSolutions} />
        </div>
      </div>
    </section>
  );
};

const ServiceList = ({ title, data }) => (
  <div>
    <div className="flex items-center mb-12">
      <h3 className="text-2xl sm:text-3xl font-600 text-[#121820]">{title}</h3>
    </div>
    <div className="flex items-center my-8">
      <div className="w-4 h-0.5 bg-orange-500"></div>
      <div className="flex-1 h-px bg-gray-800"></div>
      <div className="w-4 h-0.5 bg-orange-500"></div>
    </div>
    <div className="space-y-0">
      {data.map((service, index) => (
        <div key={service.id}>
          <ServiceItem service={service} />
          {index < data.length - 1 && (
            <div className="flex items-center my-8">
              <div className="w-4 h-0.5 bg-orange-500"></div>
              <div className="flex-1 h-px bg-gray-800"></div>
              <div className="w-4 h-0.5 bg-orange-500"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ServiceItem = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="group flex items-start gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-gray-300">
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
          <Icon className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors duration-300" />
        </div>
        <div className="absolute -bottom-0 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 rounded-full"></div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-orange-500 font-semibold text-sm">{service.id}</span>
          <h4 className="text-lg sm:text-xl font-semibold text-[#121820] group-hover:text-orange-500 transition-colors duration-300">
            {service.title}
          </h4>
        </div>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(18, 24, 32, 0.4)" }}>
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ItServices;
