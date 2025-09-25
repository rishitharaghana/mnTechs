import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'
import MetaPage from '../pages/MetaPage'

const AppDevelopment = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb 
          title='App Development'
          paragraph={`Custom App Solutions for Every Need. iOS, Android, and Web — We’ve Got You Covered.`}
        />
        <MetaPage 
          title="Best Mobile app development company in Hyderabad"
          description="Best mobile app development company in Hyderabad. We offer custom Android & iOS app development, UI/UX design & innovative app solutions"
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  )
}

export default AppDevelopment