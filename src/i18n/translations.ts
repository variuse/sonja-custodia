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
      subjectPrefix: string;
    };
  };
  // Footer
  footer: {
    tagline: string;
    imprint: string;
    privacy: string;
    copyright: string;
  };
  // Legal pages (Aviso Legal + GDPR Privacy Policy)
  legal: {
    back: string;
    lastUpdated: string;
    impressum: {
      title: string;
      sections: { heading: string; body: string }[];
    };
    datenschutz: {
      title: string;
      sections: { heading: string; body: string }[];
    };
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
      body: 'Sonja ist die Vertrauensperson, die die Sprache ihrer Klienten spricht — buchstäblich und kulturell. 25 Jahre Luxus-Yachting haben ihr ein instinktives Verständnis dafür gegeben, was anspruchsvolle Eigentümer erwarten: Diskretion, Proaktivität, Verlässlichkeit — und ein Ansprechpartner, der erreichbar ist, wenn es darauf ankommt. Das ist Custòdia.',
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
          'Wöchentlicher Komplettcheck: Haus, Garten, Pool, Bewässerung, Sicherheit',
          'Fotodokumentation & wöchentlicher Kurzbericht',
          'Sofortmeldung bei Problemen inkl. Erstmaßnahmen',
          'Koordination externer Dienstleister: Handwerker, Gärtner, Reinigungspersonal',
          'Briefkasten leeren, Pakete annehmen',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Vorbereitung & Ankunfts-Service',
        features: [
          'Einkaufsservice nach Ihren persönlichen Wünschen',
          'Haus sorgfältig vorbereitet: frisch gelüftet, geputzt, frische Blumen',
          'Airport-Transfer Organisation',
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
      paragraph1: '25 Jahre als Köchin und Chief Stewardess auf Luxusyachten. Über 15 Jahre auf Mallorca zuhause — mit eigener Finca, deren Bau sie drei Jahre lang persönlich mit ihrem Mann betreut hat.',
      paragraph2: 'Sonja versteht instinktiv, was anspruchsvolle Menschen erwarten. Vertrauenswürdigkeit, Vorausdenken, klare Lösungen. Dieses Serviceverständnis ist nicht antrainiert, es ist Berufsidentität.',
      quote: 'Ich kümmere mich um wenige Anwesen — dafür um jedes wie um mein Eigenes.',
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
        subjectPrefix: 'Anfrage über sonjaspeicher-custodia.com',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      copyright: '© 2026 Sonja Speicher. Alle Rechte vorbehalten.',
    },
    legal: {
      back: 'Zurück zur Startseite',
      lastUpdated: 'Stand: April 2026',
      impressum: {
        title: 'Impressum',
        sections: [
          {
            heading: 'Anbieter',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, España\n\nNIE: X8224719B\nRechtsform: Autónoma (selbständig erwerbstätig nach spanischem Recht)',
          },
          {
            heading: 'Kontakt',
            body: 'Telefon: +34 653 545 612\nE-Mail: hello@sonjaspeicher.com',
          },
          {
            heading: 'Hosting',
            body: 'Diese Website wird gehostet durch GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, über GitHub Pages.',
          },
          {
            heading: 'Anwendbares Recht und Haftung',
            body: 'Die Bereitstellung dieser Website erfolgt nach den Bestimmungen der spanischen Ley 34/2002 (LSSI-CE). Für die Verarbeitung personenbezogener Daten gilt zusätzlich die Verordnung (EU) 2016/679 (DSGVO).\n\nDie Inhalte werden mit größter Sorgfalt erstellt; für Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen. Für externe Links sind ausschließlich deren Betreiber verantwortlich.',
          },
          {
            heading: 'Online-Streitbeilegung',
            body: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr. Sonja Speicher ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          },
        ],
      },
      datenschutz: {
        title: 'Datenschutzerklärung',
        sections: [
          {
            heading: 'Verantwortliche Stelle',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, España\n\nE-Mail: hello@sonjaspeicher.com',
          },
          {
            heading: 'Übersicht',
            body: 'Diese Website verarbeitet personenbezogene Daten nur dann, wenn Sie aktiv Kontakt aufnehmen. Es werden keine Cookies gesetzt, kein Tracking und keine Analyse-Tools eingesetzt.',
          },
          {
            heading: 'Datenverarbeitung beim Aufruf der Website',
            body: 'Beim Aufruf dieser Website werden technische Verbindungsdaten (IP-Adresse, Datum und Uhrzeit, abgerufene Ressource, Referrer) durch den Hosting-Anbieter GitHub, Inc. zur technischen Auslieferung verarbeitet. Eine eigenständige Speicherung oder Auswertung durch Sonja Speicher findet nicht statt.',
          },
          {
            heading: 'Kontaktformular',
            body: 'Das Kontaktformular dieser Website öffnet beim Absenden Ihr lokales E-Mail-Programm und überträgt die Eingaben als E-Mail an hello@sonjaspeicher.com. Es findet keine serverseitige Speicherung oder Übermittlung über Dritte statt.\n\nDie Verarbeitung Ihrer per E-Mail übermittelten Daten erfolgt ausschließlich zur Beantwortung Ihrer Anfrage und zur Anbahnung einer möglichen Geschäftsbeziehung (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind — spätestens nach Abschluss eines etwaigen Vertrages zuzüglich gesetzlicher Aufbewahrungsfristen.',
          },
          {
            heading: 'Cookies und Tracking',
            body: 'Diese Website verwendet keine Cookies und kein Web-Tracking.',
          },
          {
            heading: 'Ihre Rechte',
            body: 'Nach DSGVO haben Sie das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21).\n\nSie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig in Spanien ist die Agencia Española de Protección de Datos (AEPD), https://www.aepd.es.',
          },
          {
            heading: 'Kontakt für Datenschutzanfragen',
            body: 'Bitte richten Sie alle Anfragen zu Ihren Daten an: hello@sonjaspeicher.com.',
          },
        ],
      },
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
      body: 'Sonja is the trusted person who speaks her clients\' language — literally and culturally. 25 years in luxury yachting have given her an instinctive understanding of what discerning owners expect: discretion, proactivity, reliability — and a point of contact who is reachable when it matters. That is Custòdia.',
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
          'Weekly complete check: house, garden, pool, irrigation, security',
          'Photo documentation & weekly brief report',
          'Immediate notification of problems including initial measures',
          'Coordination of external service providers: craftsmen, gardeners, cleaning staff',
          'Empty mailbox, accept packages',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Preparation & arrival service',
        features: [
          'Shopping service tailored to your personal preferences',
          'House carefully prepared: freshly ventilated, cleaned, fresh flowers',
          'Airport transfer organization',
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
      paragraph1: '25 years as cook and Chief Stewardess on luxury yachts. Over 15 years at home in Mallorca — with her own Finca, whose construction she personally oversaw together with her husband over three years.',
      paragraph2: 'Sonja instinctively understands what demanding people expect. Trustworthiness, foresight, clear solutions. This service mindset is not trained, it is professional identity.',
      quote: 'I care for only a few properties — but for each one as if it were my own.',
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
        subjectPrefix: 'Inquiry via sonjaspeicher-custodia.com',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      copyright: '© 2026 Sonja Speicher. All rights reserved.',
    },
    legal: {
      back: 'Back to homepage',
      lastUpdated: 'As of April 2026',
      impressum: {
        title: 'Legal Notice',
        sections: [
          {
            heading: 'Provider',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, Spain\n\nNIE: X8224719B\nLegal status: Autónoma (self-employed under Spanish law)',
          },
          {
            heading: 'Contact',
            body: 'Phone: +34 653 545 612\nEmail: hello@sonjaspeicher.com',
          },
          {
            heading: 'Hosting',
            body: 'This website is hosted by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, via GitHub Pages.',
          },
          {
            heading: 'Applicable Law and Liability',
            body: 'This website is provided in accordance with Spanish Law 34/2002 (LSSI-CE). The processing of personal data is additionally governed by Regulation (EU) 2016/679 (GDPR).\n\nThe contents are prepared with the greatest care; however, no warranty is given as to their accuracy, completeness or timeliness. For external links, the respective operators are solely responsible.',
          },
          {
            heading: 'Online Dispute Resolution',
            body: 'The European Commission provides an online dispute resolution platform: https://ec.europa.eu/consumers/odr. Sonja Speicher is not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.',
          },
        ],
      },
      datenschutz: {
        title: 'Privacy Policy',
        sections: [
          {
            heading: 'Data Controller',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, Spain\n\nEmail: hello@sonjaspeicher.com',
          },
          {
            heading: 'Overview',
            body: 'This website processes personal data only when you actively make contact. No cookies are set, and no tracking or analytics tools are used.',
          },
          {
            heading: 'Data Processing on Website Access',
            body: 'When you access this website, technical connection data (IP address, date and time, requested resource, referrer) is processed by the hosting provider GitHub, Inc. for the sole purpose of technical delivery. No independent storage or analysis is carried out by Sonja Speicher.',
          },
          {
            heading: 'Contact Form',
            body: 'The contact form on this website opens your local email program when submitted and transmits the entries as an email to hello@sonjaspeicher.com. No server-side storage or transmission via third parties takes place.\n\nThe processing of your data submitted by email is carried out exclusively for the purpose of responding to your inquiry and initiating a possible business relationship (Art. 6(1)(b) GDPR). The data will be deleted as soon as it is no longer required for that purpose — at the latest after the conclusion of any contract plus statutory retention periods.',
          },
          {
            heading: 'Cookies and Tracking',
            body: 'This website does not use cookies or web tracking.',
          },
          {
            heading: 'Your Rights',
            body: 'Under the GDPR, you have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21).\n\nYou also have the right to lodge a complaint with a data protection supervisory authority. The competent Spanish authority is the Agencia Española de Protección de Datos (AEPD), https://www.aepd.es.',
          },
          {
            heading: 'Contact for Privacy Inquiries',
            body: 'Please direct any inquiries regarding your data to: hello@sonjaspeicher.com.',
          },
        ],
      },
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
      body: 'Sonja est la personne de confiance qui parle la langue de ses clients — littéralement et culturellement. 25 ans dans le yachting de luxe lui ont donné une compréhension instinctive de ce que les propriétaires exigeants attendent : discrétion, proactivité, fiabilité — et un interlocuteur joignable quand cela compte. C\'est Custòdia.',
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
          'Contrôle complet hebdomadaire : maison, jardin, piscine, irrigation, sécurité',
          'Documentation photo & rapport hebdomadaire',
          'Notification immédiate des problèmes avec mesures initiales',
          'Coordination des prestataires : artisans, jardiniers, personnel d\'entretien',
          'Vider la boîte aux lettres, accepter les colis',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Préparation & service d\'arrivée',
        features: [
          'Service de courses selon vos souhaits personnels',
          'Maison soigneusement préparée : aérée, nettoyée, fleurs fraîches',
          'Organisation du transfert aéroport',
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
      paragraph1: '25 ans comme cuisinière et Chief Stewardess sur des yachts de luxe. Plus de 15 ans à domicile à Majorque — avec sa propre Finca, dont elle a personnellement supervisé la construction avec son mari pendant trois ans.',
      paragraph2: 'Sonja comprend instinctivement ce que les gens exigeants attendent. Confiance, anticipation, des solutions claires. Cette mentalité de service n\'est pas entraînée, c\'est l\'identité professionnelle.',
      quote: 'Je m\'occupe de peu de propriétés — mais de chacune comme s\'il s\'agissait de la mienne.',
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
        subjectPrefix: 'Demande via sonjaspeicher-custodia.com',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      copyright: '© 2026 Sonja Speicher. Tous droits réservés.',
    },
    legal: {
      back: 'Retour à l\'accueil',
      lastUpdated: 'Mise à jour : avril 2026',
      impressum: {
        title: 'Mentions légales',
        sections: [
          {
            heading: 'Prestataire',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, Espagne\n\nNIE : X8224719B\nForme juridique : Autónoma (travailleur indépendant en droit espagnol)',
          },
          {
            heading: 'Contact',
            body: 'Téléphone : +34 653 545 612\nE-mail : hello@sonjaspeicher.com',
          },
          {
            heading: 'Hébergement',
            body: 'Ce site est hébergé par GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis, via GitHub Pages.',
          },
          {
            heading: 'Droit applicable et responsabilité',
            body: 'La mise à disposition de ce site est régie par la loi espagnole 34/2002 (LSSI-CE). Le traitement des données à caractère personnel est en outre soumis au Règlement (UE) 2016/679 (RGPD).\n\nLes contenus sont rédigés avec le plus grand soin ; toutefois, aucune garantie n\'est donnée quant à leur exactitude, leur exhaustivité ou leur actualité. Les exploitants des sites externes liés sont seuls responsables de leurs contenus.',
          },
          {
            heading: 'Règlement en ligne des litiges',
            body: 'La Commission européenne met à disposition une plateforme de règlement en ligne des litiges : https://ec.europa.eu/consumers/odr. Sonja Speicher n\'est pas tenue et ne souhaite pas participer à une procédure de règlement des litiges devant une instance d\'arbitrage de consommation.',
          },
        ],
      },
      datenschutz: {
        title: 'Politique de confidentialité',
        sections: [
          {
            heading: 'Responsable du traitement',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, Espagne\n\nE-mail : hello@sonjaspeicher.com',
          },
          {
            heading: 'Aperçu',
            body: 'Ce site ne traite des données personnelles que lorsque vous prenez activement contact. Aucun cookie n\'est utilisé, aucun outil de suivi ni d\'analyse n\'est mis en œuvre.',
          },
          {
            heading: 'Traitement des données lors de la consultation du site',
            body: 'Lors de la consultation de ce site, des données techniques de connexion (adresse IP, date et heure, ressource consultée, référent) sont traitées par l\'hébergeur GitHub, Inc. aux seules fins de livraison technique. Aucune conservation ni exploitation indépendante n\'est effectuée par Sonja Speicher.',
          },
          {
            heading: 'Formulaire de contact',
            body: 'Le formulaire de contact ouvre votre logiciel de messagerie local au moment de l\'envoi et transmet les saisies sous forme d\'e-mail à hello@sonjaspeicher.com. Aucun stockage côté serveur ni transmission par un tiers n\'a lieu.\n\nLe traitement de vos données transmises par e-mail est effectué exclusivement pour répondre à votre demande et préparer une éventuelle relation commerciale (art. 6 §1 b RGPD). Les données seront supprimées dès qu\'elles ne seront plus nécessaires à cette fin — au plus tard à l\'issue d\'un éventuel contrat, augmentés des durées de conservation légales.',
          },
          {
            heading: 'Cookies et suivi',
            body: 'Ce site n\'utilise ni cookies ni dispositif de suivi.',
          },
          {
            heading: 'Vos droits',
            body: 'Au titre du RGPD, vous disposez d\'un droit d\'accès (art. 15), de rectification (art. 16), d\'effacement (art. 17), de limitation du traitement (art. 18), de portabilité (art. 20) et d\'opposition (art. 21).\n\nVous avez en outre le droit d\'introduire une réclamation auprès d\'une autorité de contrôle. L\'autorité espagnole compétente est l\'Agencia Española de Protección de Datos (AEPD), https://www.aepd.es.',
          },
          {
            heading: 'Contact pour les demandes relatives à vos données',
            body: 'Veuillez adresser toute demande concernant vos données à : hello@sonjaspeicher.com.',
          },
        ],
      },
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
      body: 'Sonja es la persona de confianza que habla el idioma de sus clientes — literal y culturalmente. 25 años en yates de lujo le han dado una comprensión instintiva de lo que los propietarios exigentes esperan: discreción, proactividad, fiabilidad — y un interlocutor accesible cuando importa. Eso es Custòdia.',
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
          'Control completo semanal: casa, jardín, piscina, riego, seguridad',
          'Documentación fotográfica & informe semanal',
          'Notificación inmediata de problemas con medidas iniciales',
          'Coordinación de proveedores: artesanos, jardineros, personal de limpieza',
          'Vaciar buzón, aceptar paquetes',
        ],
      },
      arrive: {
        title: 'ARRIVE',
        subtitle: 'Preparación & servicio de llegada',
        features: [
          'Servicio de compras según sus preferencias personales',
          'Casa cuidadosamente preparada: ventilada, limpia, flores frescas',
          'Organización de traslado al aeropuerto',
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
      paragraph1: '25 años como cocinera y Chief Stewardess en yates de lujo. Más de 15 años en casa en Mallorca — con su propia Finca, cuya construcción supervisó personalmente con su marido durante tres años.',
      paragraph2: 'Sonja entiende instintivamente lo que las personas exigentes esperan. Compromiso, previsión, soluciones claras. Esta mentalidad de servicio no está entrenada, es identidad profesional.',
      quote: 'Cuido de pocas propiedades — pero de cada una como si fuera la mía.',
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
        subjectPrefix: 'Consulta vía sonjaspeicher-custodia.com',
      },
    },
    footer: {
      tagline: 'Custòdia · Private Property Care Mallorca',
      imprint: 'Aviso legal',
      privacy: 'Política de privacidad',
      copyright: '© 2026 Sonja Speicher. Todos los derechos reservados.',
    },
    legal: {
      back: 'Volver al inicio',
      lastUpdated: 'Actualizado: abril de 2026',
      impressum: {
        title: 'Aviso legal',
        sections: [
          {
            heading: 'Titular',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, España\n\nNIE: X8224719B\nForma jurídica: Autónoma',
          },
          {
            heading: 'Contacto',
            body: 'Teléfono: +34 653 545 612\nCorreo electrónico: hello@sonjaspeicher.com',
          },
          {
            heading: 'Alojamiento',
            body: 'Este sitio web está alojado por GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, EE. UU., a través de GitHub Pages.',
          },
          {
            heading: 'Legislación aplicable y responsabilidad',
            body: 'La prestación de este sitio web se rige por la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE). El tratamiento de datos personales se rige adicionalmente por el Reglamento (UE) 2016/679 (RGPD).\n\nLos contenidos se elaboran con el máximo cuidado; no obstante, no se ofrece garantía alguna sobre su exactitud, integridad o actualidad. De los enlaces externos solo son responsables sus respectivos operadores.',
          },
          {
            heading: 'Resolución de litigios en línea',
            body: 'La Comisión Europea pone a disposición una plataforma de resolución de litigios en línea: https://ec.europa.eu/consumers/odr. Sonja Speicher no está obligada ni dispuesta a participar en un procedimiento de resolución de litigios ante un órgano arbitral de consumo.',
          },
        ],
      },
      datenschutz: {
        title: 'Política de privacidad',
        sections: [
          {
            heading: 'Responsable del tratamiento',
            body: 'Sonja Speicher\nPolígono 5 Parcela 263\n07529 Ariany\nIlles Balears, España\n\nCorreo electrónico: hello@sonjaspeicher.com',
          },
          {
            heading: 'Resumen',
            body: 'Este sitio web solo trata datos personales cuando usted establece contacto activamente. No se utilizan cookies, ni herramientas de seguimiento o análisis.',
          },
          {
            heading: 'Tratamiento de datos al acceder al sitio',
            body: 'Al acceder a este sitio, el proveedor de alojamiento GitHub, Inc. trata datos técnicos de conexión (dirección IP, fecha y hora, recurso solicitado, referente) con la única finalidad de la entrega técnica. Sonja Speicher no realiza un almacenamiento o análisis independiente.',
          },
          {
            heading: 'Formulario de contacto',
            body: 'El formulario de contacto de este sitio abre su programa local de correo al enviarlo y transmite las entradas como correo electrónico a hello@sonjaspeicher.com. No se produce almacenamiento en servidor ni transmisión a terceros.\n\nEl tratamiento de los datos enviados por correo electrónico se realiza exclusivamente para responder a su consulta y preparar una posible relación comercial (art. 6.1.b RGPD). Los datos se eliminan en cuanto dejan de ser necesarios para dicha finalidad — a más tardar tras la conclusión de un eventual contrato, más los plazos legales de conservación.',
          },
          {
            heading: 'Cookies y seguimiento',
            body: 'Este sitio web no utiliza cookies ni seguimiento web.',
          },
          {
            heading: 'Sus derechos',
            body: 'Conforme al RGPD, usted tiene derecho de acceso (art. 15), rectificación (art. 16), supresión (art. 17), limitación del tratamiento (art. 18), portabilidad (art. 20) y oposición (art. 21).\n\nAsimismo, tiene derecho a presentar una reclamación ante una autoridad de control. La autoridad española competente es la Agencia Española de Protección de Datos (AEPD), https://www.aepd.es.',
          },
          {
            heading: 'Contacto para consultas sobre datos',
            body: 'Dirija cualquier consulta sobre sus datos a: hello@sonjaspeicher.com.',
          },
        ],
      },
    },
  },
};
