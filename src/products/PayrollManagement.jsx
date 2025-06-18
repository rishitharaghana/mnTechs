import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const PayrollManagement = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='Payroll Management'/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default PayrollManagement