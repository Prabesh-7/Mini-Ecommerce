import { Play, Tags } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 xl:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Unified container with light blue background and rounded corners */}
        <div className="relative bg-[#E7FAFE] rounded-4xl overflow-hidden">
          {/* Responsive grid: stacks on mobile, side-by-side on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
            {/* Left Content Area */}
            <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 lg:rounded-bl-4xl lg:rounded-tl-4xl">
              {/* Hot Deals badge */}
              <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:w-[156px] sm:h-[45px] bg-white rounded-full shadow-sm mb-6 sm:mb-8">
                <img src="hot deals.png" alt="Hot Deals" className="h-4 w-4 sm:h-5 sm:w-5 object-contain flex-shrink-0" />
                <span className="font-inter font-semibold text-xs sm:text-sm leading-none tracking-[-0.02em] text-black whitespace-nowrap">
                  Hot Deals
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-inter font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-none tracking-[-0.04em] text-gray-900 mb-6">
                Enjoy 10% of in all
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>our products.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10 max-w-xl break-words">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 bg-white rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200 flex-shrink-0">
                  <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-xs sm:text-sm font-semibold flex-shrink-0">
                    $
                  </div>
                  <span className="font-inter leading-none tracking-[-0.02em] text-black whitespace-nowrap">
                    Lorem
                  </span>
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 bg-white rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200 flex-shrink-0">
                  <Tags className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                  <span className="font-inter leading-none tracking-[-0.02em] text-black whitespace-nowrap">
                    Epsom
                  </span>
                </span>
              </div>

              {/* Author Info and Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0">
                    <img
                      src="John.png"
                      alt="John"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">John Smith</p>
                    <p className="text-sm text-gray-600">15 March 2022</p>
                  </div>
                </div>

                <button
                  className="
                    px-8 sm:px-10 py-4 sm:py-5 bg-black text-white font-bold text-base sm:text-lg
                    rounded-full flex items-center justify-center gap-3
                    shadow-xl shadow-black/20
                    hover:bg-gray-900 active:scale-98
                    transition-all duration-300
                    w-full sm:w-auto
                  "
                >
                  View Products
                  <div
                    className="
                      w-8 h-8 bg-white rounded-full
                      flex items-center justify-center
                      shadow-md shadow-black/20
                      flex-shrink-0
                    "
                  >
                    <Play className="w-4 h-4 text-black" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="relative w-full lg:h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[640px] lg:rounded-br-4xl lg:rounded-tr-4xl overflow-hidden">
              <img
                src="Hero.png"
                alt="Tech gadgets flatlay"
                className="w-full h-full object-cover"
                width={660}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


