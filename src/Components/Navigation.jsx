import React, { useEffect, useState, useCallback, memo } from "react";
import { Search, Menu, X } from "lucide-react"; // Removed ChevronDown
import { Link, useLocation } from "react-router-dom";
import MntechImage from "../assets/images/mntech.png";
import useDropdown from "../Hooks/useDropdown";

// Memoize DesktopNavItem to prevent unnecessary re-renders
// const DesktopNavItem = memo(({ item, isScrolledOrWhitePage }) => {
//   const { isOpen, setIsOpen, ref } = useDropdown();

//   if (!item.submenu) {
//     return (
//       <Link
//         to={item.path}
//         className={`px-3 py-2 text-md font-medium transition-colors duration-300 ${
//           isScrolledOrWhitePage ? "text-gray-800 hover:text-orange-500" : "text-white hover:text-orange-400"
//         }`}
//       >
//         {item.name}
//       </Link>
//     );
//   }

//   return (
//     <div ref={ref} className="relative">
//       <button
//         onClick={() => setIsOpen((prev) => !prev)}
//         className={`flex items-center gap-1 px-3 py-2 text-md font-medium transition-colors duration-300 ${
//           isScrolledOrWhitePage ? "text-gray-800 hover:text-orange-500" : "text-white hover:text-orange-400"
//         }`}
//         aria-expanded={isOpen}
//         aria-haspopup="true"
//       >
//         {item.name}
//         <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {/* Orange dot */}
//       </button>
//       {isOpen && (
//         <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl min-w-max z-50">
//           {item.submenu.map((subItem) => (
//             <Link
//               key={subItem.name}
//               to={subItem.path}
//               className="block px-5 py-2 text-md font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               {subItem.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// });
const DesktopNavItem = memo(({ item, isScrolledOrWhitePage }) => {
  const { isOpen, setIsOpen, ref } = useDropdown();

  if (!item.submenu) {
    return (
      <Link
        to={item.path}
        className={`px-3 py-2 text-md font-medium transition-colors duration-300 ${
          isScrolledOrWhitePage ? "text-gray-800 hover:text-orange-500" : "text-white hover:text-orange-400"
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
      {/* Main link navigates to /products */}
      <Link
        to={item.path}
        className={`flex items-center gap-1 px-3 py-2 text-md font-medium transition-colors duration-300 ${
          isScrolledOrWhitePage ? "text-gray-800 hover:text-orange-500" : "text-white hover:text-orange-400"
        }`}
      >
        {item.name}
        <span className="w-2 h-2 border-2 border-orange-500 rounded-full"></span>


      </Link>

      {/* Dropdown menu on hover */}
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl min-w-max z-50">
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.name}
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
  const location = useLocation();

  // Define white background pages
  const isWhiteBackgroundPage = ["/services", "/contact","/products","/about","/team",
    "/products/ai-agent","/products/app-development","/products/billing-system","/products/crm",
  "/products/education-management", "/products/hospital-management", "/products/payroll-management",
  "/products/e-commerce","/terms",
  "/products/hrms" ].includes(location.pathname);

  // Memoize navItems to prevent recreation on re-renders
  const navItems = useCallback(() => [
    { name: "Services", path: "/services" },
    {
      name: "Products",
      path: "/products", // Changed from "#" to "/products" to enable navigation
      submenu: [
        { name: "AI Agents", path: "/products/ai-agent" },
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
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Reach Us", path: "/contact" },
  ], []);

  // Optimize scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
    setActiveSubmenu(null);
  }, []);

  const toggleSubmenu = useCallback((itemName) => {
    setActiveSubmenu((prev) => (prev === itemName ? null : itemName));
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isWhiteBackgroundPage
            ? "bg-white shadow-md text-gray-800"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={MntechImage} alt="MN Tech Solutions Logo" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              {navItems().map((item) => (
                <DesktopNavItem
                  key={item.name}
                  item={item}
                  isScrolledOrWhitePage={scrolled || isWhiteBackgroundPage}
                />
              ))}
            </div>
          </div>

          {/* Desktop Search Icon */}
          <div className="hidden lg:flex items-center">
            <Search
              className="h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-orange-500"
              aria-label="Search"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md transition-colors duration-300 hover:bg-gray-100"
              aria-label="Toggle mobile menu"
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

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <img src={MntechImage} alt="MN Tech Solutions Logo" className="h-8 sm:h-10 w-auto" />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 sm:py-6 px-4 sm:px-6 space-y-2">
            {navItems().map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex items-center justify-between py-2 sm:py-3 px-4 text-left text-gray-800 hover:bg-gray-50 rounded-lg transition duration-200 font-medium"
                      aria-expanded={activeSubmenu === item.name}
                    >
                      <span>{item.name}</span>
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {/* Orange dot */}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeSubmenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 sm:pl-6 py-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-1 sm:py-2 px-4 text-sm sm:text-md text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                            onClick={toggleMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 sm:py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition duration-200 font-medium"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 MN Tech Solutions
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navigation);