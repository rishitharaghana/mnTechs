import React from 'react'


import Hero from '../../Components/Hero';
import Services from '../Services';
import ClientLogos from '../../Components/Clientlogo';
import Footer from '../../Components/Footer';
import LatestProjects from '../../Components/LatestProjects';
import CollaborationSection from '../../Components/CollaborationSection';
import SkillsSection from '../../Components/SkillsSection';
import TestimonialsSection from '../../Components/TestimonialsSection';
import ThinkingSection from '../../Components/ThinkingSection';
import ContactWrapper from '../CompWrapper';
import Navigation from '../../Components/Navigation';
import Contacts from '../../Components/Contacts';

export default function Index() {
  return (
   <>
   <Navigation/>
   <Hero/>
   <CollaborationSection/>
   <LatestProjects/>
   <SkillsSection/>
   <ThinkingSection/>
   <TestimonialsSection/>
   <ClientLogos/>
   <Contacts/>
   <Footer/>
   </>
  )
}
