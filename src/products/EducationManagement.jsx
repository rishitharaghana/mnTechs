import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const EducationManagement = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb
          title="Education Management"
          paragraph={`Smart Solutions for Smarter Institutions. Digitize, centralize, and simplify every academic process.`}
        />
        <MetaPage
          title="Best Education Management Development Company in Hyderabad"
          description="Best education management system development company in Hyd. We provide custom ERP, student management and digital learning solutions"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default EducationManagement