import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { MessagesDrawer } from './components/MessagesDrawer';

import { Project, Certificate } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  // Fetch initial message count from Express backend
  const refreshMessageCount = async () => {
    try {
      const res = await fetch('/api/contact/messages');
      const data = await res.json();
      if (data.success && typeof data.count === 'number') {
        setMessageCount(data.count);
      }
    } catch {
      // Backend may be initializing
    }
  };

  useEffect(() => {
    refreshMessageCount();
  }, []);

  return (
    <div className="min-h-screen bg-[#17191F] text-[#F5F5F5] font-sans selection:bg-white/20 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenMessages={() => setMessagesOpen(true)}
        messageCount={messageCount}
      />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* 4 Statistics Cards Strip */}
        <StatsSection />

        {/* Featured Projects Section */}
        <ProjectsSection onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* About Me Section */}
        <AboutSection onOpenResume={() => setResumeOpen(true)} />

        {/* Skills & Technologies Section */}
        <SkillsSection />

        {/* Education & Training Section */}
        <EducationSection />

        {/* Dedicated Certifications Section */}
        <CertificationsSection
          onViewCertificate={(cert) => setSelectedCertificate(cert)}
        />

        {/* Contact Section with real Express backend submission */}
        <ContactSection
          onMessageSent={refreshMessageCount}
          onOpenInbox={() => setMessagesOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <MessagesDrawer
        isOpen={messagesOpen}
        onClose={() => setMessagesOpen(false)}
        onUpdateCount={(count) => setMessageCount(count)}
      />
    </div>
  );
}
