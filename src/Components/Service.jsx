import { Card, CardContent } from "./Ui/Card";



const Index = () => {
  const services = [
    {
      id: "01",
      title: "Dedicated Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "💬"
    },
    {
      id: "02", 
      title: "QA and Testing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🔒"
    },
    {
      id: "03",
      title: "SaaS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "💻"
    }
  ];

  const solutions = [
    {
      id: "01",
      title: "Blockchain",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "⚙️"
    },
    {
      id: "02",
      title: "Artificial Intelligence", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "⚡"
    },
    {
      id: "03",
      title: "Internet of Things",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header with Orange Divider */}
        <div className="text-center mb-16 relative">
          <div className="relative inline-block">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-orange-500"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              How We Can <span className="text-orange-500">Help You</span>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
         
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">IT Services</h3>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={service.id} className="relative">
                  {/* Orange Divider Above Each Service */}
                  <div className="w-8 h-0.5 bg-orange-500 mb-6"></div>
                  
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                            {service.icon}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-orange-500 font-semibold text-sm">
                              {service.id}
                            </span>
                            <h4 className="text-xl font-semibold text-gray-800">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-gray-800 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">IT Solutions</h3>
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={solution.id} className="relative">
                  {/* Orange Divider Above Each Solution */}
                  <div className="w-8 h-0.5 bg-orange-500 mb-6"></div>
                  
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                            {solution.icon}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-orange-500 font-semibold text-sm">
                              {solution.id}
                            </span>
                            <h4 className="text-xl font-semibold text-gray-800">
                              {solution.title}
                            </h4>
                          </div>
                          <p className="text-gray-800 leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;