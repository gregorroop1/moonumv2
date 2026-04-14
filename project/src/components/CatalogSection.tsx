import { ArrowRight } from 'lucide-react';

const categories = ['Kõik', 'Ekskavaatorid', 'Traktorid'];

const machines = [
  {
    id: 1,
    name: 'JCB50z-2',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/KT/WD/PF/3763192/jcb-50z-mini-excavator.png',
    weight: '5 t',
    engine: '36kW',
    price: '450€',
    category: 'Ekskavaatorid'
  },
  {
    id: 2,
    name: 'AVANT 530',
    image: 'https://www.avatint.ee/wp-content/uploads/2022/03/Avant-528-768x6441-1.png',
    weight: '1.5 t',
    engine: '19kW',
    price: '380€',
    category: 'Traktorid'
  }
];

const CatalogSection = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] text-black w-full flex justify-center">
      <div className="max-w-7xl w-full px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
              Tehnika
            </span>
            <h2 className="text-5xl font-oswald font-bold uppercase tracking-tight">
              Meie Masinapark
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  i === 0 
                    ? 'bg-primary text-black border-primary' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine) => (
            <div key={machine.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-gray-100 rounded-xl mb-6 overflow-hidden relative">
                <img 
                  src={machine.image} 
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-oswald text-2xl font-bold uppercase mb-4">{machine.name}</h3>
              
              <div className="grid grid-cols-2 gap-y-2 mb-6 text-sm text-gray-500">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400">Kaal</span>
                  <span className="font-medium text-gray-900">{machine.weight}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400">Võimsus</span>
                  <span className="font-medium text-gray-900">{machine.engine}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400">Hind</span>
                  <div className="font-oswald text-xl font-bold text-primary">
                    {machine.price} <span className="text-sm text-gray-500 font-sans font-normal">/ päev</span>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors border-none">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
          
          {/* Explore More Card */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary transition-colors">
             <h3 className="font-oswald text-3xl font-bold uppercase mb-4 group-hover:text-black">Vaata<br/>Kõiki Masinaid</h3>
             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
               <ArrowRight className="text-black" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
