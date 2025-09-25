import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const HRMS = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title='HRMS'
          paragraph={`Less Paperwork. More People Work. An intelligent HRMS for fast-growing teams.`}
        />
        <MetaPage
          title="HRMS | HR Management Software development company Hyd"
          description="Best HRMS and HR management software development company in Hyd. We offer custom HR solutions for payroll, attendance, employee Data"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default HRMS