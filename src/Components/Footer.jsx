import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, SquarePlay, MapPin, Phone, Mail } from 'lucide-react';
import MnTechImage from '../assets/images/mntech.png';

const productLinks = [
  { label: 'AI Agents', path: '/products/ai-agent' },
  { label: 'App Development', path: '/products/app-development' },
  { label: 'Billing Systems', path: '/products/billing-system' },
  { label: 'CRM', path: '/products/crm' },
  { label: 'E-Commerce', path: '/products/e-commerce' },
  { label: 'Education Management', path: '/products/education-management' },
  { label: 'Hospital Management', path: '/products/hospital-management' },
  { label: 'HRMS', path: '/products/hrms' },
  { label: 'Payroll Management', path: '/products/payroll-management' },
];

// Social media links array for easy editing
const socialLinks = [
  {
    href: 'https://facebook.com',
    Icon: Facebook,
    hoverColor: 'hover:text-[#1877F2]',
    label: 'Facebook',
  },
  {
    href: 'https://instagram.com',
    Icon: Instagram,
    hoverColor: 'hover:text-[#E1306C]',
    label: 'Instagram',
  },
  {
    href: 'https://youtube.com',
    Icon: SquarePlay,
    hoverColor: 'hover:text-[#FF0000]',
    label: 'YouTube',
  },
];

const Footer = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
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
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  return (
    <footer className="pb-7 bg-gray-900 text-gray-400">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Media */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
          <a href="/" aria-label="Home">
            <img src={MnTechImage} alt="MNTECHS Logo" className="h-14 w-auto" />
          </a>
          <div className="flex gap-4">
            {socialLinks.map(({ href, Icon, hoverColor, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                className="flex items-center"
              >
                <Icon
                  size={24}
                  className={`text-white ${hoverColor} transition-colors duration-300`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Content - 4x4 Card Layout for md and above */}
        <div className="py-14 grid grid-cols-1 gap-8 md:grid-cols-4 border-b border-gray-500">
          {/* MNTECHS Links Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h6 className="text-lg font-semibold text-white mb-6 text-center md:text-left">MNTECHS</h6>
            <ul className="space-y-4 text-center md:text-left">
              {['Services', 'Products', 'About', 'Team', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="transition hover:text-amber-400 focus:outline-none focus:text-amber-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h6 className="text-lg font-semibold text-white mb-6 text-center md:text-left">Products</h6>
            <ul className="space-y-4 text-center md:text-left">
              {productLinks.map((product) => (
                <li key={product.label}>
                  <Link
                    to={product.path}
                    className="transition hover:text-amber-400 focus:outline-none focus:text-amber-400"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Office Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h6 className="text-lg font-semibold text-white mb-6 text-center md:text-left">Branch Office</h6>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="text-white flex-shrink-0" />
                <p className="text-base font-normal text-gray-400 transition-all duration-300 hover:text-amber-400">
                  2nd Floor, Some Landmark Building,
                  <br />
                  MG Road, Bengaluru - 560001,
                  <br />
                  Karnataka, India.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={20} className="text-white flex-shrink-0" />
                <p className="text-base font-normal text-gray-400 transition-all duration-300 hover:text-amber-400">
                  +91 9876543210
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={20} className="text-white flex-shrink-0" />
                <a
                  href="mailto:branchsupport@example.com"
                  className="text-base font-normal text-gray-400 transition-all duration-300 hover:text-amber-400"
                >
                  branchsupport@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Subscribe Form Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h6 className="text-lg font-semibold text-white mb-6 text-center md:text-left">Subscribe</h6>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <label htmlFor="default-search" className="sr-only">
                Your email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="default-search"
                  className="block w-full px-6 py-2 text-base font-normal text-gray-600 bg-white border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 text-base font-normal text-black bg-orange-500 hover:bg-orange-400 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 pt-7 gap-4 text-sm">
          <span>
            <a href="/" className="hover:text-amber-400 transition">
              © mntechs
            </a>{' '}
            2025. All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/terms" className="hover:text-amber-400 transition">
              Terms & Conditions
            </a>
            <span className="text-amber-400">|</span>
            <a href="/privacy" className="hover:text-amber-400 transition">
              Privacy Policy
            </a>
            <span className="text-amber-400">|</span>
            <a href="/terms" className="hover:text-amber-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;