import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const PayrollManagement = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title='Payroll Management'
          paragraph={`Effortless Payroll, Every Month. From salary calculations to statutory deductions — all automated.`} 
        />
        <MetaPage
          title="Best Payroll management software development company Hyd"
          description="Best payroll management software development company in Hyd. We offer custom payroll solutions, automated salary processing & compliance management"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default PayrollManagement