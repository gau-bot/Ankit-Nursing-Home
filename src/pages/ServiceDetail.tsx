import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { PhoneCall, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);
  const WHATSAPP_NUMBER = "916371487256";
  const PHONE_NUMBER = "+91 63714 87256";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20looking%20for%20${service?.title}%20services.`;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} Services in Nagpur | Ankit Nursing & Caretaker</title>
        <meta name="description" content={`Professional ${service.title.toLowerCase()} services in Nagpur. ${service.shortDesc} Book verified caregivers today.`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={service.image} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900"></div>
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-400 mb-6 backdrop-blur-md border border-teal-500/30">
            {React.cloneElement(service.icon, { className: 'h-8 w-8 text-teal-400' })}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            {service.title} in Nagpur
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-teal-600" /> Who Needs This Service?
                </h2>
                <ul className="space-y-4">
                  {service.whoNeedsIt.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-teal-500 shrink-0"></div>
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-600" /> What is Included?
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h2>
                <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-teal-500 pl-6 py-2 bg-teal-50/50 rounded-r-xl">
                  {service.benefits}
                </p>
              </div>
            </div>

            {/* Sidebar Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Book {service.title}</h3>
                <p className="text-slate-500 mb-8 text-sm">Our experts are available 24/7 to assist you. Get a verified caregiver deployed quickly.</p>
                
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="flex justify-center items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-bold text-white hover:bg-slate-800 transition-colors"
                  >
                    <PhoneCall className="h-5 w-5" />
                    Call Now
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 rounded-xl bg-teal-600 px-6 py-4 text-base font-bold text-white hover:bg-teal-700 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
                
                <hr className="my-6 border-slate-100" />
                <div className="text-xs text-center text-slate-500 font-medium">
                  Service provided directly by Ankit Nursing & Caretaker Services in Nagpur.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
