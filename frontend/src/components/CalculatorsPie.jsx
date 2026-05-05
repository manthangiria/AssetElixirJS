import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Target, PiggyBank, IndianRupee, 
  ArrowUpRight, Home, RefreshCw, ChevronRight 
} from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('lumpsum-sip');
  
  const [inputs, setInputs] = useState({
    lumpsum: 100000,
    sip: 10000,
    tenure: 10,
    rate: 12,
    target: 5000000,
    stepUp: 10,
    swpAmount: 20000,
    loanAmount: 5000000,
    loanRate: 8.5,
    loanTenure: 20
  });

  const [result, setResult] = useState({ 
    fv: 0, invested: 0, emi: 0, totalPayable: 0, sipRequired: 0 
  });

  const calculateFinancials = () => {
    const r = (inputs.rate || 0) / 100 / 12;
    const n = (inputs.tenure || 0) * 12;
    const annualStepUp = (inputs.stepUp || 0) / 100;
    
    let totalFV = 0;
    let totalInvested = 0;

    switch (activeTab) {
      case 'lumpsum-sip':
        totalFV = (inputs.lumpsum || 0) * Math.pow(1 + ((inputs.rate || 0) / 100), (inputs.tenure || 0));
        totalInvested = (inputs.lumpsum || 0);
        let currentSIP = (inputs.sip || 0);
        for (let y = 1; y <= (inputs.tenure || 0); y++) {
          for (let m = 1; m <= 12; m++) {
            totalInvested += currentSIP;
            totalFV = (totalFV + currentSIP) * (1 + r);
          }
          currentSIP *= (1 + annualStepUp);
        }
        setResult(prev => ({ ...prev, fv: Math.round(totalFV), invested: Math.round(totalInvested) }));
        break;

      case 'home-loan':
        const loanR = (inputs.loanRate || 0) / 100 / 12;
        const loanN = (inputs.loanTenure || 0) * 12;
        const emi = (inputs.loanAmount * loanR * Math.pow(1 + loanR, loanN)) / (Math.pow(1 + loanR, loanN) - 1);
        setResult(prev => ({ ...prev, emi: Math.round(emi), totalPayable: Math.round(emi * loanN) }));
        break;

      case 'swp':
        let balance = (inputs.lumpsum || 0);
        for (let i = 0; i < n; i++) {
          balance = (balance - (inputs.swpAmount || 0)) * (1 + r);
          if (balance < 0) { balance = 0; break; }
        }
        setResult(prev => ({ ...prev, fv: Math.round(balance), invested: (inputs.lumpsum || 0) }));
        break;

      case 'sip-target':
        const fvOfLumpsum = (inputs.lumpsum || 0) * Math.pow(1 + ((inputs.rate || 0) / 100), (inputs.tenure || 0));
        const gap = (inputs.target || 0) - fvOfLumpsum;
        let unitFactor = 0; let unitSIP = 1;
        for (let y = 1; y <= (inputs.tenure || 0); y++) {
          for (let m = 1; m <= 12; m++) { unitFactor = (unitFactor + unitSIP) * (1 + r); }
          unitSIP *= (1 + annualStepUp);
        }
        const reqSIP = gap > 0 ? gap / unitFactor : 0;
        setResult(prev => ({ ...prev, sipRequired: Math.round(reqSIP), fv: (inputs.target || 0), invested: Math.round(reqSIP * n) }));
        break;
      default: break;
    }
  };

  useEffect(() => { calculateFinancials(); }, [inputs, activeTab]);

  // Logic for the Pie Chart Circle
  const investedValue = activeTab === 'home-loan' ? inputs.loanAmount : result.invested;
  const totalValue = activeTab === 'home-loan' ? result.totalPayable : result.fv;
  const gainsValue = Math.max(0, totalValue - investedValue);
  const percentage = totalValue > 0 ? (gainsValue / totalValue) * 100 : 0;
  const strokeDasharray = `${percentage} ${100 - percentage}`;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Wealth Calculators</h1>
          {/* <p className="text-slate-600">Referencing the <strong>AssetPlus All-in-One Calculator</strong> for long-term clarity.</p> */}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'lumpsum-sip', label: 'SIP + Lumpsum', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'sip-target', label: 'Goal Planner', icon: <Target className="w-4 h-4" /> },
            { id: 'swp', label: 'Monthly SWP', icon: <RefreshCw className="w-4 h-4" /> },
            { id: 'home-loan', label: 'Home Loan', icon: <Home className="w-4 h-4" /> },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex border border-black items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id ? 'bg-[#fa9632] text-black shadow-lg scale-105' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-8">
            {activeTab === 'home-loan' ? (
              <>
                <InputGroup label="Loan Amount" value={inputs.loanAmount} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, loanAmount: v})} />
                <InputGroup label="Interest Rate (% p.a.)" value={inputs.loanRate} min={5} max={15} step={0.1} onChange={(v) => setInputs({...inputs, loanRate: v})} isPercent />
                <InputGroup label="Tenure (Years)" value={inputs.loanTenure} min={1} max={30} step={1} onChange={(v) => setInputs({...inputs, loanTenure: v})} suffix="Yrs" />
              </>
            ) : (
              <>
                {activeTab === 'sip-target' && <InputGroup label="Target Future Value" value={inputs.target} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, target: v})} />}
                <InputGroup label="Lumpsum Investment" value={inputs.lumpsum} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />
                {activeTab !== 'swp' && <InputGroup label="Monthly SIP" value={inputs.sip} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, sip: v})} />}
                {activeTab === 'swp' && <InputGroup label="Monthly Withdrawal" value={inputs.swpAmount} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, swpAmount: v})} />}
                <InputGroup label="Tenure (Years)" value={inputs.tenure} min={1} max={40} step={1} onChange={(v) => setInputs({...inputs, tenure: v})} suffix="Yrs" />
                <InputGroup label="Expected Returns (% p.a)" value={inputs.rate} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rate: v})} isPercent />
                {activeTab !== 'home-loan' && activeTab !== 'swp' && <InputGroup label="Annual Step-up (%)" value={inputs.stepUp} min={0} max={50} step={1} onChange={(v) => setInputs({...inputs, stepUp: v})} isPercent isStepUp />}
              </>
            )}
          </div>

          {/* Results Visual Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden sticky top-24">
            <div className="bg-black p-8 text-center text-white">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-slate-400 mb-2">
                {activeTab === 'home-loan' ? 'Monthly EMI' : activeTab === 'sip-target' ? 'Monthly SIP Required' : 'Maturity Value'}
              </h3>
              <div className="text-3xl font-black text-[#fa9632]">
                ₹ {activeTab === 'home-loan' ? (result.emi || 0).toLocaleString('en-IN') : 
                   activeTab === 'sip-target' ? (result.sipRequired || 0).toLocaleString('en-IN') : 
                   (result.fv || 0).toLocaleString('en-IN')}
              </div>
            </div>
            
            <div className="p-8">
              {/* SVG PIE CHART */}
              <div className="flex justify-center mb-8 relative">
                <svg width="180" height="180" viewBox="0 0 42 42" className="transform -rotate-90">
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="4"></circle>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#fa9632" strokeWidth="4" 
                    strokeDasharray={strokeDasharray} strokeDashoffset="0"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Gains</span>
                   <span className="text-lg font-black text-slate-900">{Math.round(percentage)}%</span>
                </div>
              </div>

              <div className="space-y-4">
                <LegendRow label={activeTab === 'home-loan' ? "Principal" : "Invested"} value={investedValue} color="bg-slate-200" />
                <LegendRow label={activeTab === 'home-loan' ? "Interest" : "Wealth Gained"} value={gainsValue} color="bg-[#fa9632]" />
                
                <div className="pt-4 border-t border-slate-100">
                   <p className="text-[10px] text-slate-400 italic text-center mb-4">
                     "Earn with ethics. Grow with discipline. Build with purpose."
                   </p>
                   {/* <button className="w-full bg-black text-[#fa9632] py-4 rounded-xl font-bold hover:bg-[#fa9632] hover:text-black transition-all flex items-center justify-center gap-2">
                    Consult Shivam Pathak <ChevronRight className="w-4 h-4" />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, min, max, step, onChange, isPercent, isStepUp, suffix }) => (
  <div>
    <div className="flex justify-between mb-4">
      <label className="text-sm font-bold text-slate-700 uppercase flex items-center gap-2">
        {label} {isStepUp && <ArrowUpRight className="w-4 h-4 text-[#fa9632]" />}
      </label>
      <span className="bg-slate-100 px-4 py-1 rounded-lg font-bold text-[#fa9632]">
        {isPercent ? `${value} %` : suffix ? `${value} ${suffix}` : `₹ ${(value || 0).toLocaleString('en-IN')}`}
      </span>
    </div>
    <input type="range" min={min} max={max} step={step} value={value || 0} onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]" />
  </div>
);

const LegendRow = ({ label, value, color }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="text-sm font-medium text-slate-600">{label}</span>
    </div>
    <span className="text-sm font-bold text-slate-900">₹ {(value || 0).toLocaleString('en-IN')}</span>
  </div>
);

export default Calculators;