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
        <BreadCrumb title='Education Management'/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default EducationManagement