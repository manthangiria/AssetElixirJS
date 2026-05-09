import React, { useState } from 'react';
import { ImagePlus, Type, AlignLeft, Send, X, CheckCircle, Eye } from 'lucide-react';

const AddBlogPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    imagePreview: null
  });
  const [submitted, setSubmitted] = useState(false);

  // Logic to parse the content for the preview
  const renderPreview = () => {
    return formData.content.split('\n').map((line, index) => {
      if (line.startsWith('#')) {
        // If line starts with #, render as H1 with brand orange
        return (
          <h1 key={index} className="text-3xl font-black text-[#fa9632] mt-6 mb-4 tracking-tight">
            {line.replace('#', '').trim()}
          </h1>
        );
      }
      // Otherwise render as standard paragraph
      return (
        <p key={index} className="text-slate-600 leading-relaxed mb-4 min-h-[1.5rem]">
          {line}
        </p>
      );
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
    console.log("Submitting to MERN Backend:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Blog Editor</h1>
          <p className="text-slate-500 mt-2">Use <span className="font-bold text-black">#</span> at the start of a line for sub-headings.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT: Input Form */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
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

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Content (Markdown Style)</label>
              <textarea 
                required
                rows="12"
                placeholder="# Introduction..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-700 leading-relaxed focus:ring-2 focus:ring-[#fa9632] outline-none resize-none font-mono text-sm"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Upload Image</label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
                <ImagePlus className="w-8 h-8 text-slate-300" />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>

            <button type="submit" className="w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest bg-black text-[#fa9632] hover:bg-[#fa9632] hover:text-black transition-all flex items-center justify-center gap-3 shadow-lg">
              {submitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              {submitted ? "Published" : "Publish Post"}
            </button>
          </form>

          {/* RIGHT: Live Preview */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 min-h-[600px]">
            <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-50 pb-4">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Live Preview</span>
            </div>

            {formData.imagePreview && (
              <img src={formData.imagePreview} alt="Header" className="w-full h-48 object-cover rounded-2xl mb-8" />
            )}

            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              {formData.title || "Your Post Title"}
            </h2>

            <div className="prose prose-slate max-w-none">
              {formData.content ? renderPreview() : (
                <p className="text-slate-300 italic">Start typing to see the preview...</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddBlogPost;