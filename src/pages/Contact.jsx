import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import map from "../assets/map.png";
import Form from "../Components/contact/Form"; // Adjust path if your Form.jsx is elsewhere

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <Navigation />
      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
        <div
          className="relative z-10 flex flex-col items-center py-20 px-4 text-center"
          style={{
            backgroundImage: `url(${map})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-sm text-gray-600 mb-4">
            <Link to="/" className="text-black font-medium hover:text-orange-500">
              Home
            </Link>
            <span className="text-orange-500 mx-2">●</span>
            <span className="text-gray-500">Reach Us</span>
          </div>
          <div className="flex items-center gap-4 md:gap-10">
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
        <div className="px-10 pt-10 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FORM SECTION */}
            <div className="lg:col-span-2">
            <div className="mt-8 flex  gap-2 text-black font-medium text-lg">
        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
        Tell us about Yourself
      </div>
              <Form />
            </div>

            {/* CONTACT INFO SECTION */}
            <div className="lg:col-span-1 flex justify-end">
              <div className="w-full max-w-md space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h6 className="text-lg font-bold text-gray-900">
                      Support Request
                    </h6>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="text-gray-600 text-sm mb-4">
                      Our experts are ready to answer your questions.
                    </p>
                    <div className="flex justify-center items-center space-x-2">
                      <h3 className="font-semibold text-sm text-gray-900">
                        Support Now
                      </h3>
                      <button
                        className="flex items-center justify-center w-10 h-10 text-orange-500 text-2xl border border-orange-500 rounded-full hover:translate-x-1 transition-transform"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h6 className="text-lg font-bold text-gray-900">
                      Need Help?
                    </h6>
                  </div>
                  <p className="text-gray-600 mb-4">
                    For technical or billing questions, contact Customer Care.
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <h6 className="text-2xl font-bold text-gray-900">
                      Need More Info?
                    </h6>
                  </div>
                  <p className="text-gray-600 mb-4">
                    For additional questions, contact Customer Care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
