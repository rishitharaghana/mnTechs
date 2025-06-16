import React from 'react';
import { MapPin, PhoneCall, MailIcon, Facebook, Instagram, Youtube } from 'lucide-react';
import MnTechImage from '../assets/images/mntech.png'; // Adjust the path as necessary

const Footer = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = document.getElementById('default-search').value;

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/newsLetter/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

    const data = await res.json();
    if (res.ok) {
      alert(data.message); // "Subscribed successfully"
    } else {
      alert(data.message); // "Already subscribed" or validation errors
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
    console.error(error);
  }
};

  return (
    <footer className="pt-16 pb-7 bg-gray-900 text-gray-400">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
          <a href="/" aria-label="Home">
            <img src={MntechImage} alt="MNTECHS Logo" className="h-14 w-auto" />
          </a>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={30} className="text-blue-500 hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={30} className="text-red-500 hover:text-white transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube size={30} className="text-red-500 hover:text-white transition" />
            </a>
          </div>
        </div>

       
        <div className="py-14 flex flex-col lg:flex-row justify-between gap-12 border-b border-gray-500">
       
          <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-3/4">
      
            <div>
              <h6 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">MNTECHS</h6>
              <ul className="space-y-4 text-center sm:text-left">
                {['Services', 'Products', 'About', 'Team', 'Careers', 'Contact'].map((item, index) => (
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

        
            <div>
              <h6 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">Products</h6>
              <ul className="space-y-4 text-center sm:text-left">
                {[
                  'Payroll Management',
                  'HRMS',
                  'CRM',
                  'Books',
                  'Hospital Management Software',
                  'School and College Management',
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
            <div className="flex flex-col gap-5">
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
            </div>

            {/* Branch Office */}
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

          {/* Subscription Form */}
          <div className="w-full lg:max-w-md max-lg:mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <label htmlFor="default-search" className="sr-only">
                Your email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="default-search"
                  className="block w-full px-4 py-2 text-base font-normal text-gray-600 bg-white border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-normal text-black bg-orange-500 hover:bg-orange-400 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
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
};

export default Footer;