import React, { useState, useEffect } from 'react';

const SavingCalculator = () => {
  // 1. Initialized as strings to allow empty inputs for better UX
  const [inputs, setInputs] = useState({
    firstSalaryAge: "25",
    currentAge: "30",
    firstMonthlySalary: "100000",
    currentMonthlySalary: "200000",
    financialAssets: "200000",
    realEstate: "0",
    homeLoan: "0",
    otherLoan: "0",
  });

  const [results, setResults] = useState({
    cagr: 0,
    totalIncome: 0,
    netAsset: 0,
    savingsPercentage: 0,
    avgMonthlyContribution: 0,
  });

  // 2. Simply store the value string. This lets you backspace and clear the field.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // 3. Parse strings to numbers for calculations (defaulting to 0 if empty)
    const firstSalaryAge = parseFloat(inputs.firstSalaryAge) || 0;
    const currentAge = parseFloat(inputs.currentAge) || 0;
    const firstMonthlySalary = parseFloat(inputs.firstMonthlySalary) || 0;
    const currentMonthlySalary = parseFloat(inputs.currentMonthlySalary) || 0;
    const financialAssets = parseFloat(inputs.financialAssets) || 0;
    const realEstate = parseFloat(inputs.realEstate) || 0;
    const homeLoan = parseFloat(inputs.homeLoan) || 0;
    const otherLoan = parseFloat(inputs.otherLoan) || 0;

    const years = currentAge - firstSalaryAge;
    
    // Safety check to prevent division by zero or NaN
    if (years <= 0 || firstMonthlySalary <= 0) {
        setResults(prev => ({ ...prev, cagr: 0, totalIncome: 0, savingsPercentage: 0 }));
        return;
    }

    // 1. Calculate CAGR (Salary Growth)
    const cagr = (Math.pow(currentMonthlySalary / firstMonthlySalary, 1 / years) - 1);

    // 2. Calculate Total Income Earned
    const firstYearIncome = firstMonthlySalary * 12;
    let totalIncome = 0;
    if (cagr === 0) {
      totalIncome = firstYearIncome * years;
    } else {
      totalIncome = (firstYearIncome * (Math.pow(1 + cagr, years) - 1)) / cagr;
      totalIncome += (currentMonthlySalary * 12); 
    }

    // 3. Net Assets
    const netAsset = (financialAssets + realEstate) - (homeLoan + otherLoan);

    // 4. Savings Percentage & Monthly Contribution
    const savingsPercentage = totalIncome > 0 ? (netAsset / totalIncome) * 100 : 0;
    const avgMonthlyContribution = netAsset / (years * 12);

    setResults({
      cagr: (cagr * 100).toFixed(2),
      totalIncome: Math.round(totalIncome),
      netAsset,
      savingsPercentage: savingsPercentage.toFixed(2),
      avgMonthlyContribution: Math.round(avgMonthlyContribution),
    });
  }, [inputs]);

  // Design remains exactly as requested
  return (
    <div className="p-6 max-w-4xl mt-20 mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 special">Financial Efficiency/Savings Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1: Income Details */}
        <div className="space-y-4">
          <h3 className="font-semibold text-black-700 bg-[#fa9632] p-2 rounded">Step 1: Income Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">First Salary Age</label>
              <input type="number" name="firstSalaryAge" value={inputs.firstSalaryAge} onChange={handleInputChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Current Age</label>
              <input type="number" name="currentAge" value={inputs.currentAge} onChange={handleInputChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">First Monthly Salary (₹)</label>
              <input type="number" name="firstMonthlySalary" value={inputs.firstMonthlySalary} onChange={handleInputChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Current Monthly Salary (₹)</label>
              <input type="number" name="currentMonthlySalary" value={inputs.currentMonthlySalary} onChange={handleInputChange} className="w-full border p-2 rounded" />
            </div>
          </div>
          <div className="mt-2 p-3 bg-green-100 rounded text-center">
            <p className="text-sm font-medium text-green-800">Yearly Growth: {results.cagr}%</p>
          </div>
        </div>

        {/* Step 2: Assets & Loans */}
        <div className="space-y-4">
          <h3 className="font-semibold text-black bg-[#fa9632] p-2 rounded">Step 2: Net Assets</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Financial Assets (MF, Bank, etc)</label>
              <input type="number" name="financialAssets" value={inputs.financialAssets} onChange={handleInputChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Real Estate (Current Value)</label>
              <input type="number" name="realEstate" value={inputs.realEstate} onChange={handleInputChange} className="w-full border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Home Loan</label>
                <input type="number" name="homeLoan" value={inputs.homeLoan} onChange={handleInputChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Other Loans</label>
                <input type="number" name="otherLoan" value={inputs.otherLoan} onChange={handleInputChange} className="w-full border p-2 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-10 bg-slate-900 p-6 rounded-xl border-2 border-dashed border-gray-300">
        <h3 className="text-xl font-bold mb-4 text-center text-[#fa9632]">Results & Efficiency</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold">Total Earned</p>
            <p className="text-lg font-mono text-gray-800">₹{results.totalIncome.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold">Net Assets</p>
            <p className="text-lg font-mono text-blue-600">₹{results.netAsset.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm border-t-4 border-cyan-500">
            <p className="text-xs text-gray-500 uppercase font-bold">Lifetime Saving %</p>
            <p className="text-2xl font-bold text-cyan-600">{results.savingsPercentage}%</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold">Avg. Monthly Save</p>
            <p className="text-lg font-mono text-gray-800">₹{results.avgMonthlyContribution.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingCalculator;