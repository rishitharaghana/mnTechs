import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import Navigation from '../Components/Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  

  return (
    <>
    <Navigation/>
    <div className="min-h-screen w-full bg-gray-50 flex flex-col px-30">
      {/* Navigation */}
       

    
      <div className="bg-white border-b border-gray-200 py-2 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-orange-500 font-medium">Home</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Hexagon Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-10">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-10 pb-10">
          {/* Page Title */}
          <div className="mb-10">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              LET'S DISCUSS YOUR OPPORTUNITY
            </h3>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 w-full">
            {/* Tell Us About Yourself */}
            <div className="w-full">
              <div className="flex items-center space-x-2 mb-6 sm:mb-8">
                <div className="text-2xl text-orange-500 font-bold">01</div>
                <h2 className="text-2xl font-bold text-gray-900">Tell Us About Yourself</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Joe"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="John@mydomain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    placeholder="Your Role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    placeholder="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg mt-6"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Support Request */}
            <div className="w-full">
              <div className="flex items-center space-x-2 mb-6 sm:mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <h4 className="text-2xl font-bold text-gray-900">Support Request</h4>
              </div>

              <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4 sm:mb-6">
                  Our experts are ready to answer your questions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-gray-900 mr-2">Support Now</h3>
                    <button
                      className="flex items-center justify-center w-10 h-10 text-orange-500 text-2xl border border-orange-500 rounded-full hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
    
  );
};

export default Contact;