export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-28 md:pt-20 md:pb-40 overflow-hidden">
     
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#e5e7eb11_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb11_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
       
          <div className="relative">
          
            <div className="relative rounded-3xl bg-[#e6f4f1] p-8 md:p-10 lg:p-12 shadow-xl overflow-hidden border-4 border-purple-500/40">
              <div className="absolute inset-0 border-4 border-purple-400/30 rounded-3xl blur-sm opacity-70"></div>

            
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                <span className="text-amber-600 font-bold">🔥</span>
                <span className="font-semibold text-gray-800 text-sm">Hot Deals</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                Enjoy 10% off in all
                <br className="hidden sm:block" />
                our products.
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua enim ad minim veniam.
              </p>

         
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                  $ Lorem
                </span>
                <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                  ♾️ Epsom
                </span>
              </div>

           
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden shadow-sm">
                  
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">John Smith</p>
                    <p className="text-sm text-gray-500">15 March 2022</p>
                  </div>
                </div>

                <button className="
                  px-9 py-4.5 bg-black text-white font-semibold text-base
                  rounded-full flex items-center gap-3
                  hover:bg-gray-900 transition-all shadow-lg
                  active:scale-98
                ">
                  View Products
                  <span className="text-lg" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3.2] max-w-[680px] mx-auto">
          
              <img
                src="https://thumbs.dreamstime.com/b/assorted-tech-gadgets-white-background-including-wireless-earbuds-charging-case-smartwatch-black-strap-pair-422033714.jpg"
                alt="Tech accessories flat lay"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />

         
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

     
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}