import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import Services from "../Components/Service";
import ClientLogos from "../Components/Clientlogo";
import Footer from "../Components/Footer";
import LatestProjects from "../Components/LatestProjects";
import Contacts from "../Components/Contacts";



const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <LatestProjects/>
      <Contacts />
      <Footer />
      
    </div>
  );
};

export default Index;