import { ArrowRight, Grid3X3, Layers, Layout, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ExploreSection() {
  return (
    <section className="py-24 bg-[#e1fdf4] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff9d]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff3b5c]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col gap-8 relative">
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
               <ImageWithFallback src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=533" alt="Design 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl transform translate-y-12 rotate-[5deg] hover:rotate-0 transition-transform duration-500">
               <ImageWithFallback src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400&h=400" alt="Design 2" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute -bottom-10 right-0 w-32 h-32 bg-[#ff3b5c] rounded-full border-4 border-white flex flex-col items-center justify-center text-white text-center p-4 shadow-xl z-20">
             <span className="text-2xl font-black leading-none">10K+</span>
             <span className="text-[10px] font-bold uppercase leading-none mt-1">Free<br/>Graphics</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 text-[#ff3b5c] font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
            <span>Explore Now</span>
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#003429] mb-8 leading-tight">
            Explore 1,200+ Vectors, Icons, Images and Creative Graphics Resources
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Complete your projects with our massive library of premium assets. 
            Everything you need for your design and printing success.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { icon: <Palette className="w-5 h-5" />, label: "Vector Graphics" },
              { icon: <Grid3X3 className="w-5 h-5" />, label: "Creative Icons" },
              { icon: <Layout className="w-5 h-5" />, label: "UI Templates" },
              { icon: <Layers className="w-5 h-5" />, label: "Product Mockups" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#00ff9d]/20 rounded-lg flex items-center justify-center text-[#003429]">
                  {item.icon}
                </div>
                <span className="font-bold text-[#003429] text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          
          <button className="bg-[#003429] text-white w-fit px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-all flex items-center gap-2 shadow-xl shadow-[#003429]/20">
            EXPLORE NOW <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
