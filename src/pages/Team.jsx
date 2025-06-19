import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'  

const Team = () => {
  return (
    <div>
      <Navigation /> 
      <BreadCrumb title="Team" />
      <SaasApplications />
      <ServiceFooter />
    </div>
  )
}

export default Team