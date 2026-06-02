import React from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import { BadgeCheck, Briefcase, Users, Handshake, Mail, ArrowRight } from 'lucide-react';

export default function Trade() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-pink/20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold mb-4 block"
          >
            Partnership Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-brand-dark mb-8"
          >
            The Trade Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/70 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            Our Trade Partner program is perfect for interior designers, architects, specifiers and showrooms.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <Section title="Design Professional Benefits" subtitle="Why partner with Oriel London" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <BadgeCheck className="text-brand-accent" size={32} />,
              title: "Trade Pricing",
              desc: "Exclusive professional rates across our entire range of bespoke curtains, blinds, and hardware."
            },
            {
              icon: <Briefcase className="text-brand-accent" size={32} />,
              title: "Project Management",
              desc: "Dedicated account managers to oversee measurements, logistics, and professional installation."
            },
            {
              icon: <Users className="text-brand-accent" size={32} />,
              title: "Sampling Service",
              desc: "Fast-track access to our curated fabric library and custom finish samples for your client presentations."
            }
          ].map((benefit, i) => (
            <div key={i} className="text-center space-y-6 p-8 border border-brand-pink/30 hover:border-brand-accent/20 transition-colors">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-serif text-brand-dark">{benefit.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Collaboration Message */}
      <section className="py-24 bg-brand-dark text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <Handshake size={48} className="mx-auto text-brand-pink/50" />
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Need assistance with your next project?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed italic">
            "Let us connect you to our credentialed interiors professionals who love styling, designing, building or otherwise. We look forward to seeing what you create together!"
          </p>
          <div className="pt-8">
             <a 
              href="mailto:trade@oriellondon.studio" 
              className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand-pink transition-all group"
            >
              Apply for an Account <Mail size={14} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Content for Professionals Area */}
      <Section title="Bespoke Without Compromise" subtitle="Our Expertise" centered className="bg-brand-pink/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <p className="text-brand-dark/70 leading-relaxed">
              We understand the complexities of luxury residential and commercial projects. From oversized windows requiring specialized motorized systems to the subtle interplay of light through artisanal linens.
            </p>
            <ul className="space-y-4">
              {[
                "Complimentary white-label measure and survey",
                "Technical specification advice for architects",
                "Integration with whole-home automation",
                "Local London craftsmanship and workrooms"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-dark">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                  <span className="text-sm uppercase tracking-widest font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400" alt="Trade Design 1" className="w-full aspect-[3/4] object-cover" />
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400" alt="Trade Design 2" className="mt-8 w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </Section>

      {/* CTA Join */}
      <section className="py-24 text-center">
        <h2 className="text-2xl font-serif mb-8">Ready to start a collaboration?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary">Apply Now</button>
          <button className="border border-brand-accent px-8 py-3 uppercase tracking-widest text-[10px] font-bold text-brand-accent hover:bg-brand-pink transition-colors">Request a Callback</button>
        </div>
      </section>
    </div>
  );
}
