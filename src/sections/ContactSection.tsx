import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onMessageSent?: () => void;
  onOpenInbox?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onMessageSent,
  onOpenInbox,
}) => {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateClient = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      errors.subject = 'Subject is required.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setStatus({
        type: 'error',
        message: 'Please resolve the highlighted validation errors.',
      });
      return;
    }
    setFieldErrors({});
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message:
            result.message ||
            'Thank you! Your message has been sent successfully to Ismail Sedrati.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (onMessageSent) onMessageSent();
      } else {
        if (result.errors) {
          setFieldErrors(result.errors);
        }
        setStatus({
          type: 'error',
          message:
            result.message ||
            'Failed to send your message. Please check the fields and try again.',
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        type: 'error',
        message:
          'Network error: unable to connect to the Node.js backend. Please verify your connection or try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#17191F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Box inspired by reference image */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-r from-[#22252D] via-[#292D36] to-[#22252D] border border-white/10 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Decorative Sparkle */}
          <div className="absolute top-6 right-8 text-white/20">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest text-[#A5A7AD] uppercase">
                Collaboration & Inquiries
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1 leading-tight">
                LET'S BUILD SOMETHING TOGETHER
              </h2>
              <p className="text-sm sm:text-base text-[#A5A7AD] mt-3 max-w-lg leading-relaxed">
                I'm currently available for full-time engineering positions, freelance projects, and creative collaborations.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 lg:border-l lg:border-white/10 lg:pl-8 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block font-semibold">Direct Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-white hover:underline font-mono"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block font-semibold">Localisation</span>
                  <span className="text-white text-xs">{profile.location}</span>
                </div>
              </div>

              {profile.phone && (
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-400">TÉL</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block font-semibold">Téléphone / WhatsApp</span>
                    <a href={`tel:${profile.phone}`} className="text-white hover:underline font-mono text-xs">
                      {profile.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>GitHub</span>
                </a>

                {onOpenInbox && (
                  <button
                    onClick={onOpenInbox}
                    className="text-[11px] text-gray-400 hover:text-white underline underline-offset-4 ml-auto"
                  >
                    View Inbox
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Real Functional Contact Form */}
        <div className="max-w-3xl mx-auto bg-[#22252D] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A7AD] mt-1">
              Submissions are validated and stored on the Node.js + Express backend.
            </p>
          </div>

          {/* Status Message Alert */}
          {status.type && (
            <div
              className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs sm:text-sm ${
                status.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
                  : 'bg-red-500/10 border border-red-500/20 text-red-300'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#17191F] text-white placeholder-gray-500 text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-white/40 ${
                    fieldErrors.name ? 'border-red-500/70' : 'border-white/10 focus:border-white/30'
                  }`}
                  disabled={loading}
                />
                {fieldErrors.name && (
                  <p className="text-[11px] text-red-400 mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                  Your Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#17191F] text-white placeholder-gray-500 text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-white/40 ${
                    fieldErrors.email ? 'border-red-500/70' : 'border-white/10 focus:border-white/30'
                  }`}
                  disabled={loading}
                />
                {fieldErrors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{fieldErrors.email}</p>
                )}
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Subject <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Web Development Project / Software Engineer Opportunity"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#17191F] text-white placeholder-gray-500 text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-white/40 ${
                  fieldErrors.subject ? 'border-red-500/70' : 'border-white/10 focus:border-white/30'
                }`}
                disabled={loading}
              />
              {fieldErrors.subject && (
                <p className="text-[11px] text-red-400 mt-1">{fieldErrors.subject}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Message <span className="text-emerald-400">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project, timeline, budget or job requirements..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#17191F] text-white placeholder-gray-500 text-sm border transition-colors focus:outline-none focus:ring-1 focus:ring-white/40 resize-y ${
                  fieldErrors.message ? 'border-red-500/70' : 'border-white/10 focus:border-white/30'
                }`}
                disabled={loading}
              />
              {fieldErrors.message && (
                <p className="text-[11px] text-red-400 mt-1">{fieldErrors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#A5A7AD]">
                Guaranteed reply within 24 business hours.
              </span>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#17191F] bg-white hover:bg-gray-200 active:scale-[0.98] rounded-xl transition-all duration-200 shadow-xl shadow-white/10 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
