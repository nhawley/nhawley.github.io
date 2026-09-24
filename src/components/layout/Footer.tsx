const socialLinks = [
  { url: 'https://www.linkedin.com/in/nate-hawley-iii/', label: 'LinkedIn' },
  { url: 'https://github.com/nhawley', label: 'GitHub' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5">
      <div className="max-w-[760px] mx-auto p-[18px]">
        <div className="flex items-center justify-between text-sm">
          <p>Copyright © {currentYear} Nate Hawley</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ url, label }, index) => (
              <span key={label} className="flex items-center gap-3">
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-link transition-colors">
                  {label}
                </a>
                {index < socialLinks.length - 1 && <span aria-hidden="true">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
