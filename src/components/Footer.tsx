import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-white border-t border-brand-accent/20 pt-24 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="group inline-flex flex-col mb-8">
            <span className="text-3xl font-serif tracking-[-0.05em] leading-none text-white">
              ORIEL
            </span>
            <span className="text-[8px] uppercase tracking-[0.8em] text-brand-pink mt-1 ml-2 font-bold">
              LONDON
            </span>
          </Link>
          <p className="max-w-xs text-white/70 leading-relaxed mb-6">
            We create bespoke window treatments that combine architectural precision with the warmth of high-end textiles. Professional installation across London and the South East.
          </p>
          <div className="flex space-x-4">
             <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-pink hover:text-brand-accent cursor-pointer transition-colors">I</div>
             <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-pink hover:text-brand-accent cursor-pointer transition-colors">P</div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-8 font-bold text-brand-pink">Studio / Navigation</h4>
          <ul className="space-y-4 text-white/80">
            <li><Link to="/about" className="hover:text-brand-pink transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-brand-pink transition-colors">Services</Link></li>
            <li><Link to="/trade" className="hover:text-brand-pink transition-colors">Trade Partner Program</Link></li>
            <li><a href="https://buy.stripe.com/00w14mfxo4aUcJB1xpenS01" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Book a Consultation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-8 font-bold text-brand-pink">Contact</h4>
          <ul className="space-y-4 text-white/80">
            <li className="font-semibold text-white">hello@oriellondon.com</li>
            <li>London & South East England</li>
            <li className="pt-4 italic text-white/60">Please reach out via email or our booking form to arrange a measure.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-white/40 font-bold">
        <p>© {new Date().getFullYear()} ORIEL LONDON STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
