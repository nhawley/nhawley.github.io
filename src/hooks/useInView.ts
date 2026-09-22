import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Fraction of the element that must be visible to count as "in view". */
  threshold?: number;
  /** Grows/shrinks the viewport used for intersection checks. */
  rootMargin?: string;
  /** Once true, stop observing (good for one-shot reveal animations). Set false for continuous visibility tracking (e.g. pausing background work off-screen). */
  once?: boolean;
}

/**
 * Tracks whether an element is in the viewport via IntersectionObserver.
 * Replaces framer-motion's `whileInView` for simple reveal-on-scroll effects,
 * and doubles as a visibility gate for pausing expensive work off-screen.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
