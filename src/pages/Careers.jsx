import React from "react";
import Navigation from "../Components/Navigation";
import BreadCrumb from "../pages/BreadCrumb";
import SaasApplications from "../Services/SaasApplications";
import ServiceFooter from "../Services/ServiceFooter";

const Careers = () => {
  return (
    <>
      <div>
        <Navigation />
        <BreadCrumb
          title="Careers"
          paragraph="Work where your ideas matter. Collaborate, create, and grow at MNTechs."
        />
        <SaasApplications />
        <ServiceFooter />
      </div>
    </>
  );
};

export default Careers;
