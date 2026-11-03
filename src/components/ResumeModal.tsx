import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Mail, MapPin, Phone, Globe, Award, Briefcase, GraduationCap, Code, ExternalLink, Languages, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewTab, setViewTab] = useState<'document' | 'interactive'>('document');
  const { profile, education, projects, certifications } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#22252D] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 max-h-[94vh] flex flex-col text-[#F5F5F5]">
        {/* Modal Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-white/10 bg-[#17191F]/90">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-lg text-white">
              CURRICULUM VITAE
            </span>
            <span className="text-xs text-[#A5A7AD] hidden sm:inline">
              · Ismail Sedrati
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex p-0.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold">
              <button
                onClick={() => setViewTab('document')}
                className={`px-3 py-1 rounded-md transition-all ${
                  viewTab === 'document' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                Aperçu PDF Officiel
              </button>
              <button
                onClick={() => setViewTab('interactive')}
                className={`px-3 py-1 rounded-md transition-all ${
                  viewTab === 'interactive' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                Format Web
              </button>
            </div>

            <a
              href={profile.cvPdfUrl}
              download="CV_Sedrati_Ismail_Full_Stack.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-white hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Télécharger PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Official PDF Viewer */}
        {viewTab === 'document' ? (
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#17191F] flex flex-col">
            <div className="relative w-full flex-1 min-h-[580px] rounded-xl overflow-hidden border border-white/10 bg-[#121317]">
              <iframe
                src={`${profile.cvPdfUrl}#toolbar=0&navpanes=0`}
                title="CV Ismail Sedrati"
                className="w-full h-full min-h-[580px] border-0"
              />
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <span className="font-mono">
                Fichier officiel : cv_sedrati_ismail_devloper_full-stck.pdf
              </span>
              <a
                href={profile.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:underline font-semibold"
              >
                <span>Ouvrir en plein écran</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* Tab 2: Interactive Web CV */
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#17191F] flex-1">
            {/* Header info */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  ISMAIL SEDRATI
                </h1>
                <p className="text-sm font-bold text-emerald-400 tracking-wider uppercase mt-1">
                  DÉVELOPPEUR FULL-STACK JUNIOR
                </p>
              </div>

              <div className="text-xs text-gray-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span className="font-mono text-white">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span className="font-mono text-white">{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Profil */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Profil Professionnel
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#22252D]/60 p-4 rounded-xl border border-white/5">
                Titulaire d’un diplôme de Technicien Spécialisé en Développement Informatique, je recherche un stage ou opportunité en développement web pour mettre en pratique mes compétences et acquérir une expérience professionnelle. Sérieux, motivé et dynamique, j’ai réalisé plusieurs projets web avec HTML, CSS, JavaScript, React, PHP et Laravel.
              </p>
            </div>

            {/* Formation */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                Formation & Diplômes
              </h2>
              <div className="p-4 rounded-xl bg-[#22252D] border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white">
                    {education.institution}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {education.duration}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-200">
                  {education.diploma}
                </p>
                <p className="text-[11px] text-gray-400">
                  Certificat Python Essentials (Bases Python, Cisco Networking Academy)
                </p>
              </div>
            </div>

            {/* Projets */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Projets Réalisés
              </h2>
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.id} className="p-3.5 rounded-xl bg-[#22252D] border border-white/5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm text-white">{p.name}</h3>
                      <span className="text-[11px] font-mono text-emerald-400">{p.category}</span>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">{p.description}</p>
                    <p className="text-[11px] font-mono text-gray-400 mt-1">
                      Stack: {p.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Langues & Qualités Personnelles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#22252D] border border-white/5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-emerald-400" />
                  Langues
                </h3>
                <ul className="text-xs space-y-1.5 text-gray-300">
                  {profile.languages?.map((lang, idx) => (
                    <li key={idx} className="flex justify-between border-b border-white/5 pb-1">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-gray-400">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#22252D] border border-white/5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-emerald-400" />
                  Qualités Personnelles
                </h3>
                <ul className="text-xs space-y-1.5 text-gray-300 list-disc list-inside">
                  <li>Sérieux et sens de l’engagement</li>
                  <li>Forte motivation pour le développement digital</li>
                  <li>Capacité d’adaptation et esprit d’apprentissage</li>
                  <li>Résolution de problèmes et logique algorithmique</li>
                </ul>
              </div>
            </div>

            {/* Print action */}
            <div className="pt-2 text-right">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer / Sauvegarder</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
