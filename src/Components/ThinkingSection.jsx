import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-200"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-gray-400 text-sm">Prev</span>
            <span className="text-gray-900 font-medium text-sm">Next</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-200"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
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
          <Button
            variant="default"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
          >
            View More Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;