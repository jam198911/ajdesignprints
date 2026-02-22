import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Printer, Edit3, Monitor, ShoppingBag, Layers, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const tabs = [
  { id: "digital", label: "Digital Printing", icon: <Printer size={16} /> },
  { id: "design", label: "Design Services", icon: <Edit3 size={16} /> },
  { id: "web", label: "Web To Print", icon: <Monitor size={16} /> },
  { id: "merch", label: "Merchandise", icon: <ShoppingBag size={16} /> },
];

const content = {
  digital: {
    title: "High Quality HD Digital Printing",
    desc: "We offer top-of-the-line digital printing for flyers, brochures, business cards and more. Perfect for short runs and fast turnaround times.",
    image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcmludGluZyUyMHByZXNzJTIwb2Zmc2V0JTIwcHJpbnRlciUyMGRpZ2l0YWwlMjBwcmludGluZyUyMGhpZ2glMjBxdWFsaXR5JTIwcGFwZXJ8ZW58MXx8fHwxNzcxNzM1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: ["Fast delivery in 24h", "Competitive pricing", "Vibrant CMYK colors", "Eco-friendly inks"]
  },
  design: {
    title: "Expert Graphic Design & Creative Solutions",
    desc: "Our creative team helps you bring your brand to life. From logo design to complex layout projects, we ensure your message is clear and professional.",
    image: "https://images.unsplash.com/photo-1760278041741-085d84aae77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwbW9uaXRvciUyMGNvbG9yJTIwcGFsZXR0ZSUyMHByaW50JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzE3MzUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: ["Branding & Logos", "Packaging Design", "Custom Illustrations", "Print-ready files"]
  },
  web: {
    title: "Seamless Web-to-Print Ordering System",
    desc: "Order your prints online with ease. Our integrated platform allows you to upload designs, preview results, and track shipments in real-time.",
    image: "https://images.unsplash.com/photo-1758271941610-dbf5ce7d3c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHNob3AlMjBzdGFmZiUyMHdvcmtpbmclMjB3aXRoJTIwbWFjaGluZXMlMjBoaWdoJTIwcXVhbGl0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNzM1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: ["Online editor", "Real-time proofing", "Saved templates", "Secure payment"]
  },
  merch: {
    title: "Customized Merchandise & Promotional Products",
    desc: "Extend your brand to everyday items. We print on mugs, apparel, stationery, and corporate gifts with durable, high-quality finishes.",
    image: "https://images.unsplash.com/photo-1766848482243-4379ac576b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtdWclMjBwcmludGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE3MzUyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    points: ["Screen printing", "Sublimation", "Embroidered apparel", "Bulk discounts"]
  }
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState("digital");

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-pink-500 font-bold tracking-widest text-xs uppercase mb-3 block">Our Services</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
          We Provide High Quality <br /> <span className="text-teal-600">HD Printing Services</span>
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeTab === tab.id
                ? "bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-100 scale-105"
                : "bg-white text-zinc-600 border-zinc-100 hover:border-teal-200 hover:bg-teal-50"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative bg-zinc-50 rounded-[40px] p-8 md:p-12 min-h-[500px] border border-zinc-100 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                {content[activeTab].title}
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {content[activeTab].desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content[activeTab].points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-teal-600" />
                    </div>
                    <span className="text-zinc-700 font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-teal-600 transition-all shadow-md">
                  Explore Details
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-video lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                <ImageWithFallback 
                  src={content[activeTab].image}
                  alt={content[activeTab].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
