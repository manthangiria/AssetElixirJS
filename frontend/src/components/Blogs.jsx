import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronDown, Filter } from 'lucide-react';
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Blog = () => {
  const [sortBy, setSortBy]             = useState("newest");
  const [activeFilter, setActiveFilter] = useState("All");
  
  const {blogs:shit, all_blogs, dispatch} = useBlogContext();
  const {user}                       = useAuthContext();

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchBlogs = async () => {
    const resp = await fetch(`${apiUrl}/api/blogs/`)
    const json = await resp.json();
    if (resp.ok) {
      dispatch({type:"SET_INITIAL_BLOGS", payload:json});
      
    }
    console.log(json)
  };

  useEffect(()=>{    
    //fetchBlogs();
  },[dispatch, apiUrl])

  const blogs = [
    {
      id: 1,
      title: "Why Gold isn't Rising During Way - A Shift Most Investors are Missing?",
      excerpt: "Why staying disciplined with small monthly investments is the key to creating long-term wealth in the Indian market.",
      category: "Mutual Funds",
      date: "2025-10-12", // Changed to ISO for easier sorting logic
      displayDate: "Oct 12, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Financial Planner in Seawoods Navi Mumbai - Investment & Wealth Planning Guide",
      excerpt: "A comprehensive guide on tax-efficient strategies and repatriation rules for NRIs looking to retire in India.",
      category: "Retirement",
      date: "2025-11-05",
      displayDate: "Nov 05, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Financial Planner in Kharghar Navi Mumbai - Investment & Retirement Planning Guide",
      excerpt: "Exploring NPS, Health Insurance, and other legal avenues to optimize your tax liability this financial year.",
      category: "Tax Planning",
      date: "2025-12-01",
      displayDate: "Dec 01, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Financial Planner in CBD Belapur Navi Mumbai - Investment & Retirement Planning Guide",
      excerpt: "How to tune out daily market fluctuations and focus on your personalized goal-based financial roadmap.",
      category: "Psychology of Money",
      date: "2026-01-15",
      displayDate: "Jan 15, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1611974714652-760056a0ce0f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id:5,
      title:"Common Investment Mistakes Investors in Navi Mumbai Make (And How to Avoid Them)",
    },
    {
      id:6,
      title:"Why You need a Certified Financial Planner in Mumbai (Not Just a Mutual Fund Agent) ?"
    },
    {
      id:7,
      title:"Gold or Silver - Which is Better for Portfolio Stability?"
    },
    {
      id:8,
      title:"Why Working with a Financial Advisor Brings Clarity, Not Just Returns?"
    },
    {
      id:9,
      title:"Why you need a Certified Financial Planner in Navi Mumbai?"
    },
    {
      id:10,
      title:"Best Financial Planner in Mumbai | AssetElixir"
    },
    {
      id:11,
      title:"Best Financial Planner in Mumbai",
    },
    {
      id:12,
      title:"The Right Way to Start Your Investment Journey in 2026"
    },
    {
      id:13,
      title:"Financial Planning Anytime, Anywhere in India"
    },
    {
      id:14,
      title:"The Day Rohan Realized his SIP was his Best Friend"
    },
    {
      id:15,
      title:"SIP vs Lump Sum - Which Investment Strategy is Right for you?"
    }
  ];

  const categories = ["All", "Getting Started", "Financial Planning", "Investments", "Retirement", "Protection", "Tax", "Lessons from life", "Mistakes to Avoid","Market Insights"];

  // Functional logic for filtering and sorting
  const processedBlogs = useMemo(() => {
    let filtered = blogs || [];
    
    // 1. Filter Logic
    if (activeFilter !== "All") {
      filtered = filtered.filter(blog => blog.category === activeFilter);
    }

    // 2. Sort Logic
    return [...filtered].sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [blogs,sortBy, activeFilter]);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="bg-black py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Knowledge Hub for <span className="text-[#fa9632]">Wealth Creation</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Expert insights on mutual funds, tax planning, and market trends to help you navigate your financial journey with clarity.
          </p>
        </div>
      </section> */}

      {/* Blog Grid & Controls */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex items-center gap-2 text-slate-500 mr-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Filters:</span>
              </div>
              {categories.map((cat) => (
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

          {/* Grid */}
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-[#fa9632] w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">
              {activeFilter === "All" ? "Latest Articles" : activeFilter}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs? processedBlogs.map((blog) => (
              <article 
                key={blog._id} 
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.blogPic} 
                    alt="Cover Pic Goes Here" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black text-[#fa9632] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-[#fa9632]">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {blog.displayDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#fa9632] transition-colors special">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-black font-black text-sm group-hover:text-[#fa9632] transition-all">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div>{
                    user ? <div>
                             <br/>
                             <button className='cursor-pointer'>Delete</button>  |   
                             <button className='cursor-pointer'>Update</button>
                            </div> 
                          : ''
                  }
                  </div>

                </div>
              </article>
            )):'No shit fuck'}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;