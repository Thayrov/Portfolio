'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from 'framer-motion';
import {useLang} from '@/context/lang-context';
import {useSectionInView} from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView('About');
  const {lang} = useLang();

  return (
    <motion.section
      ref={ref}
      className='max-w-[45rem] text-center leading-8 sm:mb-24 scroll-mt-28'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id='about'>
      {lang === 'en' ? (
        <>
          <SectionHeading>About me</SectionHeading>
          <p className='mb-3'>
            Experienced in
            <span className='font-medium'>
              {' '}
              Typescript, Node JS, React, React Native, Redux Toolkit, Next JS, Express, PostgreSQL,
              MongoDB, GraphQL, and Apollo Client
            </span>
            . Striving to deepen understanding of{' '}
            <span className='font-medium'>
              software architecture, cloud solutions, and agile methodologies
            </span>
            .
          </p>
          <p className='mb-3'>
            Previous roles in
            <span className='font-medium'>
              {' '}
              customer service, sales, teaching, management, and designing
            </span>{' '}
            have equipped with valuable skills.
            <span className='italic'> Problem-solving and conflict resolution abilities</span> allow
            navigation of challenges in coding projects. Excel in{' '}
            <span className='underline'>team settings</span> due to strong communication skills.
            Possess a keen sense of <span className='font-medium'>project management</span>.
          </p>
          <p>
            Bring a <span className='font-medium'>mature, well-rounded skill set</span> that
            complements technical abilities, making a holistic contributor to any team. Seeking to{' '}
            <span className='font-medium'>grow, contribute, and excel</span> in full-time remote
            positions.
          </p>
        </>
      ) : (
        <>
          <SectionHeading>Sobre mí</SectionHeading>
          <p className='mb-3'>
            Con experiencia en
            <span className='font-medium'>
              {' '}
              Typescript, Node JS, React, React Native, Redux Toolkit, Next JS, Express, PostgreSQL,
              MongoDB, GraphQL y Apollo Client
            </span>
            . Con miras a profundizar comprensión en{' '}
            <span className='font-medium'>
              arquitectura de software, soluciones en la nube y metodologías ágiles
            </span>
            .
          </p>
          <p className='mb-3'>
            Roles anteriores en
            <span className='font-medium'>
              {' '}
              atención al cliente, ventas, enseñanza, gestión y diseño
            </span>{' '}
            han proporcionado habilidades valiosas.
            <span className='italic'>
              {' '}
              Habilidad para resolver problemas y gestionar conflictos
            </span>{' '}
            que permite destacar en <span className='underline'>
              entornos de trabajo en equipo
            </span>{' '}
            gracias a fuertes habilidades de comunicación y buena visión para la
            <span className='font-medium'> gestión de proyectos</span>.
          </p>
          <p>
            Se aporta un{' '}
            <span className='font-medium'>conjunto de habilidades maduro y completo</span> que
            complementa habilidades técnicas, convirtiéndose en un contribuyente integral para
            cualquier equipo. Buscando{' '}
            <span className='font-medium'>crecer, contribuir y sobresalir</span> en posiciones
            remotas a tiempo completo.
          </p>
        </>
      )}
    </motion.section>
  );
}
