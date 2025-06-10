


import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Ui/Button';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      name: 'Tamzyn French',
      position: 'Agency Design',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 2,
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      name: 'Margaret Williams',
      position: 'Agency Design',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 3,
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      name: 'Tarryn Gillies',
      position: 'Agency Design',
      avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 4,
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      name: 'Tamzyn French',
      position: 'Agency Design',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 5,
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      name: 'Mark Johnson',
      position: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentSlide, currentSlide + 3);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-orange-500' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-orange-500 font-medium mb-4">• Testimonial</p>
            <h2 className="text-5xl font-bold text-gray-900">
              What Our <span className="text-orange-500">Clients</span> Say
            </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial) => (
            <div key={`${testimonial.id}-${currentSlide}`} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-6xl text-gray-300 mb-4 font-serif">"</div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;