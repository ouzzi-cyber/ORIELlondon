import Section from '../components/Section';

export default function Services() {
  return (
    <div className="bg-white">
      <Section
        subtitle="Consultancy"
        title="Professional Design & Survey"
        className="bg-brand-pink/20 pt-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-2xl font-serif text-brand-dark leading-snug">
               We begin by understanding how you want to live within your space.
            </p>
            <div className="bg-white p-8 border border-brand-pink shadow-sm">
              <h4 className="text-xs uppercase tracking-widest mb-6 font-bold text-brand-accent">During our visit:</h4>
              <ul className="space-y-3 text-sm text-brand-dark/70">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rounded-full"></div> Presentation of curated fabric samples</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rounded-full"></div> Technical and design consultancy</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rounded-full"></div> Professional laser measurement</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-accent rounded-full"></div> Selection of track and mounting systems</li>
              </ul>
            </div>
            <p className="text-sm italic text-brand-dark/50">Consultancy fee: £199 (redeemable against your project balance).</p>
          </div>
          <div className="aspect-square overflow-hidden rounded-full border-4 border-white shadow-2xl">
             <img src="https://www.dropbox.com/scl/fi/w01ergivv0opvmxv5zpjq/services-image.png?rlkey=wryutewx5kq3qnjou3te4wc6r&raw=1" alt="Consultation" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section title="Our Specialties" subtitle="Tailored to fit" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { t: "Bespoke Curtains", d: "Crafted on various systems: wave, flex, microflex." },
            { t: "Roman Blinds", d: "Perfectly tailored with premium mechanisms." },
            { t: "Sheers & Voiles", d: "Delicate translucent layers for soft light." },
            { t: "Automation", d: "Somfy integration and Smart Home connectivity." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-brand-pink bg-brand-pink/5 hover:bg-white transition-all text-center group">
               <h3 className="text-xl font-serif mb-4 group-hover:text-brand-accent">{item.t}</h3>
               <p className="text-xs text-brand-dark/50">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The Process" subtitle="Steps to Perfection" className="bg-brand-pink/20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { h: "1. Project Design", p: "Selection of fabrics, linings and finishing details." },
              { h: "2. The Tailoring", p: "Craftsmanship within our local workshop." },
              { h: "3. Installation", p: "Professional fitting and final garment dressing." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                 <span className="text-4xl font-serif text-brand-accent opacity-30">{i+1}</span>
                 <div>
                    <h5 className="text-lg font-serif mb-2">{step.h}</h5>
                    <p className="text-sm text-brand-dark/60 leading-relaxed">{step.p}</p>
                 </div>
              </div>
            ))}
         </div>
      </Section>
    </div>
  );
}
