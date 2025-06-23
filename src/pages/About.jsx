import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation';
import BreadCrumb from './BreadCrumb';
import Contacts from '../components/Contacts';
import ServiceFooter from '../Services/ServiceFooter';
import Footer from '../Components/Footer';
import ngrokAxiosInstance from '../Hooks/axiosInstance';
import { useNavigate } from 'react-router-dom';
import ValuesSection from '../Components/ValueSection';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await ngrokAxiosInstance.get('/dynamic/about');
      setAboutData(res.data);
    } catch (error) {
      console.error('Error fetching about data:', error);
    }
  };

  if (!aboutData) return null;

  const {
    subtitle,
    title,
    highlight,
    paragraph1,
    paragraph2,
    buttonText,
    buttonLink,
    image,
  } = aboutData;

  return (
    <div>
      <Navigation />
      <BreadCrumb title="About" />
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-orange-500 font-medium">
                    {subtitle}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {title.split(' ').map((word, i) =>
                    word === highlight ? (
                      <span key={i} className="text-orange-500">
                        {word}{' '}
                      </span>
                    ) : (
                      word + ' '
                    )
                  )}
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {paragraph1}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {paragraph2}
                </p>
              </div>

              <button
                onClick={() => navigate(buttonLink || '/')}
                className="border-2 border-orange-500 cursor-pointer text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                {buttonText}
              </button>
            </div>

            <div className="relative">
              <img
                src={`http://localhost:5000/${image}`}
                alt="About Section"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
      <ValuesSection />
      <Contacts />
      <ServiceFooter />
    </div>
  );
};

export default About;
