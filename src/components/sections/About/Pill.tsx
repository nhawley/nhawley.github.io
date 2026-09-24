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
      className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md border border-foreground/15 bg-foreground/5 hover:border-ember/60 hover:bg-foreground/10 hover:text-link transition-colors"
    >
      <span className="flex items-center">{icon}</span>
      <span className="tracking-wide">{text}</span>
      <ArrowUpRightIcon size={12} />
    </a>
  );
}
