/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Youtube, 
  Menu, 
  X,
  ArrowRight,
  Mail,
  Sparkles,
  ChevronDown,
  Compass,
  CheckCircle,
  Video,
  Globe,
  Award
} from 'lucide-react';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from 'react-router-dom';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      // Wait for navigation before scrolling
      setTimeout(() => {
        const el = document.getElementById(id.replace('#', ''));
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      e.preventDefault();
      const el = document.getElementById(id.replace('#', ''));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A0F1D]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1P4npnJEsEdOa9WHxj4bsyN6BTjf-es-F" 
              alt="Fusion Media Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-lg font-black tracking-wider uppercase">
            FUSION<span className="text-brand-primary font-medium">MEDIA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="/#services" 
            onClick={(e) => handleNavClick(e, '#services')} 
            className="text-gray-300 hover:text-brand-primary transition-colors cursor-pointer text-sm font-semibold tracking-wide"
          >
            Services
          </a>
          <a 
            href="/#creators" 
            onClick={(e) => handleNavClick(e, '#creators')} 
            className="text-gray-300 hover:text-brand-primary transition-colors cursor-pointer text-sm font-semibold tracking-wide"
          >
            For Creators
          </a>
          <a 
            href="/#contact" 
            onClick={(e) => handleNavClick(e, '#contact')} 
            className="text-gray-300 hover:text-brand-primary transition-colors cursor-pointer text-sm font-semibold tracking-wide"
          >
            For Brands
          </a>
          <button 
            onClick={() => window.location.href = 'mailto:Connect@fusionmediaofficial.co.in'}
            className="btn-primary py-2 px-6 text-xs uppercase tracking-wider font-bold"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white cursor-pointer p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0F1D] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <a href="/#services" onClick={(e) => { handleNavClick(e, '#services'); setIsMobileMenuOpen(false); }} className="text-gray-200 text-lg font-medium border-b border-white/5 pb-2">Services</a>
              <a href="/#creators" onClick={(e) => { handleNavClick(e, '#creators'); setIsMobileMenuOpen(false); }} className="text-gray-200 text-lg font-medium border-b border-white/5 pb-2">For Creators</a>
              <a href="/#contact" onClick={(e) => { handleNavClick(e, '#contact'); setIsMobileMenuOpen(false); }} className="text-gray-200 text-lg font-medium border-b border-white/5 pb-2">For Brands</a>
              <a 
                href="https://www.instagram.com/fusionmedia.services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-primary py-1"
              >
                <Instagram size={18} />
                <span className="font-bold">Follow @fusionmedia.services</span>
              </a>
              <button 
                onClick={() => window.location.href = 'mailto:Connect@fusionmediaofficial.co.in'}
                className="btn-primary w-full mt-2"
              >
                Email Us Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 grid-pattern overflow-hidden">
      {/* Premium subtle glow accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Value Proposition Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} />
            <span>Empowering India's Next Generation Creators</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            The New Era of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#7BE5C8] to-[#4ade80] font-black">
              Influencer
            </span> Partnerships.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            We connect forward-thinking brands with authentic creators to launch high-impact digital campaigns. Our focus is on high-quality content execution, professional representation, and structured delivery.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => {
                const el = document.getElementById('creators');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary flex items-center justify-center gap-3 py-4 text-sm font-bold"
            >
              <span>Join as a Creator</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline flex items-center justify-center gap-3 py-4 text-sm font-bold"
            >
              <span>Brand Collaboration</span>
              <Mail size={18} />
            </button>
          </motion.div>
        </div>

        {/* Clean, Professional 2D Graphic Representation Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-md bg-[#0D1527]/80 border border-white/10 rounded-2xl shadow-2xl p-6 relative"
          >
            {/* Visual representation card */}
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest font-bold">REPRESENTATION</span>
                  <h3 className="text-lg font-bold text-white mt-1">Our Focus Verticals</h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold">
                  Active Talents
                </div>
              </div>

              {/* Niches lists with elegant clean icons and 2D bars */}
              <div className="space-y-4">
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-brand-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Video size={16} />
                      </div>
                      <span className="text-sm font-bold text-white">Tech & Lifestyle Creators</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Cinematic reviews, hardware analysis, and daily lifestyle integration.</p>
                </div>

                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-brand-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                        <Youtube size={16} />
                      </div>
                      <span className="text-sm font-bold text-white">Gaming & Live Streamers</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Engaging gameplays, custom esports activations, and authentic streams.</p>
                </div>

                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-brand-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                        <Instagram size={16} />
                      </div>
                      <span className="text-sm font-bold text-white">Social Media & Fashion</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Aesthetic visual layouts, product styling, and high-engagement reels.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Users className="text-brand-primary" size={24} />,
      title: "Creator Management",
      desc: "Providing professional representation for growing creators. We structure collaborations, handle contract negotiation, and support content growth."
    },
    {
      icon: <TrendingUp className="text-brand-primary" size={24} />,
      title: "Campaign Execution",
      desc: "End-to-end management from concept ideation to delivery. We ensure creators align with your brand requirements seamlessly."
    },
    {
      icon: <BarChart3 className="text-brand-primary" size={24} />,
      title: "Performance Review",
      desc: "Clear performance insights for brands. We track delivery, audience engagement, and campaign outcomes with complete transparency."
    }
  ];

  return (
    <section id="services" className="py-28 bg-[#090D1A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-brand-primary font-mono text-xs uppercase tracking-widest bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full inline-block mb-4">
            Bespoke Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Professional Media Representation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            We provide structured systems to ensure both creators and partner brands enjoy a transparent, streamlined collaboration journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i}
              className="glass-card p-8 border border-white/10 hover:border-brand-primary/30 hover:bg-[#0E1629] transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 border border-brand-primary/15 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreatorOnboarding = () => {
  return (
    <section id="creators" className="py-28 overflow-hidden grid-pattern relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D] via-transparent to-[#080C17] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-brand-primary font-mono text-xs uppercase tracking-widest bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full inline-block mb-4">
            Onboarding
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Creator Application
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Ready to collaborate with premium brands? Fill out our official, confidential creator onboarding application below to register your profile.
          </p>
        </div>

        {/* Polished, clean Form Container */}
        <div className="glass-card overflow-hidden max-w-4xl mx-auto shadow-2xl border border-white/10">
          {/* Top Window Bar */}
          <div className="w-full bg-[#080C16] p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
              <span>onboarding_form.pdf</span>
            </div>
            <div className="w-10" />
          </div>

          <div className="relative w-full" style={{ height: '750px' }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSez0CbTBXxFbiblzSzJb6HiHV4KFd8FxMx2yG8dafgThN_HgQ/viewform?embedded=true" 
              className="absolute inset-0 w-full h-full border-0 bg-white"
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
    <section id="contact" className="py-28 bg-[#080D1A] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-8">
          <Mail size={14} />
          <span>Brand Inquiry</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Let's <span className="text-brand-primary">Collaborate</span></h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          We help brands discover and partner with the right social talent. Get in touch directly via email to request a curated roster or design a campaign.
        </p>
        
        <div className="glass-card p-8 sm:p-12 flex flex-col items-center shadow-xl max-w-2xl mx-auto border border-white/10 bg-[#0C1427]/50 relative">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/20">
            <Mail size={24} />
          </div>
          
          <div className="text-lg sm:text-2xl font-black mb-2 text-white select-all font-mono break-all px-2 border-b border-brand-primary/20 pb-2">
            Connect@fusionmediaofficial.co.in
          </div>
          
          <p className="text-gray-400 text-sm mb-8">Our team responds directly with campaign proposal details.</p>
          
          <button 
            onClick={() => window.location.href = 'mailto:Connect@fusionmediaofficial.co.in'}
            className="btn-primary px-10 py-3.5 uppercase tracking-wider text-xs font-bold w-full sm:w-auto"
          >
            <span>Send Email Inquiry</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Fusion Media identify the right creator matches?",
      a: "We analyze a creator's audience location, active engagement, and content relevance. Rather than looking solely at subscriber count, we focus on genuine connections between creators and the brand's target demography."
    },
    {
      q: "What is required for creators to join the network?",
      a: "We welcome active, genuine creators with a consistent uploading schedule, highly engaged regional followers in India, and clean content aesthetics."
    },
    {
      q: "Are there any upfront or platform registration fees?",
      a: "No. We do not charge any upfront sign-up fees or platform retainers for creators to join or submit their onboard request form."
    }
  ];

  return (
    <section className="py-24 bg-[#090D1A] border-t border-white/5 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-primary font-mono text-xs uppercase tracking-widest bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full inline-block mb-3">
            FAQs
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white">Common Questions</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex justify-between items-center text-white hover:text-brand-primary transition-all font-bold text-sm sm:text-base cursor-pointer"
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5 bg-white/[0.01]"
                  >
                    <p className="p-5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-[#0A0F1D] border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/1P4npnJEsEdOa9WHxj4bsyN6BTjf-es-F" 
              alt="Fusion Media Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-black tracking-wider">FUSION <span className="text-brand-primary font-medium">MEDIA</span></span>
          </Link>
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
            Empowering professional creators and building impactful brand partnerships across India.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm text-gray-400 font-semibold">
            <a 
              href="/#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="hover:text-brand-primary transition-colors"
            >
              Services
            </a>
            <a 
              href="/#creators" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('creators')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="hover:text-brand-primary transition-colors"
            >
              Creators
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="hover:text-brand-primary transition-colors"
            >
              Brands
            </a>
            <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/fusionmedia.services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all cursor-pointer text-gray-300"
            >
              <Instagram size={18} />
            </a>
          </div>
          
          <div className="text-xs text-gray-500 font-mono">
            Direct Contact: Connect@fusionmediaofficial.co.in
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-xs text-gray-600">
        © {new Date().getFullYear()} Fusion Media Agency. Registered in India. All rights reserved.
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <CreatorOnboarding />
      <FAQ />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0F1D] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
