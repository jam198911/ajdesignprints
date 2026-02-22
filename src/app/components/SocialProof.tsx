import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "John D. Stone",
    role: "CEO, Stone Digital",
    quote: "The quality of the prints exceeded our expectations. The colors are vibrant and the turnaround was incredibly fast. Highly recommended for any professional business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Marketing Manager",
    quote: "Our brand looks fantastic on the custom merchandise. QuellyPrint has become our go-to partner for all our promotional material and event branding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Freelance Designer",
    quote: "As a designer, I'm very picky about color accuracy. QuellyPrint delivers perfect results every time. Their attention to detail is truly impressive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const partners = ["Walmart", "Shopify", "Airbnb", "Dropbox", "Google", "Netflix"];

export const SocialProof = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Partners */}
        <div className="mb-24">
          <p className="text-center text-zinc-400 font-bold uppercase tracking-widest text-xs mb-12">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
            {partners.map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tighter hover:text-teal-600 transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-zinc-900 rounded-[48px] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            <div className="lg:col-span-1">
              <span className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-4 block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                What Saying Our <br /> <span className="text-teal-400">Customers About</span> Printing Service
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {testimonials.map((t) => (
                    <div key={t.id} className="w-12 h-12 rounded-full border-4 border-zinc-900 overflow-hidden shadow-xl">
                      <ImageWithFallback src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-zinc-900 bg-pink-500 flex items-center justify-center text-white text-xs font-bold shadow-xl">
                    +1K
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 text-yellow-500 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-white font-bold text-sm">4.98 <span className="text-zinc-500 font-normal">Average Rating</span></p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(0, 2).map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[32px] p-8 relative shadow-2xl"
                >
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 transform rotate-12">
                    <Quote size={20} fill="currentColor" />
                  </div>
                  <p className="text-zinc-600 leading-relaxed mb-8 italic pt-4">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-500 shadow-lg">
                      <ImageWithFallback src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{t.name}</h4>
                      <p className="text-xs text-zinc-500 font-medium">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
