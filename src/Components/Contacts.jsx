import { useState } from 'react';
import { Paperclip } from 'lucide-react';
import Navigation from './Navigation';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToUpdates: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
   
    <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="100,20 180,60 180,140 100,180 20,140 20,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon
            points="100,40 160,70 160,130 100,160 40,130 40,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name <span className="text-orange-500">Required</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address <span className="text-orange-500">Required</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone <span className="text-gray-400">Optional</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Paperclip className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400">Attach your file</span>
            <span className="text-xs text-gray-500">Up to 25MB</span>
          </div>

          <div className="text-sm text-gray-400 mb-4">
            We will process your personal information in accordance with our Privacy Policy.
          </div>

          <div className="flex items-start space-x-3 mb-6">
            <input
              type="checkbox"
              name="agreeToUpdates"
              checked={formData.agreeToUpdates}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
            />
            <label className="text-sm text-gray-300">
              I would like to be contacted with news and updates about your{' '}
              <span className="text-orange-500">events and services</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Send Message Now
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contacts;
