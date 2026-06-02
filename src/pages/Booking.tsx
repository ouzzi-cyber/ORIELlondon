import React, { useState } from 'react';
import Section from '../components/Section';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Booking() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = "w-full bg-white border border-brand-pink p-4 focus:ring-1 focus:ring-brand-accent outline-none transition-all text-sm placeholder:text-brand-dark/30";

  return (
    <div className="bg-white">
      <Section
        subtitle="Contact"
        title="Book your free survey"
        className="bg-brand-pink/20 pt-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-serif text-brand-dark">Let's create something beautiful together.</h3>
            <p className="text-brand-dark/70 font-light leading-relaxed">
              Leave your details, and we will call you back within 24 hours to arrange a convenient time for your in-home visit.
            </p>
            
            <div className="pt-8 space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">Our Studio</h4>
                <p className="text-sm">London and South East England</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">Email</h4>
                <p className="text-sm">hello@oriellondon.com</p>
              </div>
            </div>

            <div className="pt-12">
               <div className="w-full h-64 bg-gray-100 rounded-sm overflow-hidden border border-brand-pink shadow-inner relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=Designers%20Colours%20NW7%203NX&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
               </div>
               <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mt-4 text-center">Visit our showroom partner: Designers Colours</p>
            </div>

            <div className="pt-12 hidden lg:block">
               <img src="https://images.unsplash.com/photo-1544474677-515816912304?auto=format&fit=crop&q=80" alt="Studio" className="w-full h-80 object-cover rounded-sm border-4 border-white shadow-lg" />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-brand-pink shadow-xl ring-8 ring-brand-pink/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent" htmlFor="name">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Jane Doe" 
                      className={inputClasses}
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent" htmlFor="email">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="jane@example.com" 
                      className={inputClasses}
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent" htmlFor="phone">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder="+44 7000 000 000" 
                      className={inputClasses}
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent" htmlFor="location">Location</label>
                    <input 
                      id="location"
                      type="text" 
                      placeholder="e.g. Chelsea, London" 
                      className={inputClasses}
                      required
                      value={formState.location}
                      onChange={(e) => setFormState({...formState, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent" htmlFor="service">I am interested in:</label>
                  <select 
                    id="service"
                    className={inputClasses}
                    value={formState.service}
                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="curtains">Bespoke Curtains</option>
                    <option value="blinds">Roman Blinds</option>
                    <option value="automation">Automation</option>
                    <option value="survey">Full Measurement & Design</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-accent" htmlFor="message">Message (optional)</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your project..." 
                    className={inputClasses}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                >
                  Send Request <Send size={14} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="text-brand-accent" size={32} />
                </div>
                <h3 className="text-3xl font-serif">Thank you, {formState.name.split(' ')[0]}!</h3>
                <p className="text-brand-dark/60 font-light max-w-sm mx-auto">
                  Your request has been sent. We will get in touch with you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest font-bold text-brand-accent hover:text-brand-dark transition-colors"
                >
                  Back to form
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
