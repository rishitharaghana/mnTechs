import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import map from "../assets/images/map.png";
import Form from "../Components/contact/Form";
import BreadCrumb from "./BreadCrumb";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navigation className="bg-gray-50" />
      <BreadCrumb
        title="Reach US"
        paragraph={`Your journey with MNTechs begins here.
Reach out — the future is just a message away.`}
      />

      <div className="relative py-10 px-4 md:px-20 bg-white">
        <img
          src={map}
          alt="hexagon background"
          className="absolute right-10 top-10 opacity-10 pointer-events-none hidden md:block"
          style={{ height: "150px" }}
        />
        <div className="px-2 pt-10 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mt-8 flex gap-2 text-[#1d80bb] font-medium text-lg">
                <span className="w-2 h-2 bg-[#1d80bb] rounded-full"></span>
                Tell us about Yourself
              </div>
              <Form />
            </div>

            <div className="lg:col-span-1 flex justify-end">
              <div className="w-full max-w-md space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-[#1d80bb] rounded-full"></span>
                    <h6 className="text-lg font-bold text-[#1d80bb]">
                      Support Request
                    </h6>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="text-[#5a5a5c] sm:text-start text-sm mb-4">
                      Our experts are ready to answer your questions.
                    </p>
                    <div className="flex justify-center items-center space-x-2">
                      <h3 className="font-semibold text-sm text-[#1d80bb]">
                        Support Now
                      </h3>
                      <button
                        className="flex items-center justify-center w-10 h-10 ring-1 ring-[#1d80bb] ring-offset-3 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] text-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-100 hover:bg-[#fbaf43] hover:ring-[#1d80bb]"
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
                    <span className="w-2 h-2 bg-[#1d80bb] rounded-full"></span>
                    <h6 className="text-lg font-bold text-[#1d80bb]">
                      Need Help?
                    </h6>
                  </div>
                  <p className="text-[#5a5a5c] mb-4">
                    For technical or billing questions, contact Customer Care.
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-2 h-2 bg-[#1d80bb] rounded-full"></span>
                    <h6 className="text-2xl font-bold text-[#1d80bb]">
                      Need More Info?
                    </h6>
                  </div>
                  <p className="text-[#5a5a5c] mb-4">
                    For additional questions, contact Customer Care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded overflow-hidden my-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.314287335936!2d78.40284611083986!3d17.4338839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d1ad426051%3A0xc47746b09c56c949!2sHasini%20Residency!5e0!3m2!1sen!2sin!4v1758522843799!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MetricsNow Tech Solutions Pvt Ltd"
            ></iframe>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
