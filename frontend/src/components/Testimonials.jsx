import React from 'react';
import { Quote, Star, CheckCircle2, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Malhotra",
      role: "Senior IT Professional",
      content: "Shivam's approach to SIP planning transformed how I view my long-term wealth. His clarity on tax-efficient strategies helped me save significantly this financial year.",
      location: "Kharghar, Navi Mumbai"
    },
    {
      id: 2,
      name: "Anjali Sharma",
      role: "NRI Client",
      content: "Managing investments from abroad was stressful until I found Asset Elixir. The transparency and disciplined approach toward my retirement goals are unmatched.",
      location: "Dubai, UAE"
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "Business Owner",
      content: "Unlike other advisors focused on short-term market noise, Shivam provides deep insights and long-term clarity. Truly a client-first philosophy.",
      location: "Mumbai"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa9632] text-black border border-black text-sm font-bold mb-4">
              <MessageSquare className="w-4 h-4" />
              Client Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Trusted by Families & Professionals in Mumbai
            </h2>
            <p className="text-lg text-slate-600">
              At <span className="font-semibold text-[#fa9632]">Asset Elixir</span>, our success is measured by the financial clarity and peace of mind we provide to our clients.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute -top-2 -right-2 w-16 h-16 text-slate-50 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#fa9632] flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold flex items-center gap-1">
                      {review.name}
                      <CheckCircle2 className="w-4 h-4 text-[#fa9632]" />
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                    <p className="text-[10px] uppercase tracking-widest mt-1 font-bold">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Footer */}
          <div className="mt-16 bg-[#fa9632] rounded-3xl p-8 md:p-12 text-center text-black">
            <h3 className="text-2xl font-bold mb-4">Ready to gain long-term clarity?</h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Join dozens of satisfied clients who have secured their financial future through goal-based planning.
            </p>
            <button className="bg-black text-[#fa9632] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:text-black transition-colors">
              Book Your Free Consultation
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;