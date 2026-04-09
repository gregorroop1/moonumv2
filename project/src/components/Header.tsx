import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-8 lg:px-16 text-white font-['Syncopate',_sans-serif]">
      {/* Logo */}
      <div className="flex items-center gap-1 cursor-pointer group">
        <span className="text-[1.75rem] font-light tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity">MO</span>
        <div className="relative w-[1.75rem] h-[1.75rem] flex items-center justify-center -ml-1">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            {/* Outer Circle */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" className="opacity-90 group-hover:opacity-100 transition-opacity" />
            {/* Inner Crescent */}
            <path d="M 65 15 A 45 45 0 0 1 65 85 A 35 35 0 0 0 65 15 Z" fill="currentColor" stroke="none" className="opacity-70 group-hover:opacity-90 transition-opacity" />
          </svg>
        </div>
        <span className="text-[1.75rem] font-light tracking-[0.2em] -ml-2 opacity-90 group-hover:opacity-100 transition-opacity">NUM</span>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-12 text-[11px] tracking-[0.2em] font-medium">
        <div className="relative group cursor-pointer">
          <span className="text-white hover:opacity-100 transition-opacity">AVALEHT</span>
          <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-[#f8c5d9]"></div>
        </div>
        <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">TEENUSED</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">MEIST</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">ARTIKLID</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">HINNAKIRI</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">KONTAKT</a>
      </nav>

      {/* CTA Button */}
      <button className="flex items-center gap-4 bg-[#e5e5e5] hover:bg-white text-black px-7 py-3.5 rounded-[2rem] text-[11px] font-bold tracking-[0.1em] transition-all group">
        <span className="opacity-80">VÕTA ÜHENDUST</span>
        <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
      </button>
    </header>
  );
};

export default Header;
