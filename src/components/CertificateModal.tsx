import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, CheckCircle2, Calendar, Hash, FileText } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#22252D] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#17191F]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                {certificate.title}
              </h3>
              <p className="text-xs text-[#A5A7AD]">{certificate.issuer}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Certificate Image Frame */}
          <div className="relative w-full bg-[#121317] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-2 sm:p-4 shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[58vh] object-contain rounded-lg"
            />
          </div>

          {/* Credential Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-[#292D36]/70 border border-white/5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <Award className="w-3 h-3 text-emerald-400" />
                Émetteur
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">
                {certificate.issuer}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#292D36]/70 border border-white/5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-emerald-400" />
                Date d'Obtention
              </span>
              <p className="text-xs sm:text-sm font-mono font-semibold text-white mt-1">
                {certificate.issueDate}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#292D36]/70 border border-white/5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Distinction / Statut
              </span>
              <p className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">
                {certificate.score || 'Certifié'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#292D36]/70 border border-white/5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <Hash className="w-3 h-3 text-emerald-400" />
                ID du Certificat
              </span>
              <p className="text-[11px] font-mono text-gray-300 mt-1 truncate">
                {certificate.certId || 'N/A'}
              </p>
            </div>
          </div>

          {/* Description & Competencies */}
          <div className="p-4 rounded-xl bg-[#17191F]/50 border border-white/5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Description & Compétences Validées
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {certificate.description}
            </p>

            <div>
              <h5 className="text-[11px] font-semibold text-gray-400 mb-2">
                Modules & Concepts Clés :
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {certificate.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-[#292D36] text-gray-200 border border-white/5 font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>OUVRIR LE PDF OFFICIEL</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={certificate.pdfUrl}
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#17191F] bg-white hover:bg-gray-200 rounded-lg transition-colors shadow-lg shadow-white/10"
            >
              <Download className="w-3.5 h-3.5" />
              <span>TÉLÉCHARGER LE CERTIFICAT (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
