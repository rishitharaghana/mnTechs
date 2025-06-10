import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import Services from "../Components/Service";
import ClientLogos from "../Components/Clientlogo";
import Footer from "../Components/Footer";
import LatestProjects from "../Components/LatestProjects";
import Contact from "../Components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <LatestProjects/>
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Index;