import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = ({ isRecruiterMode, toggleRecruiterMode }) => {
  if (isRecruiterMode) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-10 bg-white text-slate-800 shadow-xl border border-slate-200 rounded-lg min-h-screen font-sans print:shadow-none print:border-none print:p-0 print:my-0">
        <Hero isRecruiterMode={isRecruiterMode} toggleRecruiterMode={toggleRecruiterMode} />
        <Skills isRecruiterMode={isRecruiterMode} />
        <Experience isRecruiterMode={isRecruiterMode} />
        <Projects isRecruiterMode={isRecruiterMode} />
        <Contact isRecruiterMode={isRecruiterMode} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen dot-grid">
      {/* Abstract Glowing Accent Lines/Shapes for Interactive View */}
      <div className="absolute top-[15%] left-[-10%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent rotate-12 blur-sm pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent -rotate-12 blur-sm pointer-events-none" />
      <div className="absolute top-[75%] left-[-15%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent rotate-45 blur-sm pointer-events-none" />

      {/* Main Sections */}
      <div className="space-y-4">
        <Hero isRecruiterMode={isRecruiterMode} toggleRecruiterMode={toggleRecruiterMode} />
        
        {/* Decorative Grid Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-5xl mx-auto" />
        
        <Skills isRecruiterMode={isRecruiterMode} />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-5xl mx-auto" />
        
        <Experience isRecruiterMode={isRecruiterMode} />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-5xl mx-auto" />
        
        <Projects isRecruiterMode={isRecruiterMode} />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-5xl mx-auto" />
        
        <Contact isRecruiterMode={isRecruiterMode} />
      </div>
    </div>
  );
};

export default Home;
