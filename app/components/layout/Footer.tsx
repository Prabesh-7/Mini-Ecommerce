import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A142F] text-white pt-16">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
       
        <div className="mb-20 flex flex-wrap items-start justify-between gap-x-10 gap-y-16 lg:gap-x-16 xl:gap-x-20">
        

          <div className="min-w-[200px] flex-1 ml-65">
            <h3 className="mb-8 text-[20px] font-semibold">Title</h3>
            <div className="flex flex-col gap-[38px] text-[15px] text-gray-400">
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
            </div>
          </div>

          <div className="min-w-[200px] flex-1">
            <h3 className="mb-8 text-[20px] font-semibold">Title</h3>
            <div className="flex flex-col gap-[38px] text-[15px] text-gray-400">
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
            </div>
          </div>

        
          <div className="min-w-[200px] flex-1">
            <div className="flex flex-col gap-[38px] text-[15px] text-gray-400 pt-[52px]">
          
              <p>Subtitle</p>
              <p>Subtitle</p>
              <p>Subtitle</p>
            </div>
          </div>
        </div>

      
        <div className="border-t border-white/20 pt-9">
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-400 sm:flex-row">
          
            <div className="flex items-center gap-10">
              <Twitter className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
              <Linkedin className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
              <Facebook className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <span className="cursor-pointer transition-colors hover:text-white">Copyright</span>
              <span className="cursor-pointer transition-colors hover:text-white">Terms and conditions</span>
              <span className="cursor-pointer transition-colors hover:text-white">Product Website</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}