import React from 'react';
import BreadCrumb from '../pages/BreadCrumb';
import Navigation from '../Components/Navigation';
import SaasApplications from '../Services/SaasApplications';
import ServiceFooter from '../Services/ServiceFooter';

const Products = () => {
  return (
    <div>
      <Navigation />
      <BreadCrumb title="Our Products" />
      <SaasApplications />
      <ServiceFooter />
    </div>
  );
};

export default Products;
