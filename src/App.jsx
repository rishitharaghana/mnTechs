import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/Index";
import NotFound from "./pages/NotFound";
import Enterprice from "./pages/EnterPriceWrapper.jsx/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ContactWrapper from "./pages/CompWrapper";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactWrapper />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;