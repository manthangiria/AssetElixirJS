import React, { useState } from 'react';
import { 
  Lock, 
  User, 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  EyeOff 
} from 'lucide-react';
import { useLogin } from '../hooks/useLogin';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {login, error, isloading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-20 pb-10">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fa9632] rounded-full opacity-5 blur-[100px] -mr-40 -mt-40"></div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Logo / Brand Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6 shadow-xl shadow-orange-100">
            <ShieldCheck className="text-[#fa9632] w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl font-medium text-slate-900 leading-tight">
            Control <em className="italic text-[#555] font-normal">Center.</em>
          </h1>
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mt-3 font-bold">
            Asset Elixir Management
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#fa9632] transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text"
                  required
                  placeholder="Enter admin username"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#fa9632]/20 focus:border-[#fa9632] transition-all placeholder:text-slate-300"
                  onChange={e=>setUsername(e.target.value)}
                  value={username}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#fa9632] transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium outline-none focus:ring-2 focus:ring-[#fa9632]/20 focus:border-[#fa9632] transition-all placeholder:text-slate-300"
                  onChange={e=>setPassword(e.target.value)}
                  value={password}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-black text-[#fa9632] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#fa9632] hover:text-black transition-all shadow-lg hover:shadow-orange-200"
              >
                Sign In <ArrowRight size={14} />
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-slate-400 leading-relaxed italic">
              "Earn with ethics. Grow with discipline. <br/> Access restricted to authorized personnel."
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <a href="/" className="text-[11px] font-bold text-slate-400 hover:text-[#fa9632] transition-colors flex items-center justify-center gap-2">
            Return to Public Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;