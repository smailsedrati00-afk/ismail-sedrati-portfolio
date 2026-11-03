import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="group relative bg-[#22252D] hover:bg-[#292D36] border border-white/[0.08] hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
      {/* Top Preview Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#17191F]">
        <img
          src={project.image}
          alt={project.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#22252D] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

        {/* Quick View Floating Button */}
        <button
          onClick={() => onOpenDetails(project)}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#17191F]/80 backdrop-blur-md text-white/80 hover:text-white border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          title="Quick preview"
          aria-label={`Preview ${project.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Category Label */}
        <div className="absolute bottom-3 left-4">
          <span className="text-[11px] font-semibold tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-gray-200 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-[#A5A7AD] font-medium tracking-wide mt-0.5">
                {project.subtitle}
              </p>
            </div>

            {/* Circular Arrow Button like reference */}
            <button
              onClick={() => onOpenDetails(project)}
              className="w-9 h-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-200"
              aria-label={`View details for ${project.name}`}
            >
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <p className="text-sm text-[#A5A7AD] line-clamp-2 mt-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-white/5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium text-[#CBD5E1] bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-medium text-[#A5A7AD] px-1.5 py-0.5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 mt-5 pt-4 border-t border-white/[0.06]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#17191F] bg-white hover:bg-gray-200 active:scale-[0.98] rounded-lg transition-all"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-gray-500 bg-white/5 rounded-lg cursor-not-allowed"
            >
              INTERNAL
            </button>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>DETAILS</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
