import React, { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MntechImage from "../assets/mntech.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isWhiteBackgroundPage =
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/contact") ||
    location.pathname.startsWith("/enterprise");
  const navItems = [
    {
      name: "Enterprise",
      path: "/enterprise",
      submenu: [
        { name: "home", path: "/services/service1" },
        { name: "hom2", path: "/services/service2" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Service1", path: "/services/service1" },
        { name: "Service2", path: "/services/service2" },
      ],
    },

    {
      name: "Products",
      path: "/Products",
      submenu: [
        { name: "AI Chat Bot", path: "/products/ai-chatbot" },
        { name: "App Development", path: "/products/app-development" },
        { name: "Billing Systems", path: "/products/billing-system" },
        { name: "CRM", path: "/products/crm" },
        { name: "E-Commerce", path: "/products/e-commerce" },
        {
          name: "Education Management",
          path: "/products/education-management",
        },
        { name: "Hospital Management", path: "/products/hospital-management" },
        { name: "HRMS", path: "/products/hrms" },
        { name: "Payroll Management", path: "/products/payroll-management" },
      ],
    },

    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolledOrWhitePage = scrolled || isWhiteBackgroundPage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolledOrWhitePage ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={MntechImage}
              alt="Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center transition duration-300"
                >
                  {item.name}
                  {item.submenu && (
                    <span className="ml-1 w-2.5 h-2.5 border-2 border-orange-500 rounded-full inline-block"></span>
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="w-50 absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out min-w-[160px] z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Search Icon */}
        <div className="flex items-center">
          <Search
            className={`h-5 w-5 transition-colors duration-300 ${
              isScrolledOrWhitePage ? "text-black" : "text-white"
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
