// =============================================================================
// Mallorca Settlement Services - Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Mallorca Settlement Services | Your Guide to Island Living",
  description: "Professional settlement services for expats moving to Mallorca. We handle home administration, local bureaucracy, and help you become a confident Mallorca citizen.",
  language: "en",
  keywords: "Mallorca, settlement services, expat, relocation, Spain, moving to Mallorca, residency, bureaucracy",
  ogImage: "/images/og-image.jpg",
  canonical: "https://sonjaspeicher-custodia.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Mallorca",
  brandSubname: "Settlement",
  tagline: "Your Gateway to Island Living",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "Services", href: "#services", icon: "Grape" },
    { name: "About", href: "#about", icon: "Users" },
    { name: "Resources", href: "#resources", icon: "Newspaper" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Get Started",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "Mallorca",
  brandSubname: "Settlement Services",
  yearText: "Est. 2018",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Your New Life Begins Here",
  mainTitle: "Settle in Mallorca\nWith Confidence",
  ctaButtonText: "Start Your Journey",
  ctaTarget: "#services",
  stats: [
    { value: 500, suffix: "+", label: "Families Helped" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 6, suffix: "+", label: "Years Experience" },
  ],
  decorativeText: "Mediterranean Living",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Services Showcase Config (adapted from Wine Showcase)
// -----------------------------------------------------------------------------
export interface Service {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface ServicesShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  services: Service[];
  features: ServiceFeature[];
  quote: ServiceQuote;
}

export const servicesShowcaseConfig: ServicesShowcaseConfig = {
  scriptText: "What We Offer",
  subtitle: "COMPREHENSIVE SETTLEMENT SOLUTIONS",
  mainTitle: "Your Complete Settlement Package",
  services: [
    {
      id: "residency",
      name: "Residency & Visas",
      subtitle: "Legal Foundation",
      year: "Step 1",
      image: "/images/service-residency.png",
      filter: "",
      glowColor: "bg-amber-500/20",
      description: "Navigate Spanish bureaucracy with ease. We handle all paperwork for residency permits, NIE numbers, and visa applications.",
      tastingNotes: "TIE card, NIE, Visa renewals, Digital certificates",
      alcohol: "2-8 weeks",
      temperature: "High Priority",
      aging: "Ongoing support",
    },
    {
      id: "home",
      name: "Home Setup",
      subtitle: "Your Sanctuary",
      year: "Step 2",
      image: "/images/service-home.png",
      filter: "brightness(1.1) sepia(0.2) hue-rotate(10deg)",
      glowColor: "bg-blue-500/20",
      description: "From finding your perfect home to setting up utilities, internet, and insurance - we make your house a home.",
      tastingNotes: "Utilities, Internet, Insurance, Furnishings",
      alcohol: "1-4 weeks",
      temperature: "Essential",
      aging: "Customizable",
    },
    {
      id: "admin",
      name: "Local Administration",
      subtitle: "Daily Life",
      year: "Step 3",
      image: "/images/service-admin.png",
      filter: "brightness(1.15) sepia(0.3) hue-rotate(-20deg) saturate(1.3)",
      glowColor: "bg-emerald-500/20",
      description: "Master local systems with our guidance. Bank accounts, healthcare registration, schools, and all daily essentials.",
      tastingNotes: "Banks, Healthcare, Schools, Transport",
      alcohol: "Ongoing",
      temperature: "Personalized",
      aging: "Lifetime value",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "Full-Service Support",
      description: "From arrival to full integration, we're with you every step of the way.",
    },
    {
      icon: "Thermometer",
      title: "Local Expertise",
      description: "Deep knowledge of Mallorcan systems, culture, and hidden gems.",
    },
    {
      icon: "Clock",
      title: "Time Saving",
      description: "Avoid months of frustration. We fast-track your settlement process.",
    },
    {
      icon: "Sparkles",
      title: "Stress Free",
      description: "Focus on enjoying your new life while we handle the complexities.",
    },
  ],
  quote: {
    text: "They transformed what felt like an impossible mountain of paperwork into a smooth, guided journey. We couldn't have done it without them.",
    attribution: "Sarah & Michael Thompson",
    prefix: "Client Story",
  },
};

// -----------------------------------------------------------------------------
// Areas Carousel Config (adapted from Winery Carousel)
// -----------------------------------------------------------------------------
export interface AreaSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface AreasCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: AreaSlide[];
}

