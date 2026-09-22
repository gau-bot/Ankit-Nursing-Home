import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "5 Benefits of Patient Care at Home in Nagpur",
    excerpt: "Discover why an increasing number of families are choosing professional home nursing over extended hospital stays for post-surgery recovery.",
    date: "August 12, 2023",
    readTime: "4 min read",
    category: "Patient Care",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Choose the Right 24 Hour Caretaker",
    excerpt: "Finding a trustworthy caretaker is crucial. Learn the key questions to ask and credentials to verify before hiring round-the-clock help.",
    date: "September 05, 2023",
    readTime: "6 min read",
    category: "Elderly Care",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bedridden Care: Tips for Preventing Bedsores",
    excerpt: "Bedsores are a severe risk for immobilized patients. A comprehensive guide on posture changing routines and hygiene maintenance.",
    date: "October 20, 2023",
    readTime: "5 min read",
    category: "Bedridden Care",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Healthcare Insights & Blog | Ankit Nursing Nagpur</title>
        <meta name="description" content="Read our latest articles on elderly care, home nursing tips, and patient rehabilitation by the experts at Ankit Nursing & Caretaker Services." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Healthcare Insights & Blog
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Expert advice, caregiving tips, and news from our professional nursing team.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-teal-600 font-bold text-sm inline-flex items-center gap-1 hover:text-teal-700 cursor-pointer">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center text-slate-500 font-medium bg-white p-6 rounded-2xl border border-dashed border-slate-300">
             You are viewing the demo blog archive. More articles are added monthly.
          </div>
        </div>
      </section>
    </>
  );
}
