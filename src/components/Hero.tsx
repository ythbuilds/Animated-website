import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroProps {
  onPillClick: (pillName: string) => void;
}

const TYPEWRITER_TEXT = 'Glad you stopped in. Good taste tends to find us. Now, what are we building?';

export function Hero({ onPillClick }: HeroProps) {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('hello@mainframe.co');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = 'hello@mainframe.co';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden relative z-[1] select-none">
      <div className="max-w-xl relative z-10">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6 text-white font-normal"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#ffffff',
            filter: 'blur(4px)',
          }}
          aria-hidden="true"
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe's Adaptive Response Interface Agent
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-white mb-5 sm:mb-6 font-normal tracking-normal select-text drop-shadow-sm"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-cursor-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-1 select-none"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* White Pill 1 */}
          <button
            onClick={() => onPillClick('Pitch us an idea')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
          >
            Pitch us an idea
          </button>

          {/* White Pill 2 */}
          <button
            onClick={() => onPillClick('Come work here')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
          >
            Come work here
          </button>

          {/* White Pill 3 */}
          <button
            onClick={() => onPillClick('Send a brief hello')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
          >
            Send a brief hello
          </button>

          {/* White Pill 4 */}
          <button
            onClick={() => onPillClick('See how we operate')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
          >
            See how we operate
          </button>

          {/* Outline Pill Button */}
          <button
            onClick={handleCopy}
            title="Click to copy email address"
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer group active:scale-[0.98]"
          >
            <span>
              {copied ? 'Copied to clipboard:' : 'Reach us:'}{' '}
              <span className="underline underline-offset-1">hello@mainframe.co</span>
            </span>
            {copied ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="shrink-0"
                aria-hidden="true"
              >
                <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-current"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="3.5"
                  width="6.5"
                  height="7.5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M4.5 3.5V2C4.5 1.44772 4.94772 1 5.5 1H10C10.5523 1 11 1.44772 11 2V7.5C11 8.05228 10.5523 8.5 10 8.5H8.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
