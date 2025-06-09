
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Enterprise', hasDropdown: true },
    { name: 'Case Studies', hasDropdown: false },
    { name: 'Services', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Blog', hasDropdown: false },
    { name: 'Contact Us', hasDropdown: false },
    { name: 'Other', hasDropdown: true },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
              </div>
              <span className="text-white text-xl font-bold tracking-wider">ITSULU</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200">
                    {item.name}
                    {item.hasDropdown && (
                      <>
                        <ChevronDown className="ml-1 h-4 w-4" />
                        <span className="ml-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Search Icon */}
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