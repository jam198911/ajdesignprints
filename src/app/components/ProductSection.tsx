import React from "react";
import { motion } from "motion/react";
import { Star, ShoppingBag, Heart, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Classic Cotton Hoodie",
    price: "$29.99",
    oldPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1577876050215-134d70691e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBwcmludGVkJTIwdC1zaGlydCUyMGJ1c2luZXNzJTIwY2FyZCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    tag: "Sale"
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug",
    price: "$12.99",
    oldPrice: "$15.99",
    image: "https://images.unsplash.com/photo-1766848482243-4379ac576b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtdWclMjBwcmludGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    tag: "Trending"
  },
  {
    id: 3,
    name: "Business Card (100pcs)",
    price: "$45.00",
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1760278041741-085d84aae77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwbW9uaXRvciUyMGNvbG9yJTIwcGFsZXR0ZSUyMHByaW50JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzE3MzUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    tag: "Premium"
  },
  {
    id: 4,
    name: "Eco-Friendly T-Shirt",
    price: "$24.99",
    oldPrice: "$34.99",
    image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludGluZyUyMHByZXNzJTIwb2Zmc2V0JTIwcHJpbnRlciUyMGRpZ2l0YWwlMjBwcmludGluZyUyMGhpZ2glMjBxdWFsaXR5JTIwcGFwZXJ8ZW58MXx8fHwxNzcxNzM1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    tag: "Eco"
  }
];

export const ProductSection = () => {
  return (
    <section className="py-24 px-6 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-pink-500 font-bold tracking-widest text-xs uppercase mb-3 block">Online Store</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
            See Our Printing Store Best <br /> <span className="text-teal-600">Featured Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden border border-zinc-100 group shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                <ImageWithFallback 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                    {product.tag}
                  </span>
                )}

                <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-md hover:bg-teal-600 hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-md hover:bg-teal-600 hover:text-white transition-colors">
                    <Eye size={18} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors shadow-lg">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="p-6 text-center">
                <div className="flex justify-center gap-1 mb-2 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-center items-center gap-2 font-bold">
                  <span className="text-pink-500">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-zinc-400 line-through text-sm">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
