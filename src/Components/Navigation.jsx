import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import MntechImage from '../assets/mntech.png';

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      name: 'Enterprise',
      path: '/enterprise',
    },
   
    {
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'Service1', path: '/services/service1' },
        { name: 'Service2', path: '/services/service2' },
      ],
    },
    {
      name: 'Solutions',
      path: '/solutions',
    },
    {
      name: 'Contact Us',
      path: '/contact',
    },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-blue-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img src={MntechImage} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="text-orange-300 hover:text-white px-2 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>

                  {/* Dropdown menu */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full bg-white text-black min-w-max shadow-lg rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Search Icon */}
          <div className="flex items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
