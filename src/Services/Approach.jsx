import React from "react";

const Approach = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
            {/* Feature Point */}
      <div className="mt-8 flex items-center justify-center gap-2 text-black font-medium text-lg">
        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
        High Quality and Performance
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
        Our Approach To <span className="text-orange-500">SaaS Software</span> Development
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
          
        {/* Card 1 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-orange-500 font-bold">01</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">Tech Stack Choice</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-orange-500 font-bold">02</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">Multi Tenant Architecture</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-orange-500 font-bold">03</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">External Services Integration</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-orange-500 font-bold">04</div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">Scalability On Demand</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex gap-6">
          <div className="text-2xl text-orange-500 font-bold">05</div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">Security Audit</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex gap-6">
          <div className="text-2xl text-orange-500 font-bold">06</div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">Smooth Deployment</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between md:col-span-2 mt-12 px-2">
          <button className="border-2 border-orange-500 bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition">
            Talk to our SaaS Experts
          </button>
          <div className="text-orange-500 text-3xl hover:translate-x-1 transition-transform cursor-pointer">
            See more →
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Approach;
