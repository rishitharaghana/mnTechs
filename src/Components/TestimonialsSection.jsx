import React, { useState } from "react";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Ui/Button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Tamzyn French",
      position: "Agency Design",
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 2,
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Margaret Williams",
      position: "Agency Design",
      avatar:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 3,
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Tarryn Gillies",
      position: "Agency Design",
      avatar:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 4,
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Tamzyn French",
      position: "Agency Design",
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face",
    },
    {
      id: 5,
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Mark Johnson",
      position: "Creative Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2)
    );
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentSlide, currentSlide + 3);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-orange-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="">
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-orange-500 font-medium mb-4">• Testimonial</p>
            <h2 className="text-5xl font-bold text-gray-900">
              What Our <span className="text-orange-500">Clients</span> Say
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-all duration-300 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                Previous
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-all duration-300 shadow-sm"
            >
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                Next
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={`${testimonial.id}-${currentSlide}`}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-6xl text-gray-300 mb-4 font-serif">"</div>
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
