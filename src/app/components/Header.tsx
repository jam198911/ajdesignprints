import React from "react";
import { Phone, Mail, Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-zinc-50 text-xs text-zinc-600 border-b border-zinc-100">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} className="text-teal-600" /> +1 (555) 000-PRINT</span>
          <span className="flex items-center gap-1"><Mail size={12} className="text-teal-600" /> info@quellyprint.com</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-teal-600">Facebook</a>
          <a href="#" className="hover:text-teal-600">Instagram</a>
          <a href="#" className="hover:text-teal-600">LinkedIn</a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900">Quelly<span className="text-teal-600">Print</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {["Home", "About", "Pages", "Shop", "Blog", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-zinc-700 hover:text-teal-600 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-600 hover:text-teal-600"><Search size={20} /></button>
          <div className="relative">
            <button className="p-2 text-zinc-600 hover:text-teal-600"><ShoppingBag size={20} /></button>
            <span className="absolute top-0 right-0 w-4 h-4 bg-teal-600 text-white text-[10px] rounded-full flex items-center justify-center">2</span>
          </div>
          <button className="hidden md:block px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-all shadow-sm">
            Get Quote
          </button>
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-100 p-4 absolute w-full shadow-xl">
          <div className="flex flex-col gap-4">
            {["Home", "About", "Pages", "Shop", "Blog", "Contact"].map((item) => (
              <a key={item} href="#" className="text-base font-medium text-zinc-700 hover:text-teal-600 py-2">
                {item}
              </a>
            ))}
            <button className="w-full py-3 bg-pink-500 text-white rounded-xl text-center font-semibold">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
