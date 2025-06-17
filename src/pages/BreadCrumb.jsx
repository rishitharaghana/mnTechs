

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageBannerImg from '../assets/images/PageBanner.png';
import Navigation from '../Components/Navigation';

const Breadcrumb = ({ title = "Page Title" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const toTitleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');

  return (
    <div className="relative w-full h-120 overflow-hidden!">
      {/* Background Image */}
      <img
        src={PageBannerImg}
        alt="background"
        className="bg-cover bg-no-repeat absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay content */}
      <div className="relative z-10 top-50 px-20">
        {/* Breadcrumb Links */}
        <div className="text-sm text-gray-600 mb-2 sm:mb-4 flex flex-wrap items-center">
          <Link to="/" className="text-black font-medium hover:text-orange-500">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <span key={to} className="flex items-center">
                <span className="mx-2 text-orange-500">●</span>
                {isLast ? (
                  <span className="text-gray-500">{toTitleCase(value)}</span>
                ) : (
                  <Link
                    to={to}
                    className="text-black font-medium hover:text-orange-500"
                  >
                    {toTitleCase(value)}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        {/* Page Title */}
        <h1 className="text-3xl pt-8 px-4 pb-4 sm:text-4xl md:text-5xl font-bold text-black">
          {title}
        </h1>
      </div>
      <Navigation />
    </div>
  );
};

export default React.memo(Breadcrumb);
