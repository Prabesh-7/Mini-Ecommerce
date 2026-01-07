
import { Play, Tags } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative  min-h-225 overflow-hidden">


      {/*left container */}
      <div className="relative mx-auto w-full max-w-screen-2xl px-5 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Positioning context with controlled height */}
        <div className="relative h-200 xl:h-225">
          {/* Card */}
          <div
            className="
              absolute top-10 left-20  z-20
              w-155 h-160
              bg-[#E7FAFE] rounded-bl-4xl rounded-tl-4xl
              p-8 sm:p-10 lg:p-12
              
            "
          >
            {/* Hot Deals badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm mb-8">
            
              <img src="/hot deals.png" alt="Hot Deals" className="h-[24px] w-[24px]" />
             <span className="font-inter font-semibold text-[14px] leading-none tracking-[-0.02em] text-black">
              Hot Deals
            </span>

            </div>

 

            <h1 className="font-inter font-semibold text-[64px] leading-none tracking-[-0.04em] text-gray-900 mb-6">
            Enjoy 10% of in all
            <br/>
            our products.
            </h1>


            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm font-semibold">
             $
            </div>
          <span className="font-inter  text-[14px] leading-none tracking-[-0.02em] text-black">
           Lorem
          </span>
          </span>

            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-200">
            <Tags className="w-5 h-5 text-black" />
            <span className="font-inter  text-[14px] leading-none tracking-[-0.02em] text-black">
             Epsom
             </span>
            </span>
            </div>

            <div className="flex flex-col mt-20 sm:flex-row sm:items-center justify-between gap-8">
              <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center shadow-sm overflow-hidden">
            <img 
            src="/John.png" 
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
                  px-10 py-5 bg-black text-white font-bold text-lg
                  rounded-full flex items-center gap-3
                  shadow-xl shadow-black/20
                  hover:bg-gray-900 active:scale-98
                  transition-all duration-300
                "
              >
                View Products
                <div
                  className="
                    w-8 h-8 bg-white rounded-full
                    flex items-center justify-center
                    shadow-md shadow-black/20
                  "
                >
                  <Play className="w-4 h-4 text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT image – exact specs */}
          <div
            className="
              absolute top-10 right-20 left-175  h-160
            "
          >
            <img
              src="/Hero.png"
              alt="Tech gadgets flatlay"
              className="w-full h-full object-cover"
              width={660}
              height={640}
           
            />
          </div>
        </div>
      </div>
    </section>
  );
}


