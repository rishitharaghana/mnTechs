import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/Index";
import NotFound from "./pages/NotFound";
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
import WebDevelopment from "./products/WebDevelopment";
import CustomizedSoftware from "./products/CustomizedSoftware";
import AIAgent from "./products/AIAgent";
import About from "./pages/About";
import Team from "./pages/Team";
import Terms from "./pages/Home/Terms";
import Privacy from "./pages/Home/Privacy";
import Careers from "./pages/Careers";
import ScrollToTop from "./products/Scrolltotop";
import ScrollButton from "./Components/ScrollButton";
import Portfolio from "./Components/Portfolio";

const App = () => (
  <BrowserRouter>
   <ScrollToTop/>
    <Routes>
    
      <Route path="/" element={<Index/>} />
      <Route path = '/portfolio' element = {<Portfolio/>}/>
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
        <Route path="/products/best-ai-agent-development-company-in-hyderabad" element={<AIAgent />} />
        <Route path="/products/best-mobile-app-development-company-in-hyderabad" element={<AppDevelopment />} />
        <Route path="/products/best-web-and-software-development-company-hyderabad" element={<WebDevelopment />} />
        <Route path="/products/best-custom-software-development-company-in-hyderabad" element={<CustomizedSoftware/>} />
        <Route path="/products/best-billing-system-development-company-in-hyderabad" element={<BillingSystems />} />
        <Route path="/products/best-custom-crm-software-development-company-in-hyderabad" element={<CRM />} />
        <Route path="/products/best-ecommerce-website-app-development-company-in-hyderabad" element={<ECommerce />} />
        <Route path="/products/best-education-management-system-development-company-in-hyderabad" element={<EducationManagement />} />
        <Route path="/products/best-hospital-management-system-development-company-in-hyderabad" element={<HospitalManagement />} />
        <Route path="/products/hr-management-software-development-company-in-hyderabad" element={<HRMS />} />
        <Route path="/products/best-payroll-management-software-development-company-in-hyderabad" element={<PayrollManagement />} />
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<ContactWrapper />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/careers" element={<Careers/>} />
      
      
    </Routes>
    <ScrollButton />
  </BrowserRouter>
);
export default App;
