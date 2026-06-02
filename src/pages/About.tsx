import Section from '../components/Section';

export default function About() {
  return (
    <div className="bg-white">
      <Section
        subtitle="Our Story"
        title="About ORIEL LONDON Studio"
        className="bg-brand-pink/20 pt-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-brand-dark">A passion for craft, an eye for detail.</h3>
            <p className="text-brand-dark/70 leading-relaxed">
              ORIEL LONDON is a boutique window treatment studio. Our mission is to create interiors that breathe — where light is controlled with elegance, and every fold of fabric has its purpose.
            </p>
            <p className="text-brand-dark/70 leading-relaxed">
              We believe bespoke is not just luxury, it is a perfect fit for your lifestyle. From modern apartments to classic period homes, we provide solutions that stand the test of time.
            </p>
          </div>
          <div className="relative">
             <img src="https://www.dropbox.com/scl/fi/prmu9xlpz27kdziwu60/sewing.png?rlkey=9zvu9qijzorep399bat6uhteh&raw=1" alt="Work in progress" className="w-full h-[500px] object-cover rounded-sm shadow-xl" />
             <div className="absolute -bottom-6 -left-6 bg-brand-accent p-8 text-white">
                <p className="text-xs uppercase tracking-widest font-bold">Local Craftsmanship</p>
                <p className="font-serif">London & South East</p>
             </div>
          </div>
        </div>
      </Section>

      <Section title="Our Standards" subtitle="Quality without compromise" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { t: "Precision Measurement", d: "We use laser-guided tools to ensure every millimetre is accounted for." },
            { t: "Fabric Curation", d: "We source our textiles from the finest mills across Europe." },
            { t: "In-House Fitting", d: "We never outsource our installations. We fit them ourselves." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-brand-pink hover:border-brand-accent transition-colors bg-brand-pink/10">
               <h4 className="text-xl font-serif mb-4 text-brand-accent">{item.t}</h4>
               <p className="text-sm text-brand-dark/60 font-light leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
