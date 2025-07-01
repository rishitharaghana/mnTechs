import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const BillingSystems = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='Billing Systems'
         paragraph={`Simplify Invoicing. Automate Payments.
Smart billing solutions tailored for your business.`}/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default BillingSystems