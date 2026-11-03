import React, { useState } from 'react';
import { TechLogo } from '../components/TechLogo';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');

  const allSkillsList: { item: SkillItem; group: string }[] = [
    ...skills.frontend.map((s) => ({ item: s, group: 'Frontend' })),
    ...skills.backend.map((s) => ({ item: s, group: 'Backend' })),
    ...skills.database.map((s) => ({ item: s, group: 'Database' })),
    ...skills.tools.map((s) => ({ item: s, group: 'Tools' })),
  ];

  const displayedSkills =
    activeCategory === 'All'
      ? allSkillsList
      : allSkillsList.filter((s) => s.group === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#17191F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest text-[#A5A7AD] uppercase">
                Langages & Technologies
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#22252D] rounded-xl border border-white/10 self-start md:self-auto">
            {(['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-[#17191F] shadow-sm'
                    : 'text-[#A5A7AD] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Logo-First Grid (No long paragraphs, logo first + tech name) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {displayedSkills.map(({ item, group }, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-[#22252D] hover:bg-[#292D36] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col items-center text-center justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Category indicator pill */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-gray-500 mb-3">
                <span className="text-gray-400 font-medium">{group}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Logo First (prominent, centered) */}
              <div className="w-16 h-16 rounded-2xl bg-[#17191F] border border-white/10 flex items-center justify-center p-3 my-2 group-hover:scale-110 group-hover:border-white/30 transition-all duration-300 shadow-md">
                <TechLogo name={item.logo} className="w-full h-full object-contain" />
              </div>

              {/* Title & Tag */}
              <div className="mt-3 w-full">
                <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-gray-100 transition-colors tracking-tight truncate">
                  {item.name}
                </h3>
                <span className="text-[11px] font-mono text-[#A5A7AD] block mt-0.5">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
