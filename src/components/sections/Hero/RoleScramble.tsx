import { useEffect, useRef, useState } from 'react';
import { motion, type MotionProps } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const SCRAMBLE_DURATION = 0.8;
const SCRAMBLE_SPEED = 0.04;

type Props = {
  roles: string[];
  interval?: number;
  className?: string;
} & MotionProps;

export function RoleScramble({ roles, interval = 7000, className, ...motionProps }: Props) {
  const [, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animatingRef = useRef(false);

  const scrambleTo = (text: string) => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const steps = SCRAMBLE_DURATION / SCRAMBLE_SPEED;
    let step = 0;

    const tick = setInterval(() => {
      const progress = step / steps;
      let scrambled = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') { scrambled += ' '; continue; }
        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(tick);
        setDisplayText(text);
        animatingRef.current = false;
      }
    }, SCRAMBLE_SPEED * 1000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => {
        const next = (prev + 1) % roles.length;
        scrambleTo(roles[next]);
        return next;
      });
    }, interval);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [roles, interval]);

  return (
    <motion.h2 className={`flex justify-center items-center ${className}`} {...motionProps}>
      {displayText}
      <motion.span
        className="inline-block w-[0.6em] h-[1em] ml-1 bg-current align-middle"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }}
      />
    </motion.h2>
  );
}
