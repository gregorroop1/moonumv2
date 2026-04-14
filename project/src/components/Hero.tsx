import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/images/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-between">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Overlay gradients for text readability (adjusted for light background) */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/80 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>

      {/* Top Center Content (Below Navbar) */}
      <div className="relative z-10 w-full pt-36 flex flex-col items-center pointer-events-none">
        <h1 className="text-black font-oswald text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-bold uppercase tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.9)]">
          RASKETEHNIKA <span className="text-primary ml-1 md:ml-2">RENT</span>
        </h1>
        <div className="flex items-center gap-6 mt-4">
          <div className="h-[2px] w-8 bg-black/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <h2 className="text-black/80 font-oswald text-xl md:text-2xl uppercase tracking-[0.3em] font-medium drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
            RAJATUD USALDUSELE
          </h2>
          <div className="h-[2px] w-8 bg-black/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full px-6 lg:px-16 pb-16 flex flex-col md:flex-row items-end justify-between">
        
        {/* Bottom Left: Paragraph and Button */}
        <div className="max-w-md w-full pointer-events-auto">
          <p className="text-gray-700 text-sm leading-relaxed mb-8 border-l-2 border-primary pl-4">
            Pakume usaldusväärset rasketehnikat sinu ehitusprojektide jaoks. Rendi kvaliteetne tehnika lihtsalt ja õigeaegselt oma eelarve piires.
          </p>
          <button className="bg-primary hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold uppercase text-[13px] tracking-wider flex items-center gap-3 transition-all hover:gap-5 border-none group shadow-[0_4px_14px_0_rgba(255,193,7,0.39)]">
            Rendi Kohe
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Right: Optional Pagination or empty space to balance */}
        <div className="hidden md:flex flex-col gap-3 pointer-events-auto">
           <div className="w-2 h-2 rounded-full bg-primary/20 hover:bg-primary cursor-pointer transition-colors"></div>
           <div className="w-2 h-2 rounded-full bg-primary cursor-pointer shadow-[0_0_8px_0_rgba(255,193,7,0.5)]"></div>
           <div className="w-2 h-2 rounded-full bg-primary/20 hover:bg-primary cursor-pointer transition-colors"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

