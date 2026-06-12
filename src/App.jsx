import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { FileDown, Menu, X, ArrowUpRight, Eye, Briefcase } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

function App() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(!isRecruiterMode);
    // Scroll to top to see transition clearly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    // Small timeout to allow styling layout shifts to complete
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isRecruiterMode ? 'bg-[#F8FAFC] text-slate-800' : 'bg-dark-bg text-slate-100'
    }`}>
      
      {/* HEADER / NAVIGATION BAR (Hidden in print) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isRecruiterMode
          ? 'bg-white/90 border-b border-slate-200 backdrop-blur-md shadow-sm'
          : scrolled
            ? 'bg-dark-bg/80 border-b border-slate-800/80 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={(e) => {
              if (isRecruiterMode) e.preventDefault();
            }}
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-neon-indigo group-hover:scale-105 transition duration-200">
              KC
            </div>
            <span className={`font-bold text-xl tracking-tight transition ${
              isRecruiterMode ? 'text-slate-900' : 'text-white'
            }`}>
              Keyur.dev
            </span>
          </a>

          {/* Desktop Navigation Link Items (Hidden in Recruiter Mode) */}
          {!isRecruiterMode && (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white hover:text-glow-indigo transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Action Button & Toggle Container */}
          <div className="hidden md:flex items-center gap-4">
            {isRecruiterMode ? (
              <>
                <button
                  onClick={toggleRecruiterMode}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-100 hover:bg-slate-800 transition duration-200 flex items-center gap-1.5"
                >
                  <Eye size={14} />
                  Interactive Portfolio
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition duration-200 flex items-center gap-1.5 shadow-neon-indigo"
                >
                  <FileDown size={14} />
                  Download PDF / Print
                </button>
              </>
            ) : (
              <button
                onClick={toggleRecruiterMode}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition duration-200 flex items-center gap-1.5"
              >
                <Briefcase size={14} className="text-indigo-400" />
                Recruiter Mode (ATS)
              </button>
            )}
          </div>

          {/* Mobile Menu Icon Toggle (Only in Interactive View) */}
          <div className="flex md:hidden items-center gap-3">
            {isRecruiterMode ? (
              <button
                onClick={toggleRecruiterMode}
                className="p-2 rounded-xl bg-slate-950 text-white text-xs font-semibold flex items-center gap-1"
              >
                <Eye size={14} />
                Portfolio
              </button>
            ) : (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl border transition ${
                  isRecruiterMode
                    ? 'border-slate-200 bg-slate-100 text-slate-800'
                    : 'border-slate-800 bg-slate-900/50 text-slate-400'
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && !isRecruiterMode && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-dark-bg/95 border-b border-slate-800/90 backdrop-blur-lg flex flex-col p-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-md font-medium text-slate-350 hover:text-white transition py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-slate-800 my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                toggleRecruiterMode();
              }}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-350 hover:text-white text-center flex items-center justify-center gap-2"
            >
              <Briefcase size={16} className="text-indigo-400" />
              Recruiter Mode (ATS)
            </button>
          </div>
        )}
      </header>

      {/* Floating Action Button (Only in Recruiter Mode, Hidden in Print) */}
      {isRecruiterMode && (
        <div className="fixed bottom-6 right-6 z-50 md:hidden no-print">
          <button
            onClick={handlePrint}
            className="h-12 w-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30"
            title="Download PDF"
          >
            <FileDown size={22} />
          </button>
        </div>
      )}

      {/* MAIN VIEW CONTAINER */}
      <main className={`${isRecruiterMode ? 'pt-28 pb-12' : 'pt-20'} transition-all duration-300`}>
        <Home isRecruiterMode={isRecruiterMode} toggleRecruiterMode={toggleRecruiterMode} />
      </main>

      {/* STATIC FOOTER (Hidden in recruiter mode/print) */}
      {!isRecruiterMode && (
        <footer className="py-12 border-t border-slate-900 bg-slate-950/40 text-center text-sm text-slate-500 no-print">
          <div className="container mx-auto px-6">
            <p className="mb-2">© {new Date().getFullYear()} Keyur Chaudhari. All rights reserved.</p>
            <p className="text-xs text-slate-600">
              Built with React, Vite, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
