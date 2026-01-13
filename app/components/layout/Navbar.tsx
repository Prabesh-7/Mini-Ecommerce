"use client";

import { useState } from "react";
import { Twitter, Facebook, Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "Products", "Blog", "Contact", "About us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[16px] font-medium text-black relative py-1 group"
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

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <Facebook size={24} strokeWidth={2.4} />
            <Twitter size={24} strokeWidth={2.4} />
            <Instagram size={24} strokeWidth={2.4} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-6 pt-6">
              {["Home", "Products", "Blog", "Contact", "About us"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[16px] font-medium text-black"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-6 pt-6">
              <Facebook size={22} />
              <Twitter size={22} />
              <Instagram size={22} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
