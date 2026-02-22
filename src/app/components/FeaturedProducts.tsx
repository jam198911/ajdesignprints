import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PRODUCTS = [
  { 
    name: "Full Steel Hoodie", 
    price: "$25.00", 
    oldPrice: "$35.00", 
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400&h=500", 
    tag: "Sale", 
    color: "bg-[#eef2ff]" 
  },
  { 
    name: "Black Coffee Cup", 
    price: "$12.00", 
    oldPrice: "$18.00", 
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400&h=500", 
    tag: "Hot", 
    color: "bg-[#e1fdf4]" 
  },
  { 
    name: "Green Travel Bag", 
    price: "$85.00", 
    oldPrice: "$120.00", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400&h=500", 
    tag: "New", 
    color: "bg-[#fff2e6]" 
  },
  { 
    name: "T-Shirt Mockup", 
    price: "$15.00", 
    oldPrice: "$22.00", 
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400&h=500", 
    tag: "Sale", 
    color: "bg-[#fdf2f8]" 
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white" id="shop">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#ff3b5c] font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
            <span>Featured Products</span>
            <span className="w-10 h-[2px] bg-[#ff3b5c]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#003429] mb-8 leading-tight">
            See Our Printing Store Best<br />Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className={`relative aspect-[3/4] rounded-[30px] overflow-hidden ${product.color} mb-6 p-6`}>
                <ImageWithFallback 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Action Buttons */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#003429] shadow-lg hover:bg-[#ff3b5c] hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#003429] shadow-lg hover:bg-[#ff3b5c] hover:text-white transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-[#ff3b5c] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#003429] transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="absolute top-4 left-4">
                  <div className="bg-[#ff3b5c] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    {product.tag}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-black text-[#003429] hover:text-[#ff3b5c] transition-colors cursor-pointer mb-2">{product.name}</h4>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-[#ff3b5c] font-black">{product.price}</span>
                  <span className="text-gray-400 font-bold line-through text-sm">{product.oldPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
