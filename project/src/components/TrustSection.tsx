import { ArrowRight } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-24 bg-white text-black w-full flex flex-col items-center overflow-hidden">
      
      {/* Top Part */}
      <div className="max-w-6xl w-full px-8 flex flex-col md:flex-row items-center justify-between mb-20 relative">
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          {/* Placeholder for the backhoe image */}
          <div className="absolute -left-20 top-0 w-[120%] h-[120%]">
             <img 
              src="https://images.unsplash.com/photo-1541888081622-eeaeeec9a37e?q=80&w=800&auto=format&fit=crop" 
              alt="Backhoe" 
              className="w-full h-full object-cover rounded-3xl [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12 z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-6xl md:text-7xl font-oswald font-bold uppercase tracking-tighter mb-4 text-gray-900 leading-none">
            Built On<br/>Trust
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Get everything you need for your operations in one place. We offer the best quality equipment, meticulously maintained for peak performance.
          </p>
          <button className="bg-primary hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide flex items-center gap-2 transition-all hover:gap-4 border-none group">
            Rent Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Part - Wide Image */}
      <div className="w-full max-w-7xl px-8 mb-16">
        <div className="w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop" 
            alt="Construction Wide" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="w-full max-w-5xl px-8 flex flex-wrap justify-between items-center text-center gap-8">
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-2 mt-0">25+</h3>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-2 mt-0">40+</h3>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-2 mt-0">24/7</h3>
        </div>
      </div>

    </section>
  );
};

export default TrustSection;
