import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface PillProps {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  arrowDown?: boolean;
}

export function Pill({ text, href, icon, arrowDown }: PillProps) {
  const content = (
    <>
      {icon ? (
        <span className="flex items-center">{icon}</span>
      ) : (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[rgba(30,80,180,1)] dark:bg-[rgba(100,220,255,1)]" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgba(30,80,180,1)] dark:bg-[rgba(100,220,255,1)]" />
        </span>
      )}
      <span className="text-xs font-medium tracking-wide text-black dark:text-white/80">{text}</span>
      {href && <ArrowUpRight size={12} className="text-black dark:text-white" />}
      {arrowDown && <ArrowDown size={12} className="text-black dark:text-white" />}
    </>
  );

  const className = "flex items-center gap-1.5 px-3 py-0.5 rounded-full border backdrop-blur-sm bg-[rgba(30,80,160,0.1)] border-[rgba(30,80,180,0.4)] dark:bg-[rgba(100,180,255,0.08)] dark:border-[rgba(100,180,255,0.25)]";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
