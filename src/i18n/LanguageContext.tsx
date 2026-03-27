import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Language } from './translations';

export type { Language };

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations } from './translations';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('de');

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback(
    (key: string): string | string[] => {
      const keys = key.split('.');
      let value: unknown = translations[currentLanguage];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      
      return value as string | string[];
    },
    [currentLanguage]
  );

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
