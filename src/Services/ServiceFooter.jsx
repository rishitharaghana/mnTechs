import React, { useState, useEffect } from "react";
import { MapPin, PhoneCall, MailIcon } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";
import MnTechImage from "../assets/images/mntech.png";

const ServiceFooter = () => {
  const [footerData, setFooterData] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    ngrokAxiosInstance
      .get("/serviceFooter")
      .then((res) => setFooterData(res.data[0]))
      .catch((err) =>
        console.error(
          "Error fetching footer:",
          err.response ? err.response.data : err.message
        )
      );
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    try {
      const response = await ngrokAxiosInstance.post("/newsLetter/create", {
        email,
      });
      alert(response.data.message || "Subscription successful");
    } catch (error) {
      console.error(
        "Error subscribing:",
        error.response ? error.response.data : error.message
      );
      if (error.response?.status === 409) {
        alert("This email is already subscribed.");
      } else {
        alert(
          error.response?.data?.error ||
            error.response?.data?.message ||
            "Something went wrong"
        );
      }
    }
  };

  if (!footerData) return null;

  const {
    address,
    phone,
    email: footerEmail,
    socialLinks = {},
    links = [],
    copyright,
    reserved,
    joinHeading,
    joinDescription,
  } = footerData;
  console.log("Footer Data:", footerData);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 items-center grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full md:text-left">
          <h2 className="text-xl md:text-2xl text-center sm:text-left mb-5 sm:mb-0 font-bold text-white">
            ● {joinHeading}
          </h2>
          {/* <p className="text-gray-400 text-sm sm:text-base">
              {joinDescription}
            </p> */}
        </div>
        <div className="flex justify-end">
          <form
            onSubmit={handleSubscribe}
            className="lg:w-[80%] md:w-[100%] w-full sm:gap-0 gap-6 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 h-10 py-2 text-gray-900 m-0 bg-white border border-gray-300 sm:rounded-l-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-gray-500 text-sm"
            />
            <button
              type="submit"
              className="md:w-[200px] sm:w-[220px] w-full py-2 h-10 md:px-3 sm:px-1 px-5 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] hover:bg-[#5a5a5c] sm:rounded-r-lg text-white font-medium text-sm transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="w-full py-12 md:pt-10 pt-0 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between md:gap-10 gap-6 md:text-left">
        <div className="w-full md:w-1/3 md:pl-10">
          <div className="flex items-start justify-center md:justify-start mb-8">
            <a href="/" aria-label="Home">
              <img
                src={MnTechImage}
                alt="MNTECHS Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>
          <div className="flex items-start gap-3 mb-2 justify-center md:justify-start">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <p className="text-base text-gray-400 whitespace-pre-line">
              {address}
            </p>
          </div>
          <div className="flex items-start gap-2 mb-2 justify-start md:justify-start">
            <PhoneCall size={18} />
            <p className="text-base text-gray-400">{phone}</p>
          </div>
          <div className="flex items-start gap-2 justify-start md:justify-start">
            <MailIcon size={18} />
            <a
              href={`mailto:${footerEmail}`}
              className="text-base text-gray-400 hover:text-amber-400 transition"
            >
              {footerEmail}
            </a>
          </div>
        </div>

        {/* Page Links */}
        <div className="w-full md:text-center sm:text-left text-center md:w-1/3 md:pl-10 ">
          <h3 className="text-[#1d80bb] mx-auto sm:mx-0 font-semibold border-b border-gray-500 w-min mb-4">Links</h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.path}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-1/3 md:pl-10 md:p-0 text-center">
          <h3 className="text-[#1d80bb] font-semibold border-b border-gray-500 w-min mx-auto sm:mx-0 mb-4">Social</h3>
          <ul className="space-y-2 sm:text-left text-center">
            {Object.entries(socialLinks).map(([key, value]) => (
              <li key={key}>
                <a
                  href={value}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 pb-8 text-gray-400 text-sm px-4 sm:px-6 lg:px-8 gap-4 text-center">
        <span>
          {copyright}, {reserved}
        </span>
      </div>
    </footer>
  );
};

export default ServiceFooter;
