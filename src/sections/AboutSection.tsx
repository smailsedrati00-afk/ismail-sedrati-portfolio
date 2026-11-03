import React from 'react';
import { MapPin, GraduationCap, Target, ArrowUpRight, CheckCircle2, FileText, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const { profile, education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative bg-[#17191F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Highlights Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#22252D] shadow-2xl group">
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={profile.portrait}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#17191F] via-[#17191F]/70 to-transparent">
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                  ABOUT THE DEVELOPER
                </span>
                <h3 className="font-display font-black text-2xl text-white tracking-tight mt-0.5">
                  {profile.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>Rabat, Morocco · Open to Relocation & Remote</span>
                </p>
              </div>
            </div>

            {/* Quick Education Pill Card */}
            <div className="p-4 rounded-2xl bg-[#22252D] border border-white/5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase">
                  {education.level} · {education.duration}
                </span>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {education.diploma}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  {education.institution}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Aspirations */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest text-[#A5A7AD] uppercase">
                Biography & Goals
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              ABOUT ME
            </h2>

            {/* Official Bio Paragraph required by user */}
            <div className="mt-6 p-6 rounded-2xl bg-[#22252D]/80 border border-white/[0.08] relative">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                "{profile.aboutBio}"
              </p>
            </div>

            {/* Core Values / Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[#22252D]/50 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Modern Architecture</span>
                </div>
                <p className="text-xs text-[#A5A7AD] leading-relaxed">
                  Focusing on component modularity, clean state management, and separation of concerns.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#22252D]/50 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full Stack Versatility</span>
                </div>
                <p className="text-xs text-[#A5A7AD] leading-relaxed">
                  Seamless bridge between reactive React client applications and robust Express/PHP backends.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#22252D]/50 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Objectif Professionnel</span>
                </div>
                <p className="text-xs text-[#A5A7AD] leading-relaxed">
                  À la recherche d'un stage ou poste junior en développement web pour apporter ma rigueur et évoluer en Software Engineer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#22252D]/50 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Langues & Localisation</span>
                </div>
                <p className="text-xs text-[#A5A7AD] leading-relaxed">
                  Arabe (maternelle), Français (bon niveau), Anglais (technique). Basé à Témara / Rabat, disponible immédiatement.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-[#17191F] bg-white hover:bg-gray-200 rounded-xl transition-all shadow-lg shadow-white/10 uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW COMPLETE CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-white hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all uppercase"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
