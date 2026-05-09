import React, { useState } from 'react';
import { ImagePlus, Type, AlignLeft, Send, X, CheckCircle, Eye, Tag } from 'lucide-react';

const AddBlogPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Mutual Funds", // Default category
    content: "",
    image: null,
    imagePreview: null
  });
  const [submitted, setSubmitted] = useState(false);

  // Categories should match the ones in your Blog.jsx filters
  const categories = ["Mutual Funds", "Retirement", "Tax Planning", "Psychology of Money"];

  const renderPreview = () => {
    return formData.content.split('\n').map((line, index) => {
      if (line.startsWith('#')) {
        return (
          <h1 key={index} className="text-3xl font-black text-[#fa9632] mt-6 mb-4 tracking-tight">
            {line.replace('#', '').trim()}
          </h1>
        );
      }
      return <p key={index} className="text-slate-600 leading-relaxed mb-4">{line}</p>;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ready for MERN Save:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Blog Editor</h1>
          <p className="text-slate-500 mt-2">Manage your financial insights and categories.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT: Input Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
            
            {/* Title */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Post Title</label>
              <input 
                type="text"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            {/* Category Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Tag className="w-3 h-3" /> Select Category
              </label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none appearance-none cursor-pointer"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Content</label>
              <textarea 
                required
                rows="8"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-700 leading-relaxed focus:ring-2 focus:ring-[#fa9632] outline-none font-mono text-sm"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>

            {/* Image */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Cover Image</label>
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50">
                <ImagePlus className="w-6 h-6 text-slate-300" />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>

            <button type="submit" className="w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest bg-black text-[#fa9632] hover:bg-[#fa9632] hover:text-black transition-all flex items-center justify-center gap-3">
              {submitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              {submitted ? "Success" : "Publish Post"}
            </button>
          </form>

          {/* RIGHT: Live Preview */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 min-h-[600px]">
            <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-50 pb-4">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Editor Preview</span>
            </div>

            {formData.imagePreview && (
              <img src={formData.imagePreview} alt="Header" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg" />
            )}

            {/* Category Badge in Preview */}
            <span className="inline-block bg-black text-[#fa9632] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 border border-[#fa9632]">
              {formData.category}
            </span>

            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              {formData.title || "Untitled Post"}
            </h2>

            <div className="prose prose-slate max-w-none">
              {formData.content ? renderPreview() : <p className="text-slate-300">Awaiting content...</p>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddBlogPost;