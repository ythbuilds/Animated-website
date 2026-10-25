import { useState, useEffect } from 'react';

interface TypewriterResult {
  displayed: string;
  done: boolean;
}

export function useTypewriter(
  text: string,
  speed: number = 38,
  startDelay: number = 600
): TypewriterResult {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    setDisplayed('');
    setDone(false);

    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        index++;
        if (index <= text.length) {
          setDisplayed(text.slice(0, index));
        }
        if (index >= text.length) {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
