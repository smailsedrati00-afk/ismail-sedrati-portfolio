import React from 'react';
import { Award, Calendar, CheckCircle, ExternalLink, Eye, FileText } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateCardProps {
  certificate: Certificate;
  onView: (certificate: Certificate) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onView }) => {
  return (
    <div className="group relative bg-[#22252D] hover:bg-[#292D36] border border-white/[0.08] hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
      {/* Certificate Visual Image Preview */}
      <div
        className="relative aspect-[16/11] bg-[#17191F] overflow-hidden cursor-pointer"
        onClick={() => onView(certificate)}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with eye icon */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
            <Eye className="w-5 h-5" />
          </span>
          <span className="text-xs font-bold text-white tracking-wider uppercase">
            Agrandir
          </span>
        </div>

        {/* Score Badge */}
        {certificate.score && (
          <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
            <CheckCircle className="w-3 h-3" />
            <span>{certificate.score}</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5 font-mono">
            <span>{certificate.issuer}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gray-500" />
              {certificate.issueDate}
            </span>
          </div>

          <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-gray-100 transition-colors">
            {certificate.title}
          </h3>

          {certificate.certId && (
            <p className="text-[10px] font-mono text-gray-500 mt-1 truncate">
              ID: {certificate.certId}
            </p>
          )}

          <p className="text-xs text-[#A5A7AD] mt-2.5 line-clamp-2 leading-relaxed">
            {certificate.description}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-white/5">
            {certificate.topics.slice(0, 3).map((topic, idx) => (
              <span
                key={idx}
                className="text-[10px] text-gray-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* View Action */}
        <div className="mt-4 pt-3 border-t border-white/[0.06]">
          <button
            onClick={() => onView(certificate)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-white/5 hover:bg-white rounded-xl transition-all duration-200 group-hover:bg-white group-hover:text-[#17191F] border border-white/10"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>VOIR LE CERTIFICAT</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
          </button>
        </div>
      </div>
    </div>
  );
};
