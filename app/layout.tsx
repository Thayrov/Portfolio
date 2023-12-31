import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { LangProvider } from "@/context/lang-context";
import LangSwitch from "@/components/lang-switch";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thayrov | Personal Portfolio",
  description: "Thayrov is a full-stack developer with 1 and a half years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-zinc-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fcefd8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#947a62]"></div>
        <div className="bg-[#addbdb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5c4c69]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
          <LangProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
              <LangSwitch /> 
            </LangProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
