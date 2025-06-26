import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import BreadCrumb from '../pages/BreadCrumb';
import Navigation from '../Components/Navigation';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';
import ngrokAxiosInstance from '../Hooks/axiosInstance';

const Team = () => {
  const [teamInfo, setTeamInfo] = useState({
    title: 'Our Team',
    description: 'Meet the dedicated professionals driving our success.',
    members: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const res = await ngrokAxiosInstance.get('/dynamic/team');
        setTeamInfo({
          title: 'Our Team',
          description: 'Accelerate Innovation with Our Skilled Team.',
          members: res.data.map(member => ({
            ...member,
            image: member.image.replace(/\\/g, '/'),
          })),
        });
      } catch (error) {
        console.error("Error fetching team members:", {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });
        setError('Failed to load team data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BreadCrumb title="Team" />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{teamInfo.title}</h2>
            <p className="text-lg text-gray-600">
              {teamInfo.description.includes("reader will be distracted") ? (
                <>
                  {teamInfo.description.split("reader will be distracted")[0]}
                  <span className="text-orange-500 font-semibold">reader will be distracted</span>
                  {teamInfo.description.split("reader will be distracted")[1]}
                </>
              ) : (
                teamInfo.description
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teamInfo.members.map((member) => (
              <div key={member._id} className="group relative flex flex-col items-center text-center">
                <div className="relative w-fit">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gray-200 relative">
                    <img
                      src={`${ngrokAxiosInstance.defaults.baseURL.replace(/\/$/, "")}/${member.image.replace(/^\/+/, "").replace(/\\/g, "/")}`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <div className="absolute left-4 top-8 grid grid-cols-4 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                      <div className="absolute right-4 top-12 grid grid-cols-4 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
                        ))}
                      </div>
                      <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {member.designation}
                  </p>

                  <div className="flex justify-center space-x-4">
                    {member.facebook_url && (
                      <a href={member.facebook_url} className="text-gray-400 hover:text-blue-600" aria-label="Facebook">
                        <Facebook size={22} />
                      </a>
                    )}
                    {member.instagram_url && (
                      <a href={member.instagram_url} className="text-gray-400 hover:text-pink-600" aria-label="Instagram">
                        <Instagram size={22} />
                      </a>
                    )}
                    {member.linkedin_url && (
                      <a href={member.linkedin_url} className="text-gray-400 hover:text-blue-700" aria-label="LinkedIn">
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.youtube_url && (
                      <a href={member.youtube_url} className="text-gray-400 hover:text-red-600" aria-label="YouTube">
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