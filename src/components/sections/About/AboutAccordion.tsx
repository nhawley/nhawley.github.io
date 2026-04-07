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
    title: "Ready-to-Use UI Blocks",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    description:
      "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
  },
  {
    id: 2,
    title: "Tailwind CSS & TypeScript",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    description:
      "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
  },
  {
    id: 3,
    title: "Dark Mode & Customization",
    image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
    description:
      "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
  },
  {
    id: 4,
    title: "Accessibility First",
    image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
    description:
      "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
  },
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
                    <h6 className={`text-xl font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.title}
                    </h6>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="mt-3 pb-5 text-muted-foreground">{feature.description}</p>
                    <div className="pb-5 md:hidden">
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
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:flex">
            {features.map((feature) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`aspect-4/3 rounded-md object-cover pl-4 ${feature.id === activeId ? 'block' : 'hidden'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
