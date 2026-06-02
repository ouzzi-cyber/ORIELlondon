import Section from '../components/Section';

export default function Portfolio() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1544208450-48419688469a?auto=format&fit=crop&q=80",
      caption: "Classic linen drapery in a modern Chelsea apartment.",
      area: "CHELSEA"
    },
    {
      image: "https://images.unsplash.com/photo-1615876234886-df9a39f37552?auto=format&fit=crop&q=80",
      caption: "Ceiling-mounted tracks integrated with architectural cornices.",
      area: "MAYFAIR"
    },
    {
      image: "https://images.unsplash.com/photo-1621295245842-83508190772d?auto=format&fit=crop&q=80",
      caption: "Layered sheer and blockout treatments for a bedroom suite.",
      area: "HAMPSTEAD"
    },
    {
      image: "https://images.unsplash.com/photo-1594913785202-58389bbc3379?auto=format&fit=crop&q=80",
      caption: "Minimalist Roman blinds for a contemporary kitchen space.",
      area: "RICHMOND"
    }
  ];

  return (
    <div className="bg-white">
      <Section
        subtitle="Portfolio"
        title="Our Selected Projects"
        className="bg-brand-pink/20 pt-40"
      >
        <div className="max-w-2xl mb-24">
           <p className="text-4xl font-serif text-brand-dark leading-tight">
             A collection of London residences designed with <span className="text-brand-accent italic">proportion</span> and architectural restraint.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group space-y-6">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                 <img 
                  src={project.image} 
                  alt={project.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              <div className="flex justify-between items-start">
                 <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">{project.area}</span>
                    <h3 className="text-xl font-serif">{project.caption}</h3>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-24 text-center border-t border-brand-pink bg-brand-pink/10">
         <p className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">
           Authentic installations. Real craftsmanship.
         </p>
      </section>
    </div>
  );
}
