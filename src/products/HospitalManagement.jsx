import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const HospitalManagement = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title='Hospital Management'
          paragraph={`Streamlining Care, Empowering Hospitals. Your complete digital solution for healthcare management.`} 
        />
        <MetaPage 
          title='Best Hospital Management System Development Company in Hyd'
          description="Best hospital management system development company in Hyd. We deliver custom HMS software for patients, billing & healthcare operations"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default HospitalManagement