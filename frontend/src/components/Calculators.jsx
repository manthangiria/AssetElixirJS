import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Target, PiggyBank, IndianRupee } from 'lucide-react';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState('sip-fv');
  const [inputs, setInputs] = useState({
    amount: 5000,
    tenure: 10,
    rate: 12,
    target: 1000000
  });
  const [result, setResult] = useState(0);

  const calculateFinancials = () => {
    const r = inputs.rate / 100 / 12;
    const n = inputs.tenure * 12;
    const P = inputs.amount;
    const FV_target = inputs.target;

    let calculatedValue = 0;

    switch (activeTab) {
      case 'lumpsum-fv':
        // FV = P * (1 + r)^n
        calculatedValue = P * Math.pow(1 + (inputs.rate / 100), inputs.tenure);
        break;
      case 'lumpsum-req':
        // P = FV / (1 + r)^n
        calculatedValue = FV_target / Math.pow(1 + (inputs.rate / 100), inputs.tenure);
        break;
      case 'sip-fv':
        // FV = P * [((1 + r)^n - 1) / r] * (1 + r)
        calculatedValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        break;
      case 'sip-req':
        // P = FV / [((1 + r)^n - 1) / r] * (1 + r)
        calculatedValue = FV_target / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        break;
      default:
        break;
    }
    setResult(Math.round(calculatedValue));
  };

  useEffect(() => {
    calculateFinancials();
  }, [inputs, activeTab]);

  const tabs = [
    { id: 'sip-fv', label: 'SIP Future Value', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'sip-req', label: 'SIP Required', icon: <Target className="w-4 h-4" /> },
    { id: 'lumpsum-fv', label: 'Lumpsum Future Value', icon: <PiggyBank className="w-4 h-4" /> },
    { id: 'lumpsum-req', label: 'Lumpsum Required', icon: <Calculator className="w-4 h-4" /> },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Financial Calculators</h1>
          <p className="text-slate-600">Plan your goals with precision using our goal-based calculators.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex border border-black items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-[#fa9632] text-black shadow-lg shadow-grey-300' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          {/* Inputs Section */}
          <div className="space-y-6">
            <div>
  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
    {activeTab.includes('req') ? 'Target Future Value' : 'Investment Amount'}
  </label>
  <div className="relative">
    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
    <input
      type="number"
      placeholder="Enter amount"
      // Show empty string if the value is 0, so the placeholder appears
      value={activeTab.includes('req') ? (inputs.target || "") : (inputs.amount || "")}
      onChange={(e) => {
        const val = e.target.value;
        setInputs({
          ...inputs, 
          // If the user clears the input, set it to 0 (or empty string)
          [activeTab.includes('req') ? 'target' : 'amount']: val === "" ? 0 : Number(val)
        });
      }}
      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#fa9632] outline-none font-bold text-slate-900"
    />
  </div>
</div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Investment Tenure (Years)</label>
              <input
                type="range"
                min="1"
                max="40"
                value={inputs.tenure}
                onChange={(e) => setInputs({...inputs, tenure: Number(e.target.value)})}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fa9632]"
              />
              <div className="flex justify-between mt-2 text-sm font-bold text-[#fa9632]">
                <span>1 Year</span>
                <span className='text-black'>{inputs.tenure} Years</span>
                <span>40 Years</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Expected Return Rate (% p.a)</label>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={inputs.rate}
                onChange={(e) => setInputs({...inputs, rate: Number(e.target.value)})}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-2 text-sm font-bold text-[#fa9632]">
                <span>1%</span>
                <span className='text-black'>{inputs.rate}%</span>
                <span>25%</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#fa9632] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-2">
              {activeTab.includes('fv') ? 'Estimated Future Value' : 'Monthly SIP Required'}
            </h3>
            <div className="text-4xl md:text-5xl font-black mb-6">
              ₹{result.toLocaleString('en-IN')}
            </div>
            <div className="w-full h-px bg-black mb-6"></div>
            <p className="text-sm leading-relaxed">
              Based on your {inputs.tenure} year plan at {inputs.rate}% returns, 
              this calculation helps you visualize your journey toward financial clarity.
            </p>
            <button className="mt-8 w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-black hover:text-white transition-colors">
              Get Personalized Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;