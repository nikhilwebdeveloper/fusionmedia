/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Youtube, 
  Menu, 
  X,
  ArrowRight,
  Mail,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-black text-brand-dark text-2xl">F</div>
          <span className="text-2xl font-bold tracking-tighter">FUSION <span className="text-brand-primary">MEDIA</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-brand-primary transition-colors">Services</a>
          <a href="#creators" className="hover:text-brand-primary transition-colors">For Creators</a>
          <a href="#contact" className="hover:text-brand-primary transition-colors">For Brands</a>
          <a 
            href="https://www.instagram.com/fusionmedia.services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-primary transition-colors"
          >
            <Instagram size={18} />
            <span>@fusionmedia.services</span>
          </a>
          <button 
            onClick={() => window.location.href = 'mailto:mediafusion238@gmail.com'}
            className="btn-primary py-2 px-6"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#creators" onClick={() => setIsMobileMenuOpen(false)}>For Creators</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>For Brands</a>
          <a 
            href="https://www.instagram.com/fusionmedia.services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <button 
            onClick={() => window.location.href = 'mailto:mediafusion238@gmail.com'}
            className="btn-primary w-full"
          >
            Email Us
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>A Fresh, Hungry & Creative Agency</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            The New Era of <span className="text-brand-primary">Influencer</span> Growth.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg">
            Fusion Media is a rising force in the creator economy. We are a new-age agency focused on building authentic connections between brands and the next generation of creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('creators')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Join as a Creator <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:mediafusion238@gmail.com'}
              className="btn-outline flex items-center justify-center gap-2"
            >
              Brand Inquiry <Mail size={18} />
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <a 
              href="https://www.instagram.com/fusionmedia.services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass-card px-6 py-3 hover:border-brand-primary transition-all"
            >
              <Instagram className="text-brand-primary" size={24} />
              <div>
                <div className="text-xs text-gray-500 uppercase font-mono">Follow our journey</div>
                <div className="font-bold">@fusionmedia.services</div>
              </div>
              <ExternalLink size={14} className="text-gray-600 ml-2" />
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/agency-new/800/1000" 
              alt="Fusion Media Agency" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass-card p-4 absolute -top-6 -right-6 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400">Our Vibe</div>
                <div className="text-lg font-bold">Fresh & Bold</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass-card p-4 absolute bottom-12 -left-12 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-400">Focus</div>
                <div className="text-lg font-bold">Creator First</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Users className="text-brand-primary" />,
      title: "Creator Onboarding",
      desc: "We help creators find their niche and connect them with brands that align with their values."
    },
    {
      icon: <Zap className="text-brand-primary" />,
      title: "Growth Strategy",
      desc: "New agency, fresh ideas. We provide innovative strategies to help you stand out in a crowded market."
    },
    {
      icon: <BarChart3 className="text-brand-primary" />,
      title: "Brand Partnerships",
      desc: "We bridge the gap between emerging creators and forward-thinking brands looking for authenticity."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Our Vision for the Future</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 hover:border-brand-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreatorOnboarding = () => {
  return (
    <section id="creators" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4">Join Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Creator Onboarding</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Are you a creator looking to take your journey to the next level? Fill out the form below and let's build something amazing together.
          </p>
        </div>

        <div className="glass-card overflow-hidden max-w-4xl mx-auto">
          <div className="w-full bg-white/5 p-2 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-2 ml-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs text-gray-500 font-mono">fusionmedia_onboarding_form.v1</div>
            <div className="w-10" />
          </div>
          <div className="relative w-full" style={{ height: '800px' }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSez0CbTBXxFbiblzSzJb6HiHV4KFd8FxMx2yG8dafgThN_HgQ/viewform?embedded=true" 
              className="absolute inset-0 w-full h-full border-0"
              title="Creator Onboarding Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8">
          <Mail size={16} />
          <span>For Brands & Businesses</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's <span className="text-brand-primary">Collaborate</span></h2>
        <p className="text-xl text-gray-400 mb-12">
          We are currently looking for visionary brands to partner with our growing creator network. Reach out to us directly via email for campaign inquiries.
        </p>
        
        <div className="glass-card p-12 flex flex-col items-center">
          <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-6">
            <Mail size={40} />
          </div>
          <div className="text-2xl font-bold mb-2">mediafusion238@gmail.com</div>
          <p className="text-gray-400 mb-8">Our team typically responds within 24 hours.</p>
          <button 
            onClick={() => window.location.href = 'mailto:mediafusion238@gmail.com'}
            className="btn-primary flex items-center gap-2 px-12"
          >
            Send an Email <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center font-black text-brand-dark">F</div>
            <span className="text-xl font-bold tracking-tighter">FUSION MEDIA</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
            Empowering the next generation of creators. Fresh ideas, authentic connections.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-brand-primary">Services</a>
            <a href="#creators" className="hover:text-brand-primary">Creators</a>
            <a href="#contact" className="hover:text-brand-primary">Brands</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/fusionmedia.services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all cursor-pointer"
            >
              <Instagram size={18} />
            </a>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all cursor-pointer">
              <Youtube size={18} />
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            mediafusion238@gmail.com
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-xs text-gray-600">
        © {new Date().getFullYear()} Fusion Media Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-brand-dark">
      <Navbar />
      <Hero />
      <Services />
      <CreatorOnboarding />
      <Contact />
      <Footer />
    </div>
  );
}
