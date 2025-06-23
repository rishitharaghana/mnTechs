import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import BreadCrumb from '../pages/BreadCrumb';
import Navigation from '../Components/Navigation';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Andrew Kazantzis",
      position: "CEO ITSulu",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Jane Meldrum",
      position: "Designer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      name: "Roy Ellawala",
      position: "App Developer",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 5,
      name: "Michael Chen",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "UX Designer",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BreadCrumb
        title="Team"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="md:text-3xl text-1xl leading-tight text-gray-600 mb-2">
              It is a long established fact that a{" "}
              <span className="text-orange-500 leading-tight font-semibold">Reader will be<br></br> distracted</span>{" "}
              by the readable content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative flex flex-col items-center text-center">
                <div className="relative w-fit">
                  {/* Profile Image with gray overlay */}
                  <div className="md:w-48 md:h-48 w-full h:full sm:w-56 sm:h-56 lg:w-64 lg:h-64 md:rounded-full rounded-md overflow-hidden bg-gray-200 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    
                    {/* Black gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover overlay with decorative elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      {/* Left side dots */}
                      <div className="absolute left-4 top-8 grid grid-cols-4 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1 h-1 bg-white/90 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      
                      {/* Right side dots */}
                      <div className="absolute right-4 top-12 grid grid-cols-4 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1 h-1 bg-white/90 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 80}ms` }}
                          />
                        ))}
                      </div>
                      
                      {/* Bottom accent dots */}
                      <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 150}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Orange accent circle - positioned outside image */}
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                </div>

                {/* Text Info */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {member.position}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="text-gray-400 hover:text-blue-600 transition-all duration-200 transform hover:scale-125"
                        aria-label="Facebook"
                      >
                        <Facebook size={22} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="text-gray-400 hover:text-pink-600 transition-all duration-200 transform hover:scale-125"
                        aria-label="Instagram"
                      >
                        <Instagram size={22} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-700 transition-all duration-200 transform hover:scale-125"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.social.youtube && (
                      <a
                        href={member.social.youtube}
                        className="text-gray-400 hover:text-red-600 transition-all duration-200 transform hover:scale-125"
                        aria-label="YouTube"
                      >
                        <Youtube size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default Team;