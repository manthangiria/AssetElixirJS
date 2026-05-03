import React, { useState, useMemo } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Newspaper } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allBlogs = [
    {
      id: 1,
      title: "Understanding SIP: The Power of Compounding",
      excerpt: "Why staying disciplined with small monthly investments is the key to creating long-term wealth in the Indian market.",
      category: "Mutual Funds",
      date: "Oct 12, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Retirement Planning for NRIs",
      excerpt: "A comprehensive guide on tax-efficient strategies and repatriation rules for NRIs looking to retire in India.",
      category: "Retirement",
      date: "Nov 05, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Tax Saving Beyond Section 80C",
      excerpt: "Exploring NPS, Health Insurance, and other legal avenues to optimize your tax liability this financial year.",
      category: "Tax Planning",
      date: "Dec 01, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Market Noise vs. Financial Clarity",
      excerpt: "How to tune out daily market fluctuations and focus on your personalized goal-based financial roadmap.",
      category: "Psychology of Money",
      date: "Jan 15, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1611974714652-760056a0ce0f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Logic to filter blogs based on search input
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa9632] border border-blue-500/20 text-black text-sm font-bold mb-6">
            <Newspaper className="w-4 h-4" />
            Financial Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Knowledge Hub for <span className="text-[#fa9632]">Wealth Creation</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Expert insights on mutual funds, tax planning, and market trends to help you navigate your financial journey with clarity.
          </p>

          {/* Search Bar Logic */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search by topic, keyword, or category..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fa9632] transition-all shadow-2xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="text-[#fa9632] w-6 h-6" />
              {searchQuery ? `Results for "${searchQuery}"` : "Latest Articles"}
            </h2>
            <span className="text-sm text-slate-500 font-medium">
              Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#fa9632] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                      {blog.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {blog.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <button className="flex items-center gap-2 text-[#fa9632] font-bold text-sm group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-500 text-lg">No articles found matching your search.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;