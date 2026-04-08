import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [projectsProgress, setProjectsProgress] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        // Revert header color as #projects enters the viewport from below.
        // Fade over the first 30vh of entry: rect.top goes innerHeight → 0.7*innerHeight.
        const projectsEl = document.querySelector('#projects');
        if (projectsEl) {
          const { top } = projectsEl.getBoundingClientRect();
          const revert = Math.max(0, Math.min(1,
            (window.innerHeight - top) / (window.innerHeight * 0.3),
          ));
          setProjectsProgress(revert);
        }

        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      setTimelineProgress((e as CustomEvent<{ progress: number }>).detail.progress);
    };
    window.addEventListener('header-timeline-progress', handler);
    return () => window.removeEventListener('header-timeline-progress', handler);
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

  // timelineProgress drives black text; projectsProgress reverts it as projects enters.
  // Dark mode: white (255) → black (0). Light mode: already near-black, no change.
  const p = timelineProgress * (1 - projectsProgress);
  const channel = isDark ? Math.round(255 * (1 - p)) : 0;
  const forcedTextColor = p > 0 ? `rgb(${channel}, ${channel}, ${channel})` : undefined;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-black/5 backdrop-blur-md shadow-md'
          : 'bg-white/5'
      }`}
      style={{ color: forcedTextColor }}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <button
              onClick={() => scrollToSection('#hero')}
              className="logo-text text-xl font-bold hover:text-link cursor-pointer"
            >
              NH3
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