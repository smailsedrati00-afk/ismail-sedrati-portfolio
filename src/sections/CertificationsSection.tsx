import React from 'react';
import { Award, ShieldCheck, PlusCircle } from 'lucide-react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';
import { CertificateCard } from '../components/CertificateCard';

interface CertificationsSectionProps {
  onViewCertificate: (certificate: Certificate) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onViewCertificate,
}) => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certificates" className="py-24 relative bg-[#17191F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest text-[#A5A7AD] uppercase">
                Verified Credentials
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              CERTIFICATIONS & ACHIEVEMENTS
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#22252D] px-4 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Official industry & academic certificates with document verification</span>
          </div>
        </div>

        {/* Certificates Grid */}
        {certifications && certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onView={onViewCertificate}
              />
            ))}
          </div>
        ) : (
          /* Elegant Empty State if no certificates exist */
          <div className="p-12 rounded-3xl bg-[#22252D] border border-white/10 text-center max-w-xl mx-auto">
            <Award className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-white">No Certificates Added Yet</h3>
            <p className="text-xs text-[#A5A7AD] mt-2 leading-relaxed">
              New certifications will be listed here. Easily add future achievements by placing the PDF or image in the public assets folder and updating the data file.
            </p>
          </div>
        )}

        {/* Developer Note on Modularity */}
        <div className="mt-12 p-4 rounded-2xl bg-[#22252D]/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A5A7AD]">
          <div className="flex items-center gap-2.5">
            <PlusCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white">Easily Extensible:</strong> New certificates can be added at any time by dropping the PDF into <code className="text-gray-300 font-mono text-[11px] bg-black/40 px-1.5 py-0.5 rounded">public/assets/</code> and updating <code className="text-gray-300 font-mono text-[11px] bg-black/40 px-1.5 py-0.5 rounded">data/portfolioData.ts</code>.
            </span>
          </div>
          <span className="font-mono text-[11px] text-gray-400 shrink-0">
            {certifications.length} Credentials Listed
          </span>
        </div>
      </div>
    </section>
  );
};
