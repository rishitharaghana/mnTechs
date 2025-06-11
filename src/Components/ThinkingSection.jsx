import React, { useState } from 'react';
import { Button } from './Ui/Button'
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

// Move slides array outside component to avoid redeclaring on each render
const slides = [
  {
    id: 1,
    image: 'src/assets/images/Thinking sec images1.jpg',
    title: 'Easy & Most Powerful Server Platform.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Meldrum',
  },
  {
    id: 2,
    image: 'src/assets/images/Thinking sec images2.jpg',
    title: 'Easy & Most Powerful Server Platform.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Meldrum',
  },
  {
    id: 3,
    image: 'src/assets/images/Thinking sec images3.jpg',
    title: 'Easy & Most Powerful Server Platform.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Meldrum',
  },
  {
    id: 4,
    image: 'src/assets/images/Thinking sec images4.jpg',
    title: 'Easy & Most Powerful Server Platform.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Meldrum',
  },
  {
    id: 5,
    image: 'src/assets/images/Thinking sec images5.jpg',
    title: 'Easy & Most Powerful Server Platform.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jane Meldrum',
  },
];

const ThinkingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % slides.length;
      visibleSlides.push({ ...slides[index], position: i });
    }
    return visibleSlides;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-orange-500 font-medium mb-4">• Our Latest News</p>
            <h2 className="text-5xl font-bold text-gray-900">Latest Thinking</h2>
          </div>

          <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Previous</span>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-all duration-300 shadow-sm"
          >
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Next</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
        </div>

        {/* Carousel Grid Layout */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {getVisibleSlides().map((slide) => (
            <div
              key={slide.id}
              className={
                slide.position === 0
                  ? 'col-span-12 md:col-span-6 lg:col-span-6'
                  : 'col-span-12 md:col-span-3 lg:col-span-3'
              }
            >
              <a href="publication.html" className="block bg-white rounded-lg overflow-hidden shadow-sm h-full">
                {/* Image or Description based on position */}
                {slide.position === 0 || slide.position === 2 ? (
                  <>
                    <div className="aspect-[4/3]">
                      <img
                        src={slide.image}
                        alt={`Image for ${slide.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={slide.position === 0 ? 'p-6' : 'p-4'}>
                      <div className="mil-card-title">
                        <h4 className={slide.position === 0 ? 'text-2xl font-semibold text-gray-900 mb-3' : 'text-lg font-semibold text-gray-900 mb-2'}>
                          {slide.title}
                        </h4>
                        <h6 className={slide.position === 0 ? 'text-gray-600' : 'text-gray-600 text-sm'}>
                          by: <span className="text-orange-500">{slide.author}</span>
                        </h6>
                      </div>
                      <div className="mil-card-text">
                        <p
                          className={
                            slide.position === 0
                              ? 'text-gray-600 mb-4 leading-relaxed'
                              : 'text-gray-600 mb-3 text-sm leading-relaxed'
                          }
                        >
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4">
                      <div className="mil-card-title">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {slide.title}
                        </h4>
                        <h6 className="text-gray-600 text-sm">
                          by: <span className="text-orange-500">{slide.author}</span>
                        </h6>
                      </div>
                      <div className="mil-card-text">
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                    <div className="aspect-[4/3]">
                      <img
                        src={slide.image}
                        alt={`Image for ${slide.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-start">
          <button className="group flex items-center gap-3">
            <span className="font-semibold text-gray-900 text-lg">View More Insights</span>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
        </button>
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;