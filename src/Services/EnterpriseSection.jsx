import React from "react";
const EnterpriseSection = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/4a5b1800-3059-4a8d-903f-127d381ad934.png"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />

                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-xs">
                <div className="flex -space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-gray-900">4.5</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-5 h-5 text-gray-300 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600">From +5000 reviews</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Designed for Developers
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Powerful and Easy
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. There are many variations of
                passages majority.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-foreground font-medium">
                  Accelerate innovation.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-foreground font-medium">
                  With world-class tech teams.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-foreground font-medium">
                  Our all service offerings to enhance.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-foreground font-medium">
                  Simply drag, drop and customize.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseSection;
