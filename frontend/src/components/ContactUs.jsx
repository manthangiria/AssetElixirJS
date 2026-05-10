import React from 'react';

import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdNavigation } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContactUs = () => {
  const socialLinks = [
    { icon: <FaXTwitter className="w-5 h-5" />, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <CiMail className="w-5 h-5" />, href: "mailto:shivam@assetelixir.com", label: "Gmail", color: "hover:text-red-500" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: <FaYoutube className="w-5 h-5" />, href: "#", label: "YouTube", color: "hover:text-red-600" },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* 1. Top Section: Social Connect (Thin Bar) */}
      <section className="bg-black py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-8 md:gap-12">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className={`text-[#fa9632] transition-all duration-300 transform hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {/* 2. Middle Section: Contact Details (Longer Content) */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 special">Get In Touch</h1>
            <p className="text-slate-600 max-w-xl mx-auto">
              Ready to take the next step in your financial journey? Reach out to us for a personalized consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Location */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center group hover:border-[#fa9632] transition-colors">
              <div className="w-14 h-14 bg-[#fa9632] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-[#fa9632] transition-all">
                <FaMapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 special">Our Office</h3>
              <p className="text-slate-600 leading-relaxed">
                Kharghar, Navi Mumbai,<br /> 
                Maharashtra, India
              </p>
            </div>

            {/* Phone Number */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center group hover:border-[#fa9632] transition-colors">
              <div className="w-14 h-14 bg-[#fa9632] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-[#fa9632] transition-all">
                <FaPhone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 special">Phone Number</h3>
              <p className="text-slate-600 font-medium text-lg">+91 [Insert Number]</p>
              <p className="text-xs text-slate-400 mt-2">Mon-Fri: 10:00 AM - 6:00 PM</p>
            </div>

            {/* Email Address */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center group hover:border-[#fa9632] transition-colors">
              <div className="w-14 h-14 bg-[#fa9632] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-[#fa9632] transition-all">
                <CiMail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 special">Email Address</h3>
              <p className="text-slate-600 font-medium">contact@assetelixir.com</p>
              <p className="text-slate-600 font-medium">shivam.pathak@cfp.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: Google Map */}
      <section className="relative h-[450px] w-full bg-slate-200 overflow-hidden">
        {/* Map Label Overlay */}
        <div className="absolute top-6 left-6 z-10 hidden md:block">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-200 flex items-center gap-4">
            <div className="bg-[#fa9632] p-2 rounded-lg">
              <MdNavigation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Locate us</p>
              <p className="text-sm font-bold text-slate-900">Kharghar, Navi Mumbai</p>
            </div>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noreferrer"
              className="ml-4 p-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4 text-[#fa9632]" />
            </a>
          </div>
        </div>

        {/* Embedded Iframe */}
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m2!1m1!2sKharghar!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3dad656041b%3A0x6b64006c6a4a282!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;