import { Pill } from './Pill';
import { GithubIcon, LinkedinIcon } from '../../ui/icons';

const stats = [
  { label: 'Dev', value: 'Experienced' },
  { label: 'Playwright', value: '4+' },
  { label: 'React Native', value: '6+' },
  { label: 'Web', value: '8+'}
];

const skills = [
  'TYPESCRIPT', 'PYTHON', 'PLAYWRIGHT', 'REACT NATIVE', 'REACT', 'NODE.JS'
];

export function ProfileCard() {
  return (
    <div className="flex flex-col rounded-xl bg-white/35 dark:bg-black/15 border-l border-white/10 overflow-hidden">
      {/* Banner + Avatar */}
      <div className="relative">
        <img
          src="/img/sf-fog.avif"
          alt="San Francisco fog"
          className="w-full object-cover"
          style={{ height: 200 }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute bottom-12 left-4 translate-y-1/2">
          <img
            src="/img/profile.avif"
            alt="Nate Hawley III"
            className="w-28 h-28 rounded-full object-cover object-top border-2 border-white/35 shadow-lg"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center bg-black text-white text-[11px] font-medium tracking-widest px-3 py-2 gap-3">
        {stats.map((s, i) => (
          <span key={s.label} className="flex items-center gap-3">
            {i > 0 && <span className="opacity-40">•</span>}
            <span>{s.value} {s.label}</span>
          </span>
        ))}
      </div>

      <div className="h-2" />

      <div className="p-4 flex flex-col gap-4 text-black dark:text-white">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-s font-semibold tracking-wide">Nate Hawley III</span>
            <span className="text-s font-semibold tracking-wide opacity-90">Senior SDET</span>
            <span className="text-xs font-bold tracking-wide mb-2 opacity-50">Bay Area Based • Globally Available</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md border backdrop-blur-sm bg-green-500/10 border-green-500/40 dark:bg-green-400/10 dark:border-green-400/25">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500 dark:bg-green-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-green-400" />
            </span>
            <span className="font-mono text-xs tracking-wide text-black dark:text-white/80">Available</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-base leading-relaxed opacity-95">
            I'm a Senior Software Engineer who specializes in Playwright, CI/CD, React Native, React, and 
            integrating AI/ML capabilities into user-facing products.
            <br /><br />
            Over the past year I've gone deep on LLMs. I finished the Overclock AI Engineering Fellowship
            and built an open-source TypeScript eval framework for LLM agents. It uses typed test suites,
            assertions on tool calls and turn/latency budgets, LLM-as-judge scoring, and regression diffs
            against a baseline. After years of testing web and mobile apps, testing agents is the next
            problem I want to focus on. Agents need the same release discipline as any other software.
            <br /><br />
            I combine a strong TypeScript foundation with hands-on testing, CI/CD pipeline design,
            and a track record of reducing crash rates and scaling test coverage in fast-paced environments.
            I'm interested in infrastructure, forward deployed, GTM engineering roles, and anywhere the job
            is getting systems into production and keeping them working.
          </p>
        </div>

        {/* Skills */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-50">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs tracking-wide uppercase px-2 py-1 rounded-md border border-foreground/15 bg-foreground/5 opacity-80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 ">
          <Pill text="LinkedIn" href="https://www.linkedin.com/in/nate-hawley-iii/" icon={<LinkedinIcon />} />
          <Pill text="GitHub" href="https://github.com/nhawley" icon={<GithubIcon />} />
        </div>
      </div>
    </div>
  );
}
