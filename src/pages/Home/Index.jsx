import React, { Suspense, lazy } from "react";

// Lazy load all components
const Hero = lazy(() => import("../../Components/Hero"));
const ItServices = lazy(() => import("../../Components/ItServices"));
const ClientLogos = lazy(() => import("../../Components/Clientlogo"));
const Footer = lazy(() => import("../../Components/Footer"));
const LatestProjects = lazy(() => import("../../Components/LatestProjects"));
const CollaborationSection = lazy(() => import("../../Components/CollaborationSection"));
const SkillsSection = lazy(() => import("../../Components/SkillsSection"));
const TestimonialsSection = lazy(() => import("../../Components/TestimonialsSection"));
const ThinkingSection = lazy(() => import("../../Components/ThinkingSection"));
const Navigation = lazy(() => import("../../Components/Navigation"));
const Contacts = lazy(() => import("../../Components/Contacts"));

export default function Index() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Navigation />
      <Hero />
      <ItServices />
      <CollaborationSection />
      <LatestProjects />
      <SkillsSection />
      <ThinkingSection />
      <TestimonialsSection />
      <ClientLogos />
      <Contacts />
      <Footer />
    </Suspense>
  );
}