import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#22252D] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#17191F]/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-[#A5A7AD] font-semibold">
              Project Showcase
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Visual Preview */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#17191F]">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Titles & CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {project.category}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mt-0.5">
                {project.name}
              </h2>
              <p className="text-sm text-[#A5A7AD] mt-1">{project.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#17191F] bg-white hover:bg-gray-200 rounded-lg transition-colors shadow-lg shadow-white/10"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
              )}
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Overview & Architecture
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Key Features & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#292D36]/60 border border-white/5 text-xs sm:text-sm text-gray-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-gray-400" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Technologies & Tools
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium text-white bg-[#292D36] border border-white/10 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
