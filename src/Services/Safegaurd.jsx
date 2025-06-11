import React from "react";
import { ArrowRight } from "lucide-react";

const Safeguard = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <p className="text-orange-500   font-medium mb-2">● Safeguard Modern</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Ready To Take The Next Step?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition hover:border-orange-500
">
          <h3 className="text-xl  text-black font-semibold mb-4">Get a Live Demo</h3>
          <p className="text-gray-400 mb-8">
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily. Indeed vanity excuse or mr lovers of on.
          </p>
          <button className="flex items-center gap-2 text-black font-semibold   ">
            Request a Free Demo
          
<span className="bg-gray-200 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:translate-x-1">
  <ArrowRight size={16} />
</span>


          </button>
        </div>
        <div className="border rounded-2xl p-8 shadow-sm    hover:border-orange-500
hover:shadow-md transition"> 
          <h3 className="text-xl  text-black font-semibold mb-4">Start Now</h3>
          <p className="text-gray-400 mb-8">
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed
            speedily. Indeed vanity excuse or mr lovers of on.
          </p>
          <button className="flex items-center gap-2 text-black font-semibold">
            Get In Touch
          
<span className="bg-gray-200 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:translate-x-1">
  <ArrowRight size={16} />
</span>


          </button>
        </div>
      </div>
    </section>
  );
};

export default Safeguard;
