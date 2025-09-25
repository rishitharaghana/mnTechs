import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import { Meta } from 'react-router-dom'
import MetaPage from '../pages/MetaPage'

const CRM = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title='CRM'
          paragraph={`Real-Time Insights. Real Customer Impact. Empower your team with data-driven relationship management.`}
        />
        <MetaPage 
          title="Best Custom CRM software development company in Hyderabad"
          description="Best custom CRM software development company in Hyd. We build tailored CRM solutions to manage sales, leads, and customer relationships"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default CRM