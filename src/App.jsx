import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/loaders/Loader"; // Adjust if path differs

// Lazy-loaded page components
const Index = React.lazy(() => import("./pages/Home/Index"));
const Services = React.lazy(() => import("./pages/Services"));
const ContactWrapper = React.lazy(() => import("./pages/CompWrapper"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
