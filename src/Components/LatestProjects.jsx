import { Card, CardContent } from "./Ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Ui/Carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

// Separate Heading Component
const Heading = ({ children }) => (
  <h3 className="text-xl font-bold text-[#121820] mb-2 leading-tight">
    {children}
  </h3>
);

// Separate Paragraph Component
const Paragraph = ({ children }) => (
  <p className="text-[#121820] text-sm leading-relaxed">{children}</p>
);

const LatestProjects = () => {
  const [api, setApi] = useState();
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Easy & Most Powerful Server Platform.",
      author: "Jane Meldrum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Easy & Most Powerful Server Platform.",
      author: "Nguta Ithya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Easy & Most Powerful Server Platform.",
      author: "Roy Bricks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Easy & Most Powerful Server Platform.",
      author: "Sarah Connor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Easy & Most Powerful Server Platform.",
      author: "Alex Johnson",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
  ];

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }
  }, [api]);

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121820]">Latest Projects</h2>
        </div>

        {/* Custom Prev/Next Navigation with Enhanced Styling */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Previous</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:border-orange-500 transition-all duration-300 shadow-sm"
          >
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Next</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Projects Carousel */}
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 sm:pl-4 basis-[85%] sm:basis-[48%] lg:basis-[40%]" // Shows 2.5 items on desktop, 1.2 on mobile
              >
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-0">
                    {/* Project Image with Enhanced Hover Effect */}
                    <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />
                      {/* Overlay effect */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-6">
                      <Heading>{project.title}</Heading>
                      <p className="text-orange-500 font-medium text-sm mb-3">
                        by: {project.author}
                      </p>
                      <Paragraph>{project.description}</Paragraph>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              CurrentIndex === index 
                ? 'bg-orange-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-4">
        <button className="group flex items-center gap-3">
          <span className="font-semibold text-gray-900 text-lg">View All Cases</span>
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group-hover:bg-orange-600">
            <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </button>
        <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full transition-all duration-300 font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LatestProjects;