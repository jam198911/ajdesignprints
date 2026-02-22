import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PARTNERS = [
  { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { name: "Fedex", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express_logo.svg/2560px-FedEx_Express_logo.svg.png" },
  { name: "Target", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/2560px-Target_logo.svg.png" }
];

const POSTS = [
  {
    title: "Distinctively leverage into bleeding-edge leadership services",
    date: "24 Sept, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600&h=400",
    color: "bg-[#eef2ff]"
  },
  {
    title: "Global Printing All-Days Shop Modern Digital Printing Machine",
    date: "25 Sept, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?auto=format&fit=crop&q=80&w=600&h=400",
    color: "bg-[#e1fdf4]"
  },
  {
    title: "Global Popular Print Design In Modern Digital Printing",
    date: "26 Sept, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600&h=400",
    color: "bg-[#fff2e6]"
  }
];

export function BlogAndPartners() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Partners */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-24 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
           {PARTNERS.map((p, i) => (
             <div key={i} className="h-10">
                <img src={p.logo} alt={p.name} className="h-full w-auto object-contain" />
             </div>
           ))}
        </div>

        {/* Blog */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#ff3b5c] font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
            <span>Latest News & Blog</span>
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#003429] mb-8 leading-tight">
            Stay Update Read Our Latest<br />Insights From Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Featured Post */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className={`group p-8 rounded-[40px] ${POSTS[0].color} flex flex-col gap-6`}
           >
              <div className="aspect-[16/10] rounded-[30px] overflow-hidden">
                 <ImageWithFallback src={POSTS[0].image} alt={POSTS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#ff3b5c]" /> {POSTS[0].date}</span>
                    <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#ff3b5c]" /> {POSTS[0].author}</span>
                 </div>
                 <h3 className="text-3xl font-black text-[#003429] hover:text-[#ff3b5c] transition-colors cursor-pointer leading-tight">{POSTS[0].title}</h3>
                 <button className="flex items-center gap-2 font-black text-[#003429] border-b-2 border-transparent hover:border-[#ff3b5c] w-fit group-hover:text-[#ff3b5c] transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </motion.div>

           {/* Small Posts */}
           <div className="flex flex-col gap-8">
              {POSTS.slice(1).map((post, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`group p-6 rounded-[30px] ${post.color} flex flex-col md:flex-row gap-6 h-full`}
                >
                   <div className="md:w-1/3 aspect-square rounded-2xl overflow-hidden shrink-0">
                      <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   </div>
                   <div className="flex flex-col justify-center gap-4">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                         <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#ff3b5c]" /> {post.date}</span>
                         <span className="flex items-center gap-1"><User className="w-3 h-3 text-[#ff3b5c]" /> {post.author}</span>
                      </div>
                      <h4 className="text-xl font-black text-[#003429] hover:text-[#ff3b5c] transition-colors cursor-pointer leading-tight">{post.title}</h4>
                      <button className="flex items-center gap-2 font-black text-sm text-[#003429] border-b-2 border-transparent hover:border-[#ff3b5c] w-fit group-hover:text-[#ff3b5c] transition-all">
                         Read More <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="mt-16 text-center">
           <button className="bg-[#003429] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all flex items-center gap-2 mx-auto shadow-xl shadow-[#003429]/20">
              VIEW ALL NEWS <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  );
}
