import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import axios from 'axios';
import { getLocalProject, PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const [projects, setProjects] = useState<Project[]>(PORTFOLIO_DATA.projects);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Frontend' | 'E-Commerce'>('All');

  useEffect(() => {
    // Kheddam b .env variable bash ila bddlti l-adresse l-telephone wla l-production ytbdl bohdou
    const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

    axios.get(`${apiUrl}/projects`)
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setProjects(
            response.data.map((project: Project) => {
              const localProject = getLocalProject(project);

              return {
                ...localProject,
                ...project,
                image: localProject?.image || project.image || '',
              };
            }),
          );
        } else {
          setProjects(PORTFOLIO_DATA.projects);
        }
        setLoading(false);
      })
      .catch(error => {
        console.warn("Laravel API ma-khddamch, kan-st-3mlo portfolioData:", error);
        setProjects(PORTFOLIO_DATA.projects);
        setLoading(false);
      });
  }, []);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 relative bg-[#17191F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest text-[#A5A7AD] uppercase">
                Selected Works
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              FEATURED WORK
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#22252D] rounded-xl border border-white/10 self-start md:self-auto">
            {(['All', 'Full Stack', 'Frontend', 'E-Commerce'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === cat
                    ? 'bg-white text-[#17191F] shadow-sm'
                    : 'text-[#A5A7AD] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#A5A7AD] text-sm animate-pulse">Kan-charger les projets...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-[#22252D]/50 rounded-2xl border border-white/5">
            <p className="text-[#A5A7AD] text-sm">Mazal ma-kayninch projets m-addifin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenProjectModal}
              />
            ))}
          </div>
        )}

        {/* Bottom Banner Prompt to collaborate */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#A5A7AD]">
            Looking for something specific or customized?{' '}
            <a
              href="#contact"
              className="text-white hover:underline font-semibold inline-flex items-center gap-1 ml-1"
            >
              <span>Let's talk about your project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};