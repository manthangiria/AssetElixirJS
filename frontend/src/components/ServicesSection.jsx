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
      title: "Wealth Creation",
      isNew: true,
      icon: <Calculator className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Custom Portfolio Construction",
        "Compounding Growth Strategies",
        "Asset Allocation"
      ],
      color: "bg-[#fa9632]" // Lighter Blue
    },
    {
      title: "Tax Planning & Reporting",
      icon: <Calculator className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Section-Wise Optimization",
        "Tax-Efficient Investing",
        "Consolidated Reporting",
      ],
      color: "bg-[#fa9632]" // Dark Teal
    },
    {
      title: "Retirement Planning",
      icon: <TrendingUp className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Corpus Requirement Analysis",
        "Pension & Cash Flow Strategy",
        "NRI Retirement Solutions"
      ],
      color: "bg-[#fa9632]"
    },
    {
      title: "Plan Implementation",
      icon: <PieChart className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Hassle-Free Execution",
        "Goal-Linked Investing",
        "Disciplined Execution"
      ],
      color: "bg-[#fa9632]"
    },
    {
      title: "Smart Money Management",
      icon: <Gem className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Emergency Fund Setup",
        "Cash Flow Optimization",
        "Debt Management"
      ],
      color: "bg-[#fa9632]"
    },
    {
      title: "Portfolio Review",
      icon: <Gem className="w-6 h-6 text-[#fa9632]" />,
      points: [
        "Quarterly Health Checks",
        "Rebalancing",
        "Cleaning Underperformers"
      ],
      color: "bg-[#fa9632]"
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Header Content */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#fa9632] w-fit mb-6">
              Services
            </h2>
            <p className="text-2xl font-bold text-slate-800 leading-tight">
              Helping you with all your life goals, and everything your money touches.
            </p>
          </div>

          {/* Right Side: Horizontal Scrollable Tiles */}
          <div className="lg:w-2/3">
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`${service.color} min-w-[300px] md:min-w-[350px] p-8 rounded-[2rem] snap-start flex flex-col justify-between h-[500px] transition-transform duration-300 hover:scale-[1.02]`}
                >
                  <div>
                    {service.isNew && (
                      <span className="bg-[#fa9632] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                        NEW
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2 mb-6">
                      {service.icon}
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>

                    <ul className="space-y-4">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium opacity-90">
                          <span className="text-[#fa9632] mt-1">◆</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    {service.isNew ? (
                      <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors">
                        Learn more
                      </button>
                    ) : (
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-[#fa9632] transition-colors group">
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