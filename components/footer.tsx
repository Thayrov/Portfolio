'use client';

import React from 'react';
import {useLang} from '@/context/lang-context';

export default function Footer() {
  const {lang} = useLang();
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      {lang === 'en' ? (
        <>
          <small className='mb-2 block text-xs'>
            &copy; 2023 Thayrov. Released under the MIT License..
          </small>
          <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js
            (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email &
            Resend, Vercel hosting.
          </p>
        </>
      ) : (
        <>
          <small className='mb-2 block text-xs'>
            &copy; 2023 Thayrov. Liberado bajo la Licencia MIT.
          </small>
          <p className='text-xs'>
            <span className='font-semibold'>Acerca de este sitio web:</span> construido con React y
            Next.js (App Router y Server Actions), TypeScript, Tailwind CSS, Framer Motion, React
            Email y Resend, hosting en Vercel.
          </p>
        </>
      )}
    </footer>
  );
}
