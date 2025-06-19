import React, { useState } from 'react';
import { MapPin , PhoneCall, MailIcon} from 'lucide-react';
const ServiceFooter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
   
  };

  return (
    <footer className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
     
  <div className="w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

  <div className="md:w-1/2 text-left">
    <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">
      Join The <span className="text-orange-500">MNTechs</span> Experience
    </h2>
    <p className="text-gray-400 text-sm">
      Duis autem vel eum iriure dolor in hendrerit in vulputate
    </p>
    
  </div>


  <form onSubmit={handleSubscribe} className="w-full max-w-xl mx-auto">

  <div className="relative w-full ">
    <input
      type="email"
      value={email}
      onChange={handleEmailChange}
      placeholder="Your email address"
      className="w-full px-10 py-6 pr-10 bg-white text-gray-900 text-lg font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <button
      type="submit"
      className="absolute right-2 top-1 bottom-1 px-20 py-4 bg-orange-500 text-black text-lg font-semibold rounded-full hover:bg-orange-400 transition-colors"
    >
      Subscribe Now
    </button>
  </div>
</form>

</div>

     <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 flex flex-col md:flex-row md:justify-between md:gap-2 lg:gap-2 items-start">

   
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-blue-800">MN</span>
            <span className="text-2xl font-bold text-white">techs</span>
          </div>
          <div className="flex flex-row items-start mb-2 gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
                    401, 8-3-6-5/1/1/4, Astral Hasini Residency, <br />
                    J.P. Nagar, Yella Reddy Guda, <br /> Hyderabad - 500073,
                    Telangana.
                  </p>
                  </div>
           <div className="flex flex-row items-start mb-2 gap-2">
                  <PhoneCall size={15} />
                  <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
                    +91 9701888071
                  </p>
                </div>
         {/* <div className="flex flex-row items-start gap-3">
                  <MailIcon size={20} />
                  <p className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-amber-400 focus-within:outline-0 focus-within:text-amber-400">
                    support@meetowner.in
                  </p>
                </div> */}
                <div className="flex flex-row items-start gap-2">
  <MailIcon size={20} />
  <a
    href="mailto:support@meetowner.in"
    className="text-base font-normal text-gray-400 hover:text-amber-400 transition-all duration-300"
  >
    support@meetowner.in
  </a>
</div>

        </div>

        <div className="mb-2">
          <h3 className="text-orange-500 font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Facebook</li>
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Instagram</li>
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">LinkedIn</li>
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Twitter</li>
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">YouTube</li>
          </ul>
        </div>

        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Terms & Conditions</li>
            <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Privacy Policy</li>

         
          </ul>
        </div>
      </div>
 <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-6 pb-8 text-gray-400 text-sm px-2">
          <span>© MNTechs 2025.</span>
         <div className="text-sm font-normal mb-4 text-gray-400">
    All Rights Reserved.
  </div>
        </div>

    </footer>
  );
};

export default ServiceFooter;