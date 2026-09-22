import { useEffect, useState } from 'react';

/** Reactive `window.matchMedia` — used for reduced-motion and coarse-pointer checks. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/** True for touch-primary devices (phones/tablets) — the signal we gate the WebGL hero shader on. */
export function useCoarsePointer(): boolean {
  return useMediaQuery('(pointer: coarse)');
}
