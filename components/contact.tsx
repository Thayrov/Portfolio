'use client';

import React from 'react';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import {motion} from 'framer-motion';
import {sendEmail} from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import {useLang} from '@/context/lang-context';
import {useSectionInView} from '@/lib/hooks';

export default function Contact() {
  const {ref} = useSectionInView('Contact');
  const {lang} = useLang();

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,48rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>{lang === 'en' ? 'Contact me' : 'Contáctame'}</SectionHeading>
      {lang === 'en' ? (
        <p className='text-gray-700 -mt-6 dark:text-white/80'>
          Please contact me directly at{'  '}
          <a
            className='underline'
            href='mailto:contact@thayrov.com'
            aria-label={
              (lang as 'en' | 'es') === 'en'
                ? 'Send email to contact@thayrov.com'
                : 'Enviar correo a contact@thayrov.com'
            }>
            contact@thayrov.com
          </a>{' '}
          or through this form:
        </p>
      ) : (
        <p className='text-gray-700 -mt-6 dark:text-white/80'>
          Escríbeme a{' '}
          <a
            className='underline'
            href='mailto:contact@thayrov.com'
            aria-label={
              (lang as 'en' | 'es') === 'en'
                ? 'Send email to contact@thayrov.com'
                : 'Enviar correo a contact@thayrov.com'
            }>
            contact@thayrov.com
          </a>{' '}
          o por el siguiente formulario:
        </p>
      )}

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async formData => {
          const {data, error} = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(lang === 'en' ? 'Email sent successfully!' : 'Email enviado exitosamente!');
        }}>
        {/* Honeypot field - hidden from real users but bots will fill it */}
        <input
          type='text'
          name='website'
          className='absolute left-[-9999px]'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
        />
        
        <label htmlFor='senderEmail' className='sr-only'>
          {lang === 'en' ? 'Your email' : 'Tu email'}
        </label>
        <input
          id='senderEmail'
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-hidden'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder={lang === 'en' ? 'Your email' : 'Tu email'}
        />

        <label htmlFor='message' className='sr-only'>
          {lang === 'en' ? 'Your message' : 'Tu mensaje'}
        </label>
        <textarea
          id='message'
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-hidden'
          name='message'
          placeholder={lang === 'en' ? 'Your message' : 'Tu mensaje'}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
