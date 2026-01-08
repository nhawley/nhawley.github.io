import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, url: 'https://github.com/nhawley', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/nate-hawley-iii/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:nhawley5@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black text-cream py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-primary-400 transition-colors"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <div className="text-center text-sm">
            <p className="mb-2">
              Built with React, Vite, and shadcn
            </p>
            <p>© {currentYear} Nate Hawley III</p>
          </div>
        </div>
      </div>
    </footer>
  );
}