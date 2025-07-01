import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const EducationManagement = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb
  title="Education Management"
  paragraph={`Smart Solutions for Smarter Institutions.
Digitize, centralize, and simplify every academic process.`}
/>

        <ServiceFooter />
      </div>
    </>
  )
}

export default EducationManagement