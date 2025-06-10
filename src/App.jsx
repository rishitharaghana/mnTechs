

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "./Components/ContactPage";



const App = () => (

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
      </BrowserRouter>
   
);

export default App;