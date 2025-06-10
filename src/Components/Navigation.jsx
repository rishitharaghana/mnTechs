import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import MntechImage from '../assets/mntech.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Enterprise' },
    { name: 'Case Studies'},
    { name: 'Services'},
    { name: 'Solutions'},
    
    { name: 'Contact Us' },
    
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-blue-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
           <img src={MntechImage} className='h-13 w-35 justify-center'/>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="text-orange-300 hover:text-white px-2 py-2 text-sm font-medium flex items-center transition-colors duration-200 ">
                    {item.name}
                  </button>
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
