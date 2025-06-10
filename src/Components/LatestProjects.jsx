
import { Card, CardContent } from "./Ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Ui/Carousel";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const LatestProjects = () => {
  const [api, setApi] = useState();

  const projects = [
    {
      id: 1,
      title: "Easy & Most Powerful Server Platform.",
      author: "Jane Meldrum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Easy & Most Powerful Server Platform.",
      author: "Nguta Ithya",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Easy & Most Powerful Server Platform.",
      author: "Roy Bricks",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Easy & Most Powerful Server Platform.",
      author: "Sarah Connor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    }
  ];

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="relative">
          <div className="absolute -top-4 left-0 w-8 h-0.5 bg-orange-500"></div>
          <h2 className="text-4xl font-bold text-[#121820]">Latest Projects</h2>
        </div>
        
        {/* Custom Prev/Next Navigation */}
        <div className="flex items-center gap-4">
          <button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="h-10 w-10 rounded-full border-muted-foreground/30 hover:border-orange-500 hover:text-orange-500"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Next</span>
            <div className="w-6 h-0.5 bg-orange-500"></div>
          </div>
          
          <button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="h-10 w-10 rounded-full border-muted-foreground/30 hover:border-orange-500 hover:text-orange-500"
          >
            <ArrowRight className="h-4 w-4" />
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
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative w-full h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#121820] mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-orange-500 font-medium text-sm mb-3">
                        by: {project.author}
                      </p>
                      <p className="text-[#121820] text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Bottom Action buttons */}
      <div className="flex justify-between items-center mt-12">
        <button 
          variant="outline" 
          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        >
          View All Cases
        </button>
        <button 
          className="bg-orange-500 hover:bg-orange-600 text-white px-8"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LatestProjects;