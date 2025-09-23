import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  PhoneCall,
  MailIcon,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import MnTechImage from "../assets/images/mntech.png";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    ngrokAxiosInstance
      .get("/footer")
      .then((res) => setFooterData(res.data[0]))
      .catch((err) =>
        console.error(
          "Error loading footer data:",
          err.response ? err.response.data : err.message
        )
      );
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("default-search");
    const email = emailInput.value;

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
    } finally {
      emailInput.value = "";
    }
  };

  if (!footerData) return null;

  const {
    socialLinks,
    menuLinks,
    productLinks,
    branch,
    copyright,
    policyLinks,
    sectionTitles,
  } = footerData;

  const splitAddress = branch?.address?.split("\n") || [];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 pb-8 mb-8 gap-6">
          <a href="/" aria-label="Home" className="flex items-center">
            <img src={MnTechImage} alt="MNTECHS Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Middle Section: Links and Newsletter */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-5">
          {/* Menu Links */}
          <div>
            <h6 className="text-lg font-semibold border-b border-[#1d80bb] w-max text-white mb-4">
              {sectionTitles?.menuTitle || "Menu"}
            </h6>
            <ul className="space-y-3">
              {menuLinks?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h6 className="text-lg font-semibold text-white border-b border-[#1d80bb] w-max mb-4">
              {sectionTitles?.productTitle || "Products"}
            </h6>
            <ul className="space-y-3">
              {productLinks?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Info */}
          <div>
            <h6 className="text-lg font-semibold text-white border-b border-[#1d80bb] w-max mb-4">
              {sectionTitles?.branchTitle || "Contact Us"}
            </h6>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-300" />
                <p className="text-sm text-gray-300">
                  {splitAddress.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-gray-300" />
                <a
                  href={`tel:${branch?.phone}`}
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {branch?.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-gray-300" />
                <a
                  href={`mailto:${branch?.email}`}
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {branch?.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-bottom justify-between border-b border-gray-700 pb-5 mb-5">
          {/* Newsletter */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h6 className="text-lg font-semibold text-white mb-3">
              Newsletter
            </h6>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
            >
              <input
                type="email"
                id="default-search"
                className="w-full sm:w-70 md:w-100 px-4 h-10 py-2 sm:mb-0 mb-4 text-gray-900 m-0 bg-white border border-gray-300 sm:rounded-l-lg rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-gray-500 text-sm"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="text-white w-full sm:w-auto py-2 h-10 px-5 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] hover:bg-[#5a5a5c] border-l-2 border-l-black rounded-lg sm:rounded-r-lg font-medium text-sm transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start items-end-safe gap-4">
            {socialLinks?.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook
                  className="text-gray-300 hover:text-blue-400"
                  size={24}
                />
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram
                  className="text-gray-300 hover:text-pink-400"
                  size={24}
                />
              </a>
            )}
            {socialLinks?.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube
                  className="text-gray-300 hover:text-red-400"
                  size={24}
                />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Section: Copyright and Policy Links */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-sm">
          <span className="text-center sm:text-start">
            <a
              href="/"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              {copyright}
            </a>
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {policyLinks?.map((item, idx) => (
              <React.Fragment key={idx}>
                <a
                  href={item.path}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
                {idx < policyLinks.length - 1 && (
                  <span className="text-gray-500">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
