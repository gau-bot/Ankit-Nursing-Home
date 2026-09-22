import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, HeartHandshake, History } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Trusted Home Nursing in Nagpur</title>
        <meta name="description" content="Learn about Ankit Nursing & Caretaker Services. With over 3 years of experience, we provide certified and compassionate home nursing services in Nagpur." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Ankit Nursing & Caretaker
            </h1>
            <p className="text-lg text-teal-400 font-medium tracking-wide uppercase">
            Compassionate Care, Professional Standards
            </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Based in Nagpur, <strong>Ankit Nursing & Caretaker Services</strong> has been a trusted pillar of support for over a decade, serving families navigating the challenges of health and elder care at home.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that healing and aging are most comfortable in a familiar environment. Our mission is to provide hospital-quality care and compassionate companionship directly to your doorstep.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-slate-100 aspect-square border border-slate-200">
                <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Professional nurse" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Families Trust Us</h2>
            <p className="text-lg text-slate-600">Our foundation is built on rigorous standards and human empathy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "10+ Years Experience", desc: "Proven track record of serving 250+ families across Nagpur.", icon: History },
              { title: "Verified Staff", desc: "Comprehensive background and identity verification for every caretaker.", icon: ShieldCheck },
              { title: "4.9 Star Rated", desc: "Consistently rated 4.9 by our community for exceptional service.", icon: Award },
              { title: "Empathy First", desc: "We prioritize dignity, respect, and emotional support for patients.", icon: HeartHandshake }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
