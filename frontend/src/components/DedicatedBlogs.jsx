import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Loader2 } from 'lucide-react';
import { useAuthContext } from '../hooks/useAuthContext';

const DedicatedBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
          method: "GET",
        });

        const json = await resp.json();

        if (!resp.ok) {
          setError(json.error || "Could not retrieve the blog post.");
        } else {
          setBlog(json);
        }
      } catch (err) {
        console.error("Fetch Error: ", err);
        setError("Network connection issue. Please try refreshing.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSingleBlog();
  }, [id, user]);

  // EXACT MATCH PARSER: Bold logic inside {...} and python-style hyperlink logic inside (...)
  const parseInlineElements = (text) => {
    if (!text) return "";
    
    const parts = text.split(/(\{.*?\}|\(.*?\))/g);
    
    return parts.map((part, i) => {
      // 1. Handle Bold Blocks: {bold text}
      if (part.startsWith('{') && part.endsWith('}')) {
        const innerText = part.slice(1, -1).trim();
        return (
          <strong key={i} className="font-black text-slate-900 mx-0.5">
            {innerText}
          </strong>
        );
      }
      
      // 2. Handle Link Tuples: ('Label', 'https://link.com')
      if (part.startsWith('(') && part.endsWith(')')) {
        const innerContent = part.slice(1, -1);
        const commaIndex = innerContent.indexOf(',');
        
        if (commaIndex !== -1) {
          const labelRaw = innerContent.substring(0, commaIndex);
          const urlRaw = innerContent.substring(commaIndex + 1);
          
          const label = labelRaw.trim().replace(/^['"]|['"]$/g, '');
          const url = urlRaw.trim().replace(/^['"]|['"]$/g, '');
          
          return (
            <a 
              key={i} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#fa9632] font-bold hover:underline mx-0.5 transition-all"
            >
              {label}
            </a>
          );
        }
      }
      
      return part;
    });
  };

  // EXACT MATCH PARSER: Line-by-line block rendering (#, ##, [], paragraphs)
  const renderBlogContent = (content) => {
    if (!content) return null;

    return content.split('\n').map((line, index) => {
      const trimmedLine = line.trim();

      // 1. Check for Sub-sub-heading (##)
      if (trimmedLine.startsWith('##')) {
        const cleanText = trimmedLine.replace('##', '').trim();
        return (
          <h2 key={index} className="text-xl font-bold text-slate-800 mt-8 mb-4 tracking-tight">
            {parseInlineElements(cleanText)}
          </h2>
        );
      }
      
      // 2. Check for Sub-heading (#)
      if (trimmedLine.startsWith('#')) {
        const cleanText = trimmedLine.replace('#', '').trim();
        return (
          <h3 key={index} className="text-3xl font-black text-[#fa9632] mt-10 mb-4 tracking-tight">
            {parseInlineElements(cleanText)}
          </h3>
        );
      }

      // 3. Check for Unordered List Item ([...])
      if (trimmedLine.startsWith('[')) {
        const cleanText = trimmedLine.replace(/^\[|\]$/g, '').trim();
        return (
          <div key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed mb-3 pl-4">
            <span className="text-[#fa9632] font-black text-lg leading-none select-none">•</span>
            <span className="flex-1">{parseInlineElements(cleanText)}</span>
          </div>
        );
      }

      // 4. Default Paragraph Text
      return (
        <p key={index} className="text-slate-600 leading-relaxed mb-5 text-lg">
          {parseInlineElements(line)}
        </p>
      );
    });
  };

  // Loading State UI
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 text-[#fa9632] animate-spin" />
        <p className="text-slate-500 font-bold tracking-wide uppercase text-xs">Loading Insights...</p>
      </div>
    );
  }

  // Error State UI
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-md text-center">
          <p className="text-red-500 font-bold mb-4">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-black text-[#fa9632] font-black rounded-xl text-sm uppercase tracking-widest hover:bg-[#fa9632] hover:text-black transition-all"
          >
            Back to Feed
          </button>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Navigation Row */}
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 text-slate-400 hover:text-black font-black uppercase tracking-widest text-xs mb-8 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Header Image */}
          {blog.blog_pic && (
            <div className="w-full h-[350px] md:h-[450px] overflow-hidden">
              <img 
                src={blog.blog_pic} 
                alt={blog.title} 
                className="w-full h-full object-cover shadow-inner"
              />
            </div>
          )}

          {/* Article Core Content Body */}
          <div className="p-8 md:p-16">
            
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-black text-[#fa9632] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#fa9632]">
                <Tag className="w-3 h-3" />
                {blog.tags || "General"}
              </span>
              
              {blog.createdAt && (
                <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>

            {/* Main Title Heading */}
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              {blog.title}
            </h1>

            {/* Rendered Text Block Structure */}
            <div className="prose prose-slate max-w-none">
              {renderBlogContent(blog.blogContent)}
            </div>

          </div>
        </article>

      </div>
    </div>
  );
};

export default DedicatedBlog;