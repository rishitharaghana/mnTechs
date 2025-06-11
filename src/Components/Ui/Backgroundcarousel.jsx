// src/components/SlickBackgroundCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/Images/1.jpg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";

const BackgroundCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    fade: true,
    cssEase: "ease-in-out",
  };

  const images = [img1, img2, img3];

  return (
    <div className="absolute inset-0 z-0">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt="" className="w-full h-screen object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;
