'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
      setHasConsented(false);
    } else {
      setHasConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
    setHasConsented(true);
  };

  const openCookies = () => {
    setShow(true);
  };

  if (hasConsented === null) return null; // Wait for hydration

  return (
    <>
      {/* Floating Button when banner is hidden */}
      {!show && (
        <button
          onClick={openCookies}
          className="fixed bottom-6 right-6 z-40 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white p-3.5 rounded-full shadow-xl hover:shadow-[var(--color-primary)]/20 border border-zinc-200 dark:border-zinc-700 transition-all hover:scale-110 active:scale-95 group flex items-center justify-center animate-fade-in-up"
          aria-label="Setări Cookie-uri"
          title="Setări Cookie-uri"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 dark:text-zinc-400 group-hover:text-[var(--color-primary)] transition-colors">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 12.5v.01"></path>
            <path d="M12 16v.01"></path>
            <path d="M11 11v.01"></path>
          </svg>
        </button>
      )}

      {/* Cookie Banner */}
      {show && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 animate-fade-in-up">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-zinc-600 dark:text-zinc-300">
              Folosim cookie-uri pentru a-ți oferi o experiență de navigare mai bună și pentru a analiza traficul site-ului. Prin continuarea navigării pe acest site, ești de acord cu utilizarea cookie-urilor conform <Link href="/politica-de-confidentialitate" className="text-[var(--color-primary)] font-semibold hover:underline">Politicii noastre de Confidențialitate</Link>.
            </div>
            <div className="flex gap-3 shrink-0 w-full md:w-auto">
              {hasConsented && (
                <button 
                  onClick={() => setShow(false)} 
                  className="w-full md:w-auto bg-transparent border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white px-6 py-3 rounded-xl font-medium transition-colors text-sm"
                >
                  Închide
                </button>
              )}
              <button 
                onClick={acceptCookies} 
                className="w-full md:w-auto bg-[var(--color-primary)] hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-medium transition-colors text-sm shadow-lg shadow-blue-900/30"
              >
                Sunt de acord
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
