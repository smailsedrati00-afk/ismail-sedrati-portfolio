import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121317] border-t border-white/[0.08] pt-16 pb-12 text-[#A5A7AD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Short Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl text-white tracking-tight">
                ISMAIL<span className="text-gray-500 font-light">.DEV</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            <p className="text-xs sm:text-sm text-[#A5A7AD] max-w-sm leading-relaxed">
              Full Stack Web Developer specialized in reactive React applications, modern backend services, and clean relational databases based in Rabat, Morocco.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details & Action */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <p className="text-xs text-[#A5A7AD]">
              {profile.location}
            </p>
            <p className="text-xs font-mono text-gray-300">
              {profile.email}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-xs font-semibold text-white underline underline-offset-4 hover:text-gray-300"
              >
                View Curriculum Vitae ↗
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Ismail Sedrati. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
