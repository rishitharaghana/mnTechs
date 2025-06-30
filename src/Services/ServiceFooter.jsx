import React, { useState, useEffect } from "react";
import { MapPin, PhoneCall, MailIcon } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";
import MnTechImage from "../assets/images/mntech.png";

const ServiceFooter = () => {
  const [footerData, setFooterData] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    ngrokAxiosInstance
      .get("/dynamic/serviceFooter")
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

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-10">
        {/* Left Info Block */}
        <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
            {joinHeading}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {joinDescription}
          </p>
        </div>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="w-full md:w-1/2 lg:w-2/5 flex flex-col sm:flex-row items-center justify-center md:justify-end"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3 px-6 py-3 bg-orange-500 text-black font-semibold text-sm sm:text-base rounded-full hover:bg-orange-400 transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Middle Info Section */}
      <div className="w-full py-12 md:pt-10 pt-0 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between md:gap-10 gap-6 md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
            <a href="/" aria-label="Home">
              <img
                src={MnTechImage}
                alt="MNTECHS Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>
        {/* Logo and Address */}
        <div className="w-full md:w-1/3 md:pl-10 md:p-0 p-5 border border-gray-500 rounded-md md:border-0 md:rounded-none md:border-transparent">
          
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

        {/* Social Links */}
        <div className="w-full md:w-1/3 md:pl-10 md:p-0 p-5 border border-gray-500 rounded-md md:border-0 md:rounded-none md:border-transparent">
          <h3 className="text-orange-500 font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            {Object.entries(socialLinks).map(([key, value]) => (
              <li key={key}>
                <a
                  href={value}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Page Links */}
        <div className="w-full md:w-1/3 md:pl-10 md:p-0 p-5 border border-gray-500 rounded-md md:border-0 md:rounded-none md:border-transparent">
          <h3 className="text-orange-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.path}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 pb-8 text-gray-400 text-sm px-4 sm:px-6 lg:px-8 gap-4 text-center">
        <span>{copyright}, {reserved}</span>
      </div>
    </footer>
  );
};

export default ServiceFooter;
