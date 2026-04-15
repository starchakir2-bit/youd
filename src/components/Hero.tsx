import React from 'react';
import { motion } from 'motion/react';
import { Search, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden min-h-[480px] flex flex-col items-center justify-center py-20 px-4"
      style={{ background: 'var(--bg-hero-gradient)' }}
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [15, 20, 15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] right-[15%] opacity-15"
        >
          <Send size={80} className="text-white" />
        </motion.div>
        
        <div className="absolute bottom-[-50px] left-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-sm"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-[56px] font-extrabold text-white mb-8 tracking-[-1.5px] leading-tight"
        >
          Make more online, for less
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[720px] mx-auto mb-6"
        >
          <div className="bg-white p-2 rounded-full flex shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
            <input
              type="text"
              placeholder="Register a domain name to start"
              className="flex-grow bg-transparent border-none px-6 py-4 text-lg text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button 
              className="px-10 py-4 text-white font-bold rounded-full transition-all shadow-lg"
              style={{ background: 'var(--bg-orange-gradient)' }}
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Hero Actions */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-6 py-2.5 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-sm backdrop-blur-md hover:bg-white/20 transition-all">
            Register
          </button>
          <button className="px-6 py-2.5 rounded-full bg-white/15 border border-white/20 text-white font-semibold text-sm backdrop-blur-md hover:bg-white/20 transition-all">
            Transfer
          </button>
        </div>

        {/* Pricing Hints */}
        <div className="flex flex-wrap justify-center gap-6 text-white/90 text-[12px] font-bold tracking-wider uppercase">
          <div className="flex items-center gap-1.5">
            <span>.COM</span>
            <span className="text-[#6EE7B7]">$6.79</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>.NET</span>
            <span className="text-[#6EE7B7]">$12.48</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>.IO</span>
            <span className="text-[#6EE7B7]">$29.98</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>.CO</span>
            <span className="text-[#6EE7B7]">$8.45</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>.ORG</span>
            <span className="text-[#6EE7B7]">$7.12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
