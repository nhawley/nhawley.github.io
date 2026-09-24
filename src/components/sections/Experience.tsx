import { useInView } from '@/hooks/useInView';
import { Timeline } from './Experience/Timeline';

export function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="experience" className="relative pt-12 md:pt-16 pb-24 md:pb-32 px-4 md:px-8">
      <div ref={ref} className={`max-w-[760px] mx-auto reveal-fade ${inView ? 'in-view' : ''}`}>
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <Timeline />
      </div>
    </section>
  );
}
