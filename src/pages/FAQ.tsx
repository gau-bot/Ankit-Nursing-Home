import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What areas in Nagpur do you provide home nursing services?",
    answer: "We provide comprehensive home nursing and caretaker services across all major localities within Nagpur city limits and surrounding areas. Contact us with your exact location for confirmation."
  },
  {
    question: "Are your caregivers and nurses medically certified?",
    answer: "Yes, all our staff members undergo rigorous background verification and are professionally trained or medically certified depending on the level of care required (e.g., patient care vs. daily attendant)."
  },
  {
    question: "Do you provide 24/7 caretaker services in Nagpur?",
    answer: "Absolutely. We offer 24-hour round-the-clock attendants, divided into seamless day and night shifts, ensuring your loved one is never left alone."
  },
  {
    question: "How quickly can a caregiver be assigned?",
    answer: "In most cases, especially for emergency patient care or post-surgery care, we can dispatch a verified caregiver to your doorstep within a few hours of your confirmed requirement."
  },
  {
    question: "Do you handle terminally ill or bedridden patients?",
    answer: "Yes, we specialize in bedridden care, preventing bedsores, managing feeding tubes (if directed), and providing absolute hygiene and dignity for immobilized or terminally ill patients."
  },
  {
    question: "What happens if a caregiver falls sick or takes leave?",
    answer: "Ankit Nursing & Caretaker Services guarantees uninterrupted care. If an assigned caregiver is unavailable, we promptly arrange a competent substitute to ensure there is no break in the patient's routine."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Ankit Nursing Nagpur</title>
        <meta name="description" content="Find answers to common questions about our 24/7 home nursing, patient care, and elderly caretaker services in Nagpur." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Everything you need to know about our home healthcare services.
        </p>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-teal-200 shadow-sm"
              >
                <button
                  type="button"
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                  <span className="text-teal-600 shrink-0">
                    {openIndex === idx ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </span>
                </button>
                
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-teal-50 rounded-3xl p-8 border border-teal-100">
             <h3 className="text-xl font-bold text-slate-900 mb-2">Have a different question?</h3>
             <p className="text-slate-600 mb-6">Our support team is available to assist you 24/7.</p>
             <a
                href="https://wa.me/916371487256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-teal-600 px-8 py-3 text-sm font-bold text-white hover:bg-teal-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
          </div>
        </div>
      </section>
    </>
  );
}
