import React from 'react';
import { GraduationCap, FolderGit2, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  const { stats } = PORTFOLIO_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-gray-300" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-gray-300" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-gray-300" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-gray-300" />;
    }
  };

  return (
    <section className="relative z-10 py-8 border-y border-white/[0.08] bg-[#17191F]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-2xl bg-[#22252D] hover:bg-[#292D36] border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight tabular-nums group-hover:text-gray-100 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-wider text-gray-300 uppercase mt-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-[#A5A7AD] mt-1.5 line-clamp-1 leading-normal">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
