'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from 'framer-motion';
import {skillsData} from '@/lib/data';
import {useLang} from '@/context/lang-context';
import {useSectionInView} from '@/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const {ref} = useSectionInView('Skills');
  const {lang} = useLang();

  return (
    <section
      id='skills'
      ref={ref}
      className='max-w-[48rem] scroll-mt-28 text-center mb-20 sm:mb-0 '>
      <SectionHeading>{lang === 'en' ? 'My skills' : 'Mis Habilidades'}</SectionHeading>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className='mb-6'>
          <h3 className='text-lg mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skills.map((skill, index) => (
              <motion.li
                className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                key={index}
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={index}>
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
