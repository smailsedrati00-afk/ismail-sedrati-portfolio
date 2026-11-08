import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';
import { CertificateCard } from './CertificateCard';
import axios from 'axios';

interface AllCertificatesPageProps {
  onViewCertificate: (cert: Certificate) => void;
  onBackToHome: () => void;
}

export const AllCertificatesPage: React.FC<AllCertificatesPageProps> = ({ onViewCertificate, onBackToHome }) => {
  const [certifications, setCertifications] = useState<Certificate[]>(PORTFOLIO_DATA.certifications);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

    axios.get(`${apiUrl}/certificates`)
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
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
        console.warn("Laravel API ma-khddamch f AllCertificatesPage, kan-st-3mlo portfolioData:", error);
        setCertifications(PORTFOLIO_DATA.certifications);
        setLoading(false);
      });
  }, []);

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

          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              Complete Achievements
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase mt-1">
              ALL CERTIFICATIONS
            </h1>
          </div>
        </div>

        {/* Certifications Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#A5A7AD] text-sm animate-pulse">Kan-charger les certifications...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert: Certificate) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onView={() => onViewCertificate(cert)}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};