import React from 'react';
import BreadCrumb from '../pages/BreadCrumb';
import Navigation from '../Components/Navigation';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';
import MetaPage from '../pages/MetaPage';

const WebDevelopment = () => {
  return (
    <div>
      <Navigation />
      <BreadCrumb 
        title="Web Development" 
        paragraph={`Add Paragraph`} 
      />
      <MetaPage 
        title="Best Web & Software Development Company Hyderabad | MN Techs"
        description="MN Techs professional web development services in Hyd. delivering responsive websites, web apps, and custom online solutions for businesses"
      />
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default WebDevelopment;
