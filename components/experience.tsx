'use client';

import 'react-vertical-timeline-component/style.min.css';

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import React from 'react';
import SectionHeading from './section-heading';
import {experiencesData} from '@/lib/data';
import {useLang} from '@/context/lang-context';
import {useSectionInView} from '@/lib/hooks';
import {useTheme} from '@/context/theme-context';

export default function Experience() {
  const {ref} = useSectionInView('Experience');
  const {theme} = useTheme();
  const {lang} = useLang();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-30 max-w-[53rem] mt-20'>
      <SectionHeading>{lang === 'en' ? 'My experience' : 'Mi Experiencia'}</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}>
              <article>
                <h3 className='font-semibold capitalize'>
                  {lang === 'en' ? item.title : item.title_es}
                </h3>
                <p className='font-normal !mt-0'>
                  {lang === 'en' ? item.location : item.location_es}
                </p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                  {lang === 'en' ? item.description : item.description_es}
                </p>
              </article>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
