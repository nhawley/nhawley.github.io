// A rotating conic-gradient glow, revealed on hover — CSS only, no JS cursor
// tracking and no per-frame work, unlike the previous framer-motion version.
export function ResumeButton() {
  return (
    <div className="group relative inline-flex rounded-full p-0.5">
      <div className="absolute inset-0 rounded-full overflow-hidden blur-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:motion-safe:animate-[spin-slow_4s_linear_infinite]"
          style={{
            background:
              'conic-gradient(transparent, #5b1521 5%, transparent 38%, transparent 50%, #b94f61 60%, transparent 87%)',
          }}
        />
      </div>

      <div className="absolute inset-0 rounded-full overflow-hidden blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:motion-safe:animate-[spin-slow_4s_linear_infinite]"
          style={{
            background: 'conic-gradient(transparent, #5b1521, transparent 10%, transparent 50%, #b94f61, transparent 60%)',
            animationDelay: '0.1s',
          }}
        />
      </div>

      <div className="absolute inset-0 rounded-full overflow-hidden blur-[0.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:motion-safe:animate-[spin-slow_4s_linear_infinite]"
          style={{
            background:
              'conic-gradient(transparent, #5b1521 5%, transparent 14%, transparent 50%, #b94f61 60%, transparent 64%)',
            filter: 'brightness(1.4)',
            animationDelay: '0.2s',
          }}
        />
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold bg-black/80 dark:bg-white/80 text-white dark:text-black backdrop-blur-sm cursor-pointer transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(185,79,97,0.6)]"
      >
        View Resume
      </a>
    </div>
  );
}