export const areasCarouselConfig: AreasCarouselConfig = {
  scriptText: "Discover Mallorca",
  subtitle: "ISLAND REGIONS",
  mainTitle: "Find Your Perfect Location",
  locationTag: "Balearic Islands, Spain",
  slides: [
    {
      image: "/images/area-palma.jpg",
      title: "Palma de Mallorca",
      subtitle: "Urban Elegance",
      area: "400",
      unit: "thousand residents",
      description: "The vibrant capital offers historic charm, world-class dining, international schools, and a cosmopolitan lifestyle by the Mediterranean Sea.",
    },
    {
      image: "/images/area-soller.jpg",
      title: "Sóller Valley",
      subtitle: "Mountain Paradise",
      area: "14",
      unit: "thousand residents",
      description: "Nestled between mountains and sea, this orange valley offers authentic Mallorcan living with stunning natural beauty and a tight-knit community.",
    },
    {
      image: "/images/area-pollenca.jpg",
      title: "Pollença & Alcúdia",
      subtitle: "Northern Gem",
      area: "35",
      unit: "thousand residents",
      description: "Crystal-clear bays, medieval towns, and family-friendly beaches make the north perfect for those seeking tranquility and natural beauty.",
    },
    {
      image: "/images/area-calvia.jpg",
      title: "Calvià Coast",
      subtitle: "Southwest Luxury",
      area: "50",
      unit: "thousand residents",
      description: "Premium marinas, golf courses, and exclusive communities attract international residents seeking luxury and world-class amenities.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Process Config (adapted from Museum)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface ProcessTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface ProcessTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: ProcessTabContent;
}

export interface ProcessQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface ProcessConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: ProcessTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: ProcessQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const processConfig: ProcessConfig = {
  scriptText: "How It Works",
  subtitle: "OUR PROCESS",
  mainTitle: "Your Settlement Journey",
  introText: "We've refined our process over 6 years and 500+ successful settlements. Each step is designed to minimize stress and maximize your confidence in your new life.",
  timeline: [
    { year: "Week 1", event: "Initial consultation & planning" },
    { year: "Week 2-3", event: "Documentation & applications" },
    { year: "Week 4-6", event: "Home search & setup" },
    { year: "Week 7-8", event: "Local integration & training" },
    { year: "Ongoing", event: "Continued support & community" },
  ],
  tabs: [
    {
      id: "consultation",
      name: "Consultation",
      icon: "History",
      image: "/images/process-consultation.jpg",
      content: {
        title: "Personalized Planning Session",
        description: "We begin with a comprehensive consultation to understand your unique needs, timeline, and goals. This forms the foundation of your customized settlement plan.",
        highlight: "Every family is different. Your plan is unique.",
      },
    },
    {
      id: "documentation",
      name: "Documentation",
      icon: "BookOpen",
      image: "/images/process-documentation.jpg",
      content: {
        title: "Paperwork Made Simple",
        description: "Our team handles all bureaucratic processes - from NIE applications to residency permits, bank accounts to healthcare registration. We know exactly what you need.",
        highlight: "500+ successful applications and counting.",
      },
    },
    {
      id: "integration",
      name: "Integration",
      icon: "Award",
      image: "/images/process-integration.jpg",
      content: {
        title: "Become a Local",
        description: "Beyond paperwork, we help you understand Mallorcan culture, connect with communities, find schools, and discover the hidden gems that make this island special.",
        highlight: "Join our community of happy expats.",
      },
    },
  ],
  openingHours: "Mon-Fri 9:00 AM - 6:00 PM",
  openingHoursLabel: "Office Hours",
  ctaButtonText: "Schedule Consultation",
  yearBadge: "500+",
  yearBadgeLabel: "Families Helped",
  quote: {
    prefix: "Our Promise",
    text: "We don't just help you move - we help you belong. Every client becomes part of our Mallorca family.",
    attribution: "Maria Santos, Founder",
  },
  founderPhotoAlt: "Maria Santos, Founder of Mallorca Settlement Services",
  founderPhoto: "/images/founder.jpg",
};

// -----------------------------------------------------------------------------
// Resources Config (adapted from News)
// -----------------------------------------------------------------------------
export interface ResourceArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface ResourcesConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: ResourceArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const resourcesConfig: ResourcesConfig = {
  scriptText: "Knowledge Hub",
  subtitle: "HELPFUL RESOURCES",
  mainTitle: "Essential Guides & Insights",
  viewAllText: "View All Resources",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/article-nie.jpg",
      title: "The Complete NIE Guide",
      excerpt: "Everything you need to know about obtaining your Spanish foreigner identification number.",
      date: "January 15, 2024",
      category: "Documentation",
    },
    {
      id: 2,
      image: "/images/article-healthcare.jpg",
      title: "Healthcare in Mallorca",
      excerpt: "Understanding the Spanish healthcare system and your options as a new resident.",
      date: "January 10, 2024",
      category: "Living",
    },
    {
      id: 3,
      image: "/images/article-schools.jpg",
      title: "Schools & Education",
      excerpt: "A comprehensive overview of international and local schools across the island.",
      date: "January 5, 2024",
      category: "Family",
    },
    {
      id: 4,
      image: "/images/article-culture.jpg",
      title: "Embracing Local Culture",
      excerpt: "Tips for integrating into Mallorcan society and building meaningful connections.",
      date: "December 28, 2023",
      category: "Culture",
    },
  ],
  testimonialsScriptText: "Success Stories",
  testimonialsSubtitle: "CLIENT EXPERIENCES",
  testimonialsMainTitle: "What Our Clients Say",
  testimonials: [
    {
      name: "Emma Richardson",
      role: "Moved from London, 2023",
      text: "The team made our move completely stress-free. They handled everything from our residency applications to finding our dream home in Sóller.",
      rating: 5,
    },
    {
      name: "Marcus & Anna Weber",
      role: "Moved from Berlin, 2022",
      text: "We were overwhelmed by the bureaucracy until we found Mallorca Settlement Services. Worth every penny for the peace of mind.",
      rating: 5,
    },
    {
      name: "Jennifer Liu",
      role: "Moved from Singapore, 2023",
      text: "As a single professional moving alone, having local support was invaluable. They helped me build a community within weeks.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Story",
  storySubtitle: "ABOUT US",
  storyTitle: "Why We Do What We Do",
  storyParagraphs: [
    "Mallorca Settlement Services was born from personal experience. Our founder, Maria Santos, moved to Mallorca from Barcelona in 2015 and experienced firsthand the challenges of navigating local bureaucracy as a newcomer.",
    "What started as helping friends quickly grew into a mission: to make Mallorca accessible to everyone who dreams of calling this island home. Today, we've helped over 500 families from 30+ countries start their new lives here.",
    "We believe that the beauty of Mallorca should be enjoyed, not overshadowed by paperwork and confusion. Our team of local experts is dedicated to turning your relocation dreams into reality.",
  ],
  storyTimeline: [
    { value: "500+", label: "Families Helped" },
    { value: "30+", label: "Countries" },
    { value: "6", label: "Years Experience" },
    { value: "98%", label: "Success Rate" },
  ],
  storyQuote: {
    prefix: "Our Mission",
    text: "To help every newcomer fall in love with Mallorca - not just the island, but the life they can build here.",
    attribution: "Maria Santos, Founder",
  },
  storyImage: "/images/our-story.jpg",
  storyImageCaption: "The Mallorca Settlement Services team",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get In Touch",
  subtitle: "CONTACT US",
  mainTitle: "Start Your Mallorca Journey",
  introText: "Ready to make Mallorca your home? Book a free consultation and let's discuss how we can help make your transition smooth and stress-free.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Office Location",
      value: "Carrer de Sant Feliu, 15",
      subtext: "07012 Palma de Mallorca, Spain",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+34 971 234 567",
      subtext: "Mon-Fri, 9am - 6pm CET",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "hello@mallorcasettlement.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: "Clock",
      label: "Office Hours",
      value: "Monday - Friday",
      subtext: "9:00 AM - 6:00 PM CET",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+34 600 000 000",
    visitDateLabel: "Preferred Consultation Date",
    visitorsLabel: "Family Size",
    visitorsOptions: ["Just me", "2 people", "3-4 people", "5+ people"],
    messageLabel: "Tell Us About Your Plans",
    messagePlaceholder: "When are you planning to move? What areas interest you? Any specific concerns?",
    submitText: "Book Free Consultation",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll be in touch within 24 hours to schedule your consultation.",
    errorMessage: "Something went wrong. Please try again or email us directly.",
  },
  privacyNotice: "By submitting this form, you agree to our privacy policy. We never share your information with third parties.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Mallorca Settlement",
  tagline: "Your Gateway to Island Living",
  description: "Professional settlement services helping expats make Mallorca their home. We handle the paperwork so you can focus on living.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Youtube", label: "YouTube", href: "https://youtube.com" },
  ],
  linkGroups: [
    {
      title: "Services",
      links: [
        { name: "Residency & Visas", href: "#services" },
        { name: "Home Setup", href: "#services" },
        { name: "Local Administration", href: "#services" },
        { name: "Ongoing Support", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation Guides", href: "#resources" },
        { name: "Living in Mallorca", href: "#resources" },
        { name: "Family Resources", href: "#resources" },
        { name: "Local Culture", href: "#resources" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Palma de Mallorca, Spain" },
    { icon: "Phone", text: "+34 971 234 567" },
    { icon: "Mail", text: "hello@mallorcasettlement.com" },
  ],
  newsletterLabel: "Subscribe to Our Newsletter",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Something went wrong. Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2024 Mallorca Settlement Services. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  icpText: "",
  backToTopText: "Back to Top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
