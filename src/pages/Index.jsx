import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import Services from "../Components/Service";
import ClientLogos from "../Components/Clientlogo";
import Footer from "../Components/Footer";
import LatestProjects from "../Components/LatestProjects";
import CollaborationSection from "../Components/CollaborationSection";
import SkillsSection from "../Components/SkillsSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import ThinkingSection from "../Components/ThinkingSection";



const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <LatestProjects/>
      <CollaborationSection />
      <SkillsSection />
      <ThinkingSection />
      <TestimonialsSection />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;