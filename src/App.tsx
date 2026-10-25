import { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDialog } from './components/InteractiveDialog';

export default function App() {
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'pitch' | 'careers' | 'hello' | 'operations' | 'nav' | 'contact';
  }>({
    isOpen: false,
    title: '',
    type: 'pitch',
  });

  const handleAction = (item: string) => {
    switch (item) {
      case 'Pitch us an idea':
        setDialogState({
          isOpen: true,
          title: 'Pitch us an idea',
          type: 'pitch',
        });
        break;
      case 'Come work here':
      case 'Openings':
        setDialogState({
          isOpen: true,
          title: 'Join the Studio',
          type: 'careers',
        });
        break;
      case 'Send a brief hello':
        setDialogState({
          isOpen: true,
          title: 'Say Hello',
          type: 'hello',
        });
        break;
      case 'See how we operate':
        setDialogState({
          isOpen: true,
          title: 'Operating Principles',
          type: 'operations',
        });
        break;
      case 'Labs':
        setDialogState({
          isOpen: true,
          title: 'Mainframe Labs — Experimental R&D',
          type: 'operations',
        });
        break;
      case 'Studio':
        setDialogState({
          isOpen: true,
          title: 'Studio Commissions & Inquiries',
          type: 'pitch',
        });
        break;
      case 'Shop':
        setDialogState({
          isOpen: true,
          title: 'Editions & Hardware Drops',
          type: 'pitch',
        });
        break;
      case 'Get in touch':
        setDialogState({
          isOpen: true,
          title: 'Get in Touch',
          type: 'contact',
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden select-none">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Navbar */}
      <Navbar onNavClick={handleAction} />

      {/* Hero Section */}
      <main>
        <Hero onPillClick={handleAction} />
      </main>

      {/* Interactive Modal Dialog */}
      <InteractiveDialog
        isOpen={dialogState.isOpen}
        onClose={() => setDialogState((prev) => ({ ...prev, isOpen: false }))}
        title={dialogState.title}
        type={dialogState.type}
      />
    </div>
  );
}
