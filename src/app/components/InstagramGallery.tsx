import { Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const IMAGES = [
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1602572558978-da80cb6c8672?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1560762484-813fc97650a0?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300&h=300"
];

export function InstagramGallery() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Corner Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff9d]/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff3b5c]/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
           <div>
              <div className="inline-flex items-center gap-2 text-[#ff3b5c] font-bold text-sm tracking-wider uppercase mb-4">
                 <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
                 <span>Follow Us</span>
                 <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
              </div>
              <h2 className="text-4xl font-black text-[#003429]">Instagram Gallery</h2>
           </div>
           <button className="hidden md:flex items-center gap-2 font-black text-[#ff3b5c] border-b-2 border-[#ff3b5c] pb-1 hover:text-[#003429] hover:border-[#003429] transition-all">
              @QUEL_PRINTING <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {IMAGES.map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white hover:border-[#00ff9d] transition-all duration-300"
             >
                <ImageWithFallback src={img} alt={`Insta ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="w-10 h-10 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
