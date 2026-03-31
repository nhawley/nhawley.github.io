import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheckIcon } from 'lucide-react';
// import { Progress } from '@/components/ui/progress';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';

import { skills } from '../../data/skills';

export function Experience() {
  const coreSkills = skills.filter((s) => s.category === 'core');
  const exploringSkills = skills.filter((s) => s.category === 'exploring');
  const toolSkills = skills.filter((s) => s.category === 'tools');

  const SkillBadge = ({ name, level }: { name: string; level?: string, progress?: number}) => (
    <Item variant="outline" className="bg-white rounded-lg border border-black hover:border-green transition-colors">
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{level}</ItemDescription>
        {/* <Progress className="[&>div]:bg-green bg-cream" value={progress} /> */}
      </ItemContent>
      {level == "expert" &&
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
      }
    </Item>
  );

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 section-title text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Technologies
        </motion.h2>
        <Item variant="outline" size="sm" asChild>
          <a href="#skills">
            <ItemMedia>
              <BadgeCheckIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Can help mentor junior developers.</ItemTitle>
            </ItemContent>
          </a>
        </Item>

        <div className="flex flex-wrap space-y-12">
          {/* Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex w-full md:w-1/3 flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 px-3">Core</h3>
            <div className="flex w-full flex-col gap-3 px-3">
              {coreSkills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} level={skill.level} progress={skill.progress} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex w-full md:w-1/3 sm:w-full flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 px-3">Experienced</h3>
            <div className="flex w-full flex-col gap-3 px-3">
              {toolSkills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} progress={skill.progress} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex w-full md:w-1/3 sm:w-full flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 px-3">Exploring</h3>
            <div className="flex w-full flex-col gap-3 px-3">
              {exploringSkills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} level={skill.level} progress={skill.progress} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex justify-end mt-8">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-gray-400" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}