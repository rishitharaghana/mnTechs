import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-green-600 text-white text-center py-2 px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1"></div>
          <span className="text-sm">envato market</span>
          <div className="flex-1 flex justify-end">
            <button className="bg-green-500 hover:bg-green-400 px-4 py-1 rounded text-sm font-medium">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"></div>
                </div>
                <span className="text-gray-900 text-xl font-bold tracking-wider">ITSULU</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200">
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
              <button className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-orange-500 font-medium">Home</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-20">
        {/* Background Hexagon Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <g stroke="#f97316" strokeWidth="2" fill="none">
              <polygon points="200,50 300,100 300,200 200,250 100,200 100,100" />
              <polygon points="200,70 280,110 280,190 200,230 120,190 120,110" />
              <polygon points="200,90 260,120 260,180 200,210 140,180 140,120" />
              <polygon points="300,100 400,150 400,250 300,300 200,250 200,150" />
              <polygon points="100,100 200,50 300,100 350,200 300,300 200,350 100,300 50,200" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              LET'S DISCUSS YOUR OPPORTUNITY
            </h1>
          </div>

          {/* Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tell Us About Yourself */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <h2 className="text-2xl font-bold text-gray-900">Tell Us About Yourself</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>
              </form>
            </div>

            {/* Support Request */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <h2 className="text-2xl font-bold text-gray-900">Support Request</h2>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">
                  Need help with an existing project or have technical questions? 
                  Our support team is here to assist you.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-orange-500">support@itsulu.com</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-orange-500">+1 (555) 123-4567</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Submit Support Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
