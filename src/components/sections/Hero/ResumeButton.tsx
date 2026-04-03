import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SPRING = { stiffness: 200, damping: 20 };

export function ResumeButton() {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);
  const opacity = useSpring(0, SPRING);

  // Shadow falls opposite the cursor (light source = cursor)
  const dropShadow = useTransform(
    [springX, springY, opacity],
    ([x, y, o]: number[]) =>
      `drop-shadow(${-x * 0.25}px ${-y * 0.25}px ${12 + Math.abs(x) * 0.1}px rgba(79,130,185,${o * 0.75}))`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - (rect.left + rect.width / 2));
    rawY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseEnter = () => {
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative inline-flex rounded-full p-0.5"
      style={{ filter: dropShadow }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full overflow-hidden blur-[3px]">
        <motion.div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'conic-gradient(transparent, #15205b 5%, transparent 38%, transparent 50%, #4f82b9 60%, transparent 87%)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Mid glow */}
      <div className="absolute inset-0 rounded-full overflow-hidden blur-[2px]">
        <motion.div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'conic-gradient(transparent, #15205b, transparent 10%, transparent 50%, #4f82b9, transparent 60%)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 0.1 }}
        />
      </div>

      {/* Inner tight glow */}
      <div className="absolute inset-0 rounded-full overflow-hidden blur-[0.5px]">
        <motion.div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'conic-gradient(transparent, #15205b 5%, transparent 14%, transparent 50%, #4f82b9 60%, transparent 64%)',
            filter: 'brightness(1.4)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 0.2 }}
        />
      </div>

      {/* Button — sits on top, covers interior */}
      <a
        href="/resume.pdf"
        target='blank'
        className="relative inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold bg-black/80 dark:bg-white/80 text-white dark:text-black backdrop-blur-sm cursor-pointer"
      >
        View Resume
      </a>
    </motion.div>
  );
}
