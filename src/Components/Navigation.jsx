import React, { useEffect, useState,  memo } from "react";
import {  Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import MntechImage from "../assets/images/mntech.png";
import useDropdown from "../Hooks/useDropdown";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const DesktopNavItem = memo(({ item, isScrolledOrWhitePage }) => {
  const { isOpen, setIsOpen, ref } = useDropdown();

  if (!item.submenu || item.submenu.length === 0) {
    return (
      <Link
        to={item.path}
        className={`px-3 py-2 text-md font-medium transition-colors duration-300 ${
          isScrolledOrWhitePage
            ? "text-gray-800 hover:text-orange-500"
            : "text-white hover:text-orange-400"
        }`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.path}
        className={`flex items-center gap-1 px-3 py-2 text-md font-medium transition-colors duration-300 ${
          isScrolledOrWhitePage
            ? "text-gray-800 hover:text-orange-500"
            : "text-white hover:text-orange-400"
        }`}
      >
        {item.name}
        <span className="w-2 h-2 border-2 border-orange-500 rounded-full"></span>
      </Link>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl min-w-max z-50">
          {item.submenu.map((subItem, idx) => (
            <Link
              key={idx}
              to={subItem.path}
              className="block px-5 py-2 text-md font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [navItems, setNavItems] = useState([]);
  const location = useLocation();

  const isWhiteBackgroundPage = [
    "/services", "/contact", "/products", "/about", "/team",
    "/products/ai-agent", "/products/app-development", "/products/billing-system",
    "/products/crm", "/products/education-management", "/products/hospital-management",
    "/products/payroll-management", "/products/e-commerce", "/terms", "/privacy",
    "/careers", "/products/hrms"
  ].includes(location.pathname);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const res = await ngrokAxiosInstance.get('/dynamic/navigation');
       
        setNavItems(res.data);
      } catch (err) {
        console.error("Navigation fetch error:", err);
      }
    };
    fetchNavItems();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 10));
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (itemName) => {
    setActiveSubmenu((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isWhiteBackgroundPage
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={MntechImage} alt="MN Tech Logo" className="h-8 sm:h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <DesktopNavItem
                  key={item._id}
                  item={item}
                  isScrolledOrWhitePage={scrolled || isWhiteBackgroundPage}
                />
              ))}
            </div>
          </div>

        

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-1 bg-white rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      <div className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <img src={MntechImage} alt="MN Tech" className="h-8 sm:h-10" />
            <button onClick={toggleMobileMenu} className="p-2 text-gray-600 hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item._id}>
                {item.submenu && item.submenu.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex justify-between py-2 px-4 text-left font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                    >
                      {item.name}
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    </button>
                    <div className={`pl-4 transition-all ${
                      activeSubmenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      {item.submenu.map((subItem, i) => (
                        <Link
                          key={i}
                          to={subItem.path}
                          className="block py-1 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                          onClick={toggleMobileMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 px-4 text-gray-800 hover:bg-gray-50 hover:text-orange-600 rounded-lg font-medium"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t text-center text-sm text-gray-500">
            © 2025 MN Tech Solutions
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navigation);
