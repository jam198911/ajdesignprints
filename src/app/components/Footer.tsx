import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Quelly<span className="text-teal-600">Print</span></span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              We provide high-quality printing and design solutions for businesses of all sizes. From digital to offset, we bring your vision to life.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 transition-all text-zinc-400 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Our Services", "How It Works", "Pricing Plan", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-600/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-teal-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Call Us Anytime</p>
                  <p className="text-sm font-semibold">+1 (555) 000-PRINT</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Email Support</p>
                  <p className="text-sm font-semibold">info@quellyprint.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-600/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-teal-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Our Location</p>
                  <p className="text-sm font-semibold">123 Printing Ave, Design City, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Subscribe to get the latest updates, news and special offers.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-teal-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-teal-600 rounded-full text-white font-bold hover:bg-teal-500 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2026 <span className="text-white font-bold">QuellyPrint</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-zinc-500 text-sm">
            Built with <Heart size={14} className="text-pink-500 fill-pink-500" /> for creators.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-xs transition-colors underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-xs transition-colors underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
