import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Target, PiggyBank, IndianRupee, ArrowUpRight } from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('sip-fv');
  const [inputs, setInputs] = useState({
    amount: 10000,
    tenure: 10,
    rate: 12,
    target: 1000000,
    stepUp: 10 // New state for Annual Step-up %
  });
  const [result, setResult] = useState({ fv: 0, invested: 0 });

  const calculateFinancials = () => {
    const annualRate = inputs.rate / 100;
    const monthlyRate = annualRate / 12;
    const years = inputs.tenure;
    
    let totalFV = 0;
    let totalInvested = 0;
    let currentMonthlySIP = inputs.amount;

    switch (activeTab) {
      case 'sip-fv':
        // Iterative loop for Step-up SIP
        for (let y = 1; y <= years; y++) {
          for (let m = 1; m <= 12; m++) {
            totalInvested += currentMonthlySIP;
            // Compound monthly: (Existing + New) * (1 + monthly rate)
            totalFV = (totalFV + currentMonthlySIP) * (1 + monthlyRate);
          }
          // Apply annual step-up after every 12 months
          currentMonthlySIP += (currentMonthlySIP * (inputs.stepUp / 100));
        }
        setResult({ fv: Math.round(totalFV), invested: Math.round(totalInvested) });
        break;

      case 'lumpsum-fv':
        const lumpsumFV = inputs.amount * Math.pow(1 + annualRate, years);
        setResult({ fv: Math.round(lumpsumFV), invested: inputs.amount });
        break;

      case 'sip-req':
        // Standard formula for SIP Required (Simple SIP)
        const n = years * 12;
        const required = inputs.target / (((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate));
        setResult({ fv: inputs.target, invested: Math.round(required * n) });
        break;

      case 'lumpsum-req':
        const reqLumpsum = inputs.target / Math.pow(1 + annualRate, years);
        setResult({ fv: inputs.target, invested: Math.round(reqLumpsum) });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    calculateFinancials();
  }, [inputs, activeTab]);

  const tabs = [
    { id: 'sip-fv', label: 'SIP Returns', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'sip-req', label: 'Goal Planning', icon: <Target className="w-4 h-4" /> },
    { id: 'lumpsum-fv', label: 'Lumpsum', icon: <PiggyBank className="w-4 h-4" /> },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">SIP Returns Calculator</h1>
          <p className="text-slate-600">See how a disciplined step-up approach transforms your wealth.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex border border-black items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-[#fa9632] text-black shadow-lg shadow-orange-200' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-8">
            
            {/* Monthly Investment */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold text-slate-700 uppercase">Monthly Investment</label>
                <span className="bg-slate-100 px-4 py-1 rounded-lg font-bold text-[#fa9632]">₹ {inputs.amount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="500"
                max="500000"
                step="500"
                value={inputs.amount}
                onChange={(e) => setInputs({...inputs, amount: Number(e.target.value)})}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]"
              />
            </div>

            {/* Duration */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold text-slate-700 uppercase">Duration (Years)</label>
                <span className="bg-slate-100 px-4 py-1 rounded-lg font-bold text-[#fa9632]">{inputs.tenure} Yrs</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={inputs.tenure}
                onChange={(e) => setInputs({...inputs, tenure: Number(e.target.value)})}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]"
              />
            </div>

            {/* Expected Returns */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold text-slate-700 uppercase">Expected Returns (% p.a)</label>
                <span className="bg-slate-100 px-4 py-1 rounded-lg font-bold text-[#fa9632]">{inputs.rate} %</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={inputs.rate}
                onChange={(e) => setInputs({...inputs, rate: Number(e.target.value)})}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]"
              />
            </div>

            {/* Annual Step-up (Conditioned for SIP Returns tab) */}
            {activeTab === 'sip-fv' && (
              <div className="pt-6 border-t border-slate-100">
                <div className="flex justify-between mb-4">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2 uppercase">
                    Annual Step-up (%) <ArrowUpRight className="w-4 h-4 text-[#fa9632]" />
                  </label>
                  <span className="bg-orange-50 px-4 py-1 rounded-lg font-bold text-[#fa9632] border border-orange-100">{inputs.stepUp} %</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={inputs.stepUp}
                  onChange={(e) => setInputs({...inputs, stepUp: Number(e.target.value)})}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]"
                />
                <p className="text-[10px] text-slate-400 mt-3 italic">Increasing your SIP by {inputs.stepUp}% every year significantly boosts your long-term wealth.</p>
              </div>
            )}
          </div>

          {/* Results Summary Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-[#fa9632] p-8 text-center">
              <h3 className="font-bold uppercase tracking-widest text-xs text-black/60 mb-2">Maturity Value</h3>
              <div className="text-4xl font-black text-black">
                ₹ {result.fv.toLocaleString('en-IN')}
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Total Invested</span>
                <span className="text-slate-900 font-bold italic">₹ {result.invested.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Wealth Gained</span>
                <span className="text-green-600 font-bold italic">₹ {(result.fv - result.invested).toLocaleString('en-IN')}</span>
              </div>
              
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
                <div 
                  className="bg-slate-300 h-full" 
                  style={{ width: `${(result.invested / result.fv) * 100}%` }}
                ></div>
                <div 
                  className="bg-[#fa9632] h-full" 
                  style={{ width: `${((result.fv - result.invested) / result.fv) * 100}%` }}
                ></div>
              </div>

              <button className="w-full bg-black text-[#fa9632] py-4 rounded-xl font-bold hover:bg-[#fa9632] hover:text-black transition-all mt-4">
                Speak with Shivam Pathak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;