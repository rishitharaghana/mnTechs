import React from "react";
import { ArrowRight } from "lucide-react";

const Button1 = ({ text = "Learn More", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-4  ${className}`}
    >
      <span className="text-lg font-medium text-gray-800">{text}</span>
      <div
        className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      >
        <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </button>
  );
};

export default Button1;

