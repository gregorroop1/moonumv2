import tuulekodaLogo from '@/assets/images/tuulekoda-logo.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-6 text-zinc-900 w-full">
      {/* Left side Logo and Navigation */}
      <div className="flex items-center gap-10 text-[13px] uppercase font-semibold tracking-wider">
        <div className="flex items-center mr-2">
          <img src={tuulekodaLogo} alt="Tuulekoda Logo" className="h-16 w-auto object-contain" />
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-primary hover:text-yellow-600 transition-colors flex items-center gap-2 relative">
            <span className="w-1.5 h-1.5 bg-primary rounded-full absolute -left-4"></span>
            Avaleht
          </a>
          <a href="#" className="text-zinc-600 hover:text-zinc-950 transition-colors">Kataloog</a>
          <a href="#" className="text-zinc-600 hover:text-zinc-950 transition-colors">Teenused</a>
          <a href="#" className="text-zinc-600 hover:text-zinc-950 transition-colors">Meist</a>
          <a href="#" className="text-zinc-600 hover:text-zinc-950 transition-colors">Kontakt</a>
        </div>
      </div>

      {/* Right side Logo and CTA */}
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-primary hover:bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold uppercase text-[13px] tracking-wider transition-colors border-none shadow-[0_4px_14px_0_rgba(255,193,7,0.39)]">
            Rendi Kohe
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

