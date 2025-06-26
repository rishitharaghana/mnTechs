import React from "react";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";

const Terms = () => {
  return (
    <>
      <div className="relative top-20">
        <Navigation />
        <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
        <div
          className="relative z-10 px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-32"
          style={{
            backgroundImage: `url(${map})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-sm text-gray-600 mb-2 sm:mb-4">
            <Link to="/" className="text-black font-medium hover:text-orange-500">
              Home
            </Link>
            <span className="text-orange-500 mx-1 sm:mx-2">●</span>
            <span className="text-gray-500">Terms & Conditions</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center sm:text-left">
              TERMS & CONDITIONS
            </h1>
            <img
              src="/deco-2.svg"
              alt="Decoration"
              className="w-24 sm:w-32 md:w-40 h-auto transform rotate-90"
            />
          </div>
        </div>
      </div>

      <section className="relative z-10 px-4 sm:px-6 md:px-10 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-gray-800">
          {/* <p className="text-sm text-gray-500 mb-4">Effective as of June 26, 2025</p> */}

          <p className="mb-6 text-base sm:text-lg text-gray-500">
            These terms and conditions apply to the website and services (hereinafter referred to as "Services") provided by MetricsNow Tech Solutions Pvt Ltd (hereinafter referred to as "Service Provider") through <a href="https://www.MNTechs.com" className="text-orange-500 hover:underline">www.MNTechs.com</a> as a Free and/or Subscription-based service.
          </p>

          <p className="mb-6 text-base sm:text-lg text-gray-500">
            Upon accessing or utilizing the Services, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Services. Unauthorized copying, modification of the Services, any part of the Services, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Services, translate the Services into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Services remain the property of the Service Provider.
          </p>

          <p className="mb-6 text-base sm:text-lg text-gray-500">
            The Service Provider is dedicated to ensuring that the Services are as beneficial and efficient as possible. As such, they reserve the right to modify the Services or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Services will be clearly communicated to you.
          </p>

          <p className="mb-6 text-base sm:text-lg text-gray-500">
            The Services store and process personal data that you have provided to the Service Provider in order to provide the Services. It is your responsibility to maintain the security of your device and access to the Services. The Service Provider strongly advises against using compromised or unsecured devices, which could expose your data to malware, viruses, or other malicious programs, potentially compromising the security of the Services or causing them to malfunction.
          </p>

          <p className="mb-6 text-base sm:text-lg text-gray-500">
            Please note that the Services utilize third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Services:
          </p>
          <ul className="list-disc pl-6 mb-6 text-base sm:text-lg">
            <li><a href="https://policies.google.com/terms" className="text-orange-500 hover:underline">Google Services</a></li>
            {/* Add other third-party services if applicable */}
          </ul>

          <p className="mb-6 text-base sm:text-lg text-gray-500">
            Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Services require an active internet connection. The Service Provider cannot be held responsible if the Services do not function at full capacity due to lack of internet access or if you have exhausted your data allowance.
          </p>

          <p className="mb-6 text-base sm:text-lg">
            If you are using the Services, please be aware that your internet service provider's agreement terms still apply. Consequently, you may incur charges from your internet provider for data usage during the connection to the Services, or other third-party charges. By using the Services, you accept responsibility for any such charges. If you are not the bill payer for the device or internet connection on which you are using the Services, the Service Provider assumes that you have obtained permission from the bill payer.
          </p>

          <p className="mb-6 text-base sm:text-lg">
            Similarly, the Service Provider cannot always assume responsibility for your usage of the Services. For instance, it is your responsibility to ensure that your device remains operational and connected. If your device loses connectivity or power and you are unable to access the Services, the Service Provider cannot be held responsible.
          </p>

          <p className="mb-6 text-base sm:text-lg">
            In terms of the Service Provider's responsibility for your use of the Services, it is important to note that while they strive to ensure that they are updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the Services.
          </p>

          <p className="mb-6 text-base sm:text-lg">
            The Service Provider may wish to update the Services at some point. The Services are currently available as per the requirements for supported browsers and devices, which may change, and you will need to ensure your device and browser meet these requirements to continue using the Services. The Service Provider does not guarantee that it will always update the Services so that they are relevant to you and/or compatible with the particular browser or device you are using. However, you agree to always accept updates to the Services when offered to you. The Service Provider may also wish to cease providing the Services and may terminate their use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the Services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">1. Introduction</h2>
          <p className="mb-6 text-base sm:text-lg">
            Welcome to MetricsNow Tech Solutions Pvt Ltd ("MNTechs")! By using our Services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">2. Platform Description</h2>
          <p className="mb-6 text-base sm:text-lg">
            MNTechs is a web-based platform that provides a suite of cloud-based software solutions designed to streamline business operations, enhance productivity, and manage critical workflows. Our Services include:
          </p>
          <ul className="list-disc pl-6 mb-6 text-base sm:text-lg">
            <li><strong>E-Commerce Platform</strong>: Tools to manage online stores, process transactions, and optimize customer shopping experiences.</li>
            <li><strong>Education Management System</strong>: Solutions for managing academic institutions, including student records, course scheduling, and e-learning functionalities.</li>
            <li><strong>Hospital Management System</strong>: Software for healthcare facilities to manage patient records, appointments, billing, and operational workflows.</li>
            <li><strong>AI Agents</strong>: Intelligent automation tools powered by artificial intelligence to enhance decision-making and process efficiency.</li>
            <li><strong>Invoice Billing System</strong>: Automated solutions for generating, tracking, and managing invoices for businesses.</li>
            <li><strong>Payroll Management System</strong>: Tools to manage employee salaries, deductions, taxes, and compliance with labor laws.</li>
            <li><strong>Customer Relationship Management (CRM)</strong>: Software to manage customer interactions, sales pipelines, and marketing campaigns.</li>
            <li><strong>Human Resource Management System (HRMS)</strong>: Comprehensive tools for employee management, recruitment, performance tracking, and HR compliance.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">3. User Responsibilities</h2>
          <p className="mb-6 text-base sm:text-lg">
            a. MNTechs acts solely as a provider of software solutions. We do not own, manage, or guarantee the accuracy of any data or content processed through the Services.
          </p>
          <p className="mb-6 text-base sm:text-lg">
            b. Users are solely responsible for verifying the accuracy and authenticity of data entered into or generated by the Services, including but not limited to financial records, employee information, and customer data.
          </p>
          <p className="mb-6 text-base sm:text-lg">
            c. MNTechs does not take responsibility for any losses, damages, or errors that may occur due to incorrect data input or misuse of the Services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">4. Verification and Due Diligence</h2>
          <p className="mb-6 text-base sm:text-lg">
            a. Users are strongly encouraged to conduct thorough due diligence before relying on outputs generated by the Services, such as invoices, payroll calculations, or CRM reports.
          </p>
          <p className="mb-6 text-base sm:text-lg">
            b. MNTechs does not verify the information provided by users and is not responsible for inaccuracies in data processed through the Services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">5. Disclaimers</h2>
          <p className="mb-6 text-base sm:text-lg">
            a. MNTechs disclaims any liability for direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use our Services.
          </p>
          <p className="mb-6 text-base sm:text-lg">
            b. MNTechs is not liable for any errors, misrepresentations, or disputes arising from user-generated content or interactions within the Services.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">6. User Conduct</h2>
          <p className="mb-6 text-base sm:text-lg">
            a. Users agree not to engage in any illegal or harmful activities on the Services, including but not limited to uploading malicious code, attempting unauthorized access, or violating third-party rights.
          </p>
          <p className="mb-6 text-base sm:text-lg">
            b. MNTechs reserves the right to suspend or terminate users who violate these terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">7. Modification of Terms</h2>
          <p className="mb-6 text-base sm:text-lg">
            MNTechs may modify these terms and conditions at any time without notice. Users are responsible for reviewing the terms regularly by checking this page for updates.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">8. Governing Law</h2>
          <p className="mb-6 text-base sm:text-lg">
            These terms are governed by and construed in accordance with the laws of Hyderabad, Telangana, India.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-600">9. Contact Information</h2>
          <p className="mb-6 text-base sm:text-lg">
            If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at:
          </p>
          <p className="mb-2 text-base sm:text-lg">
            <strong>Email</strong>: <a href="mailto:team@MNTechs.com" className="text-orange-500 hover:underline">team@MNTechs.com</a>
          </p>
          <p className="mb-2 text-base sm:text-lg">
            <strong>Address</strong>: MetricsNow Tech Solutions Pvt Ltd, [Insert Full Address, Hyderabad, Telangana, India]
          </p>
          <p className="mb-2 text-base sm:text-lg">
            <strong>Phone</strong>: [Insert Phone Number, e.g., +91 123-456-7890]
          </p>

          <p className="mt-6 text-base sm:text-lg">
            By using the MNTechs Services, you acknowledge that you have read, understood, and agree to these terms and conditions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms;