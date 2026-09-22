import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function Services() {
  const WHATSAPP_NUMBER = "916371487256";
  const PHONE_NUMBER = "+91 63714 87256";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20looking%20for%20home%20nursing%2Fcaretaker%20services.`;

  return (
    <>
      <Helmet>
        <title>Home Nursing & Caretaker Services in Nagpur | Ankit Nursing</title>
        <meta name="description" content="Explore our comprehensive home nursing services in Nagpur including Elderly care, Patient care, Bedridden care, 24/7 Attendants, and Post-surgery care." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Our Care Services
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Professional, certified, and compassionate home healthcare solutions tailored to fit the unique requirements of your loved ones in Nagpur.
        </p>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12">
            {servicesData.map((service, idx) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row">
                <div className={`md:w-1/3 shrink-0 ${idx % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <img src={service.image} alt={service.title} className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="p-8 sm:p-10 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-auto pt-4 border-t border-slate-100">
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-bold text-white shadow-md shadow-teal-600/20 hover:bg-teal-700 transition-colors"
                    >
                      <PhoneCall className="h-5 w-5" />
                      Book Now
                    </a>
                    <Link 
                      to={`/services/${service.id}`}
                      className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-slate-100 border border-slate-200 px-6 py-3.5 text-base font-bold text-slate-900 hover:bg-slate-200 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-slate-200 text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Not sure which service you need?</h2>
          <p className="text-slate-600 mb-8">Contact our experts for a free consultation. We will help you determine the best level of care for your family member.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            Discuss on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
