import { useState } from "react";
import { Paperclip } from "lucide-react";
import Navigation from "./Navigation";
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToUpdates: false,
    file: null,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file,
      }));
      console.log("Selected file:", file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };
  return (
    <>
      <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <img
            src="/deco-2.svg"
            alt="Decoration"
            className="w-40 md:w-50 h-auto transform "
          />
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <div className="text-left mb-12">
            <h2 className="text-6xl font-bold  text-white">
              Contact <span className="text-orange-500">Us</span>
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-small mb-2">
                  Name <span className="text-orange-500 text-sm">Required</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none text-white "
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-small mb-2">
                  Email Address{" "}
                  <span className="text-orange-500">Required</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none text-white "
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-small mb-2">
                  Phone <span className="text-gray-400">Optional</span>
                </label>
                <input
                  type="num"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none text-white "
                />
              </div>
              <div className="flex items-center space-x-3">
                <label
                  htmlFor="fileInput"
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <Paperclip className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400">
                    Attach your file
                    <br />
                    Up to 25MB
                  </span>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {formData.file && (
                  <span className="text-xs text-gray-300">
                    {formData.file.name}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-small mb-2">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none text-white"
                  required
                />
              </div>
              <div className="space-y-4">
                <div className="text-xs  text-gray-400">
                  We will process your personal information in accordance with
                  our Privacy Policy.
                </div>
                <div className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToUpdates"
                    checked={formData.agreeToUpdates}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <label className="text-xs text-gray-300 ">
                    I would like to be contacted with news and updates about
                    your{" "}
                    <span className="text-orange-500">events and services</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 text-black font-semibold py-4 px-8 rounded-full transition-colors duration-200 text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Send Message Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
