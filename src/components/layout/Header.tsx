import { useCallback, useEffect, useRef, useState } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon } from '../ui/icons';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Scroll-driven header background: a single rAF-throttled listener toggling
  // a class directly on the DOM node, so scrolling never triggers a React render.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      headerRef.current?.classList.toggle('is-scrolled', window.scrollY > 50);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-section indicator, driven by IntersectionObserver rather than
  // per-frame scroll math.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        setActiveHref(`#${topMost.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const mql = window.matchMedia('(min-width: 768px)');
    const onResize = () => {
      if (mql.matches) setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    mql.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      mql.removeEventListener('change', onResize);
    };
  }, [mobileOpen]);

  const scrollToSection = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <header ref={headerRef} className="site-header fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[760px] mx-auto px-[18px] py-3.5">
        <div className="relative flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="logo-text text-xl font-bold hover:text-link cursor-pointer"
          >
            NH3
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeHref === item.href ? 'true' : undefined}
                className={`cursor-pointer transition-colors ${
                  activeHref === item.href ? 'text-foreground font-medium' : 'hover:text-link'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 cursor-pointer" aria-label="Toggle theme">
              {isDark ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full bg-cobalt/30 dark:bg-navy/30 hover:bg-white/55 dark:hover:bg-black/55 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">Menu</span>
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-transform duration-200 ${
                    mobileOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span className={`block h-0.5 bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span
                  className={`block h-0.5 bg-current transition-transform duration-200 ${
                    mobileOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-1 pb-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeHref === item.href ? 'true' : undefined}
                className={`text-left px-2 py-2 rounded-md transition-colors cursor-pointer ${
                  activeHref === item.href ? 'text-foreground font-medium bg-white/10' : 'hover:text-link hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
