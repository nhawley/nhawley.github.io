import { Pill } from './Pill';

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const stats = [
  { label: 'YRS', value: '8+' },
  { label: 'PRs MERGED', value: '5.1K' },
  { label: 'USERS SERVED', value: '250K' },
];

const skills = [
  'TYPESCRIPT', 'REACT', 'REACT NATIVE', 'PYTHON', 'AI/ML', 'NODE.JS', 'NEXT.JS', 'PLAYWRIGHT', 'K6'
];

export function ProfileCard() {
  return (
    <div className="flex flex-col rounded-xl bg-white/35 dark:bg-black/15 border-l border-white/10 overflow-hidden">
      {/* Banner + avatar */}
      <div className="relative">
        <img
          src="/sf-fog.avif"
          alt="San Francisco fog"
          className="w-full object-cover"
          style={{ height: 200 }}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute bottom-12 left-4 translate-y-1/2">
          <img
            src="/profile.avif"
            alt="Nate Hawley III"
            className="w-24 h-24 rounded-full object-cover object-top border-2 border-white/35 shadow-lg"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center bg-black text-white text-[11px] font-medium tracking-widest px-3 py-2 gap-3">
        {stats.map((s, i) => (
          <span key={s.label} className="flex items-center gap-3">
            {i > 0 && <span className="opacity-40">•</span>}
            <span>{s.value} {s.label}</span>
          </span>
        ))}
      </div>

      {/* Spacer for avatar overlap */}
      <div className="h-2" />

      <div className="p-4 flex flex-col gap-4 text-black dark:text-white">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <span className="text-xs font-semibold tracking-widest uppercase">Nate Hawley III</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-right opacity-80">Software Developer in Test</span>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm leading-relaxed opacity-95">
            I'm a full-stack engineer with a decade of experience building high-performance
            web and mobile apps. I specialize in React, TypeScript, and React Native,
            with a recent focus on integrating AI/ML capabilities into user-facing products.
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

        {/* Social links */}
        <div className="flex gap-2">
          <Pill text="LinkedIn" href="https://www.linkedin.com/in/nhawley" icon={<LinkedinIcon />} />
          <Pill text="GitHub" href="https://github.com/nhawley" icon={<GithubIcon />} />
        </div>
      </div>
    </div>
  );
}
