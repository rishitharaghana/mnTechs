import { Search, ChevronDown } from "lucide-react";
import MntechImage from "../assets/mntech.png";
import { Link } from "react-router-dom";
const Navigation = () => {
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
    { name: "Solutions", path: "/solutions" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-20">
        <div className="flex items-center space-x-2">
          <img src={MntechImage} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center transition duration-300"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out min-w-[160px] z-50">
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

        <div className="flex items-center">
          <Search className="h-5 w-5 text-white" />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
