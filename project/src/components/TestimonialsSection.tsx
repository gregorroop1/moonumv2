import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Tehnika oli suurepärases seisukorras. See aitas meil kaevetööd lõpetada kaks päeva enne tähtaega. Soovitan soojalt!",
    name: "GREGOR ROOP",
    role: "Projektijuht",
    avatar: ""
  },
  {
    id: 2,
    text: "Erakordne klienditugi ja kiire tarne. Olime hädas, kui meie enda laadur katki läks, ja Tuulekoda päästis päeva.",
    name: "GREGOR ROOP",
    role: "Objektijuht",
    avatar: ""
  },
  {
    id: 3,
    text: "Kasutame ainult Tuulekoda kogu oma rasketehnika vajaduste jaoks. Masinate kvaliteet ja läbipaistev hinnakujundus on ületamatud.",
    name: "GREGOR ROOP",
    role: "Ehitusdirektor",
    avatar: ""
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white text-black w-full flex flex-col items-center">
      <div className="max-w-6xl w-full px-8 text-center flex flex-col items-center">
        

        <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block border border-gray-200 px-4 py-1 rounded-full">
          Tagasiside
        </span>

        <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tighter mb-16">
          Mida kliendid<br/>meist arvavad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                {/* Blank Placeholder Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-200 border border-gray-300 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-primary hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-colors border-none">
          Vaata kõiki arvustusi
        </button>

      </div>
    </section>
  );
};

export default TestimonialsSection;
