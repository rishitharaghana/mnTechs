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
        <BreadCrumb title='HRMS'
        paragraph={`Less Paperwork. More People Work.
An intelligent HRMS for fast-growing teams.`}/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default HRMS