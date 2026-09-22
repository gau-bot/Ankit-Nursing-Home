import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const PHONE_NUMBER = "+91 63714 87256";
  const EMAIL = "info@ankitnursing.com"; // placeholder
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 inline-flex">
              <div className="relative h-14 w-14 shrink-0 flex items-center justify-center rounded-xl overflow-hidden shadow-sm ring-1 ring-white/10">
                <img src="/ankitnusringlogo.png" alt="Homenursings Logo" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight tracking-tight text-white hover:text-teal-400 transition-colors">
                  Homenursings
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  By Ankit Nursing & Caretaker Services
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-xs">
              Trusted, certified, and compassionate home healthcare and nursing services in Nagpur. Available 24/7.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">Services</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link to="/services/elderly-care" className="hover:text-teal-400 transition-colors">Elderly Care</Link></li>
              <li><Link to="/services/patient-care" className="hover:text-teal-400 transition-colors">Patient Care</Link></li>
              <li><Link to="/services/bedridden-care" className="hover:text-teal-400 transition-colors">Bedridden Care</Link></li>
              <li><Link to="/services/attendant" className="hover:text-teal-400 transition-colors">24/7 Attendant</Link></li>
              <li><Link to="/services/mother-baby-care" className="hover:text-teal-400 transition-colors">Mother & Baby Care</Link></li>
              <li><Link to="/services/post-surgery-care" className="hover:text-teal-400 transition-colors">Post-Surgery Care</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">Company</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">All Services</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">Contact Us</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <span>Near Saloni Kirana Store, Bara Kholi,<br/>Jaripatka, Nagpur – 440014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-500 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-500 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ankit Nursing & Caretaker Services. All rights reserved.
          </p>
          <div className="text-sm text-slate-500 flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
