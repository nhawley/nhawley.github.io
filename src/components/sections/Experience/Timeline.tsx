import { useInView } from '@/hooks/useInView';

interface TimelineItem {
  initials: string;
  color: string;
  company: string;
  years: string;
  bullets: string[];
}

const timelineItems: TimelineItem[] = [
  {
    initials: 'MC',
    color: 'from-sky-500 to-cyan-600',
    company: 'MediaCutlet',
    years: '2019 — 2021',
    bullets: [
      'Scoped requirements directly with clients and delivered tailored WordPress solutions on tight timelines. Translated non-technical feedback into responsive, production-ready designs with cross-browser compatibility.',
    ],
  },
  {
    initials: 'LW',
    color: 'from-cobalt to-rose-500',
    company: 'Local Wisdom',
    years: '2019 — 2021',
    bullets: [
      'Delivered custom web applications for multiple clients using PHP and JavaScript. Managed end-to-end project delivery from client discovery through deployment, building adaptable solutions across diverse business domains.',
    ],
  },
  {
    initials: 'VS',
    color: 'from-blue-500 to-slate-600',
    company: 'Volo Sports',
    years: '2021',
    bullets: [
      'Automated web testing with Cypress to improve deployment confidence and reduce manual QA overhead, establishing foundational test patterns for the engineering team.',
    ],
  },
  {
    initials: 'MW',
    color: 'from-slate-700 to-slate-400',
    company: 'Masterworks',
    years: '2021 — 2025',
    bullets: [
      "Served as the company's first dedicated SDET; designed and built the entire automated testing infrastructure from scratch across web and mobile for an alternative investment platform serving thousands of users in a regulated fintech environment.",
      'Architected Playwright E2E test suites from zero, growing web test coverage from 0% to 80%; established Detox mobile regression testing across the React Native codebase, creating reusable test harnesses and utilities for the broader engineering team.',
    ],
  },
];

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`reveal relative flex gap-6 pb-10 last:pb-0 ${inView ? 'in-view' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Rail + avatar */}
      <div className="relative flex flex-col items-center shrink-0">
        <div
          className={`w-11 h-11 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}
        >
          <span className="text-xs font-bold text-white tracking-wide">{item.initials}</span>
        </div>
        {index < timelineItems.length - 1 && <div className="timeline-rail w-px flex-1 mt-2" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <h3 className="text-lg font-semibold">{item.company}</h3>
          <span className="text-sm text-muted-foreground">{item.years}</span>
        </div>
        <ul className="flex flex-col gap-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-base leading-relaxed opacity-90">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0 opacity-50" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="max-w-2xl mx-auto">
      {timelineItems.map((item, index) => (
        <TimelineRow key={item.company} item={item} index={index} />
      ))}
    </div>
  );
}
