import React from "react";
import { motion } from "motion/react";
import { FileText, Settings, Printer, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload Your Design",
    desc: "Share your artwork or work with our creative design team to build a custom visual identity.",
    icon: <FileText size={32} className="text-pink-500" />,
    color: "bg-pink-50"
  },
  {
    id: 2,
    title: "Configure & Proof",
    desc: "Choose your materials, size, and quantity. We'll send a digital proof for your final approval.",
    icon: <Settings size={32} className="text-teal-600" />,
    color: "bg-teal-50"
  },
  {
    id: 3,
    title: "High Quality Print",
    desc: "We use state-of-the-art machinery and eco-friendly inks to ensure the highest quality results.",
    icon: <Printer size={32} className="text-pink-500" />,
    color: "bg-pink-50"
  },
  {
    id: 4,
    title: "Fast Delivery",
    desc: "Your order is carefully packaged and shipped right to your doorstep, anywhere in the world.",
    icon: <Truck size={32} className="text-teal-600" />,
    color: "bg-teal-50"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 relative bg-zinc-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/10 skew-x-12 transform origin-top-right translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-pink-500/5 -skew-x-12 transform origin-bottom-left -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-3 block">Simple Process</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            How Does <span className="text-teal-400">Quelly Works?</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We've streamlined our printing process to make it as simple and efficient as possible for our valued clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-zinc-800 rounded-full border border-white/10 flex items-center justify-center text-4xl font-black text-white/10 group-hover:text-teal-500/20 group-hover:scale-125 transition-all">
                {step.id}
              </div>

              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 transform group-hover:-rotate-6 transition-transform`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                  <ArrowRight size={24} className="text-teal-500/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition-all shadow-xl hover:shadow-pink-500/20">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};
