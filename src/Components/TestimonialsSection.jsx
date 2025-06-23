import React, { useState, useEffect } from "react";

import { ArrowRight, ArrowLeft } from "lucide-react";
import ngrokAxiosInstance from "../Hooks/axiosInstance";

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
 
        const response = await ngrokAxiosInstance.get("/dynamic/review");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const nextSlide = () => {
    if (reviews.length <= 3) return;
    setCurrentSlide((prev) => (prev + 1) % (reviews.length - 2));
  };

  const prevSlide = () => {
    if (reviews.length <= 3) return;
    setCurrentSlide((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2));
  };

  const getVisibleReviews = () => {
    return reviews.slice(currentSlide, currentSlide + 3);
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
    <section className="md:py-20 py-10 md:px-10 px-4 bg-gray-50">
      <div>
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-orange-500 font-medium mb-4">• Testimonial</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mt-6 mb-10">
              What Our <span className="text-orange-500">Clients</span> Say
            </h2>
          </div>

          <div className="flex items-center gap-4 hidden">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 md:px-4 px-2 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                Previous
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 md:px-4 px-2 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm"
            >
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                Next
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No testimonials yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-6xl text-gray-300 mb-4 font-serif">"</div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {review.comments}
                </p>
                <div className="flex items-center">
                  {review.avatar?.startsWith("http") ? (
                    <img
                      src={review.avatar}
                      alt={review.user_name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full mr-4 bg-orange-500 text-white flex items-center justify-center text-xl font-semibold">
                      {review.user_name?.[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.user_name}
                    </h4>
                    <p className="text-gray-500 text-sm">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
