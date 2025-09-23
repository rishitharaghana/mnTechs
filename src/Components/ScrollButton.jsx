import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; 

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 cursor-pointer right-6 z-50 ring-1 ring-[#1d80bb] ring-offset-3 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] text-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-[#fbaf43] hover:ring-[#1d80bb]`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollButton;
