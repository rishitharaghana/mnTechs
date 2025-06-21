import React, { useState, useEffect } from "react";
import { MapPin, PhoneCall, MailIcon } from "lucide-react";
import axios from "axios";

const ServiceFooter = () => {
  const [footerData, setFooterData] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/dynamic/serviceFooter")
      .then((res) => {
        setFooterData(res.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching footer:", err);
      });
  }, []);

  const saveFooterData = async (data) => {
    try {
      if (!footerData?._id) {
        const res = await axios.post(
          "http://localhost:5000/dynamic/serviceFooter",
          data
        );
        setFooterData(res.data.data);
      } else {
        const res = await axios.put(
          `http://localhost:5000/dynamic/serviceFooter/${footerData._id}`,
          data
        );
        setFooterData(res.data.data);
      }
    } catch (err) {
      console.error("Save footer error:", err);
    }
  };

  // Invisible logic for Delete (admin/dev only)
  const deleteFooter = async () => {
    try {
      if (footerData?._id) {
        await axios.delete(
          `http://localhost:5000/dynamic/serviceFooter/${footerData._id}`
        );
        setFooterData(null);
      }
    } catch (err) {
      console.error("Delete footer error:", err);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  if (!footerData) return null;

  const {
    logoText,
    address,
    phone,
    email: footerEmail,
    socialLinks,
    links,
    copyright,
    reserved,
  } = footerData;

  return (
    <footer className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-left">
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">
            Join The <span className="text-orange-500">{logoText?.part1}</span>{" "}
            {logoText?.part2} Experience
          </h2>
          <p className="text-gray-400 text-sm">
            Duis autem vel eum iriure dolor in hendrerit in vulputate
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="w-full max-w-xl mx-auto">
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-10 py-6 pr-10 bg-white text-gray-900 text-lg font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1 bottom-1 px-20 py-4 bg-orange-500 text-black text-lg font-semibold rounded-full hover:bg-orange-400 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>

      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 flex flex-col md:flex-row md:justify-between md:gap-2 lg:gap-2 items-start">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-blue-800">
              {logoText?.part1}
            </span>
            <span className="text-2xl font-bold text-white">
              {logoText?.part2}
            </span>
          </div>
          <div className="flex flex-row items-start mb-2 gap-3">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <p className="text-base font-normal text-gray-400 whitespace-pre-line">
              {address}
            </p>
          </div>
          <div className="flex flex-row items-start mb-2 gap-2">
            <PhoneCall size={15} />
            <p className="text-base font-normal text-gray-400">{phone}</p>
          </div>
          <div className="flex flex-row items-start gap-2">
            <MailIcon size={20} />
            <a
              href={`mailto:${footerEmail}`}
              className="text-base font-normal text-gray-400 hover:text-amber-400 transition-all duration-300"
            >
              {footerEmail}
            </a>
          </div>
        </div>

        <div className="mb-2">
          <h3 className="text-orange-500 font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            {Object.entries(socialLinks).map(([key, value]) => (
              <li
                key={key}
                className="text-gray-400 hover:text-orange-500 cursor-pointer"
              >
                <a href={value} target="_blank" rel="noopener noreferrer">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li
                key={i}
                className="text-gray-400 hover:text-orange-500 cursor-pointer"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-6 pb-8 text-gray-400 text-sm px-2">
        <span>{copyright}</span>
        <div className="text-sm font-normal text-gray-400">{reserved}</div>
      </div>
    </footer>
  );
};

export default ServiceFooter;
