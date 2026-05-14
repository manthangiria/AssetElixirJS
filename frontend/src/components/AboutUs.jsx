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

const AboutUs = () => {
  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[#fa9632] selection:text-black">
      
      {/* --- HERO: THE STORY BEHIND THE NAME --- */}
      <section className="max-w-[900px] mx-auto px-4 pt-32 pb-20">
        <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-slate-800 mb-6 block">About Asset Elixir</span>
        <h1 className="special text-5xl md:text-7xl font-medium leading-[1.1] mb-10">
          We don't begin with your portfolio.<br />
          <em className="special_ text-[#555] font-normal">We begin with you.</em>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-sm md:text-[15px] leading-relaxed text-[#555]">
                Financial advice is everywhere. But very few advisors first take the time to understand your story - your responsibilities, your fears, the life you are working so hard to protect. That's where <strong>Asset Elixir</strong> begins.  
            </p>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#555]">
                An elixir, in its truest sense, is something that transforms. Not just improves - transforms. Thats exactly what the right financial guidance can do. Not just grow your money, but change the trajectory of you life and the security of the people who depend on you.     
            </p>
            <p className="text-sm md:text-[15px] leading-relaxed text-[#555]">
                That is the thought behind AssetElixir. A place where the right blend of guidance, discipline, and honesty creates something far more valuable than returns - it creates clarity, confidence, and a foundation that outlasts you.     
            </p>
          </div>
          <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-[#e0e0e0]">
            <Quote className="text-[#fa9632] mb-4" size={32} />
            <p className="special_ text-[22px] leading-relaxed text-[#1a1a1a] mb-4">
              "True wealth should not only support you today, but create security and opportunity for the generation after you."
            </p>
            <p className="text-[10px] tracking-[0.1em] uppercase font-bold text-slate-800">
              — The Asset Elixir Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* --- THE GAP WE FILL --- */}
      {/* <section className="bg-[#1a1a1a] text-white py-24">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="max-w-[600px]">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">
              We don't begin with your portfolio. <br />
              <span className="text-[#fa9632]">We begin with you.</span>
            </h2>
            <p className="text-[#999] leading-relaxed mb-8">
              Investment options and products are everywhere. But very few people first ask: Who are you? What are you carrying? What kind of life do you want to build?
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-2xl font-serif mb-2">10+</p>
                <p className="text-[11px] uppercase tracking-widest text-[#fa9632] font-bold">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-2">100+</p>
                <p className="text-[11px] uppercase tracking-widest text-[#fa9632] font-bold">Families Guided</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- THE FOUNDER'S MESSAGE --- */}
      <section className="py-24 bg-[#f8f8f8] border-y border-[#e0e0e0]">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 border border-[#fa9632] rounded-2xl -z-0"></div>
                <img 
                  src={shivam} 
                  alt="Shivam Pathak" 
                  className="relative z-10 rounded-2xl transition-all duration-500 w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#fa9632] font-black">Meet the Founder & Advisor</span>
              <h2 className="font-serif  text-black text-4xl font-medium"><span className='name'>Shivan Pathak</span></h2>
              <p className="text-sm leading-relaxed text-[#555]">
                Certified Financial Planner (CFP®) with a decade of experience helping people navigate the noise of the financial world.
              </p>
              <p className="text-xl special_ leading-relaxed text-[#555] border-l-2 border-[#fa9632] pl-6 py-2">
                "I have always believed the best financial advice begins with understanding the person, not the portfolio."
              </p>
              <div className="pt-4">
                <p className="text-[12px] font-bold text-[#1a1a1a]">Featured & Trusted By:</p>
                <div className="flex flex-wrap gap-4 mt-3 opacity-40">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Economic Times</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Moneycontrol</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Mint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: WHAT WE STAND FOR --- */}
      <section className="max-w-[900px] mx-auto px-4 py-24">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-12 block text-center">What We Stand For</span>
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

      <section className="max-w-[900px] mx-auto px-4 py-24 text-center">
        
        <p className="text-slate-800 special_ mb-10 max-w-[500px] mx-auto text-4xl leading-relaxed">
          "Earn with ethics. Grow with discipline. Build with purpose."
        </p>
        <span>-Shivam Pathak, Founder, Asset Elixir</span>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="max-w-[900px] mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-4xl mb-8">Ready to grow with purpose?</h2>
        <p className="text-[#999] mb-10 max-w-[500px] mx-auto text-sm leading-relaxed">
          "Earn with ethics. Grow with discipline. Build with purpose."
        </p>
        <button className="bg-[#fa9632] text-black px-10 py-4 rounded-xl font-bold text-[13px] hover:bg-black hover:text-[#fa9632] transition-all flex items-center gap-3 mx-auto shadow-xl shadow-orange-100">
          Book a Free Consultation <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

/* --- REUSABLE CARD COMPONENT --- */
const ValueCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-[#e0e0e0] rounded-xl hover:border-[#fa9632] transition-colors group">
    <div className="text-[#fa9632] mb-6 group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon, { size: 28, strokeWidth: 1.5 })}
    </div>
    <h3 className="text-lg font-medium mb-3">{title}</h3>
    <p className="text-sm leading-relaxed text-[#555]">{desc}</p>
  </div>
);

export default AboutUs;