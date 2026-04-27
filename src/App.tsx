import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Key, 
  Crown, 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronDown,
  Menu,
  X,
  Check,
} from 'lucide-react';
import './App.css';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { LegalPage } from './components/LegalPage';

gsap.registerPlugin(ScrollTrigger);

function getLegalRoute(): 'impressum' | 'datenschutz' | null {
  const hash = window.location.hash.replace(/^#/, '').toLowerCase();
  if (hash === 'impressum' || hash === 'datenschutz') return hash;
  return null;
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [navProgress, setNavProgress] = useState(0);
  const [legalRoute, setLegalRoute] = useState<'impressum' | 'datenschutz' | null>(getLegalRoute());
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    const onHashChange = () => setLegalRoute(getLegalRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (legalRoute) {
    return <LegalPage type={legalRoute} />;
  }
  
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const impressionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const h = window.innerHeight;
      const y = window.scrollY;
      const start = h * 0.55;
      const end = h * 0.75;
      const progress = Math.max(0, Math.min(1, (y - start) / (end - start)));
      setNavProgress(progress);
      setIsNavVisible(progress > 0.5);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hero parallax
    if (heroRef.current) {
      gsap.to(heroRef.current.querySelector('.hero-bg'), {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(heroRef.current.querySelector('.hero-content'), {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });
    }

    // Philosophy section reveal
    if (philosophyRef.current) {
      gsap.fromTo(
        philosophyRef.current.querySelectorAll('.reveal-item'),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Services cards reveal
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // About section reveal
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.querySelectorAll('.about-reveal'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Impressions images reveal
    if (impressionsRef.current) {
      gsap.fromTo(
        impressionsRef.current.querySelectorAll('.impression-img'),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: impressionsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Contact section reveal
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current.querySelectorAll('.contact-reveal'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [currentLanguage]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const careFeatures = t('services.care.features') as string[];
  const arriveFeatures = t('services.arrive.features') as string[];
  const fullcareFeatures = t('services.fullcare.features') as string[];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
        style={{
          boxShadow: navProgress > 0.85 ? '0 1px 3px rgba(0, 0, 0, 0.05)' : 'none',
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 to-transparent pointer-events-none"
          style={{ opacity: 1 - navProgress }}
        />
        <div
          className="absolute inset-0 bg-[#FAF8F5] pointer-events-none"
          style={{ opacity: navProgress }}
        />
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`font-serif text-2xl transition-colors duration-300 ${
                isNavVisible ? 'text-[#1A1A1A] hover:text-[#C4A77D]' : 'text-white hover:text-[#C4A77D]'
              }`}
            >
              Sonja Speicher
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className={`text-sm transition-colors duration-300 ${
                  isNavVisible ? 'text-[#2D2D2D] hover:text-[#C4A77D]' : 'text-white/80 hover:text-[#C4A77D]'
                }`}
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className={`text-sm transition-colors duration-300 ${
                  isNavVisible ? 'text-[#2D2D2D] hover:text-[#C4A77D]' : 'text-white/80 hover:text-[#C4A77D]'
                }`}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className={`text-sm transition-colors duration-300 ${
                  isNavVisible ? 'text-[#2D2D2D] hover:text-[#C4A77D]' : 'text-white/80 hover:text-[#C4A77D]'
                }`}
              >
                {t('nav.contact')}
              </button>
              <div className={`pl-4 border-l ${isNavVisible ? 'border-[#E5E5E5]' : 'border-white/20'}`}>
                <LanguageSwitcher isNavVisible={isNavVisible} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isNavVisible ? 'text-[#1A1A1A]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isNavVisible ? 'text-[#1A1A1A]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-t border-[#E5E5E5]">
            <div className="container-custom py-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-left text-lg text-[#2D2D2D] py-2"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-left text-lg text-[#2D2D2D] py-2"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-left text-lg text-[#2D2D2D] py-2"
              >
                {t('nav.contact')}
              </button>
              <div className="flex gap-4 text-sm text-[#6B6B6B] pt-4 border-t border-[#E5E5E5]">
                <LanguageSwitcher isNavVisible={true} />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <div className="hero-bg absolute inset-0">
          <img
            src="/images/20260405_182836.jpg"
            alt="View through stone arch onto pool and garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.15)_60%,rgba(0,0,0,0)_100%)]" />
        </div>

        <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl mb-6 [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
            {t('hero.headline')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            {t('hero.subline')}
          </p>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="btn-primary text-lg"
          >
            {t('hero.cta')}
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-item order-2 md:order-1">
              <img
                src="/images/20260426_094945.jpg"
                alt="Finca exterior with bougainvillea"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="reveal-item font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-8">
                {t('philosophy.headline')}
              </h2>
              <p className="reveal-item text-lg text-[#2D2D2D] mb-6 leading-relaxed">
                {t('philosophy.body')}
              </p>
              <div className="reveal-item flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-[#F5F2ED] rounded-full text-sm text-[#6B6B6B]">
                  Deutsch
                </span>
                <span className="px-4 py-2 bg-[#F5F2ED] rounded-full text-sm text-[#6B6B6B]">
                  English
                </span>
                <span className="px-4 py-2 bg-[#F5F2ED] rounded-full text-sm text-[#6B6B6B]">
                  Français
                </span>
                <span className="px-4 py-2 bg-[#F5F2ED] rounded-full text-sm text-[#6B6B6B]">
                  Español
                </span>
              </div>
              <div className="reveal-item flex gap-8 text-[#8B7355]">
                <div>
                  <span className="font-serif text-3xl">{t('philosophy.location')}</span>
                  <p className="text-sm text-[#6B6B6B]">{t('philosophy.locationLabel')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-[#F5F2ED]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-[#6B6B6B]">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARE Card */}
            <div className="service-card bg-white rounded-lg p-8 card-hover">
              <div className="w-14 h-14 bg-[#F5F2ED] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#C4A77D]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{t('services.care.title')}</h3>
              <p className="text-[#6B6B6B] mb-6">
                {t('services.care.subtitle')}
              </p>
              <ul className="space-y-3">
                {careFeatures.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2D2D2D]">
                    <Check className="w-5 h-5 text-[#C4A77D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ARRIVE Card */}
            <div className="service-card bg-white rounded-lg p-8 card-hover">
              <div className="w-14 h-14 bg-[#F5F2ED] rounded-full flex items-center justify-center mb-6">
                <Key className="w-7 h-7 text-[#C4A77D]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{t('services.arrive.title')}</h3>
              <p className="text-[#6B6B6B] mb-6">
                {t('services.arrive.subtitle')}
              </p>
              <ul className="space-y-3">
                {arriveFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2D2D2D]">
                    <Check className="w-5 h-5 text-[#C4A77D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FULL CARE Card */}
            <div className="service-card bg-white rounded-lg p-8 card-hover border-2 border-[#C4A77D]/20">
              <div className="w-14 h-14 bg-[#C4A77D]/10 rounded-full flex items-center justify-center mb-6">
                <Crown className="w-7 h-7 text-[#C4A77D]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{t('services.fullcare.title')}</h3>
              <p className="text-[#6B6B6B] mb-6">
                {t('services.fullcare.subtitle')}
              </p>
              <ul className="space-y-3">
                {fullcareFeatures.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#2D2D2D]">
                    <Check className="w-5 h-5 text-[#C4A77D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-[#6B6B6B] mt-10">
            {t('services.pricingNote')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="about-reveal font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8">
                {t('about.title')}
              </h2>
              <p className="about-reveal text-lg text-[#2D2D2D] mb-6 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="about-reveal text-lg text-[#2D2D2D] mb-8 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <div className="about-reveal bg-[#F5F2ED] rounded-lg p-8 relative">
                <span className="quote-mark absolute top-4 left-4">"</span>
                <p className="font-serif text-xl text-[#1A1A1A] italic pl-8">
                  {t('about.quote')}
                </p>
                <p className="text-[#6B6B6B] mt-4 pl-8">{t('about.signature')}</p>
              </div>
            </div>
            <div className="about-reveal">
              <img
                src="/images/sonjaspeicher1.png"
                alt="Sonja Speicher"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impressions Section */}
      <section ref={impressionsRef} className="section-padding bg-[#F5F2ED]">
        <div className="container-custom">
          <h2 className="impression-img font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4 text-center">
            {t('impressions.title')}
          </h2>
          <p className="impression-img text-[#6B6B6B] text-center mb-12">
            {t('impressions.caption')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="impression-img">
              <img
                src="/images/IMG_1843.jpeg"
                alt="Terrace at sunset"
                className="w-full h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="impression-img">
              <img
                src="/images/20260426_095025.jpg"
                alt="Bougainvillea and pergola entrance"
                className="w-full h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="impression-img">
              <img
                src="/images/20260403_083625.jpg"
                alt="Citrus garden at the Finca"
                className="w-full h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="contact-reveal font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                {t('contact.title')}
              </h2>
              <p className="contact-reveal text-lg text-[#2D2D2D] mb-10">
                {t('contact.intro')}
              </p>

              <div className="contact-reveal space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5F2ED] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C4A77D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">{t('contact.phone')}</p>
                    <p className="text-[#1A1A1A]">+34 653 545 612</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5F2ED] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C4A77D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">{t('contact.email')}</p>
                    <p className="text-[#1A1A1A]">hello@sonjaspeicher.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5F2ED] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#C4A77D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">{t('contact.whatsapp')}</p>
                    <p className="text-[#1A1A1A]">+34 653 545 612</p>
                  </div>
                </div>
              </div>

              <p className="contact-reveal text-[#6B6B6B] mt-10">
                {t('contact.languagesNote')}{' '}
                <span className="text-[#C4A77D]">English</span>{' '}
                {t('contact.and')}{' '}
                <span className="text-[#C4A77D]">Français</span>
              </p>
            </div>

            <div className="contact-reveal bg-white rounded-lg p-8 shadow-sm">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = (fd.get('name') as string) || '';
                  const email = (fd.get('email') as string) || '';
                  const phone = (fd.get('phone') as string) || '';
                  const message = (fd.get('message') as string) || '';
                  const subject = `${t('contact.form.subjectPrefix')}${name ? ' – ' + name : ''}`;
                  const body =
                    `${t('contact.form.name')}: ${name}\n` +
                    `${t('contact.form.email')}: ${email}\n` +
                    `${t('contact.form.phone')}: ${phone}\n\n` +
                    `${message}`;
                  window.location.href =
                    `mailto:hello@sonjaspeicher.com?subject=${encodeURIComponent(subject)}` +
                    `&body=${encodeURIComponent(body)}`;
                }}
              >
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">{t('contact.form.name')}</label>
                  <input name="name" type="text" placeholder={t('contact.form.namePlaceholder') as string} />
                </div>
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">{t('contact.form.email')}</label>
                  <input name="email" type="email" placeholder={t('contact.form.emailPlaceholder') as string} />
                </div>
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">{t('contact.form.phone')}</label>
                  <input name="phone" type="tel" placeholder={t('contact.form.phonePlaceholder') as string} />
                </div>
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">{t('contact.form.message')}</label>
                  <textarea name="message" rows={4} placeholder={t('contact.form.messagePlaceholder') as string} />
                </div>
                <button type="submit" className="btn-primary w-full">
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl mb-2">Sonja Speicher</p>
              <p className="text-white/60 text-sm">
                {t('footer.tagline')}
              </p>
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#impressum" className="hover:text-[#C4A77D] transition-colors">
                {t('footer.imprint')}
              </a>
              <a href="#datenschutz" className="hover:text-[#C4A77D] transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
