import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Index from "./pages/Home/Index";
import NotFound from "./pages/NotFound";
import Enterprice from "./pages/EnterPriceWrapper.jsx/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ContactWrapper from "./pages/CompWrapper";
import Products from "./products/Products";
import AppDevelopment from "./products/AppDevelopment";
import BillingSystems from "./products/BillingSystems";
import CRM from "./products/CRM";
import ECommerce from "./products/ECommerce";
import EducationManagement from "./products/EducationManagement";
import HospitalManagement from "./products/HospitalManagement";
import HRMS from "./products/HRMS";
import PayrollManagement from "./products/PayrollManagement";
import AIAgent from "./products/AIAgent";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
        <Route path="/products/ai-agent" element={<AIAgent />} />
        <Route path="/products/app-development" element={<AppDevelopment />} />
        <Route path="/products/billing-system" element={<BillingSystems />} />
        <Route path="/products/crm" element={<CRM />} />
        <Route path="/products/e-commerce" element={<ECommerce />} />
        <Route path="/products/education-management" element={<EducationManagement />} />
        <Route path="/products/hospital-management" element={<HospitalManagement />} />
        <Route path="/products/hrms" element={<HRMS />} />
        <Route path="/products/payroll-management" element={<PayrollManagement />} />
      <Route path="/contact" element={<ContactWrapper />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;
>>>>>>> 2d6cddfd3fd12aaef47139c098768d6f54187b59
