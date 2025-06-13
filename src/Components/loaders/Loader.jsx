// src/Components/loaders/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-orange-500 text-2xl animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
