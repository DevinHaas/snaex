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
    eyebrow: 'Gesund. Lokal. Griffbereit.',
    heading: 'Gute Snacks gehören näher an den Alltag.',
    intro:
      'Snäx bringt eine handverlesene Auswahl in den Automaten – mit Blick auf gute Zutaten, faire Preise und kurze Wege.',
    ctaLabel: 'Sortiment entdecken',
  },
  products: {
    heading: 'Eine Auswahl, die mehr kann als satt machen.',
    intro:
      'Unser Sortiment wird sorgfältig geprüft und bewusst vielseitig zusammengestellt. Die konkreten Produkte folgen nach der Recherche und Freigabe.',
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
