import React from 'react';
import { Quote, Star, CheckCircle2, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Firdous Pathan",
      role: "Surgeon",
      content: "As a busy surgeon, financial planning and saving were always at the bottom of my priority list due to time constraints. Although I wanted to save, I could never find the time to organize my finances properly. That all changed when I met Shivam Pathak. Shivam took all my financial worries off my shoulders. He helped me design a financial framework that finally allowed me to manage my finances, pay my bills, handle EMIs, plan savings, and even invest in personal interests—like buying that expensive phone I always wanted! He turned what I could only imagine into a practical reality. I am incredibly grateful to have found such a genuine person. I highly recommend Shivam to anyone looking to grow their wealth in a secure and fulfilling way.",
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
      id:8,
      name:"Ms. Apurva",
      role:"Social Media Marketing, Content Creation",
      content:"Shivam’s guidance in my investment journey has been invaluable. He took the time to understand my goals and provided practical, tailored advice. His empathetic approach and clear explanations made the process easy and reassuring. If you’re looking for a financial advisor who truly cares and offers realistic solutions, Shivam is the one to trust!",
      location:"Tardeo, Mumbai"
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "Business Owner",
      content: "Unlike other advisors focused on short-term market noise, Shivam provides deep insights and long-term clarity. Truly a client-first philosophy.",
      location: "Mumbai"
    },
    {
      id:4,
      name:'Mrs. Shikha',
      role:"Technical Specialist",
      content:"I have been working for more than 10 years and began my financial journey with basic savings in fixed deposits (FDs). After meeting with them, they recommended options that perfectly suited my needs—tax-efficient strategies that fully leveraged my savings potential. Their consistent support has been invaluable in helping me make informed financial decisions, and their guidance has truly made a significant difference. What stands out the most is their dedication to regularly connecting with me, ensuring that my financial goals remain on track. Our discussions have also encompassed diverse investment options such as Real Estate, Gold, and Mutual Funds, providing me with a comprehensive and well-rounded approach to wealth creation.",
      location:'Navi Mumbai'
    },
    {
      id:5,
      name:"Ms. Sailee",
      role:"French Teacher | Marketing Executive",
      content:"I  have been working for more than 10 years but was only saving a limited amount. After receiving a reference from one of my relatives, I decided to meet Shivam. I explained to him that my income isn’t always consistent and can vary, making it challenging to commit to a fixed investment amount. He assured me that we would connect each month to plan investments accordingly. Beyond just returns, Shivam has helped me realize my financial potential. Together, we always plan with yearly targets in mind. Thank you, Shivam",
      location:"Mulund West, Mumbai"
    },
    {
      id:6,
      name:"Dr. Bancy Eldo",
      role:"Dentist",
      content:"I  am a practicing dentist and recently started investing with Asset Elixir. In the initial phase, we discussed various investment options, including real estate. The best part of working with them is the frequent and meaningful communication. Their suggestions are always tailored to suit my specific requirements.",
      location:"Kurla, Mumbai"
    },
        {
      id:7,
      name:"Mr. Rohit",
      role:"Co-Founder and CTO at Sunday Tech",
      content:"With work commitments and continuous changes in my finances, managing them became increasingly difficult. That’s when I approached Shivam for help. During this journey, I realized I had overlooked several crucial aspects while managing my personal finances on my own. What truly stood out was Shivam’s honesty and the timely delivery of his services. Every task entrusted to him was completed on time, making this experience smooth and reliable.",
      location:"Wadala, Mumbai"
    },
      
    {
      id:9,
      name:"Mr. Dhiraj",
      content:"I had been working for 10 years and didn’t know what I had done with my money until then. After attending one of his seminars, we decided to meet him in person and move forward. I may not understand the markets well, but what I do know is that at least I am now saving my money. After our monthly and quarterly calls, I feel more accountable for my future, and at least I am taking responsibility.",
      role:"Supply Chain Analyst",
      location:"Mandvi Mumbai"
    },
        {
      id:10,
      name:"Mr. Suraj",
      role:"Sales Territory Head",
      content:"I had good saving habits and was investing accordingly, but as my income increased, managing my finances started taking a back seat. That’s when I began looking for someone like Shivam, who could help me put my finances in order. He’s always just a call away and dynamic in incorporating feedback. So far, this journey has worked well for me, and I’m focused on building my Financial Elixir for the future",
      location:"Gamdevi, Mumbai"
    },
        {
      id:11,
      name:"Mr.Roshan",
      role:"Sales Territory Head",
      content:"They are very good in managing the personal finance and also they helping my children. So that they can start the journey very early and do well. I recommend Asset Elixir.",
      location:"Navi Mumbai"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa9632] text-black border border-black text-sm font-bold mb-4">
              <MessageSquare className="w-4 h-4" />
              Client Success Stories
            </div> */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 special">
              Trusted by Families & Professionals in Mumbai
            </h2>
            <p className="text-lg text-slate-600">
              At <span className="font-semibold text-xl text-[#fa9632] special">Asset Elixir</span>, our success is measured by the financial clarity and peace of mind we provide to our clients.
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
                    {/* <p className="text-[10px] uppercase tracking-widest mt-1 font-bold">
                      {review.location}
                    </p> */}
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