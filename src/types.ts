export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  }[];
  details: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface PlatformFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface LanguageDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    platform: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statEmployees: string;
    statPages: string;
    statHistory: string;
    statData: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    ownershipTitle: string;
    ownershipDesc: string;
    missionTitle: string;
    missionDesc: string;
    valuesTitle: string;
    valuesDesc: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    coreTitle: string;
    coreDesc: string;
    portalTitle: string;
    portalDesc: string;
    jurisnetTitle: string;
    jurisnetDesc: string;
    otherServicesTitle: string;
    otherServicesDesc: string;
    servicesList: ServiceItem[];
    portalFeatures: string[];
  };
  platform: {
    title: string;
    subtitle: string;
    intro: string;
    desc: string;
    benefitsTitle: string;
    benefitsIntro: string;
    featuresList: PlatformFeature[];
    implementationTitle: string;
    implementationDesc: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    highlightTitle: string;
    highlightDesc: string;
    highlightStats: {
      value: string;
      label: string;
    }[];
    otherProjectsTitle: string;
    projectList: ProjectItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    addressTitle: string;
    addressValue: string;
    phoneTitle: string;
    phoneValue: string;
    emailTitle: string;
    emailValue: string;
    hoursTitle: string;
    hoursValue: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formPending: string;
  };
  footer: {
    desc: string;
    linksTitle: string;
    servicesTitle: string;
    rights: string;
    ownershipBadge: string;
  };
}

export type Language = 'pt' | 'en';
