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
      social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }
    },
    {
      id: 2,
      name: "Jane Meldrum",
      position: "Designer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }
    },
    {
      id: 3,
      name: "Roy Ellawala",
      position: "App Developer",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }
    },
    {
      id: 5,
      name: "Michael Chen",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "UX Designer",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" }
    }
  ];

  return (
    <div>
      <Navigation />
      <BreadCrumb title="Team" />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-2">
              It is a long established fact that a{" "}
              <span className="text-orange-500 font-semibold">reader will be distracted</span>{" "}
              by the readable content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="group relative flex flex-col items-center text-center">
                <div className="relative w-fit">
                  {/* Left dots */}
                  {(index === 0 || index === 3) && (
                    <div className="absolute -left-10 top-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="grid grid-cols-4 gap-1">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Right dots */}
                  {(index === 2 || index === 5) && (
                    <div className="absolute -right-10 top-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="grid grid-cols-4 gap-1">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Orange accent circle */}
                  {index === 0 && (
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  )}

                  {/* Profile Image */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-gray-200 transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom right small dots */}
                  <div className="absolute -bottom-5 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-4">
                    {member.social.facebook && (
                      <a href={member.social.facebook} className="text-gray-400 hover:text-blue-600 transition-colors duration-200" aria-label="Facebook">
                        <Facebook size={20} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-400 hover:text-pink-600 transition-colors duration-200" aria-label="Instagram">
                        <Instagram size={20} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700 transition-colors duration-200" aria-label="LinkedIn">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.youtube && (
                      <a href={member.social.youtube} className="text-gray-400 hover:text-red-600 transition-colors duration-200" aria-label="YouTube">
                        <Youtube size={20} />
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
