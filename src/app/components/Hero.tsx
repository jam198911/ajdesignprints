import React from "react";
import { motion } from "motion/react";
import { PlayCircle, ArrowRight, Printer, Palette, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 md:pt-0 overflow-hidden bg-gradient-to-br from-zinc-50 to-teal-50/20">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-xs font-semibold text-teal-700 shadow-sm animate-bounce-slow">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            Leading Printing Solution Provider
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 leading-[1.1] tracking-tight">
            Design Place <span className="text-pink-500 font-normal">+</span> <br />
            <span className="text-teal-600">Print Product</span>
          </h1>
          
          <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
            From concept to creation, we provide high-end printing services for all your business needs. Quality you can see, texture you can feel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg group">
              Start Printing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold hover:border-teal-400 hover:text-teal-600 transition-all shadow-sm">
              <PlayCircle size={20} className="text-pink-500" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-zinc-200">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="p-2 bg-white border border-zinc-100 rounded-lg shadow-sm">
                <Printer size={20} className="text-teal-600" />
              </div>
              <span className="text-sm font-semibold text-zinc-900 leading-tight">Fast Printing</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="p-2 bg-white border border-zinc-100 rounded-lg shadow-sm">
                <Palette size={20} className="text-pink-500" />
              </div>
              <span className="text-sm font-semibold text-zinc-900 leading-tight">Custom Design</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="p-2 bg-white border border-zinc-100 rounded-lg shadow-sm">
                <Truck size={20} className="text-teal-600" />
              </div>
              <span className="text-sm font-semibold text-zinc-900 leading-tight">Global Shipping</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          {/* Main Hero Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-pink-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1758271941610-dbf5ce7d3c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHNob3AlMjBzdGFmZiUyMHdvcmtpbmclMjB3aXRoJTIwbWFjaGluZXMlMjBoaWdoJTIwcXVhbGl0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNzM1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Printing Shop Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-white p-2 rounded-2xl shadow-xl border border-zinc-100 overflow-hidden transform rotate-6 z-20">
             <ImageWithFallback 
              src="https://images.unsplash.com/photo-1766848482243-4379ac576b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtdWclMjBwcmludGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mug mockup"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="absolute -top-6 -left-6 md:top-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 bg-pink-500 p-2 rounded-full shadow-lg border-4 border-white overflow-hidden z-20 animate-pulse-slow">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1577876050215-134d70691e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwcmludGVkJTIwdC1zaGlydCUyMGJ1c2luZXNzJTIwY2FyZCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="T-shirt mockup"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
