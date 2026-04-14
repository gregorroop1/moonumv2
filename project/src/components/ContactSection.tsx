import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] text-black w-full flex justify-center">
      <div className="max-w-6xl w-full px-8">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 border-2 border-primary/40 rounded-full px-4 py-2 text-primary font-semibold text-sm w-fit mb-8">
              <div className="bg-[#1A1B24] text-white w-6 h-6 rounded-full flex items-center justify-center">
                <Mail size={12} />
              </div>
              Võta meiega ühendust
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-oswald font-bold leading-[1.1] mb-6 tracking-tight">
              Küsi pakkumist<br/>ekskavaatori rendiks
            </h2>
            
            <p className="text-gray-500 mb-12 max-w-md text-sm md:text-base leading-relaxed">
              Kui sul on soov rentida ekskavaator siis helista meile, saada email otse või täida kontaktvorm. Kiire vastus ja paindlikud renditingimused üle Eesti.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-12 gap-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1B24] text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold text-sm">+372 5834 7300</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1B24] text-white flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="font-bold text-sm">Tuule, Kursi küla, Põltsamaa vald, Jõgevamaa 49007 / Tartu, Tartumaa</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1B24] text-white flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <span className="font-bold text-sm">info@tuulekoda.ee</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 lg:max-w-md w-full mx-auto">
            <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 h-full shadow-[0_8px_30px_rgb(255,193,7,0.3)] border border-yellow-300">
              <form className="flex flex-col gap-5 h-full justify-center">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-black/80 font-bold text-[13px] tracking-wide">Sinu nimi</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Nimi" 
                    className="w-full bg-black/5 placeholder-black/40 text-black border-none rounded-2xl px-6 py-[18px] text-sm focus:ring-2 focus:ring-black/20 outline-none transition-all font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-black/80 font-bold text-[13px] tracking-wide">E-posti aadress</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="E-post" 
                    className="w-full bg-black/5 placeholder-black/40 text-black border-none rounded-2xl px-6 py-[18px] text-sm focus:ring-2 focus:ring-black/20 outline-none transition-all font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-black/80 font-bold text-[13px] tracking-wide">Telefon (Valikuline)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Telefoninumber" 
                    className="w-full bg-black/5 placeholder-black/40 text-black border-none rounded-2xl px-6 py-[18px] text-sm focus:ring-2 focus:ring-black/20 outline-none transition-all font-medium"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-black/80 font-bold text-[13px] tracking-wide">Sõnum</label>
                  <textarea 
                    id="message"
                    placeholder="Kirjuta oma küsimus või sõnum siia..."
                    rows={4}
                    className="w-full bg-black/5 placeholder-black/40 text-black border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-black/20 outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="mt-6 bg-white hover:bg-gray-50 text-black font-bold transition-all rounded-full pl-2 pr-8 py-2 w-fit flex items-center justify-between gap-4 group shadow-sm active:scale-95"
                >
                  <div className="bg-[#1A1B24] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform">
                    <Send size={15} className="-ml-0.5 mt-0.5" />
                  </div>
                  <span className="text-[13px] tracking-wide">Saada</span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
