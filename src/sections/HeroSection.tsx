import React from 'react';
import { ArrowUpRight, Download, Sparkles, MapPin, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gray-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Label Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#A5A7AD] uppercase">
                {profile.label}
              </span>
              <span className="text-gray-600">·</span>
              <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                {profile.location}
              </span>
            </div>

            {/* Giant Title matching reference layout */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-[4.2rem] text-white tracking-tight leading-[0.95] uppercase select-none max-w-xl">
              FULL STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                DEVELOPER
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-[#A5A7AD] max-w-lg leading-relaxed">
              {profile.intro}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#17191F] bg-white hover:bg-gray-200 active:scale-[0.98] rounded-xl transition-all duration-200 shadow-xl shadow-white/10 uppercase"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-xl transition-all duration-200 uppercase"
              >
                <Download className="w-4 h-4 text-gray-300" />
                <span>DOWNLOAD CV</span>
              </button>
            </div>

            {/* Quick Skills Tick Ticker */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center gap-4 text-xs text-[#A5A7AD]">
              <span className="font-semibold text-white/90 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Core Stack:
              </span>
              <div className="flex flex-wrap gap-2 text-gray-300">
                <span>React.js</span>
                <span>·</span>
                <span>Node.js / Express</span>
                <span>·</span>
                <span>PHP / Laravel</span>
                <span>·</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ismail's Real Portrait with Concentric Circles & Subtle Sparkle */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[370px] xl:max-w-[400px] aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center">
              {/* Decorative Concentric Circular Rings behind portrait (inspired by reference) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                {/* Outer Ring */}
                <div className="w-[108%] h-[108%] rounded-full border border-white/[0.06] animate-spin-slow" />
                {/* Middle Ring with subtle dashed stroke */}
                <div className="absolute w-[102%] h-[102%] rounded-full border border-dashed border-white/[0.08]" />
                {/* Inner Glow Circle */}
                <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-b from-white/[0.05] via-transparent to-transparent blur-md" />
              </div>

              {/* Sparkle decorative element (matching reference upper right) */}
              <div className="absolute -top-3 right-4 z-20 flex items-center justify-center text-white/70 animate-pulse-subtle">
                <Sparkles className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>

              {/* Portrait Image Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/[0.12] bg-[#22252D] shadow-2xl shadow-black/60 group">
                <img
                  src={profile.portrait}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette gradient bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#17191F] via-[#17191F]/40 to-transparent pointer-events-none" />

                {/* Location & Name water-badge inside portrait corner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-[#17191F]/70 px-4 py-2.5 rounded-xl border border-white/10">
                  <div>
                    <p className="font-bold text-white leading-none">{profile.name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Software & Web Developer</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              {/* Subtle Side Badge like reference "AVAILABLE FOR FREELANCE PROJECTS ↗" */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hidden sm:flex absolute -right-6 bottom-16 z-20 items-center gap-2 py-2 px-3.5 bg-[#22252D]/90 backdrop-blur-md border border-white/15 rounded-xl shadow-xl text-left hover:border-white/30 transition-all hover:translate-x-1"
              >
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase block">
                    OPPORTUNITIES
                  </span>
                  <span className="text-xs font-bold text-white">
                    FREELANCE & JOBS
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white shrink-0 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
