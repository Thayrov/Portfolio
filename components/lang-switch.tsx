"use client";

import { TbLanguage, TbLanguageOff } from "react-icons/tb";

import React from 'react';
import { useLang } from "@/context/lang-context";

export default function LangSwitch() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLang}
    >
      {lang === "en" ? <TbLanguage /> : <TbLanguageOff />}
    </button>
  );
}
