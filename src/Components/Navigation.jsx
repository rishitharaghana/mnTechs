import React, { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MntechImage from "../assets/mntech.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  // Determine if the current page should have a white background
  const isWhiteBackgroundPage =
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/contact") ||
    location.pathname.startsWith("/enterprise");

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    {
      name: "Products",
      path: "/products",
      submenu: [
        { name: "AI Chat Bot", path: "/products/ai-chatbot" },
        { name: "App Development", path: "/products/app-development" },
        { name: "Billing Systems", path: "/products/billing-system" },
        { name: "CRM", path: "/products/crm" },
        { name: "E-Commerce", path: "/products/e-commerce" },
        { name: "Education Management", path: "/products/education-management" },
        { name: "Hospital Management", path: "/products/hospital-management" },
        { name: "HRMS", path: "/products/hrms" },
        { name: "Payroll Management", path: "/products/payroll-management" },
      ],
    },
    { name: "Team", path: "/ourteam" },
    { name: "Reach Us", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and submenu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isScrolledOrWhitePage = scrolled || isWhiteBackgroundPage;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (itemName) => {
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolledOrWhitePage ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src={MntechImage}
                alt="Logo"
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav Items (Hidden on screens ≤ 1279px) */}
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`${
                      isScrolledOrWhitePage ? "text-gray-800" : "text-white"
                    } hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300`}
                  >
                    {item.name}
                    {item.submenu && (
                      <span className="ml-1 w-2 h-2 border-2 border-orange-500 rounded-full inline-block"></span>
                    )}
                  </Link>

                  {/* Desktop Submenu */}
                  {item.submenu && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-lg shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out min-w-[200px] z-50 border border-gray-100">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
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

          {/* Desktop Search Icon (Hidden on screens ≤ 1279px) */}
          <div className="hidden xl:flex items-center">
            <Search
              className={`h-5 w-5 transition-colors duration-300 cursor-pointer hover:text-orange-500 ${
                isScrolledOrWhitePage ? "text-gray-800" : "text-white"
              }`}
            />
          </div>

          {/* Mobile/Tablet Menu Button (Visible on screens ≤ 1279px) */}
          <div className="xl:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolledOrWhitePage
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile/Tablet Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 xl:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img
              src={MntechImage}
              alt="Logo"
              className="h-8 w-auto"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="w-full flex items-center justify-between py-3 px-4 text-left text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <span>{item.name}</span>
                        <div
                          className={`transform transition-transform duration-200 ${
                            activeSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>

                      {/* Mobile Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeSubmenu === item.name
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                              onClick={toggleMobileMenu}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-colors duration-200 font-medium"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
              © 2024 MN Tech Solutions
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;