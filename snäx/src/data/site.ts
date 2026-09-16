import type { ImageMetadata } from 'astro';

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
    heading: string;
    intro: string;
    ctaLabel: string;
  };
  products: {
    heading: string;
    intro: string;
  };
  categoryGuide: {
    eyebrow: string;
    heading: string;
    intro: string;
    categories: Array<{
      slug: 'protein' | 'kohlenhydrate' | 'gesunde-fette' | 'hydration';
      name: string;
      benefit: string;
      description: string;
    }>;
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
    { label: 'Kategorien', href: '#kategorien' },
    { label: 'Philosophie', href: '#philosophie' },
    { label: 'Unser Team', href: '#team' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  hero: {
    heading: 'Der Automat, der bessere Pausen möglich macht.',
    intro:
      'Snäx bringt handverlesene Produkte dorthin, wo dein Alltag stattfindet – mit guten Zutaten, fairen Preisen und einem klaren Fokus auf Schweizer Herkunft.',
    ctaLabel: 'Sortiment entdecken',
  },
  products: {
    heading: 'Was passt heute zu deiner Pause?',
    intro:
      'Protein, Energie, gesunde Fette und Hydration: bewusst gemischt statt beliebig gefüllt.',
  },
  categoryGuide: {
    eyebrow: 'Unser Kategoriensystem',
    heading: 'Vier Kategorien. Klar ausgewählt.',
    intro:
      'Damit du im Automaten schneller findest, was gerade zu deinem Tag passt, ordnen wir jedes Produkt nach seinem wichtigsten Beitrag ein.',
    categories: [
      {
        slug: 'protein',
        name: 'Protein',
        benefit: 'Aufbauen. Regenerieren. Leisten.',
        description:
          'Unterstützt den Muskelaufbau, fördert die Regeneration und sorgt für ein langanhaltendes Sättigungsgefühl.',
      },
      {
        slug: 'kohlenhydrate',
        name: 'Carbohydrates',
        benefit: 'Energie. Fokus. Weiterkommen.',
        description:
          'Liefern schnell verfügbare Energie für den Alltag und deine Aktivität.',
      },
      {
        slug: 'gesunde-fette',
        name: 'Healthy Fats',
        benefit: 'Nähren. Ausgleichen. Wohlfühlen.',
        description:
          'Liefern wertvolle Fettsäuren und unterstützen wichtige Körperfunktionen.',
      },
      {
        slug: 'hydration',
        name: 'Hydration',
        benefit: 'Trinken. Fokussieren. Dranbleiben.',
        description:
          'Unterstützt den Flüssigkeitshaushalt und hilft dir, konzentriert und leistungsfähig zu bleiben.',
      },
    ],
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
        image: { src: '/founders/devin.webp', width: 1200, height: 1200, format: 'webp' },
        alt: 'Porträt von Devin Hasler',
      },
      {
        name: 'Jan Moser',
        role: 'Mitgründer',
        image: { src: '/founders/jan.webp', width: 739, height: 1600, format: 'webp' },
        alt: 'Porträt von Jan Moser',
      },
    ],
  },
  contact: {
    heading: 'Lust auf bessere Pausen?',
    intro: 'Du möchtest Snäx an deinem Standort oder mehr über unser Angebot erfahren? Wir freuen uns auf deine Nachricht.',
    details: {
      status: 'approved',
      email: 'info@snax.you',
      emailHref: 'mailto:info@snax.you',
      ctaLabel: 'Schreib uns',
      legalLinks: [],
    },
  },
};
