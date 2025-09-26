import React from 'react';
import Navigation from '../Components/Navigation';
import Breadcrumb from '../pages/BreadCrumb';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';
import MetaPage from '../pages/MetaPage';

const AIAgent = () => {
  return (
    <>
      <div>
        <Navigation />
        <Breadcrumb
          title="AI Agent"
          paragraph="AI Agents That Work Around the Clock. Faster support, smarter automation, real results."
          // backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
        />
        <MetaPage
          title="Best AI Agent Development Companies in Hyderabad"
          description="Best AI agent development companies in Hyderabad? MNTechs offers top AI software solutions, intelligent automation, and custom AI agents."
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  );
};

export default AIAgent;