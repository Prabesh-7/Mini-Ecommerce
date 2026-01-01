"use client";

import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <h1
              className="text-[24px] font-[400] tracking-tight text-black"
              style={{
                fontFamily: "'Lobster', cursive",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              ECOM
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "Products", "Blog", "Contact", "About us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[16px] font-medium text-black hover:text-black transition-colors relative py-1 group"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "-2%",
                }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-black hover:text-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} strokeWidth={2.4} />
            </a>

            <a
              href="#"
              className="text-black hover:text-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} strokeWidth={2.4} />
            </a>

            <a
              href="#"
              className="text-black hover:text-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}