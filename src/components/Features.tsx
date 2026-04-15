import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Mail, Server, Layout, Zap } from 'lucide-react';

const features = [
  {
    title: "Hosting",
    description: "Fast, secure, and reliable hosting for any website.",
    icon: Server,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Security",
    description: "Protect your data and build trust with SSL certificates.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Email",
    description: "Professional email addresses that match your domain.",
    icon: Mail,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "WordPress",
    description: "The world's most popular website builder, optimized.",
    icon: Layout,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-[24px] font-bold text-text-dark mb-3">
              Buy a domain and everything else you need
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              From high-performance hosting to professional email and advanced security tools — build your dream project with the industry's lowest prices.
            </p>
          </div>

          <div className="flex gap-5">
            {[Server, Mail, ShieldCheck].map((Icon, i) => (
              <div 
                key={i}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
              >
                <Icon size={24} className="text-primary-orange" />
              </div>
            ))}
          </div>
        </div>

        {/* Extended Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-border-color hover:shadow-soft transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <a href="#" className="text-primary-orange font-bold text-sm hover:gap-3 flex items-center gap-2 transition-all">
                Learn more <Zap size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
