import { Star, Users, Briefcase, Award, Zap, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export function CoreFeatures() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff9d]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff3b5c]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Stats and Info */}
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 text-[#ff3b5c] font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
            <span>Core Features</span>
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#003429] mb-8 leading-tight">
            Printing Facilities<br />Demandable Core Features
          </h2>
          
          <div className="flex items-center gap-12 mb-10">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-black text-[#00ff9d]">10K+</span>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Premium Clients</span>
            </div>
            <div className="flex flex-col gap-2">
               <span className="text-5xl font-black text-[#ff3b5c]">15K+</span>
               <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Happy Clients</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[#ff3b5c] mb-4">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
             <span className="text-sm font-bold text-[#003429] ml-2">4.9/5 Rating</span>
          </div>
        </div>

        {/* Right Side: Feature Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#00ff9d] mb-4">
                <Zap className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-black text-[#003429] mb-2">High Quality Shop Printing</h4>
             <p className="text-sm text-gray-500">We provide premium quality printing for all business tools and promotional items.</p>
             <div className="absolute top-0 right-0 w-2 h-full bg-[#00ff9d]/0 group-hover:bg-[#00ff9d]/100 transition-all"></div>
          </div>

          {/* Card 2 - Red Highlighted */}
          <div className="bg-[#ff3b5c] p-8 rounded-3xl shadow-xl shadow-red-100 text-white relative overflow-hidden transform translate-y-6">
             <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                <Briefcase className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-black mb-2 text-white">Experienced Design Team Members</h4>
             <p className="text-sm text-white/80">Our team consists of expert designers and printing professionals with years of experience.</p>
             <div className="absolute bottom-2 right-2 opacity-10">
                <Users className="w-24 h-24" />
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                <ShieldCheck className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-black text-[#003429] mb-2">Famous Branding From Leading Brands</h4>
             <p className="text-sm text-gray-500">We are trusted by many leading brands for their professional printing and design needs.</p>
             <div className="absolute top-0 right-0 w-2 h-full bg-blue-500/0 group-hover:bg-blue-500/100 transition-all"></div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group transform translate-y-6">
             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-[#ff3b5c] mb-4">
                <Headphones className="w-6 h-6" />
             </div>
             <h4 className="text-lg font-black text-[#003429] mb-2">Connected Online Services</h4>
             <p className="text-sm text-gray-500">Our online services are available 24/7 for order tracking and professional support.</p>
             <div className="absolute top-0 right-0 w-2 h-full bg-[#ff3b5c]/0 group-hover:bg-[#ff3b5c]/100 transition-all"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
