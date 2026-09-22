import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  PhoneCall, MessageCircle, HeartPulse, ShieldCheck, 
  UserCheck, Clock, Users, Award, FileCheck 
} from 'lucide-react';
import { servicesData } from '../data/services'; // We will create this

export default function Home() {
  const WHATSAPP_NUMBER = "916371487256";
  const PHONE_NUMBER = "+91 63714 87256";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20looking%20for%20home%20nursing%2Fcaretaker%20services.`;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Trusted Home Nursing Services in Nagpur | Ankit Nursing & Caretaker Services</title>
        <meta name="description" content="Professional 24/7 home nursing, elderly care, and patient caretaker services in Nagpur. Certified, background-verified staff. Call us today!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white pt-12 sm:pt-20 pb-20 sm:pb-32 overflow-hidden border-b border-slate-200">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs sm:text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Available 24×7 in Nagpur, Maharashtra
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Trusted Home Nursing & Care Services <span className="text-teal-600">in Nagpur</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                Don't wait when health is at stake. Get compassionate, vetted professionals dispatched to your home within hours to maintain dignity and comfort for your loved ones.
              </p>
              
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:shadow-teal-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all"
                >
                  <PhoneCall className="h-6 w-6" />
                  Call Now
                </motion.a>
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 hover:bg-slate-800 transition-all"
                >
                  <MessageCircle className="h-6 w-6 text-green-400" />
                  WhatsApp Now
                </motion.a>
              </div>
              
              <div className="mt-8 flex items-center flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-500" />
                  <span>Verified Staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-teal-500" />
                  <span>Certified Professionals</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative rounded-3xl bg-slate-100 object-cover overflow-hidden aspect-[4/3] ring-1 ring-slate-200/50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop" 
                  alt="Compassionate caregiver supporting an elderly patient"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Trust Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] sm:w-auto sm:max-w-none sm:left:-8 sm:-left-8 sm:-translate-x-0 sm:bottom-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-10"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">4.9 Rated | 250+ Families Served</div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-500">10+ Years of Trusted Care</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Comprehensive Care Services
            </h2>
            <p className="text-lg text-slate-600">
              We provide tailored home health solutions to meet the unique requirements of every patient.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={fadeUpVariant}>
                <Link 
                  to={`/services/${service.id}`}
                  className="group flex flex-col h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:-translate-y-2 hover:shadow-2xl hover:border-teal-300 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {service.shortDesc}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2 mt-auto text-teal-700 font-bold text-sm w-max group-hover:bg-teal-50 group-hover:gap-3 transition-all">
                    View Details <span aria-hidden="true">&rarr;</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/services"
              className="inline-flex justify-center items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Why Families in Nagpur Choose Us
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                This service is provided by Ankit Nursing & Caretaker Services. We prioritize the safety, comfort, and well-being of your loved ones above all else with our stringent standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Verified Caregivers</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">Rigorous background checks and identity verification for every staff member.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Trained Professionals</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">Medically trained personnel equipped to handle specific health conditions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Quick Response</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">Emergency and urgent care deployment within hours in Nagpur limits.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <HeartPulse className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Compassionate Care</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">We treat your family members with the dignity and respect they deserve.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.6 }}
               className="relative"
            >
               <div className="aspect-square sm:aspect-auto sm:h-[600px] w-full rounded-3xl overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Nurse reviewing chart with family"
                    className="w-full h-full object-cover"
                  />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={fadeUpVariant}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
              Securing professional home care is quick and straightforward.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-200 -translate-y-4 -z-10"></div>

            {[
              { step: "1", title: "Contact Us", desc: "Call or WhatsApp us to share your specific requirement and medical condition.", icon: PhoneCall },
              { step: "2", title: "Match Caregiver", desc: "We select the most suitable, verified professional based on your needs.", icon: Users },
              { step: "3", title: "Care Begins", desc: "The caregiver arrives at your home and begins providing professional support.", icon: ShieldCheck },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative z-10 flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mb-6 ring-8 ring-white shadow-sm">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={fadeUpVariant}
             className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by over 250+ families in Nagpur. Here are some of their experiences.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "Pooja Sharma", review: "Highly professional and caring staff. They took exceptional care of my mother post-surgery." },
              { name: "Rahul Deshmukh", review: "Quick response and trained caregivers. The team is very reliable when you need urgent help." },
              { name: "Sneha Patil", review: "Extremely reliable and affordable services. The staff is polite, punctual, and very supportive." },
              { name: "Amit Verma", review: "They ensured safe and comfortable patient care for my bedridden grandfather. Highly recommended." }
            ].map((testimonial, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-teal-300 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Award className="w-24 h-24" />
                </div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 font-medium mb-8 flex-1 leading-relaxed relative z-10 text-lg">"{testimonial.review}"</p>
                <div className="flex items-center gap-3 relative z-10">
                   <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold">
                      {testimonial.name.charAt(0)}
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs font-semibold text-teal-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Verified Patient</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-slate-900 text-center px-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={fadeUpVariant}
           className="mx-auto max-w-4xl relative z-10"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Need Urgent Home Care Now? <br className="hidden sm:block" />
            <span className="text-teal-400">Our Experts Are Standing By.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-10">
            Do not compromise on your loved one's health. Reach out to our experts for immediate, verified caregiver deployment across Nagpur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-teal-500 px-10 py-5 text-xl font-bold text-white shadow-lg hover:bg-teal-400 transition-colors"
            >
              <PhoneCall className="h-6 w-6" />
              Call Now
            </motion.a>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-white px-10 py-5 text-xl font-bold text-slate-900 shadow-lg hover:bg-slate-100 transition-colors"
            >
              <MessageCircle className="h-6 w-6 text-green-600" />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
