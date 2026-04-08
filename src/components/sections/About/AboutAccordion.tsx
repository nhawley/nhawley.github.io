import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Testing & Quality",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    description:
      "Playwright, Detox, Cypress, Jest, BrowserStack, real-world simulation",
  },
  {
    id: 2,
    title: "Languages & Frameworks",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    description:
      "TypeScript, JavaScript, Node.js, React, React Native, Express, PHP, Python, Rust",
  },
  {
    id: 3,
    title: "API & Integration Testing",
    image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
    description:
      "REST API testing, contract testing patterns, service testability",
  },
  {
    id: 4,
    title: "CI/CD & DevOps",
    image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
    description:
      "GitHub Actions, CodeMagic, Fastlane, release-gating pipelines, hermetic test environments",
  },
  {
    id: 5,
    title: "AI & Automation",
    image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
    description:
      "Overclock AI Fellowship - Prompt engineering and AI assisted test generation"
  }
];

export default function AboutAccordion({ features = defaultFeatures }: Feature197Props) {
  const [activeId, setActiveId] = useState(features[0].id);

  return (
    <section className="rounded-xl bg-white/35 dark:bg-black/15 border-l border-white/10 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex w-full items-start gap-12 mb-12">
          <div className="flex flex-col w-full md:w-1/2">
            {features.map((feature) => {
              const isOpen = feature.id === activeId;
              return (
                <div key={feature.id} className="border-b border-border last:border-b-0">
                  <button
                    onClick={() => setActiveId(feature.id)}
                    className="flex w-full items-center justify-between py-5 text-left transition"
                  >
                    <h6 className={`text-xl px-4 font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.title}
                    </h6>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-150 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <p className={`px-4 mt-3 pb-5 ${isOpen ? 'text-foreground' : 'text-muted-foreground'}`}>{feature.description}</p>
                    <div className="pb-4 md:hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-10 relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-white/2 dark:bg-black/2 md:flex">
            {features.map((feature) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`aspect-square rounded-md object-cover ${feature.id === activeId ? 'block' : 'hidden'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
