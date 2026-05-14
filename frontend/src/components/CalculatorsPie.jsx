import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Target, PiggyBank, IndianRupee, 
  ArrowUpRight, Home, RefreshCw, ChevronRight 
} from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('lumpsum-sip');
  const [swpMode, setSwpMode] = useState('balance'); 
  const [goalMode, setGoalMode] = useState('sip'); 
  
  const [inputs, setInputs] = useState({
    lumpsum: 1600000,
    sip: 40000,
    tenure: 5,
    rate: 12,
    target: 10000000,
    stepUp: 0,
    swpAmount: 20000,
    swpTargetBalance: 0,
    loanAmount: 5000000,
    loanRate: 8.5,
    loanTenure: 20
  });

  const [result, setResult] = useState({ 
    fv: 0, invested: 0, emi: 0, totalPayable: 0, sipRequired: 0, lumpsumRequired: 0, swpRequired: 0 
  });

  const calculateFinancials = () => {
    const annualRate = (inputs.rate || 0) / 100;
    const monthlyRate = annualRate / 12;
    const years = (inputs.tenure || 0);
    const months = years * 12;
    const annualStepUp = (inputs.stepUp || 0) / 100;
    
    switch (activeTab) {
      case 'lumpsum-sip':
        const lumpsumFV = (inputs.lumpsum || 0) * Math.pow(1 + annualRate, years);
        let sipFV = 0;
        let totalSIPInvested = 0;
        let currentSIP = (inputs.sip || 0);
        for (let y = 1; y <= years; y++) {
          for (let m = 1; m <= 12; m++) {
            totalSIPInvested += currentSIP;
            sipFV = (sipFV + currentSIP) * (1 + monthlyRate);
          }
          currentSIP *= (1 + annualStepUp);
        }
        setResult(prev => ({ ...prev, fv: Math.round(lumpsumFV + sipFV), invested: Math.round((inputs.lumpsum || 0) + totalSIPInvested) }));
        break;

      case 'home-loan':
        const loanR = (inputs.loanRate || 0) / 100 / 12;
        const loanN = (inputs.loanTenure || 0) * 12;
        const emi = (inputs.loanAmount * loanR * Math.pow(1 + loanR, loanN)) / (Math.pow(1 + loanR, loanN) - 1);
        setResult(prev => ({ ...prev, emi: Math.round(emi), totalPayable: Math.round(emi * loanN) }));
        break;

      case 'swp':
        if (swpMode === 'balance') {
          let swpBalance = (inputs.lumpsum || 0);
          for (let i = 0; i < months; i++) {
            swpBalance = (swpBalance - (inputs.swpAmount || 0)) * (1 + monthlyRate);
            if (swpBalance < 0) { swpBalance = 0; break; }
          }
          setResult(prev => ({ ...prev, fv: Math.round(swpBalance), invested: (inputs.lumpsum || 0) }));
        } else {
          const P = inputs.lumpsum || 0;
          const targetB = inputs.swpTargetBalance || 0;
          const compoundFactor = Math.pow(1 + monthlyRate, months);
          const annuityFactor = ((compoundFactor - 1) / monthlyRate) * (1 + monthlyRate);
          const requiredWithdrawal = (P * compoundFactor - targetB) / annuityFactor;
          setResult(prev => ({ ...prev, swpRequired: Math.round(Math.max(0, requiredWithdrawal)), fv: targetB, invested: P }));
        }
        break;

      case 'sip-target':
        if (goalMode === 'sip') {
          // Calculate SIP Required (Starting from 0 Lumpsum as field is removed)
          const gap = (inputs.target || 0); 
          let growthFactor = 0;
          let unitSIP = 1;
          let totalUnitsInvested = 0;
          for (let y = 1; y <= years; y++) {
            for (let m = 1; m <= 12; m++) {
              growthFactor = (growthFactor + unitSIP) * (1 + monthlyRate);
              totalUnitsInvested += unitSIP;
            }
            unitSIP *= (1 + annualStepUp);
          }
          const reqSIP = gap > 0 ? gap / growthFactor : 0;
          setResult(prev => ({ ...prev, sipRequired: Math.round(reqSIP), fv: (inputs.target || 0), invested: Math.round(reqSIP * totalUnitsInvested) }));
        } else {
          // Calculate Lumpsum Required (Assuming 0 SIP as field is removed)
          const gap = (inputs.target || 0);
          const reqLumpsum = gap > 0 ? gap / Math.pow(1 + annualRate, years) : 0;
          setResult(prev => ({ ...prev, lumpsumRequired: Math.round(reqLumpsum), fv: (inputs.target || 0), invested: Math.round(reqLumpsum) }));
        }
        break;
      default: break;
    }
  };

  useEffect(() => { calculateFinancials(); }, [inputs, activeTab, swpMode, goalMode]);

  const investedValue = activeTab === 'home-loan' ? inputs.loanAmount : result.invested;
  const totalValue = activeTab === 'home-loan' ? result.totalPayable : result.fv;
  const gainsValue = Math.max(0, totalValue - investedValue);
  const percentage = totalValue > 0 ? (gainsValue / totalValue) * 100 : 0;
  const strokeDasharray = `${percentage} ${100 - percentage}`;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight special">Wealth Calculators</h1>
        </div>

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
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-8">
            
            {/* Sub-Toggles */}
            {activeTab === 'swp' && (
              <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                <button onClick={() => setSwpMode('balance')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${swpMode === 'balance' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Balance</button>
                <button onClick={() => setSwpMode('withdrawal')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${swpMode === 'withdrawal' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Withdrawal</button>
              </div>
            )}
            {activeTab === 'sip-target' && (
              <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                <button onClick={() => setGoalMode('sip')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${goalMode === 'sip' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate SIP</button>
                <button onClick={() => setGoalMode('lumpsum')} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${goalMode === 'lumpsum' ? 'bg-white text-black shadow-sm' : 'text-slate-400'}`}>Calculate Lumpsum</button>
              </div>
            )}

            {activeTab === 'home-loan' ? (
              <>
                <InputGroup label="Loan Amount" value={inputs.loanAmount} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, loanAmount: v})} />
                <InputGroup label="Interest Rate" value={inputs.loanRate} min={5} max={15} step={0.1} onChange={(v) => setInputs({...inputs, loanRate: v})} isPercent />
                <InputGroup label="Tenure" value={inputs.loanTenure} min={1} max={30} step={1} onChange={(v) => setInputs({...inputs, loanTenure: v})} suffix="Yrs" />
              </>
            ) : (
              <>
                {/* Always show Target for Goal Planner */}
                {activeTab === 'sip-target' && <InputGroup label="Target Future Value" value={inputs.target} min={100000} max={100000000} step={100000} onChange={(v) => setInputs({...inputs, target: v})} />}
                
                {/* Show Lumpsum only in standard and SWP modes */}
                {(activeTab === 'lumpsum-sip' || activeTab === 'swp') && (
                  <InputGroup label="Lumpsum Investment" value={inputs.lumpsum} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, lumpsum: v})} />
                )}

                {/* Show SIP only in standard mode */}
                {activeTab === 'lumpsum-sip' && (
                  <InputGroup label="Monthly SIP" value={inputs.sip} min={0} max={500000} step={500} onChange={(v) => setInputs({...inputs, sip: v})} />
                )}

                {/* SWP Specifics */}
                {activeTab === 'swp' && swpMode === 'balance' && (
                  <InputGroup label="Monthly Withdrawal" value={inputs.swpAmount} min={500} max={500000} step={500} onChange={(v) => setInputs({...inputs, swpAmount: v})} />
                )}
                {activeTab === 'swp' && swpMode === 'withdrawal' && (
                  <InputGroup label="Desired Balance at End" value={inputs.swpTargetBalance} min={0} max={10000000} step={10000} onChange={(v) => setInputs({...inputs, swpTargetBalance: v})} />
                )}

                <InputGroup label="Tenure" value={inputs.tenure} min={1} max={40} step={1} onChange={(v) => setInputs({...inputs, tenure: v})} suffix="Yrs" />
                <InputGroup label="Expected Returns" value={inputs.rate} min={1} max={25} step={0.5} onChange={(v) => setInputs({...inputs, rate: v})} isPercent />
                
                {/* Step-up only for SIP-based calculations */}
                {(activeTab === 'lumpsum-sip' || (activeTab === 'sip-target' && goalMode === 'sip')) && (
                  <InputGroup label="Annual Step-up" value={inputs.stepUp} min={0} max={50} step={1} onChange={(v) => setInputs({...inputs, stepUp: v})} isPercent isStepUp />
                )}
              </>
            )}
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden sticky top-24">
            <div className="bg-black p-8 text-center text-white">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-slate-400 mb-2">
                {activeTab === 'home-loan' ? 'Monthly EMI' : 
                 (activeTab === 'sip-target' && goalMode === 'sip') ? 'Monthly SIP Required' : 
                 (activeTab === 'sip-target' && goalMode === 'lumpsum') ? 'Lumpsum Required' :
                 (activeTab === 'swp' && swpMode === 'withdrawal') ? 'Monthly Withdrawal Possible' : 'Maturity Value'}
              </h3>
              <div className="text-3xl font-black text-[#fa9632] special">
                ₹ {activeTab === 'home-loan' ? (result.emi || 0).toLocaleString('en-IN') : 
                   (activeTab === 'sip-target' && goalMode === 'sip') ? (result.sipRequired || 0).toLocaleString('en-IN') : 
                   (activeTab === 'sip-target' && goalMode === 'lumpsum') ? (result.lumpsumRequired || 0).toLocaleString('en-IN') :
                   (activeTab === 'swp' && swpMode === 'withdrawal') ? (result.swpRequired || 0).toLocaleString('en-IN') :
                   (result.fv || 0).toLocaleString('en-IN')}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-center mb-8 relative">
                <svg width="180" height="180" viewBox="0 0 42 42" className="transform -rotate-90">
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="4"></circle>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#fa9632" strokeWidth="4" 
                    strokeDasharray={strokeDasharray} strokeDashoffset="0"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    {(activeTab === 'swp' && swpMode === 'withdrawal') || (activeTab === 'sip-target' && goalMode !== 'lumpsum') ? 'Left' : 'Gains'}
                   </span>
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
    <div className="flex justify-between mb-4 items-center">
      <label className="text-sm font-bold text-slate-700 uppercase flex items-center gap-2">
        {label} {isStepUp && <ArrowUpRight className="w-4 h-4 text-[#fa9632]" />}
      </label>
      <div className="flex bg-slate-100 px-3 py-1 rounded-lg font-bold text-[#fa9632] items-center border border-slate-200 focus-within:border-[#fa9632] transition-colors">
        {!isPercent && !suffix && <span className="mr-1 text-slate-400">₹</span>}
        <input 
          type="number"
          value={value === 0 ? "" : value} 
          onChange={(e) => {
            const val = e.target.value;
            onChange(val === "" ? 0 : Number(val));
          }}
          placeholder="0"
          className="special bg-transparent w-24 text-right outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {isPercent && <span className="ml-1 text-slate-400">%</span>}
        {suffix && <span className="ml-1 text-slate-400">{suffix}</span>}
      </div>
    </div>
    <input type="range" min={min} max={max} step={step} value={value || 0} onChange={(e) => onChange(Number(e.target.value))}
      className="special w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]" />
  </div>
);

const LegendRow = ({ label, value, color }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color} special`}></div>
      <span className="text-sm font-medium text-slate-600">{label}</span>
    </div>
    <span className="text-sm font-bold text-slate-900 special">₹ {(value || 0).toLocaleString('en-IN')}</span>
  </div>
);

export default Calculators;