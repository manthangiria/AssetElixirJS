import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronDown, Filter } from 'lucide-react';
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [sortBy, setSortBy]             = useState("newest");
  const [activeFilter, setActiveFilter] = useState("All");

  const {blogs, all_blogs, dispatch}    = useBlogContext();
  const {user}                          = useAuthContext();

  const apiUrl                          = import.meta.env.VITE_API_URL;
  const navigate                        = useNavigate();

  const fetchBlogs = async () => {
    const resp = await fetch(`${apiUrl}/api/blogs/`);
    const json = await resp.json();
    if (resp.ok){
      dispatch({type:"SET_INITIAL_BLOGS",payload:json});
    }
  }

  useEffect(()=>{
    fetchBlogs();
  },[user, dispatch, apiUrl])

  const handleDelete = async (x) => {
    try {
      const resp = await fetch(`${apiUrl}/api/blogs/${x}`,{
        method:"DELETE",
        headers:{"Authorization":`Bearer ${user.token}`}
      })
      const json = await resp.json();
      if (!resp.ok){
        alert(`Something Went Wrong : ${json.error}`);
      } else {
        dispatch({type:"DELETE_BLOG", payload:json._id})
      }
    } catch (err) {
      alert(`Can't Delete: ${err}`);
    }
  }

  const categories = ["All", "Getting Started", "Financial Planning", "Investments", "Retirement", "Protection", "Tax", "Lessons from life", "Mistakes to Avoid","Market Insights"];

  const processedBlogs = useMemo(() => {
    let filtered = all_blogs || [];
    if (activeFilter !== "All") {
      filtered = filtered.filter(blog => blog.tags === activeFilter);
    }
    return [...filtered].sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [all_blogs, sortBy, activeFilter]);

  
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex items-center gap-2 text-slate-500 mr-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Filters:</span>
              </div>
              {categories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeFilter === cat 
                    ? 'bg-[#fa9632] border-black text-black' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-[#fa9632]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 self-end md:self-auto">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Sort By:</label>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 pr-10 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#fa9632] transition-all cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="alphabetical">Title (A-Z)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Grid Header */}
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-[#fa9632] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">
              {activeFilter === "All" ? "Latest Articles" : activeFilter}
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedBlogs && processedBlogs.map((blog) => (
              <article 
                key={blog._id} 
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500"
              >
                {/* SECTION 1: Image Area */}
                <div className="relative h-64 shrink-0 overflow-hidden">
                  <img 
                    src={blog.blogPic} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-[#fa9632] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-[#fa9632]">
                    {blog.tags}
                  </div>
                </div>
                
                {/* SECTION 2: Content Area (Black BG, changes to Orange on hover) */}
                <div className="flex-1 flex flex-col p-8 bg-slate-900 transition-colors duration-300 group-hover:bg-[#fa9632]">
                  
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 group-hover:text-black/60 transition-colors">
                    <span className="flex items-center gap-1 font-bold">
                      <Calendar className="w-3 h-3" /> {blog.displayDate}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>
                  
                  {/* Title: Orange -> Black */}
                  <h3 className="text-xl font-bold text-[#fa9632] mb-4 group-hover:text-black transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  
                  {/* Description: White/Bold -> Black/Bold */}
                  <p className="text-white font-bold text-sm leading-relaxed mb-8 group-hover:text-black transition-colors line-clamp-3">
                    {blog.blogContent}
                  </p>
                  
                  {/* Read Full Article: Pinned to bottom */}
                  <div className="mt-auto">
                    <button onClick={()=>navigate(`/blogs/${blog._id}`)} className="cursor-pointer flex items-center gap-2 text-slate-300 font-medium text-sm group-hover:text-black group-hover:font-black transition-all">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                    
                    {user && (
                      <div className="mt-4 pt-4 border-t border-white/10 group-hover:border-black/10 text-xs text-white group-hover:text-black">
                        <button onClick={()=>handleDelete(blog._id)} className='hover:underline font-bold cursor-pointer'>Delete</button>
                        <span className="mx-2 opacity-50">|</span>
                        <button className='hover:underline font-bold cursor-pointer'>Update</button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;