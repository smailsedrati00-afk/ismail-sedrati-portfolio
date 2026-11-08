import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';
import { CertificateCard } from '../components/CertificateCard';
import axios from 'axios';

interface CertificationsSectionProps {
  onViewCertificate: (certificate: Certificate) => void;
  onViewAllCertificates: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onViewCertificate,
  onViewAllCertificates,
}) => {
  const [certifications, setCertifications] = useState<Certificate[]>(PORTFOLIO_DATA.certifications);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

    axios.get(`${apiUrl}/certificates`)
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Map Laravel attributes to match React Certificate interface if names differ slightly
          const formattedCerts = response.data.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            issuer: item.issuer,
            issueDate: item.date,
            certId: item.credential_id,
            image: item.image,
            pdfUrl: item.verification_url,
            description: item.description || '',
            topics: item.topics || [],
          }));
          setCertifications(formattedCerts);
        }
        setLoading(false);
      })
      .catch(error => {
        console.warn("Laravel API ma-khddamch, kan-st-3mlo portfolioData:", error);
        setCertifications(PORTFOLIO_DATA.certifications);
        setLoading(false);
      });
  }, []);

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
        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#A5A7AD] text-sm animate-pulse">Kan-charger les certifications...</p>
          </div>
        ) : certifications.length > 0 ? (
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
          <div className="p-12 rounded-3xl bg-[#22252D] border border-white/10 text-center max-w-xl mx-auto">
            <Award className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-white">No Certificates Added Yet</h3>
          </div>
        )}

        {/* View All Certifications Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllCertificates}
            className="px-6 py-3 bg-[#22252D] hover:bg-[#2e323d] text-white text-sm font-semibold rounded-xl border border-white/10 transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>View All Certifications</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};