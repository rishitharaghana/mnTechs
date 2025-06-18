import React from 'react'
import Navigation from '../Components/Navigation'
import BreadCrumb from './BreadCrumb'
import SaasApplications from '../Services/SaasApplications'
import ServiceFooter from '../Services/ServiceFooter'

const About = () => {
  return (
    <div>
        <Navigation  />
        <BreadCrumb title='About' />
        <SaasApplications />
        <ServiceFooter />
    </div>
  )
}

export default About