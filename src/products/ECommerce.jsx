import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const ECommerce = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='E-Commerce'/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default ECommerce