import React from 'react';
import { Award, TrendingUp, ShieldCheck, ChevronRight, Heart, Zap, Anchor, Users, Briefcase, Scale } from 'lucide-react';
import shivam from '../assets/shivam.png';
import ServicesSection from './ServicesSection';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Award className="w-4 h-4" />,
      title: "Guided by <span class='name'>Shivam Pathak</span>, CFP®",
      content: "For Shivam, financial planning has never been only about money. It is about the people, the lives they are building, and the decisions that shape their future.",
      
    },
    {
      icon: <Heart className="w-4 h-4" />,
      title: "We don't begin with your portfolio. We begin with you.",
      content: "Financial advice is easy to find. What is rare is someone who first takes the time to understand your story, your responsibilities, and the future you are trying to build.",
     
    },
    {
      icon: <Anchor className="w-4 h-4" />,
      title: "Clarity where there is confusion.",
      content: "We exist to bring direction where there is uncertainty and thoughtful planning where there is noise. One wrong decision can cost years of effort; we close that gap.",
      
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="pt-20"> {/* Padding top to prevent overlap with fixed Navbar */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Image Container */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img 
                  src={'#'} 
                  alt="Shivam Pathak - Certified Financial Planner"
                  className="w-full h-[550px] object-contain"
                />
                
                {/* Overlay Credentials - The "Shit" you needed back! */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 z-20">
                  <div className="bg-white/90 backdrop-blur shadow-sm border border-slate-100 p-3 rounded-xl flex items-center gap-3">
                    <Briefcase className="text-[#fa9632] w-5 h-5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Experience</p>
                      <p className="text-sm font-black text-slate-900">10+ Years</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur shadow-sm border border-slate-100 p-3 rounded-xl flex items-center gap-3">
                    <Users className="text-[#fa9632] w-5 h-5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Impact</p>
                      <p className="text-sm font-black text-slate-900">100+ Families</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur shadow-sm border border-slate-100 p-3 rounded-xl flex items-center gap-3">
                    <Scale className="text-[#fa9632] w-5 h-5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Standard</p>
                      <p className="text-sm font-black text-slate-900">Fiduciary</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur shadow-sm border border-slate-100 p-3 rounded-xl flex items-center gap-3">
                    <Award className="text-[#fa9632] w-5 h-5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Certified</p>
                      <p className="text-sm font-black text-slate-900">CFP® Pro</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#fa9632] rounded-full -z-0 opacity-10 blur-3xl"></div>
            </div>

            <Link to='/add_blogs'>Add Blogs</Link>
            <Link to='/add_misc'>Add Misc</Link>

            {/* Right: Content Section */}
            <div className="w-full md:w-1/2 min-h-[480px] flex flex-col justify-center">
              <div className="transition-all duration-700 ease-in-out">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa9632] border border-black text-black text-sm font-semibold mb-6">
                  {slides[currentSlide].icon}
                  {slides[curr
                </div> */}

                <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-6"
                  dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
                />
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {slides[currentSlide].content}
                </p>

                <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-black mb-8">
                   <p className="text-sm text-slate-700 font-medium italic">
                    "Trust is built not by saying yes to everything, but by standing for what is right."
                   </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  

                  <div className="flex gap-2">
                    {slides.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 w-6 rounded-full transition-all ${currentSlide === i ? 'bg-black w-10' : 'bg-slate-200'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Section: Infinite Marquee */}
      <section className="py-10  overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause-marquee py-4">
            {/* List of Publications */}
            {[
              "The Economic Times", 
              "Moneycontrol", 
              "Business Standard", 
              "Mint", 
              "Financial Express", 
              "BloombergQuint"
            ].map((pub, index) => (
              <span key={index} className="mx-12 text-2xl font-bold text-black uppercase tracking-widest hover:text-[#fa9632] transition-colors cursor-default">
                {pub}
              </span>
            ))}
          </div>
          {/* Duplicate for infinite effect */}
          <div className="flex animate-marquee group-hover:pause-marquee py-4" aria-hidden="true">
            {[
              "The Economic Times", 
              "Moneycontrol", 
              "Business Standard", 
              "Mint", 
              "Financial Express", 
              "BloombergQuint"
            ].map((pub, index) => (
              <span key={index} className="mx-12 text-2xl font-bold text-black uppercase tracking-widest hover:text-[#fa9632] transition-colors cursor-default">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection/>
      </section>
    </div>
  );
};

export default Home;