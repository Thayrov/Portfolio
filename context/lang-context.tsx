"use client";

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

type LangContextType = {
  lang: Language;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

type LangProviderProps = {
  children: React.ReactNode;
};

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const toggleLang = () => {
    if (lang === 'es') {
      setLang('en');
    } else {
      setLang('es');
    }
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (context === null) {
    throw new Error('useLang must be used within a LangProvider');
  }

  return context;
};
