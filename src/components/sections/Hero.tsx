import { HeroBackground } from './Hero/HeroBackground';
import { RoleScramble } from './Hero/RoleScramble';
import { ResumeButton } from './Hero/ResumeButton';
import { ProjectsWindow } from './Hero/ProjectsWindow';
import { ArrowDownIcon, LinkedinIcon } from '../ui/icons';

const socialLinks = [
  { url: 'https://www.linkedin.com/in/nate-hawley-iii/', label: 'LinkedIn', Icon: LinkedinIcon },
];

const roles = [
  'Full-Stack Developer',
  'Software Developer in Test (SDET)',
  'Mobile Engineer',
  'Automated QA Engineer',
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 py-24"
    >
      <HeroBackground />

      <div className="max-w-5xl mx-auto text-center">
        <h1
          className="load-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{ '--delay': '0.1s' } as React.CSSProperties}
        >
          NATE HAWLEY
        </h1>

        <RoleScramble
          roles={roles}
          interval={5000}
          className="load-in scramble text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
          style={{ '--delay': '0.2s' } as React.CSSProperties}
        />

        <p
          className="load-in-fade text-lg md:text-xl mb-4 max-w-2xl mx-auto text-center"
          style={{ '--delay': '0.3s' } as React.CSSProperties}
        >
          Deploying Solutions & Automating Quality
        </p>

        <div
          className="load-in-fade flex items-center justify-center gap-3"
          style={{ '--delay': '0.4s' } as React.CSSProperties}
        >
          <ResumeButton />
          {socialLinks.map(({ url, label, Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 hover:bg-foreground/10 transition-colors cursor-pointer"
            >
              <Icon size={21} />
            </a>
          ))}
        </div>

        <ProjectsWindow />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-[bounce-y_1.5s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <ArrowDownIcon size={32} />
      </div>
    </section>
  );
}
