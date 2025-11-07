import './globals.css';

import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import Header from '@/components/header';
import {Inter} from 'next/font/google';
import {LangProvider} from '@/context/lang-context';
import LangSwitch from '@/components/lang-switch';
import ThemeContextProvider from '@/context/theme-context';
import ThemeSwitch from '@/components/theme-switch';
import {Toaster} from 'react-hot-toast';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Thayrov | Personal Portfolio',
  description: 'Thayrov is a full-stack developer with 1 and a half years of experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' className='scroll-smooth!'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-zinc-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#f1e3b1] absolute -top-24 -z-10 right-44 h-125 w-125 rounded-full blur-[10rem] sm:w-275 dark:bg-[#4e608a]'></div>
        <div className='bg-[#6bb5e1] absolute -top-4 -z-10 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20 dark:bg-[#264796]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LangProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position='top-right' />
              <ThemeSwitch />
              <LangSwitch />
            </LangProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
