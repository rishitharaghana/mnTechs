import React from "react";
import { Link } from "react-router-dom";
// import map from "../assets/map.png";
import map from "../../assets/map.png";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";



const Terms = () => {
  return (
    <>
      <div className="relative top-20">
          <Navigation/>
        <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
        <div
          className="relative z-10 px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-32"
          style={{
            backgroundImage: `url(${map})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-sm text-gray-600 mb-2 sm:mb-4">
            <Link to="/" className="text-black font-medium hover:text-orange-500">
              Home
            </Link>
            <span className="text-orange-500 mx-1 sm:mx-2">●</span>
            <span className="text-gray-500">Terms & Conditions</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center sm:text-left">
              TERMS & CONDITIONS
            </h1>
            <img
              src="/deco-2.svg"
              alt="Decoration"
              className="w-24 sm:w-32 md:w-40 h-auto transform rotate-90"
            />
          </div>
        </div>
      </div>

    
     
      <Footer/>
    </>
  );
};

export default Terms;
