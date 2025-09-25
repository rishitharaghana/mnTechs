import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const BillingSystems = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title='Billing Systems'
          paragraph={`Simplify Invoicing. Automate Payments. Smart billing solutions tailored for your business.`}
        />
        <MetaPage 
          title="Best Billing system development company in Hyderabad"
          description="Best billing system development company in Hyderabad. We provide custom billing software, automated invoicing and secure payment solutions"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default BillingSystems