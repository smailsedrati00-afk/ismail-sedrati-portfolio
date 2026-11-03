import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Trash2, Mail, Clock, MessageSquare, CheckCircle } from 'lucide-react';

interface StoredMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface MessagesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateCount?: (count: number) => void;
}

export const MessagesDrawer: React.FC<MessagesDrawerProps> = ({
  isOpen,
  onClose,
  onUpdateCount,
}) => {
  const [messages, setMessages] = useState<StoredMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact/messages');
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
        if (onUpdateCount) onUpdateCount(data.messages?.length || 0);
      } else {
        setError('Failed to fetch messages');
      }
    } catch (err) {
      console.error(err);
      setError('Could not connect to backend server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/contact/messages/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        const next = messages.filter((m) => m.id !== id);
        setMessages(next);
        if (onUpdateCount) onUpdateCount(next.length);
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#22252D] border-l border-white/10 h-full shadow-2xl z-10 flex flex-col text-white">
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#17191F]/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Contact Inbox</h3>
              <p className="text-[11px] text-[#A5A7AD]">
                Node.js + Express Backend Storage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={fetchMessages}
              disabled={loading}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Refresh messages"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status bar */}
        <div className="px-5 py-2.5 bg-[#17191F]/50 border-b border-white/5 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1.5 font-mono text-[11px]">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            API Connected: {messages.length} Message{messages.length === 1 ? '' : 's'}
          </span>
          <span className="text-[11px] text-gray-500 font-mono">POST /api/contact</span>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {loading && messages.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-xs">
              <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-gray-400" />
              Loading stored messages...
            </div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs text-center">
              {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="p-8 text-center text-gray-400 space-y-2">
              <Mail className="w-8 h-8 mx-auto text-gray-600 mb-2" />
              <p className="text-sm font-semibold text-gray-300">No messages yet</p>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                Submit a test inquiry through the contact form below and it will appear here instantly!
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 rounded-xl bg-[#292D36]/80 border border-white/5 hover:border-white/10 transition-colors space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white">{msg.name}</h4>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-xs text-emerald-400 hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-white/5 rounded-md transition-colors"
                    title="Delete message"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="pt-1">
                  <p className="text-xs font-semibold text-gray-200">
                    Subject: {msg.subject}
                  </p>
                  <p className="text-xs text-gray-300 mt-1 whitespace-pre-line leading-relaxed bg-[#17191F]/60 p-2.5 rounded-lg border border-white/5">
                    {msg.message}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono pt-1">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span>{new Date(msg.createdAt).toLocaleString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer footer info */}
        <div className="p-4 bg-[#17191F]/90 border-t border-white/10 text-center">
          <p className="text-[11px] text-gray-500">
            Messages are validated and persisted by the Express server.
          </p>
        </div>
      </div>
    </div>
  );
};
