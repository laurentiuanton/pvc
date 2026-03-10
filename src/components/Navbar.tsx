'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLegalPage = pathname === '/termeni-si-conditii' || 
                      pathname === '/politica-de-confidentialitate' || 
                      pathname === '/politica-de-cookies';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Despre Noi', href: '/#despre' },
    { name: 'Servicii', href: '/#servicii' },
    { name: 'Portofoliu', href: '/#portofoliu' },
    { name: 'Contact', href: '/#contact' },
  ];

  const hasDarkText = isScrolled && !isLegalPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLegalPage
          ? 'bg-zinc-900 dark:bg-zinc-950 shadow-md py-4 border-b border-zinc-800'
          : isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-sm py-3 border-b border-zinc-200/50 dark:border-zinc-800/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--color-primary)] rounded-md flex items-center justify-center transform transition-transform group-hover:rotate-12">
            <span className="text-white font-bold text-xl md:text-2xl leading-none">V</span>
          </div>
          <span className={`font-bold text-xl md:text-2xl tracking-tight font-heading ${hasDarkText ? 'text-zinc-900 dark:text-white' : 'text-white'}`}>
            Vitra<span className="text-[var(--color-primary)]">Frame</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const targetId = link.href.replace('/#', '#');
              const isHome = pathname === '/';
              const actualHref = isHome ? targetId : link.href;

              return (
                <li key={link.name}>
                  <a
                    href={actualHref}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${
                      hasDarkText ? 'text-zinc-600 dark:text-zinc-300' : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="tel:+40754025294"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95 ${
              hasDarkText 
                ? 'bg-[var(--color-primary)] text-white shadow-blue-900/20 hover:bg-blue-800' 
                : 'bg-white text-zinc-900 shadow-transparent hover:bg-zinc-100 hover:shadow-black/10'
            }`}
          >
            <Phone size={16} className={hasDarkText ? "text-white" : "text-[var(--color-primary)]"} />
            <span>Sună acum</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${hasDarkText ? 'text-zinc-900 dark:text-white' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 p-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => {
            const targetId = link.href.replace('/#', '#');
            const isHome = pathname === '/';
            const actualHref = isHome ? targetId : link.href;

            return (
              <a
                key={link.name}
                href={actualHref}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-[var(--color-primary)] transition-colors py-2 border-b border-zinc-100 dark:border-zinc-800"
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="tel:+40754025294"
            className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-5 py-3 rounded-xl font-medium mt-4"
          >
            <Phone size={18} />
            Sună acum: +40 754 025 294
          </a>
        </div>
      )}
    </nav>
  );
}
