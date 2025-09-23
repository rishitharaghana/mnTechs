import React, { useEffect, useState, memo } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MntechImage from "../assets/images/mntech.png";
import useDropdown from "../Hooks/useDropdown";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const DesktopNavItem = memo(({ item, isScrolledOrWhitePage }) => {
  const { isOpen, setIsOpen, ref } = useDropdown();
  const location = useLocation();

  const isActive =
    item.path === location.pathname ||
    (item.submenu && item.submenu.some((subItem) => subItem.path === location.pathname));

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.path}
        className={`flex items-center gap-2 px-4 py-2 text-base font-medium transition-colors duration-300 ${
          isActive
            ? "text-[#1d80bb]"
            : isScrolledOrWhitePage
            ? "text-gray-900 hover:text-[#1d80bb]"
            : "text-gray-800 hover:text-[#1d80bb]"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.name}
        {item.submenu && item.submenu.length > 0 && (
          <span className="w-2 h-2 border-2 border-[#1d80bb] rounded-full" aria-hidden="true"></span>
        )}
      </Link>

      {item.submenu && item.submenu.length > 0 && isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          {item.submenu.map((subItem, idx) => (
            <Link
              key={idx}
              to={subItem.path}
              className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                subItem.path === location.pathname
                  ? "text-[#1d80bb] bg-orange[#1d80bb]/10"
                  : "text-gray-700 hover:bg-orange-50 hover:text-[#1d80bb]"
              }`}
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
    "/services",
    "/contact",
    "/products",
    "/about",
    "/team",
    "/products/ai-agent",
    "/products/app-development",
    "/products/billing-system",
    "/products/crm",
    "/products/education-management",
    "/products/hospital-management",
    "/products/payroll-management",
    "/products/e-commerce",
    "/terms",
    "/privacy",
    "/careers",
    "/products/hrms",
  ].includes(location.pathname);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const res = await ngrokAxiosInstance.get("/navigation");
        setNavItems(res.data);
      } catch (err) {
        console.error("Navigation fetch error:", err);
      }
    };
    fetchNavItems();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Update scrolled state based on scroll position
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
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
    <nav
  className={`fixed w-[95%] 2xl:max-w-full xl:max-w-[1536px] mx-auto rounded-lg bg-white shadow-lg z-50 transition-all duration-300 ${
    scrolled || isWhiteBackgroundPage
      ? "top-0 left-0 right-0 w-full bg-white rounded-none shadow-md"
      : "top-5 left-8 right-8"
  }`}
  aria-label="Main navigation"
>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-17 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Home">
          <img src={MntechImage} alt="MN Tech Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex flex-1 justify-end items-center">
          <div className="flex items-center justify-end gap-8">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item._id}
                item={item}
                isScrolledOrWhitePage={scrolled || isWhiteBackgroundPage}
              />
            ))}
          </div>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1d80bb]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/85 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/85 rounded-lg shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <img src={MntechImage} alt="MN Tech Logo" className="h-10" />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item._id}>
                {item.submenu && item.submenu.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`w-full flex justify-between items-center py-2 px-4 text-left text-base font-medium rounded-lg transition-colors duration-200 ${
                        item.path === location.pathname ||
                        item.submenu.some((subItem) => subItem.path === location.pathname)
                          ? "text-[#1d80bb] bg-orange-50"
                          : "text-gray-800 hover:bg-orange-50 hover:text-[#1d80bb]"
                      }`}
                      aria-expanded={activeSubmenu === item.name}
                    >
                      <span>{item.name}</span>
                      {activeSubmenu === item.name ? (
                        <ChevronUp className="h-5 w-5 text-gray-800" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-800" />
                      )}
                    </button>
                    <div
                      className={`pl-4 transition-all duration-300 overflow-hidden ${
                        activeSubmenu === item.name ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((subItem, i) => (
                        <Link
                          key={i}
                          to={subItem.path}
                          className={`block py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
                            subItem.path === location.pathname
                              ? "text-[#1d80bb] bg-orange-50"
                              : "text-gray-700 hover:bg-orange-50 hover:text-[#1d80bb]"
                          }`}
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
                    className={`block py-2 px-4 text-base font-medium rounded-lg transition-colors duration-200 ${
                      item.path === location.pathname
                        ? "text-[#1d80bb] bg-orange-50"
                        : "text-gray-800 hover:bg-orange-50 hover:text-[#1d80bb]"
                    }`}
                    onClick={toggleMobileMenu}
                    aria-current={item.path === location.pathname ? "page" : undefined}
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
    </nav>
  );
};

export default memo(Navigation);