import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ThinkingSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder slides when backend is empty
  const placeholderSlides = [
    {
      _id: "placeholder-1",
      title: "Coming Soon",
      author: "MNTechs Editorial",
      description: "Exciting insights will appear here shortly.",
      image: "https://via.placeholder.com/600x400?text=Latest+Thinking",
    },
    {
      _id: "placeholder-2",
      title: "Stay Tuned",
      author: "MNTechs Editorial",
      description: "We're preparing thought leadership content.",
      image: "https://via.placeholder.com/600x400?text=Stay+Tuned",
    },
    {
      _id: "placeholder-3",
      title: "Future Update",
      author: "MNTechs Editorial",
      description: "More insights coming your way soon.",
      image: "https://via.placeholder.com/600x400?text=Future+Update",
    },
  ];

  // Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:5000/dynamic/latestThinking")
      .then((res) => res.json())
      .then((data) => {
        const sortedSlides = data.sort((a, b) => a.order - b.order);
        setSlides(sortedSlides);
      })
      .catch((err) => console.error("Error fetching thinking data", err));
  }, []);

  const nextSlide = () => {
    const source = slides.length > 0 ? slides : placeholderSlides;
    setCurrentSlide((prev) => (prev + 1) % source.length);
  };

  const prevSlide = () => {
    const source = slides.length > 0 ? slides : placeholderSlides;
    setCurrentSlide((prev) => (prev - 1 + source.length) % source.length);
  };

  const getVisibleSlides = () => {
    const source = slides.length > 0 ? slides : placeholderSlides;
    const visibleSlides = [];
    const maxVisible = Math.min(3, source.length);

    for (let i = 0; i < maxVisible; i++) {
      const index = (currentSlide + i) % source.length;
      visibleSlides.push({ ...source[index], position: i });
    }

    return visibleSlides;
  };

  return (
    <section className="py-20 px-10 bg-gray-50">
      <div>
        
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-orange-500 font-medium mb-4">• Our Latest News</p>
            <h2 className="text-5xl font-bold text-gray-900">Latest Thinking</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Previous</span>
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
            >
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Next</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-12 gap-6 mb-12">
          {getVisibleSlides().map((slide) => (
            <div
              key={slide._id}
              className={
                slide.position === 0
                  ? "col-span-12 md:col-span-6 lg:col-span-6"
                  : "col-span-12 md:col-span-3 lg:col-span-3"
              }
            >
              <a
                href="#"
                className="block bg-white rounded-lg overflow-hidden shadow-sm h-full"
              >
                {slide.position === 0 || slide.position === 2 ? (
                  <>
                    <div className="aspect-[4/3]">
                      <img
                        src={`http://localhost:5000/${slide.image}`}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={slide.position === 0 ? "p-6" : "p-4"}>
                      <h4
                        className={
                          slide.position === 0
                            ? "text-2xl font-semibold text-gray-900 mb-3"
                            : "text-lg font-semibold text-gray-900 mb-2"
                        }
                      >
                        {slide.title}
                      </h4>
                      <h6 className="text-gray-600 text-sm">
                        by:{" "}
                        <span className="text-orange-500">
                          {slide.author || "Unknown Author"}
                        </span>
                      </h6>
                      <p
                        className={
                          slide.position === 0
                            ? "text-gray-600 mb-4 leading-relaxed"
                            : "text-gray-600 mb-3 text-sm leading-relaxed"
                        }
                      >
                        {slide.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {slide.title}
                      </h4>
                      <h6 className="text-gray-600 text-sm">
                        by:{" "}
                        <span className="text-orange-500">
                          {slide.author || "Unknown Author"}
                        </span>
                      </h6>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                    <div className="aspect-[4/3]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </a>
            </div>
          ))}
        </div>

     
        <div className="flex justify-start">
          <button className="group flex items-center gap-3">
            <span className="font-semibold text-gray-900 text-lg">
              View More Insights
            </span>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;
