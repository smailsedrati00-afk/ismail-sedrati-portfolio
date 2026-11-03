import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen, Award, FileCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative bg-[#17191F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest text-[#A5A7AD] uppercase">
                Academic Background
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              EDUCATION & TRAINING
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A5A7AD] max-w-md">
            Rigorous specialized foundation in software engineering, digital development, and relational system modeling.
          </p>
        </div>

        {/* Modern Timeline / Education Showcase Card */}
        <div className="relative">
          {/* Vertical Connecting Guide */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />

          <div className="relative bg-[#22252D] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/30 overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10">
              {/* Institution Identity */}
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Duration: {education.duration} · {education.level}</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  {education.institution}
                </h3>

                <div className="p-4 rounded-2xl bg-[#17191F]/70 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <Award className="w-4 h-4" />
                    <span>Official Diploma Awarded</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white">
                    {education.diploma}
                  </p>
                  <p className="text-xs text-[#A5A7AD] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{education.location}</span>
                  </p>
                </div>

                <p className="text-sm text-[#A5A7AD] leading-relaxed">
                  Comprehensive professional curriculum focused on practical digital architecture, modern JavaScript frameworks, backend service construction, and collaborative software project delivery.
                </p>
              </div>

              {/* Curriculum Pillars Grid */}
              <div className="lg:max-w-md w-full space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  Curriculum Competencies
                </span>

                <div className="space-y-2.5">
                  {education.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#292D36]/70 border border-white/5 flex items-start gap-3 hover:border-white/15 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    Academic Standing: Graduate
                  </span>
                  <span className="font-mono text-white text-[11px]">Bac +2 (Spécialisé)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
