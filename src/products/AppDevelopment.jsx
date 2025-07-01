import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const AppDevelopment = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='App Development'
        paragraph={`Custom App Solutions for Every Need.
iOS, Android, and Web — We’ve Got You Covered.`}/>
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default AppDevelopment