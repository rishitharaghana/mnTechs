import React from 'react'
import BreadCrumb from '../pages/BreadCrumb'
import Navigation from '../Components/Navigation'

const HospitalManagement = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb title='Hospital Management'/>
      </div>
    </>
  )
}

export default HospitalManagement