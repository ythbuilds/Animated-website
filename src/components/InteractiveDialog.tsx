import { useState } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'pitch' | 'careers' | 'hello' | 'operations' | 'nav' | 'contact';
}

export function InteractiveDialog({ isOpen, onClose, title, type }: DialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity">
      <div 
        className="bg-white text-black w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 relative border border-black/10 transition-transform animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-black/40 hover:text-black p-2 rounded-full hover:bg-black/5 transition-colors text-xl font-light leading-none select-none"
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-black/50 mb-2">
            <span>Mainframe®</span>
            <span>·</span>
            <span>A.R.I.A Direct</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </h2>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="text-3xl mb-3">✳︎</div>
            <p className="text-lg font-medium text-black">Message received.</p>
            <p className="text-sm text-black/60 mt-1">A.R.I.A has routed your note to the partners.</p>
          </div>
        ) : type === 'operations' ? (
          <div className="space-y-4 text-black/80 text-sm leading-relaxed">
            <p>
              Mainframe operates at the intersection of brand identity, high-dimensional interface engineering, and autonomous creative systems.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-black/[0.03] rounded-lg">
                <span className="font-semibold block text-black mb-1">01. Sprint Velocity</span>
                Two-week prototype-to-production cycles.
              </div>
              <div className="p-3 bg-black/[0.03] rounded-lg">
                <span className="font-semibold block text-black mb-1">02. Direct Partner Access</span>
                Zero account managers, purely principal builders.
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-black/80 transition-colors"
              >
                Close Brief
              </button>
            </div>
          </div>
        ) : type === 'careers' ? (
          <div className="space-y-4 text-black/80 text-sm leading-relaxed">
            <p>
              We are selectively hiring designers and creative technologists comfortable with rapid iterations and generative tooling.
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-black/[0.03] rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-semibold text-black">Design Technologist (WebGL / React)</div>
                  <div className="text-black/50">Remote / NYC Studio</div>
                </div>
                <a href="mailto:careers@mainframe.co" className="underline text-black font-medium">Apply</a>
              </div>
              <div className="p-3 bg-black/[0.03] rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-semibold text-black">Principal Brand Designer</div>
                  <div className="text-black/50">Remote / London</div>
                </div>
                <a href="mailto:careers@mainframe.co" className="underline text-black font-medium">Apply</a>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-black/70 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-black/15 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-black/70 mb-1">Contact Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-black/15 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-black/70 mb-1">Message or Brief</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you are envisioning..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-black/15 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-medium text-black/70 hover:text-black transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-black/80 transition-colors"
              >
                Send to Mainframe
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
