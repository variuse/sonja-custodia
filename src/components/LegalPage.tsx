import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageContent = {
  title: string;
  sections: LegalSection[];
};

interface LegalPageProps {
  type: 'impressum' | 'datenschutz';
}

export function LegalPage({ type }: LegalPageProps) {
  const { t } = useLanguage();

  // Always start at top when entering a legal page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const page = t(`legal.${type}`) as unknown as LegalPageContent;
  const backLabel = t('legal.back') as string;
  const lastUpdated = t('legal.lastUpdated') as string;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      {/* Top bar */}
      <header className="border-b border-black/5 bg-[#FAF8F5]">
        <div className="container-custom flex items-center justify-between py-5">
          <a
            href="#"
            className="font-serif text-xl text-[#1A1A1A] hover:text-[#C4A77D] transition-colors"
          >
            Sonja Speicher · Custòdia
          </a>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href="#"
              className="text-sm text-[#6B6B6B] hover:text-[#C4A77D] transition-colors"
            >
              ← {backLabel}
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="container-custom py-16 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl mb-2">{page.title}</h1>
        <p className="text-sm text-[#6B6B6B] mb-12">{lastUpdated}</p>

        <div className="space-y-10">
          {page.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="font-serif text-2xl mb-3 text-[#1A1A1A]">
                {section.heading}
              </h2>
              {section.body.split('\n\n').map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-[#3A3A3A] leading-relaxed mb-3 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-black/10">
          <a
            href="#"
            className="text-sm text-[#C4A77D] hover:underline"
          >
            ← {backLabel}
          </a>
        </div>
      </main>
    </div>
  );
}
