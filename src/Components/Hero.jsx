import { Plus } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative z-0 bg-cover bg-center bg-no-repeat h-screen text-white">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
        <p className="text-white text-lg font-light mb-2">
          The Next <span className="text-orange-500 font-semibold">Gen</span>
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          WE PROVIDE SERVICES
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          AND SOLUTIONS{" "}
          <span className="italic text-orange-500 font-semibold">
            To Enterprise
          </span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-8 w-max px-6 py-3 border-2 border-orange-500 text-black hover:bg-orange-500 hover:text-black transition-all duration-300 rounded-full">
          Let’s Talk
        </button>
        <div className="absolute z-20 top-1/3 right-10 space-y-15 text-white text-lg font-semibold">
          <div className="relative top-[15%] right-50 flex items-center space-x-3 group">
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-black text-sm rounded-md shadow-lg px-4 py-3 w-56 z-30">
              A dedicated team ensures full focus and efficiency for your
              project.
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-full p-3">
              <Plus />
            </div>
            <span>Dedicated Team</span>
          </div>

          <div className="relative top-[30%] right-15 flex items-center space-x-3 group">
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-black text-sm rounded-md shadow-lg px-4 py-3 w-56 z-30">
              Our developers are skilled in modern frameworks and scalable
              solutions.
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-full p-3">
              <Plus />
            </div>
            <span>Developers</span>
          </div>

          <div className="relative top-[45%] right-40 flex items-center space-x-3 group">
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-black text-sm rounded-md shadow-lg px-4 py-3 w-56 z-30">
              Designers craft visually appealing and user-friendly interfaces.
            </div>
            <div className="bg-gray-800 bg-opacity-80 rounded-full p-3">
              <Plus />
            </div>
            <span>Designers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
