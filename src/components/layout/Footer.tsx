import { Fragment } from 'react';

const socialLinks = [
  { url: 'https://www.linkedin.com/in/nate-hawley-iii/', label: 'LinkedIn' },
  { url: 'https://github.com/nhawley', label: 'GitHub' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/10 text-cream py-5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between text-sm">
          <p>© {currentYear} Nate Hawley III</p>
          <div className="flex items-center">
            {socialLinks.map((link, index) => (
              <Fragment key={link.label}>
                {index > 0 && <span className="mx-3 select-none">|</span>}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="cursor-pointer hover:color-link transition-colors"
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}