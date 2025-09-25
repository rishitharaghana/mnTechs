import React from "react";
import BreadCrumb from "../pages/BreadCrumb";
import Navigation from "../Components/Navigation";
import SaasApplications from "../Services/SaasApplications";
import ServiceFooter from "../Services/ServiceFooter";
import { Meta } from "react-router-dom";
import MetaPage from "../pages/MetaPage";

const CustomizedSoftware = () => {
  return (
    <div>
      <Navigation />
      <BreadCrumb 
        title="Customized Software"
        paragraph={`Add Paragraph.`} />
      <MetaPage
        title="MN Techs | Best Custom Software Development Company Hyd"
        description="MN Techs offers customized software solutions in Hyd. including enterprise, AI, billing, HRMS & education management software for businesses"
      />
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default CustomizedSoftware;
