import React, { useState } from 'react';
import { ImagePlus, Type, AlignLeft, Send, X, CheckCircle, Eye, Tag } from 'lucide-react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useBlogContext } from '../hooks/useBlogContext';
import { useNavigate } from 'react-router-dom';

const AddBlogPost = () => {
  const [title, setTitle]               = useState(null);
  const [category, setCategory]         = useState(null);
  const [content, setContent]           = useState(null);
  const [image, setImage]               = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [load, setLoad]                 = useState(null);

  const [error, setError]               = useState(null);

  const {user}                          = useAuthContext();
  const {blogs, all_blogs, dispatch}    = useBlogContext();

  const navigate                        = useNavigate();

  const handleBlogSubmit = async (e) => {
    e.preventDefault();

    if (!user){
      setError("You must be logged in!");
      return;
    }

    const fileInput = document.querySelector("#blog_pic_yo").files[0];
    if (fileInput && fileInput.type !== 'image/jpeg' && fileInput.type !== 'input/jpg' && fileInput.type !== 'image/png'){
      alert("Only JPEG/JPG/PNG images allowed");
      return;
    }

    setLoad(true);
    setError(null);

    try {
      const formData = new FormData();
      
      formData.append("title", title);
      formData.append("tags", category);
      formData.append("blogContent", content);
      formData.append('blog_pic', image);
      
      const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`,{
        method:"POST",
        body:formData,
        headers:{"Authorization":`Bearer ${user.token}`}
      })

      const json = await resp.json();

      if (!resp.ok){
        setError(json.error || "Something went wrong");
      } else {
        dispatch({type:"ADD_BLOG",payload:json});
        navigate('/',{replace:true});
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission Error: ",err);
      setError("Network Error. Please Check You Connection");
    } finally {
      setLoad(false);
    }
  }

  const [submitted, setSubmitted] = useState(false);

  // Categories should match the ones in your Blog.jsx filters
  const categories = ["Getting Started", "Financial Planning", "Investments", "Retirement", "Protection", "Tax", "Lessons of Life", "Mistakes to Avoid", "Market Insights"];

  // Helper to turn text inside curly braces {...} into bold elements
  const parseInlineElements = (text) => {
    if (!text) return "";
    
    // Splits the text by curly braces, keeping the inside content
    const parts = text.split(/\{([^}]+)\}/g);
    
    return parts.map((part, i) => {
      // Every odd index is a match inside the curly braces
      if (i % 2 === 1) {
        return (
          <strong key={i} className="font-black text-slate-900 mx-0.5">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  const renderPreview = () => {
    if (!content) return null;

    return content.split('\n').map((line, index) => {
      const trimmedLine = line.trim();

      // 1. Check for Sub-sub-heading (##)
      if (trimmedLine.startsWith('##')) {
        const cleanText = trimmedLine.replace('##', '').trim();
        return (
          <h2 key={index} className="text-xl font-bold text-slate-800 mt-5 mb-3 tracking-tight">
            {parseInlineElements(cleanText)}
          </h2>
        );
      }
      
      // 2. Check for Sub-heading (#)
      if (trimmedLine.startsWith('#')) {
        const cleanText = trimmedLine.replace('#', '').trim();
        return (
          <h1 key={index} className="text-3xl font-black text-[#fa9632] mt-6 mb-4 tracking-tight">
            {parseInlineElements(cleanText)}
          </h1>
        );
      }

      // 3. Check for Unordered List Item ([...])
      if (trimmedLine.startsWith('[')) {
        // Strip the wrapping square brackets if both exist, or just the opening one
        const cleanText = trimmedLine.replace(/^\[|\]$/g, '').trim();
        return (
          <div key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed mb-2 pl-4">
            {/* Custom dot bullet point matching your brand color */}
            <span className="text-[#fa9632] font-black text-lg leading-none select-none">•</span>
            <span className="flex-1">{parseInlineElements(cleanText)}</span>
          </div>
        );
      }

      // 4. Default Paragraph Text
      return (
        <p key={index} className="text-slate-600 leading-relaxed mb-4">
          {parseInlineElements(line)}
        </p>
      );
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file))
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Blog Editor</h1>
          <p className="text-slate-500 mt-2">Manage your financial insights and categories.</p>
          <p className='text-m'>Start text with '#' to add sub heading in content</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT: Input Form */}
          <form onSubmit={handleBlogSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
            
            {/* Title */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Post Title</label>
              <input 
                type="text"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Category Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Tag className="w-3 h-3" /> Select Category
              </label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none appearance-none cursor-pointer"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Image */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Cover Image</label>
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50">
                <ImagePlus className="w-6 h-6 text-slate-300" />
                <input type="file" id='blog_pic_yo' className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>

            <button type="submit" className="w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest bg-black text-[#fa9632] hover:bg-[#fa9632] hover:text-black transition-all flex items-center justify-center gap-3">
              {submitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              {submitted ? "Success" : "Publish Post"}
            </button>
            <span className='text-red-500'>{error ? error : ''}</span>
          </form>

          {/* RIGHT: Live Preview */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 min-h-[600px]">
            <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-50 pb-4">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Editor Preview</span>
            </div>

            {imagePreview && (
              <img src={imagePreview} alt="Header" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg" />
            )}

            {/* Category Badge in Preview */}
            <span className="inline-block bg-black text-[#fa9632] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 border border-[#fa9632]">
              {category}
            </span>

            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              {title || "Untitled Post"}
            </h2>

            <div className="prose prose-slate max-w-none">
              {content ? renderPreview() : <p className="text-slate-300">Awaiting content...</p>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddBlogPost;