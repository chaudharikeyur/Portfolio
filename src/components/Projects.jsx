import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Code } from 'lucide-react';
import { Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

const Projects = ({ isRecruiterMode }) => {
  const { projects } = portfolioData;

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
          Key Projects
        </h2>
        <div className="space-y-6">
          {projects.map((proj, index) => (
            <div key={index} className="print-text-secondary text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 print-text-primary">{proj.title}</h3>
                  <p className="text-indigo-600 font-semibold italic">{proj.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 text-xs">{proj.timeline}</p>
                </div>
              </div>
              <p className="text-slate-700 font-medium my-1">{proj.summary}</p>
              <ul className="list-disc list-outside ml-5 mt-1 space-y-1 text-slate-600">
                {proj.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">{highlight}</li>
                ))}
              </ul>
              <div className="mt-2 text-xs text-slate-500">
                <strong>Technologies:</strong> {proj.technologies.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Interactive premium portfolio layout
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] radial-glow-violet opacity-30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto rounded-full mb-4 shadow-neon-cyan" />
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects that showcase backend architectures, web sockets, database designs, and SaaS solutions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <Calendar size={14} className="text-indigo-400" />
                    <span>{project.timeline}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-3 hover:text-indigo-400 transition duration-200">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-300 font-medium mb-4">
                  {project.summary}
                </p>

                {/* Highlights list */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom footer bar with tags and links */}
              <div className="p-6 md:px-8 pt-0 mt-auto border-t border-slate-800/60 bg-slate-950/20">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[10px] font-medium bg-slate-900 text-slate-400 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-medium bg-slate-900 text-slate-500 border border-slate-800/80">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition flex items-center gap-1.5 font-medium"
                  >
                    <Github size={16} />
                    Codebase
                  </a>
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition flex items-center gap-1.5 font-medium"
                    >
                      <span>Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
