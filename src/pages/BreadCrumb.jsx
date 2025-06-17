import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageBannerImg from '../assets/images/PageBanner.png';
import Navigation from '../Components/Navigation';

// Navigation text styles for consistency
const navTextStyles = `
  font-family: Sora, sans-serif;
  text-decoration: none;
  font-weight: 400;
  white-space: nowrap;
  transition: color 0.2s cubic-bezier(0, 0, 0.3642, 1);
`;

const Breadcrumb = ({ title = "Page Title" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const toTitleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');

  return (
    <div className="relative w-full h-120 overflow-hidden">
      {/* Background Image */}
      <img
        src={PageBannerImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover bg-no-repeat bg-cover"
        loading="lazy"
      />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 z-5"></div>

      {/* Overlay content */}
      <div className="relative z-10 top-50 px-20">
        {/* Breadcrumb Links */}
        <div className="text-sm text-gray-600 mb-2 sm:mb-4 flex flex-wrap items-center">
          <Link
            to="/"
            className={`${navTextStyles} text-[#121820] hover:text-orange-500`}
          >
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <span key={to} className="flex items-center">
                <span className="mx-2 text-orange-500">●</span>
                {isLast ? (
                  <span className={`${navTextStyles} text-gray-500`}>
                    {toTitleCase(value)}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className={`${navTextStyles} text-[#121820] hover:text-orange-500`}
                  >
                    {toTitleCase(value)}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        {/* Page Title */}
        <h1
          className={`
            text-3xl pt-8 px-4 pb-4 sm:text-4xl md:text-5xl font-bold text-[#121820]
            ${navTextStyles}
          `}
        >
          {title}
        </h1>
      </div>
      <Navigation />
    </div>
  );
};

export default React.memo(Breadcrumb);