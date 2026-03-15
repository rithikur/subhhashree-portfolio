import React, { useState, useEffect } from 'react';
import {
  Menu, X, Mail, Phone, Linkedin, Award, BookOpen,
  Users, Code, Globe, Cpu, Lightbulb, Palette, Music
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Haptic feedback utility
  const triggerHaptic = (pattern = 40) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(pattern);
    }
  };

  const scrollTo = (id) => {
    triggerHaptic(30);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'impact', 'capabilities', 'hobbies', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Impact', id: 'impact' },
    { name: 'Capabilities', id: 'capabilities' },
    { name: 'Hobbies', id: 'hobbies' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="font-['DM_Sans',sans-serif] bg-[#FEFCD0] min-h-screen text-[#006400] selection:bg-[#006400] selection:text-[#FEFCD0]">
      {/* Inject Google Font */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,800;9..40,900&family=JetBrains+Mono:wght@400;700&display=swap');
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { background-color: #FEFCD0; }
        
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        /* Engineering Grid Background */
        .bg-grid-tech {
          background-image: radial-gradient(rgba(0, 100, 0, 0.1) 1px, transparent 0);
          background-size: 12px 12px;
        }

        /* Hollow Text Utility for Responsive Stroke */
        .text-stroke-hollow {
          -webkit-text-stroke: 2px #458728;
          color: transparent;
        }
        @media (max-width: 640px) {
          .text-stroke-hollow {
            -webkit-text-stroke: 1.5px #458728;
          }
        }

        /* Custom soft tactile utility */
        .tactile-card {
          border: 2px solid rgba(0, 100, 0, 0.15);
          box-shadow: 4px 4px 0px rgba(0, 100, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .tactile-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 8px 8px 0px rgba(0, 100, 0, 0.15);
        }
        
        .tactile-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .tactile-btn:hover {
          transform: translateY(-2px);
        }
        .tactile-btn:active {
          transform: translateY(2px);
        }

        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scan {
          animation: scan-line 3s linear infinite;
        }
      `}} />

      {/* Floating Pill Navigation */}
      <div className="fixed top-6 left-0 w-full z-50 px-4 md:px-8 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto w-full max-w-5xl bg-[#F9EEBD]/95 backdrop-blur-md border border-[#006400]/15 rounded-full px-6 py-4 flex justify-between items-center shadow-md transition-all">
          <span
            className="text-2xl font-black text-[#006400] tracking-tighter cursor-pointer hover:text-[#458728] transition-colors"
            onClick={() => scrollTo('home')}
          >
            Subhhashree
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-bold tracking-wide transition-colors ${activeSection === link.id ? 'text-[#006400] underline decoration-2 underline-offset-8 decoration-[#D0DB61]' : 'text-[#458728] hover:text-[#006400]'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Nav Button */}
          <button
            onClick={() => { triggerHaptic(20); setIsMenuOpen(!isMenuOpen); }}
            className="md:hidden text-[#006400] focus:outline-none bg-[#D0DB61]/30 p-2 rounded-full"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-28 left-4 right-4 z-40 bg-[#F9EEBD] border-2 border-[#006400] rounded-3xl p-6 shadow-[6px_6px_0px_#458728] md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left text-xl font-black py-3 border-b-2 border-[#006400]/10 ${activeSection === link.id ? 'text-[#006400]' : 'text-[#458728]'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="px-4 md:px-8 max-w-7xl mx-auto pt-40 pb-20 overflow-hidden">

        {/* Hero Section - Unique Alternative: "Component Identification Tag" */}
        <section id="home" className="min-h-[75vh] flex flex-col justify-center mb-20 pt-10">

          <div className="relative mb-16 w-max animate-in fade-in slide-in-from-left duration-1000">
            {/* Corner Brackets */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#006400]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#006400]"></div>

            <div className="bg-[#D0DB61]/20 bg-grid-tech border border-[#006400]/10 p-5 md:p-6 overflow-hidden relative">
              {/* Scan Line Animation */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#006400]/40 animate-scan pointer-events-none"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 bg-[#006400] rounded-full"></div>
                    <span className="font-mono text-[10px] font-black tracking-widest text-[#006400] uppercase">Status: Core_Active</span>
                  </div>
                  <span className="font-mono text-[11px] md:text-xs text-[#458728] font-bold">MODEL: SUBH_MECH_2026</span>
                </div>

                <div className="hidden md:block w-[1px] h-10 bg-[#006400]/20"></div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[9px] md:text-[10px] text-[#458728] font-bold uppercase tracking-wider">
                  <div className="flex justify-between gap-4"><span>LOC</span> <span className="text-[#006400]">IND_TN</span></div>
                  <div className="flex justify-between gap-4"><span>TMP</span> <span className="text-[#006400]">OPTIMAL</span></div>
                  <div className="flex justify-between gap-4"><span>GEO</span> <span className="text-[#006400]">11.0 // 76.9</span></div>
                  <div className="flex justify-between gap-4"><span>OS</span> <span className="text-[#006400]">V3.0_LIVE</span></div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-[17vw] sm:text-[8rem] lg:text-[11rem] font-black leading-none tracking-tighter uppercase flex flex-col mb-10 gap-4 md:gap-8">
            <span className="text-[#006400]">FUTURE</span>
            <span className="text-stroke-hollow pl-1 md:pl-2">ROBOTICS</span>
            <span className="text-[#006400]">ENGINEER</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4 border-t-2 border-[#006400]/10 pt-8">
            <p className="text-xl md:text-2xl font-medium text-[#458728] max-w-2xl leading-snug">
              I'm <span className="font-bold text-[#006400] border-b-4 border-[#D0DB61]">Subhhashree T</span>. A Mechatronics Engineering student solving problems, leading initiatives, and teaching others.
            </p>
          </div>
        </section>

        {/* About Section - Minimalistic */}
        <section id="about" className="py-16 md:py-24">
          <div className="max-w-5xl" onClick={() => triggerHaptic(15)}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#458728] rounded-full"></div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#458728]">About Me</h2>
            </div>
            <p className="text-3xl md:text-5xl lg:text-[4rem] font-medium leading-[1.15] text-[#006400] tracking-tight">
              An 18-year-old driven by curiosity. I dive deep into <span className="text-stroke-hollow pl-1 pr-1 font-black">new technologies</span>, find fulfillment in <span className="bg-[#D0DB61] px-3 py-1 rounded-xl cursor-pointer hover:bg-[#458728] hover:text-[#FEFCD0] transition-colors inline-block" onClick={(e) => { e.stopPropagation(); triggerHaptic([30, 50, 30]); }}>teaching others</span>, and actively take on leadership roles to make a meaningful impact.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 border-t-2 border-dashed border-[#006400]/20">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="md:w-1/3 bg-[#F9EEBD] rounded-[2.5rem] p-8 tactile-card flex flex-col justify-between">
              <div>
                <BookOpen size={48} className="mb-6 text-[#458728]" />
                <h2 className="text-4xl md:text-5xl font-black text-[#006400]">Education</h2>
              </div>
              <p className="text-xl font-black text-[#458728] mt-8 bg-white/50 w-max px-4 py-2 rounded-full">Class of 2029</p>
            </div>

            <div className="md:w-2/3 bg-white rounded-[2.5rem] p-8 md:p-12 tactile-card flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D0DB61]/20 rounded-bl-full border-b-2 border-l-2 border-[#006400]/10"></div>

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-[#FEFCD0] border border-[#006400]/20 rounded-full text-xs font-black mb-6 uppercase tracking-wider text-[#458728]">Current Degree</span>
                <h3 className="text-3xl md:text-5xl font-black mb-4 text-[#006400]">B.E. Mechatronics Engineering</h3>
                <p className="text-lg md:text-xl font-bold text-[#458728] mb-8">KPR Institute of Engineering and Technology</p>

                <div className="bg-[#D0DB61]/30 border border-[#006400]/20 rounded-2xl p-5 inline-flex items-center gap-4">
                  <Award size={28} className="text-[#006400]" />
                  <div>
                    <p className="text-xs font-bold text-[#458728] uppercase tracking-wider">Semester 1 Result</p>
                    <p className="text-2xl font-black text-[#006400]">9.21 CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <h2 className="text-5xl md:text-6xl font-black text-[#006400]">Impact & <br className="hidden md:block" />Accolades</h2>
            <p className="text-[#458728] font-medium max-w-sm text-lg">A track record of academic excellence and leadership initiatives.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">

            {/* Academic Highlights */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#458728] mb-6 flex items-center gap-3">
                <Award size={18} /> Academic Excellence
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { title: "National Level Math Bee", val: "3rd Place" },
                  { title: "10th Grade Score", val: "99%" },
                  { title: "12th Grade Score", val: "94%" },
                  { title: "Typewriting (Jr & Sr)", val: "Distinction" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 px-5 bg-white border border-[#006400]/15 rounded-2xl hover:border-[#006400] hover:bg-[#F9EEBD] transition-all group shadow-sm">
                    <span className="text-sm sm:text-base font-bold text-[#006400] whitespace-nowrap truncate pr-4">{item.title}</span>
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider whitespace-nowrap bg-[#D0DB61]/40 text-[#006400] px-3 py-1.5 rounded-lg border border-[#006400]/10 group-hover:bg-[#006400] group-hover:text-[#FEFCD0] transition-colors">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#458728] mb-6 flex items-center gap-3">
                <Users size={18} /> Leadership Roles
              </h3>
              <div className="space-y-4">
                {[
                  { title: "School Pupil Leader", desc: "Guided student initiatives with strong organizational skills.", icon: <Users size={20} /> },
                  { title: "Speaker at New Parliament", desc: "Delivered the Vote of Thanks at an event.", icon: <Lightbulb size={20} /> },
                  { title: "Active Public Speaker", desc: "Passionate about communicating ideas effectively to audiences.", icon: <Music size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-5 bg-[#F9EEBD]/50 border border-[#006400]/10 rounded-2xl hover:bg-[#D0DB61]/20 transition-colors">
                    <div className="w-12 h-12 shrink-0 bg-white border border-[#006400]/10 rounded-full flex items-center justify-center text-[#006400] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#006400] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#458728] font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 border-t-2 border-dashed border-[#006400]/20">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Technical Toolkit */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-[#006400]">Capabilities</h2>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#458728] mb-6 flex items-center gap-2">
                <Code size={18} /> Technical & Languages
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Python", type: "Learning" },
                  { name: "C Programming", type: "Learning" },
                  { name: "Tamil", type: "Fluent" },
                  { name: "English", type: "Fluent" },
                  { name: "Hindi", type: "Basic" },
                  { name: "German", type: "Learning" }
                ].map((skill, i) => (
                  <div key={i} className="bg-[#006400] px-4 py-2.5 rounded-xl flex items-center gap-3 tactile-card !shadow-[3px_3px_0px_#458728] hover:!shadow-[5px_5px_0px_#458728]">
                    <span className="text-sm font-bold text-white">{skill.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-[#D0DB61] px-2 py-1 rounded-md text-[#006400] font-bold">{skill.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Interests */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-transparent selection:text-transparent hidden md:block">_</h2>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#458728] mb-6 flex items-center gap-2">
                <Cpu size={18} /> Core Interests
              </h3>

              <div className="flex flex-col gap-4">
                {[
                  { name: "Robotics", desc: "Exploring automation and mechanical systems", icon: <Cpu size={24} /> },
                  { name: "Tech Innovation", desc: "Solving modern problems through technology", icon: <Lightbulb size={24} /> },
                  { name: "Teaching", desc: "Empowering others by sharing knowledge", icon: <Users size={24} /> },
                ].map((item, i) => (
                  <div key={i} className="bg-white border-2 border-[#006400]/10 p-4 rounded-2xl flex items-center gap-5 tactile-btn cursor-default">
                    <div className="text-[#006400] bg-[#FEFCD0] p-3 rounded-xl border border-[#006400]/10">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-[#006400] text-lg">{item.name}</h4>
                      <p className="text-sm text-[#458728] font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section id="hobbies" className="py-24 mt-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#006400] bg-[#D0DB61] p-3 rounded-full mb-6">
              <Palette size={32} />
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#006400] tracking-tight">Off the Clock.</h2>
            <p className="text-xl text-[#458728] font-medium mt-4">Creative hobbies and personal interests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-12">
            {[
              { title: "Painting", icon: <Palette size={48} />, detail: "Expressing creativity through vivid colors and abstract forms on canvas.", bg: "bg-[#F9EEBD]", rotate: "-rotate-3" },
              { title: "Drawing", icon: <BookOpen size={48} />, detail: "Sketching ideas, visual concepts, and bringing imagination to reality.", bg: "bg-white", rotate: "rotate-2 md:translate-y-8" },
              { title: "Music", icon: <Music size={48} />, detail: "Finding rhythm, exploring new genres, and drawing inspiration from sound.", bg: "bg-[#D0DB61]/60", rotate: "-rotate-2" }
            ].map((hobby, i) => (
              <div key={i} className={`${hobby.bg} p-8 md:p-10 rounded-[2rem] border-2 border-[#006400] shadow-[8px_8px_0px_#006400] transform ${hobby.rotate} hover:rotate-0 hover:-translate-y-4 transition-all duration-300 ease-out cursor-pointer`} onClick={() => triggerHaptic(20)}>
                <div className="text-[#006400] mb-8 bg-white/50 w-max p-4 rounded-2xl border border-[#006400]/20">{hobby.icon}</div>
                <h3 className="text-3xl font-black text-[#006400] mb-3">{hobby.title}</h3>
                <p className="text-base font-medium text-[#458728] leading-relaxed">{hobby.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 mb-10 mt-10">
          <div className="text-center bg-[#D0DB61] rounded-[3rem] p-12 md:p-24 border-2 border-[#006400] shadow-[12px_12px_0px_#006400]">
            <h2 className="text-5xl md:text-7xl font-black text-[#006400] mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-lg md:text-xl font-bold text-[#458728] mb-12 max-w-2xl mx-auto">
              Ready to discuss robotics, engineering opportunities, or innovative ideas?
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
              <a href="mailto:tsubhhashree71@gmail.com" onClick={() => triggerHaptic(40)} className="bg-white text-[#006400] px-8 py-4 rounded-full font-black text-lg flex items-center tactile-btn w-full sm:w-auto justify-center border-2 border-[#006400] shadow-[4px_4px_0px_#006400]">
                <Mail className="mr-3" size={24} /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/subhhashree-thirunavukkarasu/" onClick={() => triggerHaptic(40)} target="_blank" rel="noopener noreferrer" className="bg-[#006400] text-[#FEFCD0] px-8 py-4 rounded-full font-black text-lg flex items-center tactile-btn w-full sm:w-auto justify-center shadow-[4px_4px_0px_#458728]">
                <Linkedin className="mr-3" size={24} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#006400]/20 bg-[#F9EEBD] py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-[#006400]">Subhhashree.</h2>
            <p className="text-sm font-bold text-[#458728]">Mechatronics Engineering Student</p>
          </div>

          <div className="text-[#458728] font-bold text-sm text-center bg-white px-4 py-2 rounded-full border border-[#006400]/10 shadow-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
