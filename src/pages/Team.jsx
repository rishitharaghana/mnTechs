import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import BreadCrumb from '../pages/BreadCrumb';
import Navigation from '../Components/Navigation';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';
import ngrokAxiosInstance from '../Hooks/axiosInstance';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      const response = await ngrokAxiosInstance.get('/dynamic/team');
      setTeamMembers(response.data); // Adjust if backend response has a wrapper like { data: [...] }
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

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
            {teamMembers.map((member, index) => {
              const imageUrl = `${ngrokAxiosInstance.defaults.baseURL}/${member.image.replace(/\\/g, '/')}`;
              return (
                <div key={member._id} className="group relative flex flex-col items-center text-center">
                  <div className="relative w-fit">
                    {(index === 0 || index === 3) && (
                      <div className="absolute -left-10 top-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="grid grid-cols-4 gap-1">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    )}
                    {(index === 2 || index === 5) && (
                      <div className="absolute -right-10 top-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="grid grid-cols-4 gap-1">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    )}
                    {index === 0 && (
                      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    )}

                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-gray-200 transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="absolute -bottom-5 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.designation}</p>

                    <div className="flex justify-center space-x-4">
                      {member.facebook_url && (
                        <a href={member.facebook_url} className="text-gray-400 hover:text-blue-600" aria-label="Facebook">
                          <Facebook size={20} />
                        </a>
                      )}
                      {member.instagram_url && (
                        <a href={member.instagram_url} className="text-gray-400 hover:text-pink-600" aria-label="Instagram">
                          <Instagram size={20} />
                        </a>
                      )}
                      {member.linkedin_url && (
                        <a href={member.linkedin_url} className="text-gray-400 hover:text-blue-700" aria-label="LinkedIn">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.youtube_url && (
                        <a href={member.youtube_url} className="text-gray-400 hover:text-red-600" aria-label="YouTube">
                          <Youtube size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default Team;
