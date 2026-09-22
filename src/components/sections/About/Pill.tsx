import type { ReactNode } from 'react';
import { ArrowUpRightIcon } from '../../ui/icons';

interface PillProps {
  text: string;
  href: string;
  icon: ReactNode;
}

/** A small external-link badge — currently used for the LinkedIn/GitHub links on the profile card. */
export function Pill({ text, href, icon }: PillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-3 py-0.5 rounded-full border backdrop-blur-sm bg-[rgba(30,80,160,0.1)] border-[rgba(30,80,180,0.4)] dark:bg-[rgba(100,180,255,0.08)] dark:border-[rgba(100,180,255,0.25)]"
    >
      <span className="flex items-center">{icon}</span>
      <span className="text-xs font-medium tracking-wide text-black dark:text-white/80">{text}</span>
      <ArrowUpRightIcon size={12} className="text-black dark:text-white" />
    </a>
  );
}
