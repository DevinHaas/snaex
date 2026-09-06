export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

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
  };
  contact: {
    heading: string;
    intro: string;
    ctaLabel: string;
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
    intro:
      'Hier lernst du bald die Menschen kennen, die Snäx aufbauen, Produkte auswählen und Automaten betreuen. Namen, Rollen und Porträts folgen nach Freigabe.',
  },
  contact: {
    heading: 'Lust auf bessere Pausen?',
    intro:
      'Du möchtest Snäx an deinem Standort? Die geprüften Kontaktangaben werden ergänzt, sobald sie freigegeben sind.',
    ctaLabel: 'Kontaktbereich vormerken',
  },
};
