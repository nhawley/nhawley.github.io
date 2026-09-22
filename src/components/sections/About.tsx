import { useInView } from '@/hooks/useInView';
import { ProfileCard } from './About/ProfileCard';

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="about" className="relative py-24 md:py-32 px-4 md:px-8">
      <div ref={ref} className="max-w-[760px] mx-auto">
        <h2 className={`reveal text-4xl font-bold mb-6 ${inView ? 'in-view' : ''}`}>About</h2>

        <div className={`reveal mb-10 ${inView ? 'in-view' : ''}`} style={{ animationDelay: '0.1s' }}>
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
