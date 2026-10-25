import { useState } from 'react';

interface NavbarProps {
  onNavClick: (item: string) => void;
}

export function Navbar({ onNavClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAction = (item: string) => {
    onNavClick(item);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo (left) */}
        <div className="flex items-center gap-3 select-none">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white cursor-pointer drop-shadow-sm"
            style={{ fontFamily: 'var(--font-heading)' }}
            onClick={() => handleAction('Mainframe')}
          >
            Mainframe®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none leading-none -mt-1 drop-shadow-sm"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links (center, hidden below md) */}
        <nav className="hidden md:flex items-center text-[23px] text-white select-none">
          <button
            onClick={() => handleAction('Labs')}
            className="hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
          >
            Labs
          </button>
          <span className="select-none">,&nbsp;</span>
          <button
            onClick={() => handleAction('Studio')}
            className="hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
          >
            Studio
          </button>
          <span className="select-none">,&nbsp;</span>
          <button
            onClick={() => handleAction('Openings')}
            className="hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
          >
            Openings
          </button>
          <span className="select-none">,&nbsp;</span>
          <button
            onClick={() => handleAction('Shop')}
            className="hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
          >
            Shop
          </button>
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleAction('Get in touch')}
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer bg-transparent border-0 p-0"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 focus:outline-none z-20 cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-white duration-300 ease-in-out transition-all ${
              mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white duration-300 ease-in-out transition-all ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white duration-300 ease-in-out transition-all ${
              mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay (z-index: 9) */}
      <div
        className={`fixed inset-0 z-[9] bg-black/95 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => handleAction('Labs')}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0"
        >
          Labs
        </button>
        <button
          onClick={() => handleAction('Studio')}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0"
        >
          Studio
        </button>
        <button
          onClick={() => handleAction('Openings')}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0"
        >
          Openings
        </button>
        <button
          onClick={() => handleAction('Shop')}
          className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0"
        >
          Shop
        </button>
        <button
          onClick={() => handleAction('Get in touch')}
          className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-60 transition-opacity text-left bg-transparent border-0 p-0 mt-4"
        >
          Get in touch
        </button>
      </div>
    </>
  );
}
