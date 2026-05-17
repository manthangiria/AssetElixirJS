import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  PieChart, 
  ShieldCheck, 
  Briefcase,
  Gem
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Financial Planning",
      isNew: true,
      icon: <Calculator className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Comprehensive Financial Planning",
        "Goal-Based Planning",
        "Cash Flow Planning",
        "Family Financial Planning"
      ],
      // color: "bg-[#fa9632]" // Lighter Blue
    },
    {
      title: "Portfolio Review",
      icon: <Calculator className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Investment Review",
        "Mutual Fund Planning",
        "Asset Allocation",
        "Wealth Creation Strategy"
      ],
      // color: "bg-[#fa9632]" // Dark Teal
    },
    {
      title: "Protection Planning",
      icon: <TrendingUp className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Life Insurance Planning",
        "Health Insurance Guidance",
        "Risk Management Planning"
      ],
      // color: "bg-[#fa9632]"
    },
    {
      title: "Retirement Planning",
      icon: <PieChart className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Retirement Corpus Planning",
        "Retirement Income Strategy",
        "Early Retirement Planning"
      ],
      // color: "bg-[#fa9632]"
    },
    {
      title: "Tax Planning",
      icon: <Gem className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Tax Planning",
        "Tax Saving Investments",
      ],
      // color: "bg-[#fa9632]"
    },
    {
      title: "Life Stage Planning",
      icon: <Gem className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Young Earners Planning",
        "Family Stage Planning",
        "Pre-Retirement Planning"
      ],
      // color: "bg-[#fa9632]"
    },
    
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-5">
          
          {/* Left Side: Header Content */}
          <div className="lg:w-1/3 flex flex-col justify-center">
          {/* border-b-4 border-[#fa9632] */}
            <h2 className="text-5xl special text-slate-900  w-fit mb-6"> 
              Services
            </h2>
            <p className="text-xl text-slate-600 leading-tight">
              Helping you with all your life goals, and everything your money touches.
            </p>
          </div>

          {/* Right Side: Horizontal Scrollable Tiles */}
          <div className="lg:w-2/3">
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {services.map((service, index) => (
                /* Added 'group' to the wrapper template literal string below */
                <div 
                  key={index}
                  className={`${service.color} cursor-pointer bg-[#f8f8f8] border border-[#e0e0e0] hover:border-[#fa9632] min-w-[280px] md:min-w-[300px] p-8 rounded-[2rem] snap-start flex flex-col justify-between h-[400px] group`}
                >
                  <div>
                    {service.isNew && (
                      <span className="bg-[#fa9632] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                        NEW
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2 mb-6">
                      {service.icon}
                      <h3 className="text-2xl font-bold special">{service.title}</h3>
                    </div>

                    {/* Added hover transition utility classes to the <ul> element */}
                    <ul className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium opacity-90">
                          <span className="text-[#fa9632] mt-1">◆</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    {service.isNew ? (
                      <button className="cursor-pointer bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-[#fa9632] transition-colors">
                        Learn more
                      </button>
                    ) : (
                      <button className="cursor-pointer w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-[#fa9632] transition-colors group">
                        <ArrowRight className="w-5 h-5 group-hover:text-black" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Hint for Mobile */}
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 lg:hidden">
              <ArrowRight className="w-4 h-4" /> 
              <span>Scroll to see all services</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;