import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageBannerImg from "../assets/images/PageBanner.png"; // Default background
import Navigation from "../Components/Navigation";
import Pattern from "../assets/images/deco-2.png";

const navTextStyles = `
  font-family: Verdana, Geneva, sans-serif;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.2s cubic-bezier(0, 0, 0.3642, 1);
`;

const Breadcrumb = ({ title = "Page Title", paragraph, backgroundImage }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const toTitleCase = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  // Determine if the current page is a subpage of products
  const isProductsSubpage = pathnames[0].toLowerCase() === "products" && pathnames.length > 1;

  // Use the provided backgroundImage or fallback to default
  const bannerImage = backgroundImage || PageBannerImg;

  return (
    <div className="relative w-full h-auto pt-5 md:pt-15 pb-35 md:pb-40 overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Background"
        className="absolute inset-0 w-full h-auto object-cover bg-no-repeat bg-cover"
        loading="lazy"
      />

      {/* Decorative Pattern */}
      <div
        className="absolute top-[40%] right-[10%] rotate-[90deg] z-[1] w-60 h-40 bg-no-repeat bg-contain pointer-events-none hidden sm:block"
        style={{ backgroundImage: `url(${Pattern})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/10 to-gray-500/10 z-5"></div>

      {/* Content */}
      <div className="relative z-10 top-25 md:px-10 px-6">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-600 mb-2 sm:mb-4 flex flex-wrap items-center">
          <Link
            to="/"
            className={`${navTextStyles} text-[#121820] hover:text-[#1d80bb]`}
          >
            Home
          </Link>
          {isProductsSubpage ? (
            // For products subpages, show only the main Products link and the page title
            <>
              <span className="mx-2 text-[#1d80bb]">●</span>
              <Link
                to="/products"
                className={`${navTextStyles} text-[#121820] hover:text-[#1d80bb]`}
              >
                Products
              </Link>
              <span className="mx-2 text-[#1d80bb]">●</span>
              <span className={`${navTextStyles} text-[#1d80bb]`}>
                {title}
              </span>
            </>
          ) : (
            // For other pages, show the full breadcrumb trail
            pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <span key={to} className="flex items-center">
                  <span className="mx-2 text-[#1d80bb]">●</span>
                  {isLast ? (
                    <span className={`${navTextStyles} text-[#1d80bb]`}>
                      {toTitleCase(value)}
                    </span>
                  ) : (
                    <Link
                      to={to}
                      className={`${navTextStyles} text-[#121820] hover:text-[#1d80bb]`}
                    >
                      {toTitleCase(value)}
                    </Link>
                  )}
                </span>
              );
            })
          )}
        </div>

        <h1
          className={`text-3xl pt-5 pb-3 sm:text-4xl md:text-5xl text-[#121820] font-bold ${navTextStyles}`}
          style={{ fontFamily: "Verdana, Geneva, sans-serif", fontWeight: 500 }}
        >
          {title}
        </h1>

        {/* Paragraph */}
        {paragraph && (
          <p className="text-sm md:text-md text-gray-600 leading-relaxed pb-4">
            {paragraph.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line.trim()}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      <Navigation />
    </div>
  );
};

export default React.memo(Breadcrumb);