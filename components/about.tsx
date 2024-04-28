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
            I have experience in
            <span className='font-medium'>
              {' '}
              Typescript, Node JS, React, React Native, Redux Toolkit, Next JS, Express, PostgreSQL,
              MongoDB, GraphQL and Apollo Client
            </span>
            . My goal is to deepen my understanding of{' '}
            <span className='font-medium'>
              software architecture, cloud solutions, and agile methodologies
            </span>
            .
          </p>
          <p className='mb-3'>
            My previous roles in
            <span className='font-medium'>
              {' '}
              customer service, sales, teaching, management, and designing
            </span>{' '}
            have equipped me with valuable skills.
            <span className='italic'>
              {' '}
              My problem-solving and conflict resolution abilities
            </span>{' '}
            allow me to navigate challenges in coding projects. I excel in{' '}
            <span className='underline'>team settings</span> due to my strong communication skills.
            I also have a keen sense of <span className='font-medium'>project management</span>.
          </p>
          <p>
            I bring a <span className='font-medium'>mature, well-rounded skill set</span> that
            complements my technical abilities, making me a holistic contributor to any team. I'm
            not just looking for a job; I'm looking to{' '}
            <span className='font-medium'>grow, contribute, and excel</span> in a full-time remote
            position.
          </p>
        </>
      ) : (
        <>
          <SectionHeading>Sobre mí</SectionHeading>
          <p className='mb-3'>
            Tengo experiencia en
            <span className='font-medium'>
              {' '}
              Typescript, Node JS, React, React Native, Redux Toolkit, Next JS, Express, PostgreSQL,
              MongoDB, GraphQL y Apollo Client
            </span>
            . Mi objetivo es profundizar mi comprensión en{' '}
            <span className='font-medium'>
              arquitectura de software, soluciones en la nube y metodologías ágiles
            </span>
            .
          </p>
          <p className='mb-3'>
            Mis roles anteriores en
            <span className='font-medium'>
              {' '}
              atención al cliente, ventas, enseñanza, gestión y diseño
            </span>{' '}
            me han equipado con habilidades valiosas.
            <span className='italic'>
              {' '}
              Mi habilidad para resolver problemas y gestionar conflictos
            </span>{' '}
            me permite destacar en <span className='underline'>
              entornos de trabajo en equipo
            </span>{' '}
            gracias a mis fuertes habilidades de comunicación, y buena visión para la
            <span className='font-medium'> gestión de proyectos</span>.
          </p>
          <p>
            Aporto un <span className='font-medium'>conjunto de habilidades maduro y completo</span>{' '}
            que complementa mis habilidades técnicas, convirtiéndome en un contribuyente integral
            para cualquier equipo. No estoy buscando simplemente un trabajo; busco{' '}
            <span className='font-medium'>crecer, contribuir y sobresalir</span> en una posición
            remota a tiempo completo.
          </p>
        </>
      )}
    </motion.section>
  );
}
