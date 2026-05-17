import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Users2, 
  Leaf, 
  Award, 
  Star, 
  Quote,
  ArrowRight
} from 'lucide-react';

import shivam from '../assets/shivam.png'; // Reusing founder image

import EconomicTimes from '../assets/The_Economic_Times_logo.svg.png';
import ThePrint from '../assets/Mint.png';
import LinkedIn from '../assets/ETMoney.png';
import MoneyControl from '../assets/MoneyControl.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[#fa9632] selection:text-black">
      
      {/* --- HERO: THE STORY BEHIND THE NAME --- */}
      <section className="max-w-[1600px] mx-auto px-4 pt-32 pb-20">
        <span className="inline-block text-[15px] tracking-[0.15em] uppercase text-slate-800 mb-6 block">About Asset Elixir</span>
        <h1 className="special text-5xl md:text-7xl font-medium leading-[1.1] mb-10">
          We don't begin with your portfolio.<br />
          <em className="special_ text-[#555] font-normal">We begin with you.</em>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                Financial advice is everywhere. But very few advisors first take the time to understand your story - your responsibilities, your fears, the life you are working so hard to protect. That's where <strong>Asset Elixir</strong> begins.  
            </p>
            <span className="inline-block text-[15px] tracking-[0.15em] uppercase text-slate-800 font-bold mb-6 block">Story Behind The Name</span>
            <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                An elixir, in its truest sense, is something that transforms. It represents change, renewal, and lasting value     
            </p>
            <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                The name <strong>Asset Elixir</strong> was chosen with that thought in mind. Wealth has the power to shape lives, create opportunities, bring confidence, and create a stronger foundation for the future.     
            </p>
            <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                The right guidance, offered with genuine intent and at the right time, can change the direction of a life. That belief sits at the heart of Asset Elixir.     
            </p>
            <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                Asset Elixir was built so clients feel heard, understood, and guided with honesty. A place where conversations about money also make space for health, family, career, and everything else that shapes how we live.
            </p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-[#e0e0e0]">
            <Quote className="text-[#fa9632] mb-4" size={32} />
            <p className="special_ text-[22px] leading-relaxed text-white mb-4">
              "True wealth should not only support you today, but create security and opportunity for the generation after you."
            </p>
            <p className="text-[10px] tracking-[0.1em] uppercase font-bold text-[#fa9632]">
              — The Asset Elixir Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* --- WHY WE EXIST & A STORY WE SEE OFTEN (SIDE BY SIDE) --- */}
      <section className="max-w-[1600px] mx-auto px-4 pt-1 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Column 1: Why We Exist */}
          <div>
            <span className="inline-block font-bold text-[15px] tracking-[0.15em] uppercase text-slate-800 mb-6 block">Why We Exist</span>
            <div className="space-y-6">
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                  Products are easy to access. Advice is everywhere. But understanding is rare.  
              </p>
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                 Many people invest without clarity, buy products that do not fit their needs, or delay important decisions because no one has helped them see the bigger picture. One wrong decision can cost years of effort.     
              </p>
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                  We exist to close that gap. To bring clarity where there is confusion, direction where there is uncertainty, and thoughtful planning where there is noise.     
              </p>
            </div>
          </div>

          {/* Column 2: A Story We See Often */}
          <div>
            <span className="inline-block font-bold text-[15px] tracking-[0.15em] uppercase text-slate-800 mb-6 block">A Story We See Often</span>
            <div className="space-y-6">
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                  Ajay was earning well, investing here and there, and managing everything on his own. Then one day, after a sudden loss in the family, he saw how quickly confusion can replace confidence when no clear plan exists.  
              </p>
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                 No one knew where the savings were. No one knew what plans had been made. No one knew what came next.     
              </p>
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                That moment changed how he saw money. Financial planning became more than returns. It became about clarity, protection, and making life easier for the people you love.     
              </p>
              <p className="text-m md:text-[16px] leading-relaxed text-slate-700">
                We do not begin with products. We begin with understanding people. Then we build something that fits their life, their goals, and the future they are working toward.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- THE FOUNDER'S MESSAGE --- */}
      <section className="py-24 bg-[#f8f8f8] border-y border-[#e0e0e0]">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl -z-0"></div>
                <img 
                  src={shivam} 
                  alt="Shivam Pathak" 
                  className="relative z-10 rounded-2xl transition-all duration-500 w-180 h-130 object-contain aspect-[4/5]"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#fa9632] font-black">Meet the Founder & Advisor</span>
              <h2 className="font-serif  text-black text-5xl font-medium"><span className='name'>Shivam Pathak</span></h2>
              <p className="text-m leading-relaxed text-[#555]">
                For Shivam Pathak, financial planning has never been only about money. It has always been about people, the lives they are building, and the decisions that shape their future.
              </p>
              <p className="text-m leading-relaxed text-[#555]">
                With over a decade of experience, he has guided individuals and families through important financial milestones with advice that is thoughtful, practical, and grounded in their real circumstances.
              </p>
              <p className="text-m leading-relaxed text-[#555]">
                His approach begins by understanding the full picture. Health, family responsibilities, career path, lifestyle, habits, and long-term goals all matter. Because a financial plan built without life context is rarely complete.
              </p>
              <p className="text-m leading-relaxed text-[#555]">
                Over the years, he has worked with surgeons who had no time to think about money, teachers with irregular income, engineers managing EMIs, and families rebuilding after setbacks. Every case carries a different story, and every plan reflects that.
              </p>
              <p className="text-m leading-relaxed text-[#555]">
                Clients often value him for one quality above all else, honesty. If a decision feels right in the moment but may create problems later, he will say so clearly. He believes trust is built not by saying yes to everything, but by standing for what is right.
              </p>
              <p className="text-m leading-relaxed text-[#555]">
                He remains calm when markets do not, gives the same care to a small SIP as to a large portfolio, and stays connected during the moments that matter most. Because often, the right conversation at the right time can change far more than finances.
              </p>
              <p className="text-xl special_ bg-slate-900 leading-relaxed text-white border-l-5 border-[#fa9632] pl-6 py-2">
                "I have always believed the best financial advice begins with understanding the person, not the portfolio."
              </p>
              <div className="pt-4">
                <p className="text-[12px] font-bold text-[#1a1a1a]">Featured & Trusted By:</p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <img 
                    src={EconomicTimes}
                    alt="Economic Times" 
                    className="h-10 w-25 md:h-14 object-contain max-w-[180px]" 
                  />
                  <img 
                    src={ThePrint} 
                    alt="The Print" 
                    className="h-10 w-15 md:h-14 object-contain max-w-[180px]" 
                  />
                  <img 
                    src={LinkedIn} 
                    alt="The Print" 
                    className="h-10 w-15 md:h-14 object-contain max-w-[180px]" 
                  />
                  <img 
                    src={MoneyControl} 
                    alt="The Print" 
                    className="h-10 w-15 md:h-14 object-contain max-w-[180px]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: WHAT WE STAND FOR --- */}
      <section className="max-w-[1600px] mx-auto px-4 py-24">
        <span className="text-[14px] tracking-[0.15em] uppercase text-black mb-12 block text-center">What We Stand For</span>
        <div className="grid md:grid-cols-2 gap-4">
          <ValueCard 
            icon={<ShieldCheck />} 
            title="Fiduciary, Always" 
            desc="We work for you, not the commission. If a product does not serve your goals, we will tell you, even if it costs us."
          />
          <ValueCard 
            icon={<HeartHandshake />} 
            title="Honesty over Comfort" 
            desc="We will tell you what you need to hear, not what you want to hear. That is the only way to build something that lasts."
          />
          <ValueCard 
            icon={<Users2 />} 
            title="Every Client, Equal Care" 
            desc="A ₹5,000 SIP client gets the same time, honesty, and commitment as a 50 lakh portfolio. No exceptions."
          />
          <ValueCard 
            icon={<Leaf />} 
            title="Life, Not Just Money" 
            desc="We factor in your health, your job, and your responsibilities because your plan cannot be separated from the life you live."
          />
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-4 py-24 text-center">
        <p className="text-slate-800 special_ mb-10 max-w-[500px] mx-auto text-4xl leading-relaxed">
          "Earn with ethics. Grow with discipline. Build with purpose."
        </p>
        <span>-Shivam Pathak, Founder, Asset Elixir</span>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="max-w-[900px] mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-4xl mb-8">Ready to grow with purpose?</h2>
        <Link to='https://api.whatsapp.com/send/?phone=7021089870&text&type=phone_number&app_absent=0' className="inline-block bg-[#fa9632] text-black px-10 py-4 rounded-xl font-bold text-[13px] hover:bg-black hover:text-[#fa9632] transition-all flex items-center gap-3 mx-auto shadow-xl shadow-orange-100">
          Book a Free Consultation
        </Link>
      </section>

    </div>
  );
};

/* --- REUSABLE CARD COMPONENT --- */
const ValueCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-[#e0e0e0] rounded-xl hover:border-[#fa9632] transition-colors group bg-slate-900">
    <div className="text-[#fa9632] mb-6 group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon, { size: 28, strokeWidth: 1.5 })}
    </div>
    <h3 className="text-lg text-[#fa9632] font-medium mb-3">{title}</h3>
    <p className="text-sm leading-relaxed text-white">{desc}</p>
  </div>
);

export default AboutUs;