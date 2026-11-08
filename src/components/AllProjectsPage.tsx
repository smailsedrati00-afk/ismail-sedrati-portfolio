import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { getLocalProject, PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface AllProjectsPageProps {
  onOpenProjectModal: (project: Project) => void;
  onBackToHome: () => void;
}

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onOpenProjectModal, onBackToHome }) => {
  const [projects, setProjects] = useState<Project[]>(PORTFOLIO_DATA.projects);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Frontend' | 'E-Commerce'>('All');

  useEffect(() => {
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
    <div className="min-h-screen bg-[#17191F] py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button & Header */}
        <div className="mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm text-[#A5A7AD] hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                Complete Archive
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase mt-1">
                ALL PROJECTS
              </h1>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#22252D] rounded-xl border border-white/10">
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
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-[#A5A7AD] text-sm animate-pulse">Kan-charger les projets...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-[#22252D]/50 rounded-2xl border border-white/5">
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

      </div>
    </div>
  );
};