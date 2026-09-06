import type { ImageMetadata } from 'astro';

import devinPortrait from '../assets/team/devin-placeholder.svg';
import janMoserPortrait from '../assets/team/jan-moser-placeholder.svg';

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface TeamMember {
  name: string;
  role: string;
  image: ImageMetadata;
  alt: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface ApprovedContactDetails {
  status: 'approved';
  email: string;
  emailHref: `mailto:${string}`;
  phoneDisplay?: string;
  phoneHref?: `tel:${string}`;
  ctaLabel: string;
  legalLinks: LegalLink[];
}

export interface PendingContactDetails {
  status: 'pending';
}

export type ContactDetails = ApprovedContactDetails | PendingContactDetails;

export interface SiteContent {
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    heading: string;
    intro: string;
    ctaLabel: string;
    valueCues: string[];
  };
  products: {
    heading: string;
    intro: string;
    categories: string[];
  };
  philosophy: {
    heading: string;
    statement: string;
    principles: string[];
  };
  team: {
    heading: string;
    intro: string;
    members: TeamMember[];
  };
  contact: {
    heading: string;
    intro: string;
    details: ContactDetails;
  };
}

export const siteContent: SiteContent = {
  navigation: [
    { label: 'Produkte', href: '#produkte' },
    { label: 'Philosophie', href: '#philosophie' },
    { label: 'Unser Team', href: '#team' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  hero: {
    eyebrow: 'Gesund. Lokal. Jederzeit griffbereit.',
    heading: 'Der Automat, der bessere Pausen möglich macht.',
    intro:
      'Snäx bringt handverlesene Produkte dorthin, wo dein Alltag stattfindet – mit guten Zutaten, fairen Preisen und einem klaren Fokus auf Schweizer Herkunft.',
    ctaLabel: 'Sortiment entdecken',
    valueCues: ['handverlesen', 'gesund', 'frisch', 'natürlich', 'persönlich'],
  },
  products: {
    heading: 'Was passt heute zu deiner Pause?',
    intro:
      'Protein für lange Tage, etwas Kühles gegen den Durst, Low-Carb für zwischendurch und vertraute Schweizer Snacks: bewusst gemischt statt beliebig gefüllt.',
    categories: ['Protein', 'Getränke', 'Low Carb', 'Snacks'],
  },
  philosophy: {
    heading: 'Einfach besser snacken.',
    statement:
      'Wir glauben, dass die bessere Wahl nicht weiter weg sein sollte – sondern genau dort, wo der Hunger kommt.',
    principles: ['handverlesen', 'gesund', 'frisch', 'natürlich', 'persönlich'],
  },
  team: {
    heading: 'Persönlich ausgewählt. Persönlich betreut.',
    intro: 'Devin Hasler und Jan Moser haben Snäx gemeinsam gegründet.',
    members: [
      {
        name: 'Devin Hasler',
        role: 'Mitgründer und Software Developer',
        image: devinPortrait,
        alt: 'Porträt von Devin Hasler',
      },
      {
        name: 'Jan Moser',
        role: 'Mitgründer',
        image: janMoserPortrait,
        alt: 'Porträt von Jan Moser',
      },
    ],
  },
  contact: {
    heading: 'Lust auf bessere Pausen?',
    intro: 'Du möchtest Snäx an deinem Standort oder mehr über unser Angebot erfahren? Wir freuen uns auf deine Nachricht.',
    details: {
      status: 'approved',
      email: 'info@snäx.you',
      emailHref: 'mailto:info@xn--snx-rla.you',
      ctaLabel: 'Schreib uns',
      legalLinks: [],
    },
  },
};
