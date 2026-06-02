import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe, Truck, Scissors, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const location = useLocation();

  const messages = [
    "FREE SAMPLES SHIPPING",
    "Stop Guessing. Book a Design Consultation Before Costly Mistakes Happen"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowMegaMenu(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasMega: true },
    { name: 'Trade', path: '/trade' },
    { name: 'Contact', path: '/booking' },
  ];

  const services = [
    { title: 'Bespoke Curtains', image: 'https://www.dropbox.com/scl/fi/5wahcffxt5ytepuamlq1u/curtains.png?rlkey=e6zlcjwuc727gtn2st6guc0bf&raw=1' },
    { title: 'Roman Blinds', image: 'https://www.dropbox.com/scl/fi/tacbwnpxkt68epcgm3ico/roman-blind.png?rlkey=9gnw3n0qpbtjjm8kzcvy3ze3x&raw=1' },
    { title: 'Sheer Layering', image: 'https://www.dropbox.com/scl/fi/acg6ss4tn747dt5pepn4a/Sheer-Layering.png?rlkey=k7ubitv70l39xqnf2gn6kajvx&raw=1' },
    { title: 'Motorised Systems', image: 'https://www.dropbox.com/scl/fi/l21pusgjj7xmu0l8hvlbs/Motorised-Systems.png?rlkey=6xy0d5709vdwmvh3z9l6lda4a&raw=1' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-accent/5">
        <div className="announcement-bar w-full h-10 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-[9px] uppercase tracking-[0.4em] font-bold px-4 text-center leading-none"
            >
              {messages[currentMessage]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="group flex flex-col items-center">
            <span className="text-3xl font-serif tracking-[-0.05em] leading-none text-brand-dark group-hover:text-brand-accent transition-colors">
              ORIEL
            </span>
            <span className="text-[7px] uppercase tracking-[0.9em] text-brand-accent mt-1 ml-2 font-bold">
              LONDON
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 h-full">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative h-full flex items-center group"
                onMouseEnter={() => link.hasMega && setShowMegaMenu(true)}
                onMouseLeave={() => link.hasMega && setShowMegaMenu(false)}
              >
                <Link
                  to={link.path}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-1 relative ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent transition-colors'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-accent transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                  {link.hasMega && <ChevronDown size={14} className={`transition-transform duration-500 ${showMegaMenu ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Desktop Mega Menu Dropdown */}
                <AnimatePresence>
                  {link.hasMega && showMegaMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-brand-pink/50 p-10 z-[70] grid grid-cols-2 gap-10"
                    >
                      {services.map((service, idx) => (
                        <Link key={idx} to="/services" className="group/mega flex items-start gap-6">
                          <div className="w-24 h-28 overflow-hidden rounded-sm shrink-0 shadow-sm">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover/mega:scale-110 transition-transform duration-1000" />
                          </div>
                          <div className="pt-2">
                            <h4 className="text-base font-serif mb-2 group-hover/mega:text-brand-accent transition-colors">{service.title}</h4>
                            <p className="text-[8px] text-brand-dark/40 uppercase tracking-[0.3em] font-bold">Explore Service</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-8">
             <a href="https://buy.stripe.com/00w14mfxo4aUcJB1xpenS01" target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:block !px-6 !py-3">Book Now</a>
             <button
                className="md:hidden text-brand-dark p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-brand-pink/50 border-t border-brand-accent/5 py-2">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-y-2 gap-x-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group">
                <Globe size={12} className="text-brand-accent" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-brand-dark">International Shipping</span>
                  <span className="text-[7px] text-brand-dark/50">Enquire for details</span>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <Truck size={12} className="text-brand-accent" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-brand-dark">Free Delivery</span>
                  <span className="text-[7px] text-brand-dark/50">On bespoke orders</span>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <Scissors size={12} className="text-brand-accent" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-brand-dark">Fabric Samples</span>
                  <span className="text-[7px] text-brand-dark/50">Fast & Free Service</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 border-l border-brand-accent/10 pl-6 h-6">
               <a href="tel:+4407544936603" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                 <Phone size={12} className="text-brand-accent" />
                 <span className="text-[10px] font-bold font-serif whitespace-nowrap">+44 07544 936603</span>
               </a>
               <a href="mailto:hello@oriellondon.com" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                 <Mail size={12} className="text-brand-accent" />
                 <span className="text-[10px] font-bold font-serif whitespace-nowrap">hello@oriellondon.com</span>
               </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-brand-accent/5 overflow-hidden shadow-xl"
            >
              <div className="px-6 py-12 flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-2xl font-serif text-brand-dark hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                    <a href="https://buy.stripe.com/00w14mfxo4aUcJB1xpenS01" target="_blank" rel="noopener noreferrer" className="btn-primary text-center block w-full">Book Consultation</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-[160px]"></div> {/* Adjusted height for info bar */}
    </>
  );
}
