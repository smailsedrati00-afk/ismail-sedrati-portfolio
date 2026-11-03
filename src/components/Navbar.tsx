import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenMessages: () => void;
  messageCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenMessages,
  messageCount = 0,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'skills', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#17191F]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-left"
          >
            <img
              src="/assets/aistudio/ismail-logo.png"
              alt="Ismail Sedrati"
              className="h-9 w-auto object-contain invert"
            />
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-white group-hover:text-gray-300 transition-colors">
              <span className="text-gray-500 font-light">.DEV</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:bg-white transition-colors" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-wider text-[#A5A7AD]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap py-1 relative hover:text-white ${
                    isActive ? 'text-white' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Utility */}
          <div className="flex items-center gap-3 shrink-0">
            {/* View CV button */}
            <button
              onClick={onOpenResume}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#A5A7AD] hover:text-white hover:bg-white/5 border border-white/10 rounded-lg transition-colors whitespace-nowrap"
              title="View & Download Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Received messages inspector (backend demo verification) */}
            <button
              onClick={onOpenMessages}
              className="relative p-2 text-xs text-[#A5A7AD] hover:text-white hover:bg-white/5 border border-white/10 rounded-lg transition-colors"
              title="View Contact Messages (Backend Storage)"
            >
              <MessageSquare className="w-4 h-4" />
              {messageCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
                  {messageCount}
                </span>
              )}
            </button>

            {/* Primary "LET'S TALK" CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold tracking-wide text-[#17191F] bg-white hover:bg-[#E2E8F0] active:scale-[0.98] rounded-full transition-all duration-200 shadow-md shadow-white/10 whitespace-nowrap"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A5A7AD] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#17191F]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-sm font-semibold tracking-wider text-[#A5A7AD]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 hover:text-white border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#22252D] hover:bg-[#292D36] border border-white/10 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME / CV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
