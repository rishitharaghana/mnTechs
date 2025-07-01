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
        <BreadCrumb title="AI Agent"
         paragraph={`AI Agents That Work Around the Clock.
Faster support, smarter automation, real results.`} />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  );
};

export default AIAgent;
