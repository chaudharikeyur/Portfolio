import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Cloud, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = ({ isRecruiterMode }) => {
  const { languages, frameworksAndLibraries, backendAndMiddleware, cloudAndDevOps, developerTools } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  // Recruiter mode printable resume layout
  if (isRecruiterMode) {
    return (
      <div className="mb-6 text-left print-page">
        <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-1 mb-3 print-text-primary print-border uppercase tracking-wide">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm print-text-secondary text-slate-700">
          <div>
            <p className="mb-1"><strong className="text-slate-900 print-text-primary">Languages:</strong> {languages.map(s => s.name).join(', ')}</p>
            <p className="mb-1"><strong className="text-slate-900 print-text-primary">Frameworks & Libraries:</strong> {frameworksAndLibraries.map(s => s.name).join(', ')}</p>
            <p className="mb-1"><strong className="text-slate-900 print-text-primary">Backend & Middleware:</strong> {backendAndMiddleware.map(s => s.name).join(', ')}</p>
          </div>
          <div>
            <p className="mb-1"><strong className="text-slate-900 print-text-primary">Cloud & DevOps:</strong> {cloudAndDevOps.map(s => s.name).join(', ')}</p>
            <p className="mb-1"><strong className="text-slate-900 print-text-primary">Developer Tools:</strong> {developerTools.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }

  // Interactive premium portfolio layout
  const SkillCategory = ({ title, icon: Icon, skillsList, colorClass }) => (
    <motion.div
      variants={itemVariants}
      className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${colorClass}`}>
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        </div>
        <div className="space-y-4">
          {skillsList.map((skill, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300 font-medium">{skill.name}</span>
                <span className="text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                  className={`h-full rounded-full bg-gradient-to-r ${
                    title === 'Languages' ? 'from-indigo-500 to-indigo-400' :
                    title === 'Frameworks & Libraries' ? 'from-violet-500 to-violet-400' :
                    title === 'Backend & Middleware' ? 'from-cyan-500 to-cyan-400' :
                    'from-emerald-500 to-emerald-400'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] radial-glow-cyan opacity-40 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full mb-4 shadow-neon-indigo" />
          <p className="text-slate-400 max-w-xl mx-auto">
            A diverse skill set ranging from backend core architectures and database optimizations to frontend user interfaces.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          <SkillCategory
            title="Languages"
            icon={Code2}
            skillsList={languages}
            colorClass="text-indigo-400"
          />
          <SkillCategory
            title="Frameworks & Libraries"
            icon={Layout}
            skillsList={frameworksAndLibraries}
            colorClass="text-violet-400"
          />
          <SkillCategory
            title="Backend & Middleware"
            icon={Server}
            skillsList={backendAndMiddleware}
            colorClass="text-cyan-400"
          />
          <SkillCategory
            title="Cloud & DevOps"
            icon={Cloud}
            skillsList={cloudAndDevOps}
            colorClass="text-emerald-400"
          />
        </motion.div>

        {/* Developer Tools Badge Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-panel p-6 rounded-2xl border border-slate-800 text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Cpu size={18} className="text-indigo-400" />
            <h3 className="text-md font-semibold text-slate-200 uppercase tracking-wider">Additional Developer Tools</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {developerTools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white transition duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
