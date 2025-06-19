import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const HRMS = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='HRMS'/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default HRMS