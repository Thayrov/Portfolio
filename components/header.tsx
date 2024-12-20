'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import {links} from '@/lib/data';
import {motion} from 'framer-motion';
import {useActiveSectionContext} from '@/context/active-section-context';
import {useLang} from '@/context/lang-context';

export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  const {lang} = useLang();

  return (
    <header className='z-[999] relative'>
      <motion.div
        className={clsx(
          'fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-[#14161a] dark:border-black/40 dark:bg-opacity-75',
          {
            'sm:w-[41rem]': lang === 'es',
          },
        )}
        initial={{y: -100, x: '-50%', opacity: 0}}
        animate={{y: 0, x: '-50%', opacity: 1}}></motion.div>

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map(link => (
            <motion.li
              className='h-3/4 flex items-center justify-center relative'
              key={link.hash}
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}>
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 dark:text-slate-100 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-gray-100': activeSection === link.section,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.section);
                  setTimeOfLastClick(Date.now());
                }}>
                {lang === 'en' ? link.name : link.name_es}

                {link.section === activeSection && (
                  <motion.span
                    className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
