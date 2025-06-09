import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import Services from "../Components/Service";
import ClientLogos from "../Components/Clientlogo";
import Footer from "../Components/Footer";



const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;