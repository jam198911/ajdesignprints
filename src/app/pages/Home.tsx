import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { HowItWorks } from "../components/HowItWorks";
import { Portfolio } from "../components/Portfolio";
import { ProductSection } from "../components/ProductSection";
import { SocialProof } from "../components/SocialProof";
import { Footer } from "../components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-pink-500 to-teal-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        
        {/* Quick Highlights Section */}
        <section className="py-12 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-80 animate-fade-in">
              <span className="flex items-center gap-3 font-bold text-sm tracking-tighter text-zinc-900">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 font-black">01</div>
                DIGITAL PRINTING
              </span>
              <span className="flex items-center gap-3 font-bold text-sm tracking-tighter text-zinc-900">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 font-black">02</div>
                DESIGN SERVICES
              </span>
              <span className="flex items-center gap-3 font-bold text-sm tracking-tighter text-zinc-900">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 font-black">03</div>
                HIGH QUALITY PRINT
              </span>
              <span className="flex items-center gap-3 font-bold text-sm tracking-tighter text-zinc-900">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 font-black">04</div>
                T-SHIRT PRINTING
              </span>
              <span className="flex items-center gap-3 font-bold text-sm tracking-tighter text-zinc-900">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 font-black">05</div>
                FLYER & BROCHURE
              </span>
            </div>
          </div>
        </section>

        <Services />
        
        <HowItWorks />
        
        <Portfolio />
        
        <ProductSection />
        
        <SocialProof />

        {/* Call to Action Section */}
        <section className="py-24 px-6 bg-teal-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Ready to Bring Your <br /> <span className="text-pink-300">Design to Life?</span>
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Get an instant quote today and experience the difference of high-quality professional printing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-white text-teal-600 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-white/20">
                Request a Quote
              </button>
              <button className="px-12 py-5 bg-zinc-900 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-black/20">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
