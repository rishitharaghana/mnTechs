import React from 'react';
import Navigation from '../Components/Navigation';
import BreadCrumb from '../pages/BreadCrumb';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';

const AIAgent = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title="AI Agent" />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  );
};

export default AIAgent;
