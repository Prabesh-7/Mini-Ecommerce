import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
    
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
        
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Title</h3>
            <ul className="space-y-2 text-sm">
              <li>Subtitle</li>
              <li>Subtitle</li>
              <li>Subtitle</li>
              <li>Subtitle</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Title</h3>
            <ul className="space-y-2 text-sm">
              <li>Subtitle</li>
              <li>Subtitle</li>
              <li>Subtitle</li>
              <li>Subtitle</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Title</h3>
            <ul className="space-y-2 text-sm">
              <li>Subtitle</li>
              <li>Subtitle</li>
              <li>Subtitle</li>
              <li>Subtitle</li>
            </ul>
          </div>
        </div>

      
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
         
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span>Copyright</span>
              <span>Terms and conditions</span>
              <span>Product Website</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}