import { Plus } from "lucide-react";
import BackgroundCarousel from "./Ui/Backgroundcarousel";
const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen min-h-[600px] text-white">

      <BackgroundCarousel />
      <div className="absolute bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-10">
        <p className="text-white text-lg font-light mb-8">
          The Next{" "}
          <span className=" text-orange-500 font-semibold">Gen</span>
        </p>

      
        <div>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[140%] text-white font-syne mb-2 sm:mb-4 md:mb-6">
            WE PROVIDE SERVICES
          </h1>

          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[140%] text-white font-syne mb-2 sm:mb-4 md:mb-6">
            AND SOLUTIONS
          </h1>

         
<span className="mil-font-3 mil-accent text-2xl md:text-3xl font-black block mt-2">
  To Enterprise
</span>


        </div>

        <p className="text-gray-300 mt-6 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-8 w-max px-6 py-3 border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-white  bg-or-50 transition-all duration-300 rounded-full">
          Let’s Talk
        </button>
        <div className="absolute z-20 top-1/3 right-10 space-y-15 text-white text-lg font-semibold">
          <div className="relative top-[15%] right-50 flex items-center space-x-3 group">
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-black text-sm rounded-md shadow-lg px-4 py-3 w-56 z-30">
              <h3 className="text-black font-bold">Experts</h3>
              <div className="flex items-center mt-2">
                <div className="w-8 h-1 bg-orange-500"></div>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              <p>
                A dedicated team ensures full focus and efficiency for your
                project.
              </p>
            </div>
       
<div className="relative flex items-center justify-center size-10 group">
  <span className="absolute hidden group-hover:inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping"></span>

  <span className="relative inline-flex items-center justify-center size-10 rounded-full bg-gray-700 text-white transition-colors duration-300 group-hover:bg-orange-500">
    <Plus size={16} />
  </span>
</div>



            <span className="transition-colors duration-300 group-hover:text-orange-500 ">
              Dedicated Team
            </span>
          </div>
          <div className="relative top-[30%] right-15 flex items-center space-x-3 group">
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-black text-sm rounded-md shadow-lg px-4 py-3 w-56 z-30">
              <h3 className="text-black font-bold">Experts</h3>
              <div className="flex items-center mt-2">
                <div className="w-8 h-1 bg-orange-500"></div>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              <p>
                {" "}
                Our developers are skilled in modern frameworks and scalable
                solutions.
              </p>
            </div>
            {/* <div className="bg-gray-800 bg-opacity-80 rounded-full p-3 transition-all duration-500 ease-in-out group-hover:shadow-[4px_4px_12px_rgba(255,165,0,0.7),-4px_-4px_12px_rgba(107,114,128,0.5)] group-hover:bg-orange-500">
              <Plus />
            </div> */}
            <div className="relative flex items-center justify-center size-10 group ">
  <span className="absolute hidden group-hover:inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping"></span>

  <span className="relative inline-flex items-center justify-center size-10 rounded-full bg-gray-700 text-white transition-colors duration-300 group-hover:bg-orange-500">
    <Plus size={16} />
  </span>
</div>
            <span className="transition-colors duration-300 group-hover:text-orange-500 ">
              Developers
            </span>
          </div>
          <div className="relative top-[45%] right-40 flex items-center space-x-3 group">
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-black text-sm rounded-md shadow-lg px-4 py-3 w-56 z-30">
              <h3 className="text-black font-bold">Experts</h3>
              <div className="flex items-center mt-2">
                <div className="w-8 h-1 bg-orange-500"></div>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              <p>
                {" "}
                Designers craft visually appealing and user-friendly interfaces.
              </p>
            </div>
            {/* <div className="bg-gray-800 bg-opacity-80 rounded-full p-3 transition-all duration-500 ease-in-out group-hover:shadow-[4px_4px_12px_rgba(255,165,0,0.7),-4px_-4px_12px_rgba(107,114,128,0.5)] group-hover:bg-orange-500">
              <Plus />
            </div> */}
            <div className="relative flex items-center justify-center size-10 group">
  <span className="absolute hidden group-hover:inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping"></span>

  <span className="relative inline-flex items-center justify-center size-10 rounded-full bg-gray-700 text-white transition-colors duration-300 group-hover:bg-orange-500">
    <Plus size={16} />
  </span>
</div>
            <span className="transition-colors duration-300 group-hover:text-orange-500 ">
              Designers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
