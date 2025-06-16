import {
  MapPin,
  PhoneCall,
  MailIcon,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import MntechImage from "../assets/mntech.png";

export default function Footer() {
  return (
    <footer className="pt-16 pb-7 bg-gray-900 text-gray-400">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
          <a href="/" aria-label="Home">
            <img src={MntechImage} alt="MNTECHS Logo" className="h-14 w-auto" />
          </a>
          <div className="flex gap-4">
            <FaFacebook size={30} className="text-blue-500 hover:text-white transition" />
            <FaInstagram size={30} className="text-red-500 hover:text-white transition" />
            <FaYoutube size={30} className="text-red-500 hover:text-white transition" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-14 flex flex-col lg:flex-row justify-between gap-12 border-b border-gray-500">
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-3/4">
            {/* MNTECHS Navigation */}
            <div>
              <h6 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">MNTECHS</h6>
              <ul className="space-y-4 text-center sm:text-left">
                {["Services", "Products", "About", "Team", "Careers", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="transition hover:text-amber-400 focus:outline-none focus:text-amber-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product List */}
            <div>
              <h6 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">Products</h6>
              <ul className="space-y-4 text-center sm:text-left">
                {[
                  "Payroll Management",
                  "HRMS",
                  "CRM",
                  "Books",
                  "Hospital Management Software",
                  "School and College Management",
                ].map((product, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-amber-400 focus:outline-none focus:text-amber-400"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            {/* <div className="flex flex-col gap-5">
              <h6 className="text-lg font-semibold text-white text-center sm:text-left">Address</h6>

              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <p className="hover:text-amber-400 transition">
                  401, 8-3-6-5/1/1/4, Astral Hasini Residency,<br />
                  J.P. Nagar, Yella Reddy Guda,<br />
                  Hyderabad - 500073, Telangana.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <PhoneCall className="w-5 h-5 flex-shrink-0" />
                <p>+91 9701888071</p>
              </div>

              <div className="flex items-start gap-2">
                <MailIcon className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:support@meetowner.in"
                  className="hover:text-amber-400 transition"
                >
                  support@meetowner.in
                </a>
              </div>
            </div> */}
            {/* <div className="flex flex-col gap-5">
  <h6 className="text-lg font-semibold text-white text-center sm:text-left">Branch Office</h6>

  <div className="flex items-start gap-2">
    <MapPin className="w-5 h-5 flex-shrink-0" />
    <p className="hover:text-amber-400 transition  ">
      2nd Floor, Some Landmark Building,<br />
      MG Road, Bengaluru - 560001,<br />
      Karnataka, India.
    </p>
  </div>

  <div className="flex items-start gap-2">
    <PhoneCall className="w-5 h-5 flex-shrink-0" />
    <p className="hover:text-amber-400 transition  ">+91 9876543210</p>
  </div>

  <div className="flex items-start gap-2">
    <MailIcon className="w-5 h-5 flex-shrink-0" />
    <a
      href="mailto:branchsupport@example.com"
      className="hover:text-amber-400 transition"
    >
      branchsupport@example.com
    </a>
  </div>
</div> */}
<div className="flex flex-col gap-5">
  <h6 className="text-lg font-semibold text-white text-center sm:text-left">Branch Office</h6>

  <div className="flex items-start gap-2">
    <MapPin className="w-5 h-5 flex-shrink-0" />
    <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400">
      2nd Floor, Some Landmark Building,<br />
      MG Road, Bengaluru - 560001,<br />
      Karnataka, India.
    </p>
  </div>

  <div className="flex items-start gap-2">
    <PhoneCall className="w-5 h-5 flex-shrink-0" />
    <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400">
      +91 9876543210
    </p>
  </div>

  <div className="flex items-start gap-2">
    <MailIcon className="w-5 h-5 flex-shrink-0" />
    <a
      href="mailto:branchsupport@example.com"
      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400"
    >
      branchsupport@example.com
    </a>
  </div>
</div>


          </div>

          {/* Subscribe Section */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 text-center placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-400 transition"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 pt-7 gap-4 text-sm">
          <span>
            <a href="/" className="hover:text-amber-400 transition">© mntechs</a> 2025. All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/terms" className="hover:text-amber-400 transition">Terms & Conditions</a>
            <span className="text-amber-400">|</span>
            <a href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</a>
            <span className="text-amber-400">|</span>
            <a href="/terms" className="hover:text-amber-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
