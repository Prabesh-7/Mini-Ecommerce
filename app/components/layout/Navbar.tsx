// src/components/layout/Navbar.tsx
"use client";

import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              ECOM
            </h1>
          </div>

          
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "Products", "Blog", "Contact", "About us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors relative py-1 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons - Right side */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} strokeWidth={2.2} />
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} strokeWidth={2.2} />
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={2.2} />
            </a>
          </div>

          {/* Mobile menu button (optional - can be expanded later) */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}