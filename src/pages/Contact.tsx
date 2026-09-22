import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PhoneCall, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const WHATSAPP_NUMBER = "916371487256";
  const PHONE_NUMBER = "+91 63714 87256";
  const EMAIL = "info@ankitnursing.com";
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ankit Nursing services in Nagpur</title>
        <meta name="description" content="Contact Ankit Nursing & Caretaker Services in Nagpur for 24/7 home nursing, patient care, and elderly caretaker services. Call or WhatsApp us today." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          We are available 24/7 to answer your queries and dispatch caregivers immediately in emergencies.
        </p>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600 mb-2">Available 24 hours a day for immediate deployment.</p>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-lg font-bold text-teal-600 hover:text-teal-700">{PHONE_NUMBER}</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-600 mb-2">Send us a message for quick details and consultation.</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#25D366] hover:text-[#20bd5a]">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Office Address</h3>
                    <p className="text-slate-600 text-lg leading-snug">Near Saloni Kirana Store, Bara Kholi,<br/>Jaripatka, Nagpur – 440014</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600 mb-2">For non-urgent inquiries and partnerships.</p>
                    <a href={`mailto:${EMAIL}`} className="text-lg font-bold text-teal-600 hover:text-teal-700">{EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
               
               {formStatus === 'success' ? (
                 <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <Send className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                    <p className="text-sm">Thank you for Reaching out. We will call you back shortly.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-6 text-sm font-bold text-green-700 hover:underline"
                    >
                      Send another message
                    </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                        placeholder="e.g. +91 63714 87256"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                      <select 
                        id="service" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Patient Care">Patient Care</option>
                        <option value="Bedridden Care">Bedridden Care</option>
                        <option value="24/7 Attendant">24/7 Attendant</option>
                        <option value="Mother & Baby Care">Mother & Baby Care</option>
                        <option value="Post Surgery Care">Post Surgery Care</option>
                        <option value="Other">Other / Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message or Patient Condition Details</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
                        placeholder="Please briefly describe what kind of care is needed..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full flex justify-center items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white hover:bg-slate-800 transition-colors disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                    </button>
                 </form>
               )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
