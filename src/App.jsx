import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Enterprise from "./pages/Enterprise";
import Contact from "./pages/Contact";

import Service1 from "./Services/Service1";
import Service2 from "./Services/Service2"; // ✅ Correct import
import Services from "./pages/Services";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/services/service1" element={<Service1 />} />
      <Route path="/services/service2" element={<Service2 />} /> {/* ✅ Fixed here */}
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;