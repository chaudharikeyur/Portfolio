import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = ({ isRecruiterMode }) => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Recruiter mode printable resume layout
  if (isRecruiterMode) {
    return (
      <div className="mb-6 text-left print-page">
        <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-1 mb-4 print-text-primary print-border uppercase tracking-wide">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="print-text-secondary text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 print-text-primary">{exp.company}</h3>
                  <p className="text-indigo-600 font-semibold italic">{exp.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-slate-800 print-text-primary">{exp.location}</p>
                  <p className="text-slate-500 text-xs">{exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-slate-700">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <strong className="text-slate-800 print-text-primary">{highlight.project}:</strong> {highlight.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Interactive premium portfolio layout
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] radial-glow-indigo opacity-30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="h-1.5 w-24 bg-violet-500 mx-auto rounded-full mb-4 shadow-neon-violet" />
          <p className="text-slate-400 max-w-xl mx-auto">
            My career timeline showcasing key milestones, engineering leadership, and fullstack optimizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Track Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500/10 -translate-x-1/2 hidden md:block" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row relative items-start md:items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Vertical Track Node for Mobile */}
                  <div className="absolute left-4 top-1.5 w-6 h-6 rounded-full border-4 border-slate-950 bg-indigo-500 shadow-neon-indigo md:hidden z-10" />

                  {/* Vertical Track Node for Desktop */}
                  <div className="absolute left-1/2 top-6 w-6 h-6 rounded-full border-4 border-slate-950 bg-violet-500 shadow-neon-violet -translate-x-1/2 z-10 hidden md:block" />

                  {/* Content Panel */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border border-slate-800 relative">
                      {/* Triangle pointer */}
                      <div className={`absolute top-6 w-3 h-3 bg-slate-900 border-t border-l border-slate-800 rotate-45 hidden md:block ${
                        isEven ? 'left-[-7px] rotate-[-45deg] border-t-0 border-r-0 border-l border-b' : 'right-[-7px] rotate-[135deg] border-t-0 border-r border-b border-l-0'
                      }`} />

                      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                        <div>
                          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-500/5 border border-indigo-500/10 px-2.5 py-1 rounded-full">
                            {exp.role}
                          </span>
                          <h3 className="text-xl font-bold text-slate-100 mt-2">{exp.company}</h3>
                        </div>
                        <div className="text-xs text-slate-400 flex flex-col gap-1 items-start md:items-end">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-indigo-400" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-indigo-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Highlights Accordion/Details */}
                      <div className="space-y-4 text-sm text-slate-300 mb-6">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="border-l-2 border-indigo-500/20 pl-3 py-0.5">
                            <span className="font-semibold text-slate-200 block mb-0.5">
                              {highlight.project}
                            </span>
                            <p className="text-slate-400 text-xs leading-relaxed text-justify">
                              {highlight.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-md text-[10px] font-medium bg-slate-900 text-slate-400 border border-slate-800/80 hover:border-slate-700 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Align */}
                  <div className="w-1/2 hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
