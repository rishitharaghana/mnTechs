import React from 'react';
import Navigation from '../Components/Navigation';
import BreadCrumb from '../pages/BreadCrumb';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';
import MetaPage from '../pages/MetaPage';

const AIAgent = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title="AI Agent"
          paragraph={`AI Agents That Work Around the Clock. Faster support, smarter automation, real results.`} 
        />
        <MetaPage 
          title="Best AI Agent Development Companies in Hyderabad"
          description="Best AI agent development companies in Hyderabad? MNTechs offers top AI software solutions, intelligent automation, and a custom AI agent."
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  );
};

export default AIAgent;
