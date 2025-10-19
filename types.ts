export enum CountryCode {
  NG = 'NG', // Nigeria
  SN = 'SN', // Senegal
  MA = 'MA', // Morocco
  KE = 'KE', // Kenya
}

export enum LanguageCode {
  EN = 'en', // English
  FR = 'fr', // French
  AR = 'ar', // Arabic
  SW = 'sw', // Swahili
  HA = 'ha', // Hausa
  YO = 'yo', // Yoruba
  IG = 'ig', // Igbo
  WO = 'wo', // Wolof
}

export interface Language {
  code: LanguageCode;
  name: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Contact {
    type: 'Police' | 'Ambulance' | 'NGO' | 'Embassy';
    name: string;
    phone: string;
}

export interface LegalPathway {
    name: string;
    description: string;
    steps: string[];
}

export interface Resource {
    title: string;
    description: string;
    link: string;
}

/**
 * Represents all the content for a country that can be translated.
 */
export interface CountryContent {
  myths: string[];
  faqs: FAQ[];
  contacts: Contact[];
  pathways: LegalPathway[];
  resources: Resource[];
}

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  languages: Language[];
  defaultLanguage: LanguageCode;
  content: Partial<Record<LanguageCode, CountryContent>>;
}