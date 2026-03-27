import { useLanguage, type Language } from '../i18n/LanguageContext';
import React from 'react';

interface LanguageSwitcherProps {
  isNavVisible?: boolean;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

export function LanguageSwitcher({ isNavVisible = true }: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            onClick={() => setLanguage(lang.code)}
            className={`
              group relative flex items-center gap-1.5 px-2 py-1 rounded-md
              transition-all duration-300 ease-out
              hover:bg-black/5
              ${currentLanguage === lang.code ? 'bg-black/10' : ''}
            `}
            aria-label={`Switch to ${lang.label}`}
          >
            {/* Flag icon */}
            <span 
              className={`
                text-base leading-none transition-transform duration-300
                group-hover:scale-110
                ${currentLanguage === lang.code ? 'opacity-100' : 'opacity-70'}
              `}
            >
              {lang.flag}
            </span>
            
            {/* Language code */}
            <span 
              className={`
                text-xs font-medium tracking-wide transition-all duration-300
                ${isNavVisible 
                  ? (currentLanguage === lang.code ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] group-hover:text-[#1A1A1A]')
                  : (currentLanguage === lang.code ? 'text-white' : 'text-white/70 group-hover:text-white')
                }
              `}
            >
              {lang.label}
            </span>
            
            {/* Active indicator dot */}
            {currentLanguage === lang.code && (
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C4A77D] rounded-full" />
            )}
          </button>
          
          {/* Separator */}
          {index < languages.length - 1 && (
            <span className={`text-xs mx-0.5 ${isNavVisible ? 'text-[#E5E5E5]' : 'text-white/30'}`}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
