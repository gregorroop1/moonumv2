import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "10 Safety Tips for Operating Heavy Excavators",
    date: "OCT 24, 2023",
    image: "https://images.unsplash.com/photo-1541888081622-eeaeeec9a37e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Choosing the Right Equipment for Your Next Big Project",
    date: "NOV 12, 2023",
    image: "https://images.unsplash.com/photo-1581403285741-6e84d4fb4b8e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Importance of Regular Machinery Maintenance",
    date: "DEC 05, 2023",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white text-black w-full flex justify-center">
      <div className="max-w-7xl w-full px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-md">
            <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
              News & Articles
            </span>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-tight">
              Equipment Insights<br/>& Updates
            </h2>
          </div>
          
          <button className="hidden md:flex bg-transparent border border-gray-300 hover:border-black text-black px-6 py-2 rounded-full font-bold uppercase text-sm tracking-wide items-center gap-2 transition-colors">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="w-full h-64 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase rounded-md tracking-wider">
                  {post.date}
                </div>
              </div>
              <h3 className="font-oswald text-2xl font-bold uppercase mb-4 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm font-bold uppercase border-b-2 border-transparent group-hover:border-black inline-flex pb-1 transition-all">
                Read More <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
