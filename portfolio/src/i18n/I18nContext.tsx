import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { en } from './translations/en';
import { es } from './translations/es';
import { de } from './translations/de';
import type { Language } from '../types';
import type { Translations } from './translations/en';

const translationsMap: Record<Language, Translations> = { en, es, de };

interface I18nContextValue {
  t: Translations;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const t = translationsMap[language];

  return (
    <I18nContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
