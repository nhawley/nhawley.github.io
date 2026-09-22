import { lazy, Suspense } from 'react';

import { useInView } from '@/hooks/useInView';
import { useCoarsePointer, usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { useTheme } from '@/hooks/useTheme';

// ogl is a sizeable WebGL dependency — split it into its own chunk, only
// fetched for the visitors who'll actually see it animate.
const Grainient = lazy(() => import('../../layout/Grainient'));

/**
 * The site's one GPU surface, confined to the hero. Renders a static CSS
 * gradient (same palette) for reduced-motion/touch visitors and as the
 * loading fallback; the shader only mounts for capable, in-view desktops,
 * and unmounts again once scrolled away.
 */
export function HeroBackground() {
  const { isDark } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useCoarsePointer();
  const { ref: sentinelRef, inView } = useInView<HTMLDivElement>({
    threshold: 0,
    once: false,
    rootMargin: '25% 0px 25% 0px',
  });

  const useStatic = prefersReducedMotion || isCoarsePointer;
  // Prerendering runs this component in Node, where `window` doesn't exist.
  // Never attempt the WebGL/lazy-chunk branch there — the static gradient
  // below is exactly what should end up in the prerendered HTML anyway.
  const isServer = typeof window === 'undefined';

  return (
    <>
      {/* Invisible sentinel spanning the hero, used purely to track visibility for pause/resume. */}
      <div ref={sentinelRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-gradient-fallback" />
      {!isServer && !useStatic && inView && (
        <Suspense fallback={null}>
          <Grainient
            color1={isDark ? '#5b1521' : '#fff0f2'}
            color2={isDark ? '#b94f61' : '#b94f61'}
            color3={isDark ? '#5b0917' : '#f0c8cf'}
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={2}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </Suspense>
      )}
    </>
  );
}
