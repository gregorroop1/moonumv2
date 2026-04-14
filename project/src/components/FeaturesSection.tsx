import { Shield, Clock, Wrench } from 'lucide-react';
import hooldatudImg from '../assets/images/Hooldatud_ekskavaatorid.png';
import paindlikImg from '../assets/images/paindlik_kopa_rent.jpeg';
import klienditugiImg from '../assets/images/kopa_renditugi.jpeg';

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white text-black w-full flex justify-center">
      <div className="max-w-7xl w-full px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
            Miks valida just meid
          </span>
          <h2 className="text-5xl font-oswald font-bold uppercase tracking-tight mb-6">
            Korraliku rasketehnika rent.
          </h2>
          <p className="text-gray-500">
            Pakume kvaliteetse rasketehnika renti ehitus- ja pinnasetöödeks. Kõik meie ekskavaatorid on hooldatud õigeaegselt tagamaks kopa järjepideva töö objektidel. Meie masinad tagavad töökindluse, ohutuse ja efektiivsuse ka kõige nõudlikumates projektides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Large Bento Box */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
            <img 
              src={hooldatudImg} 
              alt="Hooldatud ekskavaatorid" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-primary/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-black" />
              </div>
              <h3 className="text-white font-oswald text-3xl font-bold uppercase mb-2">Regulaarselt hooldatud</h3>
              <p className="text-gray-200 block max-w-md">Meie masinaparki hooldatakse ja kontrollitakse hoolikalt, et tagada maksimaalne tööaeg ja operaatori ohutus.</p>
            </div>
          </div>

          {/* Small Bento Box 1 */}
          <div className="relative rounded-3xl overflow-hidden group bg-gray-100">
             <img 
              src={paindlikImg} 
              alt="Paindlik rent" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
               <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <Clock className="text-black w-5 h-5" />
              </div>
              <h3 className="text-white font-oswald text-xl font-bold uppercase">Paindlik rent</h3>
            </div>
          </div>

          {/* Small Bento Box 2 */}
          <div className="relative rounded-3xl overflow-hidden group bg-gray-900">
             <img 
              src={klienditugiImg} 
              alt="24/7 klienditugi" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-8 left-8 right-8 text-center flex flex-col items-center">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-black" />
              </div>
              <h3 className="text-white font-oswald text-2xl font-bold uppercase mb-2">24/7 klienditugi</h3>
              <button className="mt-4 px-6 py-2 border border-white text-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
