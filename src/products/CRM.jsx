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
        <BreadCrumb title='CRM'
         paragraph={`Real-Time Insights. Real Customer Impact.
Empower your team with data-driven relationship management.`}/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default CRM