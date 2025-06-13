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
    <>
    <Navigation />
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Hero />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <ItServices />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <CollaborationSection />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <LatestProjects />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <SkillsSection />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <ThinkingSection />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <TestimonialsSection />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <ClientLogos />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Contacts />
    </Suspense>
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Footer />
    </Suspense>
    </>
    
  );
}