import { Pill } from './Pill';
import { GithubIcon, LinkedinIcon } from '../../ui/icons';

const stats = [
  { label: 'YRS', value: '8+' },
  { label: 'PRs MERGED', value: '5.1K' },
  { label: 'USERS SERVED', value: '300K' },
];

const skills = [
  'TYPESCRIPT', 'REACT NATIVE', 'REACT', 'PYTHON', 'AI/ML', 'NODE.JS', 'NEXT.JS', 'PLAYWRIGHT', 'K6'
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
            className="w-24 h-24 rounded-full object-cover object-top border-2 border-white/35 shadow-lg"
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
            <span className="text-xs font-semibold tracking-widest uppercase">Nate Hawley III</span>
            <span className="text-xs font-semibold tracking-widest uppercase opacity-80">Software Developer in Test</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full border backdrop-blur-sm bg-green-500/10 border-green-500/40 dark:bg-green-400/10 dark:border-green-400/25">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500 dark:bg-green-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-green-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-black dark:text-white/80">Available</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm leading-relaxed opacity-95">
            I'm a full-stack engineer with 8+ years of experience building high-performance
            web and mobile apps. I specialize in TypeScript, React Native, and Playwright,
            with a recent focus on integrating AI/ML capabilities into user-facing products.
            <br /><br />
            I'm currently deepening my AI engineering skills through the Overclock Fellowship
            focused on LLM integration and customization. I combine a strong React/TypeScript
            frontend foundation with hands-on testing, CI/CD pipeline design, and a track record
            of reducing crash rates and scaling test coverage in fast-paced startup environments
          </p>
        </div>

        {/* Skills */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-50">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 border border-black/20 dark:border-white/20 rounded-sm opacity-70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2">
          <Pill text="LinkedIn" href="https://www.linkedin.com/in/nhawley" icon={<LinkedinIcon />} />
          <Pill text="GitHub" href="https://github.com/nhawley" icon={<GithubIcon />} />
        </div>
      </div>
    </div>
  );
}
