export type Language = 'de' | 'en' | 'fr' | 'es';

export interface Translations {
  // Navigation
  nav: {
    services: string;
    about: string;
    contact: string;
  };
  // Hero
  hero: {
    headline: string;
    subline: string;
    cta: string;
  };
  // Philosophy
  philosophy: {
    headline: string;
    body: string;
    languages: string;
    location: string;
    locationLabel: string;
  };
  // Services
  services: {
    title: string;
    subtitle: string;
    pricingNote: string;
    privateChef: string;
    renovation: string;
    onRequest: string;
    care: {
      title: string;
      subtitle: string;
      features: string[];
    };
    arrive: {
      title: string;
      subtitle: string;
      features: string[];
    };
    fullcare: {
      title: string;
      subtitle: string;
      features: string[];
    };
  };
  // About
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    signature: string;
  };
  // Impressions
  impressions: {
    title: string;
    caption: string;
  };
  // Contact
  contact: {
    title: string;
    intro: string;
    phone: string;
    email: string;
    whatsapp: string;
    languagesNote: string;
    and: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  // Footer
  footer: {
    tagline: string;
    imprint: string;
    privacy: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      services: 'Leistungen',
      about: 'Über Sonja',
      contact: 'Kontakt',
    },
    hero: {
      headline: 'Ihr Anwesen. In den besten Händen.',
      subline: 'Persönliche Betreuung für anspruchsvolle Eigentümer auf Mallorca',
      cta: 'Erstgespräch vereinbaren',
    },
    philosophy: {
      headline: 'Nicht ein weiterer Hausmeister-Service',
      body: 'Sonja ist die Vertrauensperson, die die Sprache ihrer Klienten spricht — buchstäblich und kulturell. 25 Jahre Luxus-Yachting haben ihr ein instinktives Verständnis dafür gegeben, was anspruchsvolle Eigentümer erwarten: Diskretion, Proaktivität, keine Ausreden. Das ist Custòdia.',
      languages: 'Sprachen',
      location: 'Inselmitte, Norden',
      locationLabel: '& Nordosten',
    },
    services: {
      title: 'Leistungen',
      subtitle: 'Drei Pakete — auf Wunsch kombinierbar',
      pricingNote: 'Preise auf Anfrage — flexibel, ohne Jahresverpflichtung',
      privateChef: 'Private Chef',
      renovation: 'Renovierungsberatung',
      onRequest: 'Individuell auf Anfrage',
      care: {
        title: 'CARE',
        subtitle: 'Regelmäßige Objektbetreuung',
        features: [
          'Wöchentlicher Komplettcheck: Lüften, Wasser, Bewässerung, Sicherheit',
          'Fotodokumentation & wöchentlicher Kurzbericht',
          'Sofortmeldung bei Problemen inkl. Erstmaßnahmen',
          'Koordination externer Dienstleister: Handwerker, Gärtner, Reinigung',
          'Behördengänge & Terminvermittlung',
          'Postkasten leeren, Pakete annehmen',
          'Primärer Notfallkontakt für Versicherungen',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Vorbereitung & Ankunfts-Service',
        features: [
          'Einkaufsservice nach persönlicher Liste',
          'Haus sorgfältig vorbereitet: frisch gelüftet, geputzt, frische Blumen',
          'Airport-Transfer Organisation',
          'Schlüsselübergabe & Einweisung bei Erstkunden',
          'Saisonale Vorbereitung: Öffnen/Schließen der Saison',
        ],
      },
      fullcare: {
        title: 'FULL CARE',
        subtitle: 'Komplettbetreuung nach Maß',
        features: [
          'Alles aus CARE + ARRIVE',
          'Umfassende Budgetverwaltung & monatliche Kostenübersicht',
          'Vorausschauende Jahresplanung: Renovierungen, Wartungen',
          'Fuhrpark-Koordination: Saisoncheck, Versicherung, Wartung',
          'Concierge-Leistungen während Anwesenheit',
          'Professionelle Repräsentation gegenüber Behörden & Anwälten',
        ],
      },
    },
    about: {
      title: 'Über Sonja',
      paragraph1: '25 Jahre als Chief Stewardess auf Luxusyachten. Über 15 Jahre auf Mallorca zuhause — mit eigener Finca, die sie drei Jahre lang persönlich gebaut hat.',
      paragraph2: 'Sonja versteht instinktiv, was anspruchsvolle Menschen erwarten. Diskretion, Proaktivität, keine Ausreden. Dieses Serviceverständnis ist nicht antrainiert — es ist Berufsidentität.',
      quote: 'Ich betreue maximal fünf Anwesen. Das ist kein Marketing-Slogan — das ist die einzige Art, wie ich arbeiten möchte.',
      signature: '— Sonja Speicher',
    },
    impressions: {
      title: 'Eindrücke',
      caption: 'Sonjas Finca in der Inselmitte — drei Jahre eigene Bauleitung',
    },
    contact: {
      title: 'Erstgespräch vereinbaren',
      intro: 'Erzählen Sie mir von Ihrem Anwesen. Ich melde mich innerhalb von 24 Stunden.',
      phone: 'Telefon',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      languagesNote: 'Auch auf',
      and: 'und',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.com',
        phone: 'Telefon',
        phonePlaceholder: '+49 123 456 789',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie mir von Ihrem Anwesen...',
        submit: 'Nachricht senden',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      copyright: '© 2026 Sonja Speicher. Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About Sonja',
      contact: 'Contact',
    },
    hero: {
      headline: 'Your estate. In trusted hands.',
      subline: 'Personal care for discerning owners in Mallorca',
      cta: 'Schedule a consultation',
    },
    philosophy: {
      headline: 'Not just another property management service',
      body: 'Sonja is the trusted person who speaks her clients\' language — literally and culturally. 25 years in luxury yachting have given her an instinctive understanding of what discerning owners expect: discretion, proactivity, no excuses. That is Custòdia.',
      languages: 'Languages',
      location: 'Central, North',
      locationLabel: '& Northeast',
    },
    services: {
      title: 'Services',
      subtitle: 'Three packages — combinable on request',
      pricingNote: 'Prices on request — flexible, without annual commitment',
      privateChef: 'Private Chef',
      renovation: 'Renovation Consulting',
      onRequest: 'Individual services on request',
      care: {
        title: 'CARE',
        subtitle: 'Regular property care',
        features: [
          'Weekly complete check: ventilation, water, irrigation, security',
          'Photo documentation & weekly brief report',
          'Immediate notification of problems including initial measures',
          'Coordination of external service providers: craftsmen, gardeners, cleaning',
          'Official errands & appointment mediation',
          'Empty mailbox, accept packages',
          'Primary emergency contact for insurance',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Preparation & arrival service',
        features: [
          'Shopping service according to personal list',
          'House carefully prepared: freshly ventilated, cleaned, fresh flowers',
          'Airport transfer organization',
          'Key handover & briefing for first-time clients',
          'Seasonal preparation: opening/closing the season',
        ],
      },
      fullcare: {
        title: 'FULL CARE',
        subtitle: 'Complete care tailored to you',
        features: [
          'Everything from CARE + ARRIVE',
          'Comprehensive budget management & monthly cost overview',
          'Forward-looking annual planning: renovations, maintenance',
          'Fleet coordination: seasonal check, insurance, maintenance',
          'Concierge services during presence',
          'Professional representation to authorities & lawyers',
        ],
      },
    },
    about: {
      title: 'About Sonja',
      paragraph1: '25 years as Chief Stewardess on luxury yachts. Over 15 years at home in Mallorca — with her own Finca, which she personally built over three years.',
      paragraph2: 'Sonja instinctively understands what demanding people expect. Discretion, proactivity, no excuses. This service mindset is not trained — it is professional identity.',
      quote: 'I care for a maximum of five properties. This is not a marketing slogan — this is the only way I want to work.',
      signature: '— Sonja Speicher',
    },
    impressions: {
      title: 'Impressions',
      caption: 'Sonja\'s Finca in the center of the island — three years of personal construction management',
    },
    contact: {
      title: 'Schedule a consultation',
      intro: 'Tell me about your property. I will get back to you within 24 hours.',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      languagesNote: 'Also available in',
      and: 'and',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone',
        phonePlaceholder: '+44 123 456 789',
        message: 'Message',
        messagePlaceholder: 'Tell me about your property...',
        submit: 'Send message',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      copyright: '© 2026 Sonja Speicher. All rights reserved.',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      headline: 'Votre propriété. Entre les meilleures mains.',
      subline: 'Service personnalisé pour propriétaires exigeants à Majorque',
      cta: 'Prendre rendez-vous',
    },
    philosophy: {
      headline: 'Pas un autre service de gestion immobilière',
      body: 'Sonja est la personne de confiance qui parle la langue de ses clients — littéralement et culturellement. 25 ans dans le yachting de luxe lui ont donné une compréhension instinctive de ce que les propriétaires exigeants attendent: discrétion, proactivité, pas d\'excuses. C\'est Custòdia.',
      languages: 'Langues',
      location: 'Centre, Nord',
      locationLabel: '& Nord-Est',
    },
    services: {
      title: 'Services',
      subtitle: 'Trois forfaits — combinables sur demande',
      pricingNote: 'Prix sur demande — flexible, sans engagement annuel',
      privateChef: 'Chef Privé',
      renovation: 'Conseil Rénovation',
      onRequest: 'Services individuels sur demande',
      care: {
        title: 'CARE',
        subtitle: 'Entretien régulier de la propriété',
        features: [
          'Contrôle complet hebdomadaire: aération, eau, irrigation, sécurité',
          'Documentation photo & rapport hebdomadaire',
          'Notification immédiate des problèmes avec mesures initiales',
          'Coordination des prestataires: artisans, jardiniers, nettoyage',
          'Démarches administratives & médiation',
          'Vider la boîte aux lettres, accepter les colis',
          'Contact d\'urgence principal pour les assurances',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Préparation & service d\'arrivée',
        features: [
          'Service de courses selon liste personnelle',
          'Maison soigneusement préparée: aérée, nettoyée, fleurs fraîches',
          'Organisation du transfert aéroport',
          'Remise des clés & briefing pour nouveaux clients',
          'Préparation saisonnière: ouverture/fermeture de saison',
        ],
      },
      fullcare: {
        title: 'FULL CARE',
        subtitle: 'Service complet sur mesure',
        features: [
          'Tout de CARE + ARRIVE',
          'Gestion complète du budget & aperçu mensuel des coûts',
          'Planification annuelle prospective: rénovations, entretien',
          'Coordination du parc automobile: contrôle saisonnier, assurance',
          'Services de concierge pendant le séjour',
          'Représentation professionnelle auprès des autorités & avocats',
        ],
      },
    },
    about: {
      title: 'À propos de Sonja',
      paragraph1: '25 ans comme Chief Stewardess sur des yachts de luxe. Plus de 15 ans à domicile à Majorque — avec sa propre Finca, qu\'elle a construite personnellement pendant trois ans.',
      paragraph2: 'Sonja comprend instinctivement ce que les gens exigeants attendent. Discrétion, proactivité, pas d\'excuses. Cette mentalité de service n\'est pas entraînée — c\'est l\'identité professionnelle.',
      quote: 'Je prends soin d\'un maximum de cinq propriétés. Ce n\'est pas un slogan marketing — c\'est la seule façon dont je veux travailler.',
      signature: '— Sonja Speicher',
    },
    impressions: {
      title: 'Impressions',
      caption: 'La Finca de Sonja au centre de l\'île — trois ans de direction de travaux personnelle',
    },
    contact: {
      title: 'Prendre rendez-vous',
      intro: 'Parlez-moi de votre propriété. Je vous réponds dans les 24 heures.',
      phone: 'Téléphone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      languagesNote: 'Également disponible en',
      and: 'et',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        phone: 'Téléphone',
        phonePlaceholder: '+33 123 456 789',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre propriété...',
        submit: 'Envoyer le message',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      copyright: '© 2026 Sonja Speicher. Tous droits réservés.',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      about: 'Sobre Sonja',
      contact: 'Contacto',
    },
    hero: {
      headline: 'Su propiedad. En las mejores manos.',
      subline: 'Atención personal para propietarios exigentes en Mallorca',
      cta: 'Concertar una consulta',
    },
    philosophy: {
      headline: 'No es otro servicio de administración de propiedades',
      body: 'Sonja es la persona de confianza que habla el idioma de sus clientes — literal y culturalmente. 25 años en yates de lujo le han dado una comprensión instintiva de lo que los propietarios exigentes esperan: discreción, proactividad, sin excusas. Eso es Custòdia.',
      languages: 'Idiomas',
      location: 'Centro, Norte',
      locationLabel: '& Noreste',
    },
    services: {
      title: 'Servicios',
      subtitle: 'Tres paquetes — combinables bajo petición',
      pricingNote: 'Precios bajo petición — flexible, sin compromiso anual',
      privateChef: 'Chef Privado',
      renovation: 'Asesoramiento Reformas',
      onRequest: 'Servicios individuales bajo petición',
      care: {
        title: 'CARE',
        subtitle: 'Cuidado regular de la propiedad',
        features: [
          'Control completo semanal: ventilación, agua, riego, seguridad',
          'Documentación fotográfica & informe semanal',
          'Notificación inmediata de problemas con medidas iniciales',
          'Coordinación de proveedores: artesanos, jardineros, limpieza',
          'Trámites oficiales & mediación de citas',
          'Vaciar buzón, aceptar paquetes',
          'Contacto de emergencia principal para seguros',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Preparación & servicio de llegada',
        features: [
          'Servicio de compras según lista personal',
          'Casa cuidadosamente preparada: ventilada, limpia, flores frescas',
          'Organización de traslado al aeropuerto',
          'Entrega de llaves & briefing para nuevos clientes',
          'Preparación estacional: apertura/cierre de temporada',
        ],
      },
      fullcare: {
        title: 'FULL CARE',
        subtitle: 'Atención completa a medida',
        features: [
          'Todo de CARE + ARRIVE',
          'Gestión integral de presupuesto & visión mensual de costes',
          'Planificación anual prospectiva: reformas, mantenimiento',
          'Coordinación de flota: revisión estacional, seguro, mantenimiento',
          'Servicios de conserjería durante la estancia',
          'Representación profesional ante autoridades & abogados',
        ],
      },
    },
    about: {
      title: 'Sobre Sonja',
      paragraph1: '25 años como Chief Stewardess en yates de lujo. Más de 15 años en casa en Mallorca — con su propia Finca, que construyó personalmente durante tres años.',
      paragraph2: 'Sonja entiende instintivamente lo que las personas exigentes esperan. Discreción, proactividad, sin excusas. Esta mentalidad de servicio no está entrenada — es identidad profesional.',
      quote: 'Atiendo un máximo de cinco propiedades. No es un eslogan de marketing — es la única forma en que quiero trabajar.',
      signature: '— Sonja Speicher',
    },
    impressions: {
      title: 'Impresiones',
      caption: 'La Finca de Sonja en el centro de la isla — tres años de dirección de obra personal',
    },
    contact: {
      title: 'Concertar una consulta',
      intro: 'Cuéntame sobre tu propiedad. Te responderé en 24 horas.',
      phone: 'Teléfono',
      email: 'Email',
      whatsapp: 'WhatsApp',
      languagesNote: 'También disponible en',
      and: 'y',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        phone: 'Teléfono',
        phonePlaceholder: '+34 123 456 789',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu propiedad...',
        submit: 'Enviar mensaje',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Aviso legal',
      privacy: 'Política de privacidad',
      copyright: '© 2026 Sonja Speicher. Todos los derechos reservados.',
    },
  },
};
