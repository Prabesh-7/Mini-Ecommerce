import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A142F] text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div className="w-full">
            <h3 className="mb-6 text-lg font-semibold sm:text-xl">Title</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400 sm:text-base">
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
            </div>
          </div>

          <div className="w-full">
            <h3 className="mb-6 text-lg font-semibold sm:text-xl">Title</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400 sm:text-base">
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
            </div>
          </div>

          <div className="w-full lg:pt-12">
            <div className="flex flex-col gap-4 text-sm text-gray-400 sm:text-base">
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
              <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-xs text-gray-400 sm:flex-row sm:text-sm">
            <div className="flex items-center gap-6 sm:gap-8">
              <Twitter className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
              <Linkedin className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
              <Facebook className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              <span className="cursor-pointer transition-colors hover:text-white whitespace-nowrap">Copyright</span>
              <span className="cursor-pointer transition-colors hover:text-white whitespace-nowrap">Terms and conditions</span>
              <span className="cursor-pointer transition-colors hover:text-white whitespace-nowrap">Product Website</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




// import { Twitter, Linkedin, Facebook } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-[#0A142F] text-white pt-16 pb-12">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         {/* Main footer links sections */}
//         <div className="
//           grid grid-cols-1 gap-12 
//           sm:grid-cols-2 
//           lg:grid-cols-3 
//           xl:grid-cols-4 
//           mb-20
//         ">
//           {/* Column 1 */}
//           <div>
//             <h3 className="mb-6 text-xl font-semibold tracking-tight">
//               Title
//             </h3>
//             <div className="flex flex-col gap-4 text-base text-gray-400">
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h3 className="mb-6 text-xl font-semibold tracking-tight">
//               Title
//             </h3>
//             <div className="flex flex-col gap-4 text-base text-gray-400">
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <h3 className="mb-6 text-xl font-semibold tracking-tight">
//               Title
//             </h3>
//             <div className="flex flex-col gap-4 text-base text-gray-400">
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//               <p className="cursor-pointer transition-colors hover:text-white">Subtitle</p>
//             </div>
//           </div>

//           {/* Column 4 - empty or for future use */}
//           <div className="hidden lg:block" />
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-white/15 pt-10">
//           <div className="
//             flex flex-col items-center gap-6 
//             sm:flex-row sm:justify-between 
//             text-sm text-gray-400
//           ">
//             {/* Social Icons */}
//             <div className="flex items-center gap-8">
//               <Twitter 
//                 className="h-5 w-5 cursor-pointer transition-colors hover:text-white" 
//               />
//               <Linkedin 
//                 className="h-5 w-5 cursor-pointer transition-colors hover:text-white" 
//               />
//               <Facebook 
//                 className="h-5 w-5 cursor-pointer transition-colors hover:text-white" 
//               />
//             </div>

//             {/* Links */}
//             <div className="
//               flex flex-wrap justify-center gap-6 
//               sm:gap-10 
//               text-center
//             ">
//               <span className="cursor-pointer transition-colors hover:text-white">
//                 Copyright
//               </span>
//               <span className="cursor-pointer transition-colors hover:text-white">
//                 Terms and conditions
//               </span>
//               <span className="cursor-pointer transition-colors hover:text-white">
//                 Product Website
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }