import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Download, FileText } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ isRecruiterMode, toggleRecruiterMode }) => {
  const { name, title, summary, github, linkedin, email, phone } = portfolioData.personalInfo;

  // Recruiter mode printable resume layout
  if (isRecruiterMode) {
    return (
      <div className="text-left border-b border-slate-300 pb-6 mb-6 print-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 print-text-primary mb-1">{name}</h1>
            <p className="text-xl text-indigo-600 font-semibold print-text-secondary">{title}</p>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-600 space-y-1 print-text-secondary md:text-right">
            <div className="flex items-center md:justify-end gap-2">
              <Mail size={14} />
              <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <Phone size={14} />
              <span>{phone}</span>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <Github size={14} />
              <a href={github} target="_blank" rel="noreferrer" className="hover:underline">github.com/chaudharikeyur</a>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <Linkedin size={14} />
              <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/keyurchaudhari</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-slate-700 text-sm leading-relaxed text-justify">
          {portfolioData.personalInfo.detailedSummary}
        </p>
      </div>
    );
  }

  // Interactive premium portfolio layout
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full radial-glow-indigo opacity-80 blur-2xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full radial-glow-cyan opacity-60 blur-2xl animate-blob pointer-events-none animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow-violet opacity-50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-sm font-medium tracking-wide backdrop-blur-sm"
        >
          👋 Welcome to my Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent text-glow-indigo">
            {name}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed"
        >
          {summary}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition duration-200 flex items-center justify-center gap-2 shadow-neon-indigo hover:shadow-indigo-500/50"
          >
            Explore Projects
            <ArrowRight size={18} />
          </a>
          <button
            onClick={toggleRecruiterMode}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 active:scale-95 transition duration-200 border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Recruiter Mode (ATS)
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white hover:-translate-y-1 transition duration-200 flex items-center justify-center"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-indigo-400 hover:-translate-y-1 transition duration-200 flex items-center justify-center"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-violet-400 hover:-translate-y-1 transition duration-200 flex items-center justify-center"
            title="Email Me"
          >
            <Mail size={20} />
          </a>
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-200 flex items-center justify-center"
            title="Call Me"
          >
            <Phone size={20} />
          </a>
        </motion.div>
      </div>

      {/* Decorative arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-10 border-r-2 border-slate-400 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
