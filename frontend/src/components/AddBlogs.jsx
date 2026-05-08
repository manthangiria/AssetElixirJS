import React, { useState } from 'react';
import { ImagePlus, Type, AlignLeft, Send, X, CheckCircle } from 'lucide-react';

const AddBlogPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    imagePreview: null
  });
  const [submitted, setSubmitted] = useState(false);

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
    // Logic to send data to your Node.js/Express backend would go here
    console.log("Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Create New Post</h1>
            <p className="text-slate-500 mt-2">Share your financial expertise with the Asset Elixir community.</p>
          </div>
          <div className="hidden md:block">
             <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-[#fa9632] shadow-sm">
                <AlignLeft className="w-6 h-6" />
             </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
          
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Type className="w-4 h-4" /> Post Title
            </label>
            <input 
              type="text"
              required
              placeholder="e.g., Why SIP is the best tool for Navi Mumbai residents"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none transition-all placeholder:text-slate-300"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          {/* Content TextArea */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <AlignLeft className="w-4 h-4" /> Content
            </label>
            <textarea 
              required
              rows="10"
              placeholder="Start writing your financial insights..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-700 leading-relaxed focus:ring-2 focus:ring-[#fa9632] outline-none transition-all placeholder:text-slate-300 resize-none"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>

          {/* Image Upload Section */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <ImagePlus className="w-4 h-4" /> Cover Image
            </label>
            
            <div className="relative group">
              {formData.imagePreview ? (
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#fa9632] h-64 w-full">
                  <img 
                    src={formData.imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, image: null, imagePreview: null})}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-[#fa9632] transition-all group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ImagePlus className="w-12 h-12 text-slate-300 group-hover:text-[#fa9632] transition-colors mb-4" />
                    <p className="mb-2 text-sm text-slate-500 font-bold">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400 uppercase tracking-tighter">PNG, JPG or WebP (Max 2MB)</p>
                  </div>
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button 
              type="submit"
              disabled={submitted}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                submitted 
                ? 'bg-green-500 text-white' 
                : 'bg-black text-[#fa9632] hover:bg-[#fa9632] hover:text-black shadow-lg hover:shadow-orange-200'
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" /> Post Published Successfully
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Publish to Asset Elixir
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPost;