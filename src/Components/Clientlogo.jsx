
const ClientLogos = () => {
  const logos = [
    { name: 'audiojungle', display: 'audiojungle' },
    { name: 'codecanyon', display: 'codecanyon' },
    { name: 'graphicriver', display: 'graphicriver' },
    { name: 'photodune', display: 'photodune' },
    { name: 'themeforest', display: 'themeforest' },
    { name: 'videohive', display: 'videohive' }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-gray-800 font-semibold text-lg">{logo.display}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;