import {
  Camera,
  Facebook,
  Instagram,
  MailIcon,
  MapPin,
  PhoneCall,
  Youtube,
} from "lucide-react";
import MntechImage from "../assets/mntech.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="pt-16 pb-7 bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
            <a className="">
              <img src={MntechImage} className="h-13 w-45 justify-center" />
            </a>
            <div className="flex items-center gap-4">
              <FaFacebook color="blue" size={30} />
              <FaInstagram color="red" size={30} />
              <FaYoutube color="red" size={30} />
            </div>
          </div>
          <div className="py-14 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
            <div className="w-full max-lg:mx-auto px-10 flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
              <div>
                <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">
                  MNTECHS
                </h6>
                <ul className="flex flex-col max-lg:items-center gap-6">
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">
                  Products
                </h6>
                <ul className="flex flex-col gap-6 max-lg:items-center">
                  <li>
                    <a
                      href=""
                      target="_blank"
                      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Payroll Management
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      target="_blank"
                      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      HRMS
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      CRM
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Books
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      Hospital Management Software
                    </a>
                  </li>
                  <li>
                    <a
                      href=" "
                      target="_blank"
                      className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400"
                    >
                      School and College Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h6 className="text-lg font-medium text-white  max-lg:text-center">
                  Address
                </h6>

                <div className="flex flex-row items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
                    401, 8-3-6-5/1/1/4, Astral Hasini Residency, <br />
                    J.P. Nagar, Yella Reddy Guda, <br /> Hyderabad - 500073,
                    Telangana.
                  </p>
                </div>
                <div className="flex flex-row items-start gap-2">
                  <PhoneCall size={20} />
                  <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
                    +91 9701888071
                  </p>
                </div>
                <div className="flex flex-row items-start gap-2">
                  <MailIcon size={20} />
                  <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
                    support@meetowner.in
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-md max-lg:mx-auto">
              <form action="#" className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="text"
                    id="default-search"
                    className="block w-60 px-4 py-2 text-base font-normal shadow-xs text-gray-600 bg-white border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-normal mx-auto text-center"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="relative-button">
                  <button
                    type="button"
                    id="default-search-subscribe"
                    className="block w-60 px-4 py-2 text-base font-normal shadow-xs text-black bg-orange-500 hover:bg-orange-400  border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-normal mx-auto text-center"
                    placeholder="Subscribe Now"
                    required
                  >
                    Subcribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row items-center justify-between px-10 pt-7">
          <span className="text-sm font-normal text-gray-400">
            <a href=" " className="">
              ©mntechs
            </a>{" "}
            2025.
          </span>

          <div className="flex sm:flex-row items-center  text-gray-400 justify-between px-10 pt-7">
            All Rights Reserved.
          </div>
        </div>
      </section>
    </>
  );
}
