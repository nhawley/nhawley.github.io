import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/5 backdrop-blur-md shadow-md'
          : 'bg-white/5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-xl font-bold hover:text-link"
            >
              NH
            </button>
          </div>

          <div className="flex-1 hidden md:flex items-center justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-link cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-cobalt/30 dark:bg-navy/30 hover:bg-white/55 dark:hover:bg-black/55 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}