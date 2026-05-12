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
import ThePrint from '../assets/ThePrint_logo.png';
import LinkedIn from '../assets/LinkedIn_2021.svg.png';
import MoneyControl from '../assets/moneycontrol-logo-vector.svg';

const HomePage = () => {
  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[#fa9632] selection:text-black">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">

        {/* --- HERO SECTION --- */}
        <section className="py-20 md:py-28">
          <span className="inline-block text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 border border-[#e0e0e0] rounded-full text-[#555] mb-7">
            Personal Financial Advisory
          </span>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.06] mb-7 special">
            Your Life.<br /><em className="italic text-[#555] font-normal special_">Made Clear.</em>
          </h1>
          <p className="text-base md:text-[16px] leading-relaxed text-[#555] max-w-[560px] mb-4">
            The best financial advice begins with understanding <strong className="text-[#1a1a1a] font-medium">you</strong> — not just your portfolio.
          </p>
          <p className="text-sm md:text-[15px] leading-relaxed text-[#555] max-w-[540px] mb-9">
            We listen to your whole life. Your responsibilities, your health, your dreams. Then we advise with honesty and clarity. No generic solutions. No pressure. Just sound guidance from someone who genuinely cares about your future.
          </p>
          <div className="space-y-4">
            <button className="bg-[#fa9632] text-black px-8 py-3.5 rounded-lg font-medium text-[13px] hover:bg-black hover:text-[#fa9632] transition-all shadow-lg shadow-orange-100">
              Book a Free Consultation
            </button>
            <p className="text-[12px] text-[#999]">30 minutes. Completely free. No obligation.</p>
          </div>
        </section>

        {/* --- MEDIA / FEATURED IN --- */}
        <section className="py-7">
          <div className="flex flex-col sm:flex-row items-stretch rounded-xl overflow-hidden">
            <span className="text-[10px] tracking-[0.12em] uppercase text-['black'] p-4 px-6 bg-[#f8f8f8] border-b sm:border-b-0  flex items-center shrink-0">
              Featured In
            </span>
            <div className="flex flex-wrap items-center flex-1 bg-white">
              {[
                { name: "Economic Times", src: EconomicTimes },
                { name: "The Print", src: ThePrint },
                { name: "LinkedIn", src: LinkedIn },
                { name: "Moneycontrol", src: MoneyControl }
              ].map((pub) => (
                <div key={pub.name} className="flex-1 min-w-[120px] p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 border-r border-[#e0e0e0] last:border-r-0">
                  <img 
                    src={pub.src} 
                    alt={pub.name} 
                    className="h-6 md:h-7 object-contain max-w-[100px]" 
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#e0e0e0] border border-[#e0e0e0] rounded-xl overflow-hidden">
            <StatItem num="500+" label="Families advised" sub="and counting" />
            <StatItem num="15+" label="Years of experience" sub="in financial planning" />
            <StatItem num="₹5000 Cr+" label="Assets guided" sub="across portfolios" />
            <StatItem num="98%" label="Client retention" sub="long-term relationships" />
          </div>
        </section>

        <hr className="border-t-[0.5px] border-[#e0e0e0] my-12" />

        {/* --- WHO WE ARE / HOW WE WORK --- */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div className="space-y-5">
              <h2 className="special text-5xl font-medium leading-[1.15]">How we work.</h2>
              <p className="text-sm leading-relaxed text-[#555]">We don't start with a template. We start with a conversation.</p>
              <p className="text-sm leading-relaxed text-[#555]">We ask about your life — your job, your health, your family, your worries, your ambitions. Because financial decisions don't exist in isolation. They're woven into the fabric of how you live.</p>
              <p className="text-sm leading-relaxed text-[#555]">Then we think deeply. We analyze. We stress-test your plan against different futures. And finally, we advise — always with your best interests first, never for a commission or a sale.</p>
              <div className="relative pl-5 py-2 mt-7">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#fa9632]"></div>
                <p className="special_ text-[19px] leading-relaxed text-[#1a1a1a]">
                  "He tells you to take financial decisions, not because you want it, but because he feels it is the right one for you — considering all other things from your life."
                </p>
                <p className="text-[11px] text-[#999] mt-2.5">— Client feedback</p>
              </div>
            </div>
            <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-4">
              <p className="text-sm text-[#999] leading-relaxed italic">
                Your relationship with your financial advisor should feel like having a trusted friend who knows your life and cares about your future.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t-[0.5px] border-[#e0e0e0] my-12" />

        {/* --- PURPOSE SECTION --- */}
        <section className="py-12 max-w-[640px]">
          <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-4 block">Our Purpose</span>
          <h2 className="special text-5xl font-medium mb-6">What we believe.</h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-[#555]">
              <strong className="text-[#1a1a1a] font-medium">Vision:</strong> To help people build financial lives that reflect who they are and what they care about.
            </p>
            <p className="text-sm leading-relaxed text-[#555]">
              <strong className="text-[#1a1a1a] font-medium">Mission:</strong> We listen first, understand deeply, and advise honestly. Our job is to make financial planning feel less like a burden and more like clarity — so you can move forward with confidence in the decisions that matter.
            </p>
          </div>
        </section>

        <hr className="border-t-[0.5px] border-[#e0e0e0] my-12" />

        {/* --- SERVICES SECTION --- */}
        <section className="py-12">
          <div className="mb-7">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-4 block">What We Do</span>
            <h2 className="special text-5xl font-medium leading-[1.15]">Comprehensive planning.<br />Personalized approach.</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#555] max-w-[560px] mb-9">
            Whether you're just starting out, building wealth, or protecting what you've already created — we have the expertise and the empathy to guide you.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <ServiceCard 
              num="01" 
              title="Wealth Planning" 
              outcome="A roadmap for your future that actually fits your life."
              desc="We craft a plan that considers your goals, your timelines, your risks, and your responsibilities. Not a generic template. A plan built for you."
            />
            <ServiceCard 
              num="02" 
              title="Investment Strategy" 
              outcome="Investments that align with your goals and risk comfort."
              desc="The right portfolio is one you can stay committed to, even when markets are uncertain. We build that together."
            />
            <ServiceCard 
              num="03" 
              title="Protection Planning" 
              outcome="Security for everything you've built and everyone who depends on you."
              desc="The right life and health coverage, chosen for your situation, so your family's future stays secure through any circumstance."
            />
          </div>
        </section>

        <hr className="border-t-[0.5px] border-[#e0e0e0] my-12" />

        {/* --- INSIGHTS SECTION --- */}
        <section className="py-12">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-7">
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-4 block">Financial Insights</span>
              <h2 className="special text-5xl font-medium leading-[1.15]">Straight talk about money.</h2>
            </div>
            <button className="px-6 py-2.5 border border-[#ccc] rounded-lg text-[13px] hover:border-[#1a1a1a] transition-all">
              Follow on Instagram
            </button>
          </div>
          <p className="text-sm leading-relaxed text-[#555] max-w-[500px] mb-9">
            Practical perspectives on financial decisions that matter. Real conversations to help you think more clearly about money, planning, and your future.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <ReelCard tag="Insight 1" title="Building a financial plan that actually works" topic="Planning Basics" />
            <ReelCard tag="Insight 2" title="Why insurance is about protecting your dreams" topic="Protection Strategy" />
            <ReelCard tag="Insight 3" title="Staying calm when markets get uncertain" topic="Market Mindset" />
            <ReelCard tag="Insight 4" title="Planning your future with the people you love" topic="Family Planning" />
          </div>
        </section>

        <hr className="border-t-[0.5px] border-[#e0e0e0] my-12" />

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-12">
          <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-4 block">What Clients Say</span>
          <h2 className="special text-5xl font-medium mb-4">People we have had the privilege of working with.</h2>
          <p className="text-sm leading-relaxed text-[#555] max-w-[520px] mb-9">
            The relationships we build are long-term. Our measure of success is simple — whether the people we work with feel more confident, more prepared, and more at ease about the future they are building.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <TestiCard 
              quote="He takes the time to understand everything — your health, your responsibilities, your life. That depth of understanding is what makes his guidance feel so personal and right for you."
              author="Working Professional"
              detail="Mumbai · Client since 2021"
            />
            <TestiCard 
              quote="When markets were turbulent, he kept me calm and focused on our plan. That steadiness gave me the confidence to stay the course, and it made all the difference."
              author="Business Owner"
              detail="Pune · Client since 2020"
            />
            <TestiCard 
              quote="He gave me the kind of honest, clear advice I had been looking for for years. It completely changed how I think about money and the decisions I make for my future."
              author="Doctor"
              detail="Mumbai · Client since 2022"
            />
          </div>
          <button className="text-[12px] text-[#999] underline mt-7 hover:text-[#1a1a1a]">Read more stories</button>
        </section>

        <hr className="border-t-[0.5px] border-[#e0e0e0] my-12" />

        {/* --- CTA SECTION --- */}
        <section className="py-12 pb-4">
          <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
              <div className="space-y-4">
                <h2 className="special text-4xl font-medium leading-[1.15]">Ready to find your<br /><em className="special_ text-[#555] font-normal">financial clarity?</em></h2>
                <p className="text-sm leading-relaxed text-[#555] max-w-[480px]">
                  Wherever you are in life, a thoughtful conversation about your goals, your responsibilities, and the future you want to build is always a good place to start. We would love to be part of that journey with you.
                </p>
              </div>
              <div className="lg:text-right">
                <button className="bg-[#fa9632] text-black px-8 py-3.5 rounded-lg font-medium text-[13px] hover:bg-black hover:text-[#fa9632] transition-all">
                  Book a Free Consultation
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 pt-9 border-t border-[#e0e0e0]">
              <CTADetail label="First Step" value="A 30-minute introductory call, completely free" />
              <CTADetail label="What to Expect" value="We listen first, understand your situation, and share how we can help" />
              <CTADetail label="Who It's For" value="Anyone ready to take their financial future seriously" />
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-16 pt-16 pb-10 border-t border-[#e0e0e0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* Brand */}
            <div>
              <p className="font-serif text-2xl font-semibold mb-1.5">Asset Elixir</p>
              <p className="text-[12px] italic text-[#999] tracking-[0.02em] mb-5">Your Life. Made Clear.</p>
              <p className="text-[12px] text-[#555] leading-relaxed max-w-[260px]">
                Personalised financial advisory rooted in deep listening, honest guidance, and long-term relationships. Built for professionals, families, and business owners across India.
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
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-4 block">Navigate</span>
              <div className="space-y-2.5">
                <FooterLink>About Us</FooterLink>
                <FooterLink>Services</FooterLink>
                <FooterLink>Financial Insights</FooterLink>
                <FooterLink>Calculators</FooterLink>
                <FooterLink>Free Portfolio Review</FooterLink>
                <FooterLink>Book a Free Call</FooterLink>
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] mb-4 block">Services</span>
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
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#999] block">Contact Us</span>
              <ContactRow icon={<Phone />} label="Phone" value="+91 98XXX XXXXX" />
              <ContactRow icon={<Mail />} label="Email" value="hello@assetelixir.com" />
              <ContactRow icon={<MapPin />} label="Office" value="123, Your Building Name, Mumbai – 400 0XX" />
            </div>
          </div>

          <div className="pt-7 border-t border-[#e0e0e0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-[11px] text-[#999]">© 2026 Asset Elixir. All rights reserved.</p>
              <p className="text-[10px] text-[#999] tracking-[0.02em] mt-1">SEBI Registered Investment Adviser · Reg. No. INAXXXXXXXXXX</p>
            </div>
            <div className="flex gap-6">
              <span className="text-[11px] text-[#999] hover:text-[#555] cursor-pointer">Privacy Policy</span>
              <span className="text-[11px] text-[#999] hover:text-[#555] cursor-pointer">Terms of Use</span>
              <span className="text-[11px] text-[#999] hover:text-[#555] cursor-pointer">Disclaimer</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const StatItem = ({ num, label, sub }) => (
  <div className="bg-white p-7">
    <p className="font-serif text-[44px] font-medium leading-none mb-2">{num}</p>
    <p className="text-[12px] text-[#555] leading-relaxed">{label}</p>
    <p className="text-[11px] text-[#999] mt-1">{sub}</p>
  </div>
);

const ServiceCard = ({ num, title, outcome, desc }) => (
  <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl p-7 hover:border-[#fa9632] transition-colors group">
    <p className="font-serif text-[13px] text-[#999] mb-4">{num}</p>
    <p className="text-[14px] font-medium mb-2.5">{title}</p>
    <p className="font-serif text-[13px] italic text-[#1a1a1a] leading-relaxed mb-2.5">{outcome}</p>
    <p className="text-[12px] text-[#555] leading-relaxed">{desc}</p>
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
  <div className="bg-[#f8f8f8] border border-[#e0e0e0] rounded-xl p-7 flex flex-col justify-between gap-5 min-h-[220px]">
    <p className="font-serif text-[17px] italic leading-relaxed text-[#1a1a1a]">"{quote}"</p>
    <div>
      <p className="text-[12px] font-medium text-[#555]">{author}</p>
      <p className="text-[11px] text-[#999] mt-1">{detail}</p>
    </div>
  </div>
);

const CTADetail = ({ label, value }) => (
  <div>
    <p className="text-[10px] tracking-[0.12em] uppercase text-[#999] mb-1.5">{label}</p>
    <p className="text-[13px] text-[#555] leading-relaxed">{value}</p>
  </div>
);

const FooterLink = ({ children }) => (
  <a className="block text-[13px] text-[#555] hover:text-[#1a1a1a] transition-colors cursor-pointer">
    {children}
  </a>
);

const SocialBtn = ({ icon }) => (
  <button className="w-8 h-8 rounded-full border border-[#ccc] flex items-center justify-center text-[#555] hover:border-[#1a1a1a] hover:bg-[#f8f8f8] transition-all">
    {React.cloneElement(icon, { size: 14 })}
  </button>
);

const ContactRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-7 h-7 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#555] shrink-0 mt-0.5">
      {React.cloneElement(icon, { size: 12 })}
    </div>
    <div>
      <p className="text-[10px] tracking-[0.08em] uppercase text-[#999] mb-0.5">{label}</p>
      <p className="text-[12px] text-[#555] leading-relaxed">{value}</p>
    </div>
  </div>
);

export default HomePage;