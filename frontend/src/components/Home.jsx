import React from 'react';
import { 
  ChevronRight, 
  Briefcase, 
  Users, 
  Award, 
  Scale, 
  Play, 
  MessageSquare,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import EconomicTimes from '../assets/The_Economic_Times_logo.svg.png';
import ThePrint from '../assets/Mint.png';
import LinkedIn from '../assets/ETMoney.png';
import MoneyControl from '../assets/MoneyControl.png';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';

const HomePage = () => {
  return (
    <div className="text-[#1a1a1a] selection:bg-[#fa9632] selection:text-black">
      {/* Changed max-w-[900px] to max-w-[1200px] to widen the layout */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">

        {/* --- HERO SECTION --- */}
        <section className="py-20 md:py-28">
          {/* <span className="inline-block text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 border border-[#e0e0e0] rounded-full text-[#555] mb-7">
            Personal Financial Advisory
          </span> */}
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.06] mb-7 special">
            With You,<br /><em className="italic text-[#555] font-normal special_">Through It All.</em>
          </h1>
          <p className="text-base md:text-[16px] leading-relaxed text-[#555] max-w-[560px] mb-4">
            Money touches every part of life. Your family. Your peace of mind. Your future. The choices you can make tomorrow.  
          </p>
          <p className="text-sm md:text-[15px] leading-relaxed text-[#555] max-w-[540px] mb-4">
            That is why at Asset Elixir, we do not start with products or returns. We start with you — your life, your responsibilities, and the future you are trying to protect and build.   
          </p>
          <p className="text-sm md:text-[15px] leading-relaxed text-[#555] max-w-[540px] mb-9">
            Because the right financial planner does more than manage money. They help make life feel a little more clear, stable, and taken care of.   
          </p>
          <div className="space-y-4">
            <button className="bg-[#fa9632] text-black px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-black hover:text-[#fa9632] transition-all shadow-lg shadow-orange-100">
              Book a Free Consultation
            </button><br/>
            <Link to='add_blogs' className="mr-5 bg-[#fa9632] text-black px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-black hover:text-[#fa9632] transition-all shadow-lg shadow-orange-100">Add Blogs</Link>
            <Link to='add_misc'  className="bg-[#fa9632] text-black px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-black hover:text-[#fa9632] transition-all shadow-lg shadow-orange-100">Add Misc</Link>
            <p className="text-[12px] text-slate-700 mt-5">30 minutes. Completely free. No obligation.</p>
          </div>
        </section>

        {/* --- MEDIA / FEATURED IN --- */}
        <section className="py-7">
          <div className="flex flex-col sm:flex-row items-stretch rounded-xl overflow-hidden border border-slate-500">
            <span className="text-[15px] font-bold tracking-[0.12em] uppercase text-black p-4 px-6 bg-[#fa9632] border-b sm:border-b-0  flex items-center shrink-0">
              Featured In
            </span>
            <div className="flex flex-wrap items-center flex-1 bg-white">
              {[
                { name: "Economic Times", src: EconomicTimes },
                { name: "The Print", src: ThePrint },
                { name: "LinkedIn", src: LinkedIn },
                { name: "Moneycontrol", src: MoneyControl }
              ].map((pub) => (
                <div key={pub.name} className="flex-1 min-w-[180px] p-4 flex items-center justify-center  transition-all duration-300 border-r border-black last:border-r-0">
                  <img 
                    src={pub.src} 
                    alt={pub.name} 
                    className="h-10 w-30 md:h-14 object-contain max-w-[180px]" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-12">
          <p className="text-sm leading-relaxed text-[#555] mb-5 max-w-[540px]">
            Real relationships. Real results. Trusted by professionals, business owners, and families across India.
          </p>
          {/* bg-[#f8f8f8] |||| bg-[#fa9632]  border border-[#fa9632]*/}
          <div className="text-xl grid grid-cols-2 md:grid-cols-4 gap-[1px]  rounded-xl overflow-hidden">
            <StatItem num="1000+" label="Families advised" sub="and counting" />
            <StatItem num="10+" label="Years of experience" sub="in financial planning" />
            <StatItem num="CFP®" label="Certified Financial Planner" sub="India' Gold Standard in Financial Planning" />
            <StatItem num="Fiduciary" label="Your Interest, Always First" sub="Our advice is guided by your goals, nothing else" />
          </div>
        </section>

        <hr className="border-t-[0.5px] border-slate-400 my-12" />

        {/* --- WHO WE ARE / HOW WE WORK --- */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div className="space-y-5">
              <h2 className="special text-5xl font-medium leading-[1.15]">Who We Are.</h2>
              <h2 className="special text-3xl font-medium leading-[1.15]">Financial advice built around your life.</h2>
              <p className="text-[15px] leading-relaxed text-[#555]">Every person who comes to us brings a different life story — different responsibilities, priorities, goals, and hopes for the future.</p>
              <p className="text-[15px] leading-relaxed text-[#555]">That is why at Asset Elixir, financial planning does not begin with products or returns. It begins with understanding you first - your life, your family, your concerns, and the future you are trying to build and protect.</p>
              <p className="text-[15px] leading-relaxed text-[#555]">Because the right financial advice should feel personal, thoughtful, and built around the person behind the decisions.</p>
              <div className="relative pl-5 py-2 mt-7 bg-black">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#fa9632]"></div>
                <p className="special_ text-2xl leading-relaxed text-[#fa9632]">
                  “The best financial advice begins with understanding the person, not the portfolio.”  
                </p>
                <p className="text-m text-white mt-2.5">— Shivam Pathak, CFP® · Founder, Asset Elixir</p>
              </div>
            </div>
            <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-4">
              <p className="text-sm text-[#999] leading-relaxed italic">
                {/* Your relationship with your financial advisor should feel like having a trusted friend who knows your life and cares about your future. */}
                No Image for Now
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t-[0.5px] border-slate-400 my-12" />

        {/* --- PURPOSE SECTION --- */}
        {/* Adjusted max-w to map smoothly to the wider screen footprint */}
        <section className="py-12 max-w-[850px]">
          <span className="text-[10px] tracking-[0.15em] uppercase text-black mb-4 block">Our Purpose</span>
          <h2 className="special text-5xl font-medium mb-6">What we believe.</h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-[#555]">
              <strong className="text-[#1a1a1a] font-medium">Vision:</strong> To help people build financial lives that reflect who they are and what they care about.
            </p>
            <p className="text-[15px] leading-relaxed text-[#555]">
              <strong className="text-[#1a1a1a] font-medium">Mission:</strong> We listen first, understand deeply, and advise honestly. Our job is to make financial planning feel less like a burden and more like clarity — so you can move forward with confidence in the decisions that matter.
            </p>
          </div>
        </section>

        <hr className="border-t-[0.5px] border-slate-400 my-12" />

        {/* --- SERVICES SECTION --- */}
        <section className="py-12">
          <div className="mb-7">
            <span className="text-[10px] tracking-[0.15em] uppercase text-black mb-4 block">What We Offer</span>
            <h2 className="special text-5xl font-medium leading-[1.15]">Planning for every part of your life.</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#555] max-w-[560px] mb-9">
              Financial decisions are connected to every part of life — your family, your responsibilities, your future, and the goals you are working hard to achieve. That is why our approach to financial planning is personal, thoughtful, and built around what truly matters to you.
          </p>
          <div className="grid md:grid-cols-3 gap-3 text-xl">
            <ServiceCard 
              num="01" 
              title="Financial Planning" 
              outcome="Clarity on where you stand today and confidence in where you are heading."
              desc="A thoughtful financial roadmap that brings together your income, savings, investments, responsibilities, and long-term goals into one clear direction."
            />
            <ServiceCard 
              num="02" 
              title="Retirement Planning" 
              outcome="A future that feels independent, secure, and well prepared."
              desc="We help you build a retirement strategy that supports the lifestyle, peace of mind, and financial freedom you want for the years ahead."
            />
            <ServiceCard 
              num="03" 
              title="Wealth Planning" 
              outcome="Building wealth with clarity, balance, and long-term purpose."
              desc="A thoughtful approach to growing and managing wealth through decisions that align with your responsibilities, future goals, and the life you want to create for yourself and your family."
            />
          </div>
        </section>

        <hr className="border-t-[0.5px] border-slate-400 my-12" />

        {/* --- INSIGHTS SECTION --- */}
        <section className="py-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-7">
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-black mb-4 block">Perspectives on Money & Life</span>
              <h2 className="special text-5xl font-medium leading-[1.15]">Straight talk about money.</h2>
            </div>
            <button className="px-6 py-2.5 border border-[#ccc] rounded-lg text-[13px] hover:border-[#1a1a1a] transition-all">
              Follow on Instagram
            </button>
          </div>
          <p className="text-sm leading-relaxed text-[#555] max-w-[500px] mb-9">
            Thoughtful perspectives on money, markets, planning, and the decisions that shape long-term financial well-being.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <ReelCard tag="Insight 1" title="Building a financial plan that actually works" topic="Planning Basics" />
            <ReelCard tag="Insight 2" title="Why insurance is about protecting your dreams" topic="Protection Strategy" />
            <ReelCard tag="Insight 3" title="Staying calm when markets get uncertain" topic="Market Mindset" />
            <ReelCard tag="Insight 4" title="Planning your future with the people you love" topic="Family Planning" />
          </div>
        </section>

        <hr className="border-t-[0.5px] border-slate-400 my-12" />

        <ServicesSection/>

       <hr className="border-t-[0.5px] border-slate-400 my-12" />

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-12">
          <span className="text-[10px] tracking-[0.15em] uppercase text-black mb-4 block">What Clients Say</span>
          <h2 className="special text-5xl font-medium mb-4">People we have had the privilege of working with.</h2>
          <p className="text-sm leading-relaxed text-[#555] max-w-[520px] mb-9">
            The relationships we build are long-term. Our measure of success is simple — whether the people we work with feel more confident, more prepared, and more at ease about the future they are building.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <TestiCard 
              quote="As a busy surgeon, financial planning and saving were always at the bottom of my priority list due to time constraints. Although I wanted to save, I could never find the time to organize my finances properly. That all changed when I met Shivam Pathak. Shivam took all my financial worries off my shoulders. He helped me design a financial framework that finally allowed me to manage my finances, pay my bills, handle EMIs, plan savings, and even invest in personal interests—like buying that expensive phone I always wanted! He turned what I could only imagine into a practical reality. I am incredibly grateful to have found such a genuine person. I highly recommend Shivam to anyone looking to grow their wealth in a secure and fulfilling way."
              author="Surgeon"
              detail="Kharghar, Navi Mumbai"
            />
            <TestiCard 
              quote="Managing investments from abroad was stressful until I found Asset Elixir. The transparency and disciplined approach toward my retirement goals are unmatched."
              author="NRI Client"
              detail="Dubai, UAE"
            />
            <TestiCard 
              quote="Shivam’s guidance in my investment journey has been invaluable. He took the time to understand my goals and provided practical, tailored advice. His empathetic approach and clear explanations made the process easy and reassuring. If you’re looking for a financial advisor who truly cares and offers realistic solutions, Shivam is the one to trust!"
              author="Social Media Marketing, Content Creation"
              detail="Tardeo, Mumbai"
            />
          </div>
          <Link to='/testimonials' className="text-[12px] text-slate-700 cursor-pointer underline mt-7 hover:text-[#1a1a1a]">Read more stories</Link>
        </section>

        <hr className="border-t-[0.5px] border-slate-400 my-12" />

        {/* --- CTA SECTION --- */}
        <section className="py-12 pb-4">
          <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
              <div className="space-y-4">
                <h2 className="special text-4xl font-medium leading-[1.15]">Ready to find your<br /><em className="special_ text-[#555] font-normal">financial elixir?</em></h2>
                <p className="text-sm leading-relaxed text-[#555] max-w-[480px]">
                  Wherever you are in life, a thoughtful conversation about your goals, your responsibilities, and the future you want to build is always a good place to start. We would love to be part of that journey with you.
                </p>
                <p className='text-sm leading-relaxed text-[#555] max-w-[480px]'>
                  If you are looking for guidance that feels personal, honest, and built around your life, we would be glad to connect.
                </p>
              </div>
              <div className="lg:text-right">
                <button className="bg-[#fa9632] text-black px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-black hover:text-[#fa9632] transition-all">
                  Book a Free Consultation
                </button>
                
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 pt-9 border-t border-[#e0e0e0]">
              <CTADetail label="A simple first step." value="A 30-minute introductory conversation to understand where you stand today and where you want to go next." />
              <CTADetail label="What to Expect" value="We listen first, understand your situation, and share how we can help" />
              <CTADetail label="Who It's For" value="Anyone ready to take their financial future seriously" />
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-16 pt-16 pb-10 border-t border-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* Brand */}
            <div>
              <p className="font-serif text-2xl font-semibold mb-1.5">Asset Elixir</p>
              <p className="text-m special_ text-slate-700 tracking-[0.02em] mb-5">With You, Through It All.</p>
              <p className="text-[12px] text-[#555] leading-relaxed max-w-[260px]">
                Thoughtful financial guidance built around your life, your responsibilities, and the future you are working toward.
              </p>
              <div className="flex gap-2.5 mt-7">
                {/* <SocialBtn icon={<Linkedin />} /> */}
                <SocialBtn icon={<FaInstagram />} />
                <SocialBtn icon={<FaFacebook />} />
                <SocialBtn icon={<FaYoutube />} />
              </div>
            </div>

            {/* Links */}
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-slate-800 mb-4 block">Navigate</span>
              <div className="space-y-2.5">
                <FooterLink children='About Us' link='/about_us'/>
                <FooterLink>Services</FooterLink>
                <FooterLink>Financial Insights</FooterLink>
                <FooterLink>Calculators</FooterLink>
                <FooterLink>Free Portfolio Review</FooterLink>
                <FooterLink>Book a Free Call</FooterLink>
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-slate-800 mb-4 block">Services</span>
              <div className="space-y-2.5">
                <FooterLink>Wealth Planning</FooterLink>
                <FooterLink>Investment Strategy</FooterLink>
                <FooterLink>Protection Planning</FooterLink>
                <FooterLink>Retirement Planning</FooterLink>
                <FooterLink>Tax Optimisation</FooterLink>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <span className="text-[10px] tracking-[0.15em] uppercase text-slate-800 block">Contact Us</span>
              <ContactRow icon={<Phone />} label="Phone" value="+91 98XXX XXXXX" />
              <ContactRow icon={<Mail />} label="Email" value="hello@assetelixir.com" />
              <ContactRow icon={<MapPin />} label="Office" value="123, Your Building Name, Mumbai – 400 0XX" />
            </div>
          </div>

          <div className="pt-7 border-t border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-[11px] text-black">© 2026 Asset Elixir. All rights reserved.</p>
              <p className="text-[10px] text-black tracking-[0.02em] mt-1">SEBI Registered Investment Adviser · Reg. No. INAXXXXXXXXXX</p>
            </div>
            <div className="flex gap-6">
              <span className="text-[11px] text-black hover:text-[#555] cursor-pointer">Privacy Policy</span>
              <span className="text-[11px] text-black hover:text-[#555] cursor-pointer">Terms of Use</span>
              <span className="text-[11px] text-black hover:text-[#555] cursor-pointer">Disclaimer</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const StatItem = ({ num, label, sub }) => (
  <div className="bg-black p-7">
    <p className="font-serif text-[44px] text-[#fa9632] font-medium leading-none mb-2">{num}</p>
    <p className="text-[15px] text-white font-bold leading-relaxed">{label}</p>
    <p className="text-[13px] text-white mt-1">{sub}</p>
  </div>
);

const ServiceCard = ({ num, title, outcome, desc }) => (
  <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl p-7 hover:border-[#fa9632] transition-colors group">
    <p className="font-serif text-[17px] text-[#999] mb-4">{num}</p>
    <p className="text-[16px] font-medium mb-2.5">{title}</p>
    <p className="font-serif text-[15px] italic text-[#1a1a1a] leading-relaxed mb-2.5">{outcome}</p>
    <p className="text-[15px] text-[#555] leading-relaxed">{desc}</p>
  </div>
);

const ReelCard = ({ tag, title, topic }) => (
  <div className="rounded-xl border border-[#e0e0e0] overflow-hidden bg-[#f8f8f8] flex flex-col">
    <div className="h-44 bg-slate-100 flex items-center justify-center relative">
      <span className="absolute top-3 left-3 bg-white border border-[#e0e0e0] rounded px-2 py-1 text-[10px] uppercase font-bold text-[#999]">
        {tag}
      </span>
      <div className="w-10 h-10 rounded-full bg-white border border-[#ccc] flex items-center justify-center shadow-sm">
        <Play className="fill-[#1a1a1a] text-[#1a1a1a] ml-0.5" size={14} />
      </div>
    </div>
    <div className="p-4 bg-white grow">
      <p className="text-[12px] font-medium leading-relaxed text-[#1a1a1a] mb-1">{title}</p>
      <p className="text-[11px] text-[#999]">{topic}</p>
    </div>
  </div>
);

const TestiCard = ({ quote, author, detail }) => (
  <div className=" bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl p-7 flex flex-col justify-between gap-5 min-h-[220px]">
    <p className="overflow-hidden line-clamp-5 text-overflow:ellipsis font-serif text-[17px] italic leading-relaxed text-[#1a1a1a]">"{quote}"</p>
    <div>
      <p className="text-[12px] font-medium text-[#555]">{author}</p>
      <p className="text-[11px] text-[#999] mt-1">{detail}</p>
    </div>
  </div>
);

const CTADetail = ({ label, value }) => (
  <div>
    <p className="inline text-[10px] tracking-[0.12em] uppercase text-black bg-[#fa9632] mb-1.5">{label}</p><br/>
    <p className="text-[13px] text-[#555] leading-relaxed">{value}</p>
  </div>
);

const FooterLink = ({ children, link }) => (
  <Link to={link} className="block text-[13px] text-[#555] hover:text-[#1a1a1a] transition-colors cursor-pointer">
    {children}
  </Link>
);

const SocialBtn = ({ icon }) => (
  <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[#555] hover:border-[#1a1a1a] hover:bg-[#f8f8f8] transition-all">
    {React.cloneElement(icon, { size: 14 })}
  </button>
);

const ContactRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-7 h-7 rounded-full border border-black flex items-center justify-center text-[#555] shrink-0 mt-0.5">
      {React.cloneElement(icon, { size: 12 })}
    </div>
    <div>
      <p className="text-[10px] tracking-[0.08em] uppercase text-[#999] mb-0.5">{label}</p>
      <p className="text-[12px] text-[#555] leading-relaxed">{value}</p>
    </div>
  </div>
);

export default HomePage;