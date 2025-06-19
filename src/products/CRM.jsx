import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const CRM = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='CRM'/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default CRM