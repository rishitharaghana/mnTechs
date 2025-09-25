import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const ECommerce = () => {
  return (
    <>
      <div>
        <Navigation />
       
        <BreadCrumb 
          title='E-Commerce'
          paragraph={`Your Products Deserve the Best Platform. We create fast, flexible, and user-friendly online stores.`}
        />
        <MetaPage 
          title="Best E-commerce website & App development company in Hyd"
          description="Best e-commerce website & app development company in Hyd. We deliver custom online store solutions, Android & iOS apps & secure payments"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default ECommerce