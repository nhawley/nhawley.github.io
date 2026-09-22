import { projects } from '../Projects/projects';

const featuredProjects = projects.filter((project) => project.featured);

export function ProjectsWindow() {
  return (
    <div
      id="projects"
      className="load-in-fade w-full max-w-xl lg:max-w-[760px] mx-auto mt-10 scroll-mt-24 rounded-xl overflow-hidden border border-white/10 bg-[#14121f] text-left shadow-2xl"
      style={{ '--delay': '0.5s' } as React.CSSProperties}
    >
      {/* Title bar */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-center text-xs font-mono text-white/40">projects — zsh</span>
        <div className="flex items-center gap-2 opacity-0" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-sm text-left">
        <p className="text-link font-bold mb-5">~/ projects</p>

        <div className="flex flex-col gap-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="pb-4 border-b border-dashed border-white/10 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-amber-400 lowercase">{project.title}</span>
                <span className="text-[10px] uppercase tracking-wide text-emerald-400 border border-emerald-400/40 rounded px-1.5 py-0.5">
                  Active
                </span>
              </div>
              <p className="text-white/60 text-xs md:text-sm mt-1.5 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/nhawley"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-white/40 hover:text-link transition-colors text-xs"
        >
          $ open github.com/nhawley
        </a>
      </div>
    </div>
  );
}
