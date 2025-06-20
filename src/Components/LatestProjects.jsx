import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./Ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./Ui/Carousel";

const Heading = ({ children }) => (
  <h3 className="text-xl font-bold text-[#121820] mb-2 leading-tight">
    {children}
  </h3>
);

const Paragraph = ({ children }) => (
  <p className="text-[#121820] text-sm leading-relaxed">{children}</p>
);

const LatestProjects = () => {
  const [api, setApi] = useState();
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const API_URL = "http://localhost:5000/dynamic/latestProject";

  // GET projects
  const fetchProjects = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // POST project (example, not used in UI)
  const createProject = async (project) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      fetchProjects();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  // PUT project (example, not used in UI)
  const updateProject = async (id, updatedData) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      fetchProjects();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  // DELETE project (example, not used in UI)
  const deleteProject = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }
  }, [api]);

  const handlePrevious = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="flex sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121820]">
          Latest Projects
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 md:px-4 px-2 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">Previous</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 md:px-4 px-2 py-2 bg-gray-100 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <span className="hidden sm:inline text-sm">Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, slidesToScroll: 1, dragFree: true, containScroll: "trimSnaps" }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {projects.map((project) => (
            <CarouselItem
              key={project._id}
              className="pl-2 sm:pl-4 basis-[85%] sm:basis-[48%] lg:basis-[40%]"
            >
              <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || "https://via.placeholder.com/400x300?text=No+Image"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <Heading>{project.title}</Heading>
                    <p className="text-orange-500 font-medium text-sm mb-3">by: {project.author}</p>
                    <Paragraph>{project.description}</Paragraph>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between md:items-center items-start mt-12 gap-4">
        <button className="group flex items-center gap-3">
          <span className="font-semibold text-gray-900 text-lg">View All Cases</span>
          <div className="w-8 md:w-10 h-8 md:h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </button>
        <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-50 md:px-8 px-4 py-2 md:py-3 rounded-full transition-all duration-300 font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LatestProjects;
