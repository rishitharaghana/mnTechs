import React, { useState } from 'react';
import { Paperclip } from "lucide-react";
import Navigation from '../Components/Navigation';
import { Link } from "react-router-dom";
import map from "../assets/map.png";
import ContactLocations from '../Components/Contact Us/ContactLocations';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    ProductDesign: '',
    file: null,
    ProjectBudget: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Here, you can add your API call or backend integration.
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col px-12">
      <Navigation />

      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
        <div
          className="relative z-10 px-10 py-32"
          style={{
            backgroundImage: `url(${map})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-sm text-gray-600 mb-4">
            <Link to="/" className="text-black font-medium hover: text-orange">
              Home
            </Link>
            <span className="text-orange-500 mx-2">●</span>
            <span className="text-gray-500">Contact Us</span>
          </div>
          <div className="flex items-center gap-10 md:gap-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              LET'S DISCUSS THIS OPPORTUNITY
            </h1>
            <img
              src="/deco-2.svg"
              alt="Decoration"
              className="w-40 md:w-50 h-auto transform rotate-90"
            />
          </div>
        </div>
      </div>

      <div className="relative py-16 px-6 md:px-20 bg-white">
        <img
          src={map}
          alt="hexagon background"
          className="absolute right-10 top-10 opacity-10 pointer-events-none hidden md:block"
          style={{ height: "150px" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-2xl text-orange-500 font-bold">01</div>
                <h2 className="text-2xl font-bold text-gray-900">Tell Us About Yourself</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Joe"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="John@mydomain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input
                      type="text"
                      name="role"
                      placeholder="Your Role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="text-2xl text-orange-500 font-bold">02</div>
                    <h2 className="text-2xl font-bold text-gray-900">What Can We Help You With</h2>
                  </div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Design</label>
                  <input
                    type="text"
                    name="ProductDesign"
                    placeholder="Web Design"
                    value={formData.ProductDesign}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="text-2xl text-orange-500 font-bold">03</div>
                    <h2 className="text-2xl font-bold text-gray-900">Tell Us About Your Project</h2>
                  </div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 border-b border-gray-300 bg-transparent rounded-lg focus:outline-none text-black resize-none placeholder-gray-400"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <label htmlFor="fileInput" className="flex items-center space-x-2 cursor-pointer">
                    <Paperclip className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-black">Attach your file</span>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {formData.file && (
                    <span className="text-xs text-gray-500">{formData.file.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                  <input
                    type="number"
                    name="ProjectBudget"
                    placeholder="123"
                    value={formData.ProjectBudget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-gray-300 rounded-lg focus:outline-none text-black placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full mt-6 border-2 border-orange-500 hover:shadow-inner-orange transition-all duration-300"
                >
                  Submit Now
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="lg:col-span-1 flex justify-end">
              <div className="w-full max-w-md space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h6 className="text-lg font-bold text-gray-900">Support Request</h6>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="text-gray-600 text-sm mb-4">Our experts are ready to answer your questions.</p>
                    <div className="flex justify-center items-center space-x-2">
                      <h3 className="font-semibold text-sm text-gray-900">Support Now</h3>
                      <button
                        className="flex items-center justify-center w-10 h-10 text-orange-500 text-2xl border border-orange-500 rounded-full hover:translate-x-1 transition-transform"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h6 className="text-lg font-bold text-gray-900">Need Help?</h6>
                  </div>
                  <p className="text-gray-600 mb-4">For technical or billing questions, contact Customer Care.</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h6 className="text-2xl font-bold text-gray-900">Need More Info?</h6>
                  </div>
                  <p className="text-gray-600 mb-4">For additional questions, contact Customer Care.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps iframe */}
          <div className="w-full h-[400px] md:h-[500px] rounded overflow-hidden my-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.188572952851!2d78.45114611487795!3d17.44179378802811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914d2a1e5453%3A0x8bff9bdbb0d5b853!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718120589655!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Hyderabad"
            ></iframe>
          </div>
          <ContactLocations />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
