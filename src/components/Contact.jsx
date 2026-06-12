import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ isRecruiterMode }) => {
  const { email, phone, location } = portfolioData.personalInfo;
  const { education, achievements } = portfolioData;

  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  // Recruiter mode printable resume layout
  if (isRecruiterMode) {
    return (
      <div className="text-left print-page mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-300 pt-6 print-border">
          {/* Education */}
          <div className="print-text-secondary text-sm">
            <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-1 mb-3 print-text-primary print-border uppercase tracking-wide">
              Education
            </h2>
            <div className="mb-2">
              <h3 className="font-bold text-slate-900 print-text-primary">{education.institution}</h3>
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>{education.degree}</span>
                <span>{education.duration}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">Location: {education.location} | GPA: {education.gpa}</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              <strong>Relevant Courses:</strong> {education.courses.join(', ')}
            </p>
          </div>

          {/* Achievements */}
          <div className="print-text-secondary text-sm">
            <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 pb-1 mb-3 print-text-primary print-border uppercase tracking-wide">
              Achievements & Proficiency
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
              {achievements.map((ach, index) => (
                <li key={index} className="leading-relaxed">
                  <strong className="text-slate-800 print-text-primary">{ach.title}: </strong>
                  {ach.description} ({ach.organization})
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer for PDF */}
        <div className="mt-12 text-center text-xs text-slate-400 border-t border-slate-200 pt-4 print-border">
          References available upon request. Generated from interactive portfolio website.
        </div>
      </div>
    );
  }

  // Interactive premium portfolio layout
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/10">
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] radial-glow-violet opacity-30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section 1: Education and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-indigo-500/30 pl-4">
                <h4 className="text-lg font-bold text-slate-200">{education.institution}</h4>
                <p className="text-sm text-indigo-400 font-semibold">{education.degree}</p>
                <div className="flex flex-wrap gap-x-4 text-xs text-slate-400 mt-1">
                  <span>GPA: {education.gpa}</span>
                  <span>•</span>
                  <span>{education.duration}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-violet-400">
                <Award size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-violet-500 mt-2.5 shrink-0 shadow-neon-violet" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{ach.title}</h4>
                    <span className="text-[10px] text-violet-400 font-semibold uppercase tracking-wider block">
                      {ach.organization}
                    </span>
                    <p className="text-xs text-slate-400 mt-1">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: Contact Form & Info */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full mb-4 shadow-neon-indigo" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind, want to talk system architectures, or recruit me for your team? Shoot me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-800 flex-1 flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-bold text-slate-100 mb-2">Contact Details</h3>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800/80 group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email Address</span>
                    <span className="text-sm font-medium text-slate-300 break-all">{email}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 active:scale-95 transition"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800/80 group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Phone Number</span>
                    <span className="text-sm font-medium text-slate-300">{phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 active:scale-95 transition"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center p-4 rounded-xl bg-slate-900 border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="text-sm font-medium text-slate-300">{location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-slate-100 text-sm transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-slate-100 text-sm transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none text-slate-100 text-sm transition resize-none"
                    placeholder="Let's build something epic together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full py-4 px-6 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition flex items-center justify-center gap-2 shadow-neon-indigo hover:shadow-indigo-500/50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitSuccess ? (
                    <>
                      <Check size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
