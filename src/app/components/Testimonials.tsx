import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const TESTIMONIALS = [
  {
    name: "John D. Nelson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    text: "Professional printing services with cutting-edge technology and exceptional quality. From business cards to large format banners, we bring your vision to life.",
    rating: 5
  },
  {
    name: "Emily Dalton",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    text: "The quality of the prints exceeded my expectations. Their team was professional and helpful throughout the entire design and printing process.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#001e18] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Stats */}
        <div className="lg:w-1/3 text-white">
          <div className="inline-flex items-center gap-2 text-[#ff3b5c] font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
            <span>Testimonials</span>
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
          </div>
          <h2 className="text-4xl font-black mb-8 leading-tight">
            What Saying Our Customers About Printing Service
          </h2>
          <div className="flex flex-col gap-2">
            <span className="text-6xl font-black text-[#00ff9d]">4.98</span>
            <div className="flex items-center gap-2">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ff3b5c] text-[#ff3b5c]" />)}
               <span className="text-xs font-bold text-gray-400">Trusted Rating</span>
            </div>
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-[40px] shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-[#00ff9d]/20">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#00ff9d] mb-6">
                <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex items-center gap-1 mb-6 text-[#ff3b5c]">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-gray-600 mb-8 italic text-sm md:text-base">"{t.text}"</p>
              
              <div className="flex flex-col">
                <h4 className="text-xl font-black text-[#003429]">{t.name}</h4>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
