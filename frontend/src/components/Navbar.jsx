import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import myLogo from '../assets/Asset Elixir Logo_Final-Photoroom.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: "Calculators", href: '/calculators' },
    { name: "About Us", href:'/about_us' }
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-black">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Height decreased from h-20 to h-16 */}
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <Link to='/' className="flex items-center gap-2 flex-shrink-0">
            <div className="p-0.5 rounded-lg">
              {/* Image height adjusted to h-12 to fit perfectly in the h-16 container */}
              <img className='h-16 w-auto object-contain' src={myLogo} alt="Asset Elixir" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#fa9632] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-[#fa9632] hover:bg-slate-900 hover:text-[#fa9632] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all flex items-center gap-2">
              Schedule a Consultation
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#fa9632] rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-[#fa9632] text-white px-5 py-3 rounded-xl font-semibold">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;