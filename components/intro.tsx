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
              alt='Thayrov portrait'
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
            }}>
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}>
        {lang === 'en' ? (
          <div>
            <p>
              <span className='font-bold'>Hello, I'm Thayrov.</span>
              <br />
              I'm a <span className='font-bold'>full-stack developer</span> with over <br />
              <span className='font-bold'>two years</span> of experience.
              <br />I enjoy building <span className='italic'>websites and applications</span>.{' '}
              <br />
              specializing in the <span className='underline'>JavaScript/TypeScript</span>{' '}
              ecosystem.
            </p>
          </div>
        ) : (
          <div>
            <p>
              <span className='font-bold'>Hola, soy Thayrov.</span> <br />
              Soy un <span className='font-bold'>desarrollador full-stack</span> con{' '}
              <span className='font-bold'>
                más de <br />
                dos años{' '}
              </span>{' '}
              de experiencia. <br />
              Disfruto construyendo <span className='italic'>sitios web y aplicaciones</span>.{' '}
              <br />
              Especializándome en el ecosistema de{' '}
              <span className='underline'>JavaScript/TypeScript</span>.
            </p>
          </div>
        )}
      </motion.h1>

      <motion.div
        className='mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href='#contact'
          className='group bg-gray-900 dark:bg-[#3a414b] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}>
          {lang === 'en' ? 'Contact me here' : 'Contáctame aquí'}{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href={
            lang === 'en'
              ? '/ThayrovGarcia_WebDeveloper_CV_EN.pdf'
              : '/ThayrovGarcia_WebDeveloper_CV_ES.pdf'
          }
          download>
          {lang === 'en' ? 'Download' : 'Descargar'} CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <div className='flex gap-2'>
          <a
            className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://www.linkedin.com/in/thayrovg/'
            target='_blank'>
            <BsLinkedin />
          </a>

          <a
            className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href='https://github.com/Thayrov'
            target='_blank'>
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
