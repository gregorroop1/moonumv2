import ctaImg from '../assets/images/JCB_Kopp_Ekskavaator_NoBG.png';

const CTASection = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] text-black w-full flex justify-center relative overflow-hidden">
      <div className="max-w-6xl w-full px-8 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Image (Excavator) - styled to break out of container a bit */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img 
            src={ctaImg} 
            alt="Ekskavaator" 
            className="absolute -bottom-20 -left-10 w-[120%] h-auto md:w-[130%] object-contain scale-110 md:scale-125 z-20 drop-shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left pt-12 md:pt-0 z-30 relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
            Kindel valik ekskavaatorite rendiks
          </h2>
          <p className="text-gray-500 mb-8 max-w-sm">
            Töökindlad ekskavaatorid ja kopad, mis vastavad sinu ehitus- ja kaevetööde vajadustele. Renditehnika, millele võid alati loota.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="bg-primary hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors border-none">
              Broneeri kohe
            </button>
            <button className="bg-transparent border-2 border-black hover:bg-black hover:text-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors">
              Võta ühendust
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
