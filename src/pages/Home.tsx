import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Section from '../components/Section';
import { ArrowRight, Star, ShieldCheck, Truck, PenTool, Ruler, Scissors, Sparkles, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Remove extra top padding to close gap with menu */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-pink/20 z-0"></div>
        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <img 
               src="https://www.dropbox.com/scl/fi/1gv9atjibfxonokj8o780/hero-image-oriel-london.png?rlkey=rtq9v2vmpcbx75bi6xh7tys7a&raw=1" 
               alt="Luxury window treatments" 
               className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold block mb-4">Established Excellence</span>
              <h1 className="editorial-heading text-brand-dark">
                 Bespoke <br />Artistry.
              </h1>
            </div>
            <p className="text-brand-dark/70 max-w-md text-lg leading-relaxed font-light">
               We redefine the architectural boundary of your home with precision-tailored window treatments. London's premier destination for custom drapes and artisanal blinds.
            </p>
            <div className="pt-4">
              <a href="https://buy.stripe.com/00w14mfxo4aUcJB1xpenS01" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-4 group">
                 Book a Consultation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar - Refined */}
      <div className="bg-white py-16 border-b border-brand-pink">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Star className="text-brand-gold" size={18} />, text: "Premium Craft" },
            { icon: <ShieldCheck className="text-brand-accent" size={18} />, text: "Lifelong Quality" },
            { icon: <Truck className="text-brand-accent" size={18} />, text: "White-Glove Fitting" },
            { icon: <ArrowRight className="text-brand-accent" size={18} />, text: "Free Estimation" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-brand-pink/50 flex items-center justify-center">
                {item.icon}
               </div>
               <span className="text-[14px] uppercase tracking-[0.3em] font-bold text-brand-dark/90">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The Collections - Modular Grid */}
      <Section
        subtitle="The Collections"
        title="Tailored to your architectural style"
        className="bg-white py-32"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[1000px]">
          <div className="md:col-span-8 group relative overflow-hidden h-[500px] lg:h-full">
            <img src="https://www.dropbox.com/scl/fi/ld8qt7buetlnjxqb7ayai/1-curtains.png?rlkey=zt23qt9ceff38vkktlpkmh6ej&raw=1" alt="Curtains" className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" />
            <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-brand-dark/80 to-transparent">
              <h3 className="text-3xl text-white mb-2">Bespoke Curtains</h3>
              <Link to="/services" className="text-[9px] uppercase tracking-[0.4em] text-brand-pink font-bold hover:underline">Explore Collection</Link>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 group relative overflow-hidden h-[400px]">
              <img src="https://www.dropbox.com/scl/fi/f8jdp0ahjcotd57llan8h/2-roman-blinds.png?rlkey=iqob0b54re69g6suwrkdn1a92&raw=1" alt="Roman Blinds" className="w-full h-full object-cover transition-all duration-1000" />
              <div className="absolute inset-0 flex flex-center p-8 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="mt-auto">
                    <h3 className="text-xl text-white mb-1">Roman Blinds</h3>
                </div>
              </div>
            </div>
            <div className="flex-1 group relative overflow-hidden h-[400px]">
              <img src="https://www.dropbox.com/scl/fi/xoe5sjce7lzageg0su128/3-motorized.png?rlkey=7gjpt6flx77gsbto7cmos12h8&raw=1" alt="Motorized" className="w-full h-full object-cover transition-all duration-1000" />
               <div className="absolute inset-0 flex items-end p-8 bg-brand-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl text-white">Motorised Systems</h3>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Editorial Spread / Philosophy */}
      <section className="bg-brand-pink/10 pt-40 pb-0 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
             <div className="space-y-12">
               <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.6em] text-brand-accent font-bold block underline decoration-brand-accent/20 underline-offset-8">Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1]">Where texture <br />meets <span className="italic font-normal">proportion.</span></h2>
               </div>
               <p className="text-brand-dark/60 text-lg leading-relaxed max-w-lg font-light">
                  Most window designs fail because they ignore the fundamental architecture of the room. We specialize in "Architectural Dressing"—the art of enhancing light pathing while respecting structural geometry.
               </p>
               <div className="grid grid-cols-2 gap-12 pt-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest">Heritage</h4>
                    <p className="text-xs text-brand-dark/50 leading-loose">Established in London's design district, we bring over a decade of artisanal mastery to every project.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest">Precision</h4>
                    <p className="text-xs text-brand-dark/50 leading-loose">Measurements to the millimeter. Stitches to the micron. Excellence is a matter of obsession.</p>
                  </div>
               </div>
             </div>
             <div className="relative">
                <div className="aspect-[4/5] bg-brand-pink shadow-xl ml-12 overflow-hidden rotate-2">
                   <img src="https://www.dropbox.com/scl/fi/mcbwozwukajhgk9lx1edi/mood-board-samples.png?rlkey=sabvt95eyfen5p9huurwlegm6&raw=1" alt="Philosophy" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-brand-dark p-12 text-white shadow-2xl max-w-xs -rotate-2">
                   <p className="font-serif italic text-xl">"A window is not a void. It is the primary light source of your narrative."</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Services - Text focused - Removed top padding to close gap with philosophy */}
      <section className="pt-0 pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24">
           {[
             { title: "In-home Consultation", desc: "Expert design advice brought to your doorstep across London and the South East." },
             { title: "Bespoke Production", desc: "Hand-finished in our London workrooms with meticulous attention to detail." },
             { title: "Master Installation", desc: "White-glove specialists ensuring the perfect fit and architectural alignment." }
           ].map((item, idx) => (
             <div key={idx} className="space-y-6 group">
                <h3 className="text-4xl font-serif text-brand-dark/30 group-hover:text-brand-accent transition-colors duration-500">0{idx + 1}</h3>
                <h4 className="text-4xl font-serif border-b border-brand-pink pb-6 leading-tight">{item.title}</h4>
                <p className="text-brand-dark/50 text-base leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Recent Works Carousel */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Portfolio</span>
              <h2 className="text-5xl font-serif">See our recent works</h2>
            </div>
            <Link to="/services" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-accent pb-2 hover:text-brand-accent transition-colors">
              View All Projects
            </Link>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6 px-6"
            drag="x"
            dragConstraints={{ left: -2500, right: 0 }}
          >
            {[
              { title: "Living Room", img: "https://www.dropbox.com/scl/fi/tpofphbcn6nf3wnnzgin8/living-room.png?rlkey=96x0vha44gh5gdi179zlpyhym&raw=1" },
              { title: "Bay Window", img: "https://www.dropbox.com/scl/fi/g4lk2tfm1y2t04xk0fm9w/bay-window.jpg?rlkey=7w5d6nvng92ustwo8ex8zfy8r&raw=1" },
              { title: "Cinema Room", img: "https://www.dropbox.com/scl/fi/7hr6j0nr113xk53ilmmh6/cinema-room-curtains.png?rlkey=7nauabdj11uxjmdma48ur1f0v&raw=1" },
              { title: "Guest Room", img: "https://www.dropbox.com/scl/fi/y85uz760tzm0ab0bw5gou/curtain.JPG?rlkey=fga44x2d05ceqonnzq10bpnw0&raw=1" },
              { title: "Curtain Living Room", img: "https://www.dropbox.com/scl/fi/b01h3jvf2scu0b40isng2/FHD-BERLIN-SALON-007-min.jpg?rlkey=48knlic743m0w19t47kluvqaj&raw=1" },
              { title: "Master Bedroom", img: "https://www.dropbox.com/scl/fi/d0v6kasmn3jcm8xkgou5o/master-bedroom.png?rlkey=oq3imc8lhpkcfi4vnk8rt5b8w&raw=1" },
              { title: "Walk-in Wardrobe", img: "https://www.dropbox.com/scl/fi/eha4k6cqtmifl9xeynlh3/roman-blind-trim.jpg?rlkey=ffy9abk9cy5csuk6id81ufqjl&raw=1" },
              { title: "Roman Blind Study", img: "https://www.dropbox.com/scl/fi/veoez83kvkxrkhpqwoygi/roman-blinds.png?rlkey=k4qd5xyaaocchi576n839vczh&raw=1" }
            ].map((work, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[450px] space-y-6 group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-serif text-brand-dark">{work.title}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/40 font-bold">Residential Project</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to action spread */}
      <section className="relative h-[60vh] flex items-center justify-center bg-brand-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 transition-transform duration-[10000ms] hover:scale-125">
          <img src="https://www.dropbox.com/scl/fi/ld8qt7buetlnjxqb7ayai/1-curtains.png?rlkey=zt23qt9ceff38vkktlpkmh6ej&raw=1" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center space-y-8 max-w-2xl px-6">
            <h2 className="text-4xl md:text-6xl font-serif">Ready to redefine <br />your space?</h2>
            <p className="text-brand-pink/70 text-lg font-light tracking-wide">Book a paid in-home consultation across London and receive focused, professional guidance on layout, colours, finishes, furniture and bespoke solutions before making expensive decisions.</p>
            <div className="pt-8">
               <a href="https://buy.stripe.com/00w14mfxo4aUcJB1xpenS01" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-white !text-brand-dark hover:!bg-brand-pink">Secure Your Appointment</a>
            </div>
        </div>
      </section>
    </div>
  );
}
