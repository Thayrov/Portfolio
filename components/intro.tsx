'use client';

import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {HiDownload} from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';
import {useActiveSectionContext} from '@/context/active-section-context';
import {useLang} from '@/context/lang-context';
import {useSectionInView} from '@/lib/hooks';

export default function Intro() {
  const {ref} = useSectionInView('Home', 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  const {lang} = useLang();

  return (
    <section ref={ref} id='home' className='max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}>
            <Image
              src='https://res.cloudinary.com/dhjlbf6xs/image/upload/v1684949820/Personal/Profile_pic_2022_f4kywf.jpg'
              alt='Portrait of Thayrov Garcia'
              width='300'
              height='300'
              quality='95'
              priority={true}
              className='h-30 w-30 rounded-full object-cover border-[0.15rem] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-7xl'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            role='img'
            aria-label='Waving hand'>
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}>
        {lang === 'en' ? (
          <article>
            <p>
              Hello, I'm <span className='font-bold'>Thayrov</span>!
              <br />
              <span className='font-bold'>Web and mobile developer</span>
              <br />
              with <span className='font-bold'>two and a half years </span>of experience
              <br /> in the <span className='font-bold'>JavaScript/TypeScript</span> ecosystem.
            </p>
          </article>
        ) : (
          <article>
            <p>
              ¡Hola, soy<span className='font-bold'> Thayrov</span>! <br />
              <span className='font-bold'>Desarrollador web y mobile</span>
              <br />
              con <span className='font-bold'>dos años y medio </span>de experiencia
              <br />
              en el ecosistema de <span className='font-bold'>JavaScript/TypeScript</span>.
            </p>
          </article>
        )}
      </motion.h1>

      <motion.div
        className='mb-20 sm:mb-0 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href='#contact'
          className='group bg-gray-900 dark:bg-[#3a414b] text-white px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}>
          {lang === 'en' ? 'Contact me here' : 'Contáctame aquí'}{' '}
          <BsArrowRight
            className='opacity-70 group-hover:translate-x-2 transition'
            aria-hidden='true'
          />
        </Link>

        <a
          className='group bg-white px-8 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href={
            lang === 'en'
              ? '/ThayrovGarcia_WebDeveloper_CV_EN.pdf'
              : '/ThayrovGarcia_WebDeveloper_CV_ES.pdf'
          }
          download>
          {lang === 'en' ? 'Download' : 'Descargar'} CV{' '}
          <HiDownload
            className='opacity-60 group-hover:translate-y-[1px] transition'
            aria-hidden='true'
          />
        </a>
        <div className='flex gap-x-4'>
          <a
            className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://www.linkedin.com/in/thayrovg/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn profile'>
            <BsLinkedin aria-hidden='true' />
          </a>

          <a
            className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://github.com/Thayrov'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub profile'>
            <FaGithubSquare aria-hidden='true' />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
