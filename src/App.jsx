import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/Index";
import NotFound from "./pages/NotFound";
import Enterprice from "./pages/EnterPriceWrapper.jsx/Index";
import Contact from "./pages/Contact";

import Service1 from "./Services/Service1";
import Service2 from "./Services/Service2"; // ✅ Correct import
import Services from "./pages/Services";
import ContactWrapper from "./pages/CompWrapper";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/enterprise" element={<Enterprice />} />
      <Route path="/services/service1" element={<Service1 />} />
      <Route path="/services/service2" element={<Service2 />} /> {/* ✅ Fixed here */}
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactWrapper />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;