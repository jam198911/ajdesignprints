import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    id: 1,
    title: "Eco-Friendly Box Design",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludGluZyUyMHByZXNzJTIwb2Zmc2V0JTIwcHJpbnRlciUyMGRpZ2l0YWwlMjBwcmludGluZyUyMGhpZ2glMjBxdWFsaXR5JTIwcGFwZXJ8ZW58MXx8fHwxNzcxNzM1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Luxury Hoodie Printing",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1577876050215-134d70691e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwcmludGVkJTIwdC1zaGlydCUyMGJ1c2luZXNzJTIwY2FyZCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Matte Finish Ceramic Mug",
    category: "Merchandise",
    image: "https://images.unsplash.com/photo-1766848482243-4379ac576b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtdWclMjBwcmludGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Juice Box Design & Printing",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1760278041741-085d84aae77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwbW9uaXRvciUyMGNvbG9yJTIwcGFsZXR0ZSUyMHByaW50JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzE3MzUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-pink-500 font-bold tracking-widest text-xs uppercase mb-3 block">Finished Works</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
            Explore Our Recently <br /> <span className="text-teal-600">Finished Projects Gallery</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Take a look at some of the high-quality print and design projects we've recently completed for our valued clients.
          </p>
        </div>
        <button className="px-8 py-4 bg-white border-2 border-zinc-900 text-zinc-900 rounded-full font-bold hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
          Browse All Works
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-[32px] overflow-hidden shadow-xl"
          >
            <ImageWithFallback 
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-teal-600/20 backdrop-blur-md rounded-full text-teal-400 text-xs font-bold mb-3 border border-teal-500/30">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
