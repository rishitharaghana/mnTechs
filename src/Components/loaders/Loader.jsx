// src/Components/loaders/Loader.jsx
import React from "react";
import logo from "../../assets/images/mntech.png"; // ✅ adjust path if needed

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img
        src={logo}
        alt="Loading Logo"
        className="w-auto h-10 animate-pulse" // Try 'animate-spin' or 'animate-pulse' too!
      />
    </div>
  );
};

export default Loader;

