import type { ProductCategory } from './products';

export type AdvisorProfile = {
  ageInScope: boolean;
  allergies: string[];
  diet: 'omnivore' | 'vegetarian' | 'vegan';
  goal: 'balanced' | 'satiety' | 'recovery' | 'endurance' | 'hydration';
  occasion: 'everyday' | 'before' | 'during' | 'after';
  duration?: 'short' | 'long';
  taste: 'sweet' | 'savoury' | 'either';
  drink: 'still' | 'sparkling' | 'either';
};

export type AdvisorRecommendation = {
  slug: string;
  score: number;
  reason: string;
};

export type AdvisorResult = {
  state: 'ranked' | 'none';
  title: string;
  intro: string;
  recommendations: AdvisorRecommendation[];
};

type Candidate = {
  slug: string;
  category: ProductCategory;
  diets: AdvisorProfile['diet'][];
  exclusions: string[];
  taste: Exclude<AdvisorProfile['taste'], 'either'>;
  drink?: Exclude<AdvisorProfile['drink'], 'either'>;
};

const candidates: Candidate[] = [
  {
    slug: 'kaegi-chiefs-protein-wafer',
    category: 'protein',
    diets: ['omnivore'],
    exclusions: ['milk', 'gluten', 'soy'],
    taste: 'sweet',
  },
  {
    slug: 'vitamin-well-zero-pineapple',
    category: 'getraenk',
    diets: ['omnivore', 'vegetarian'],
    exclusions: [],
    taste: 'sweet',
    drink: 'still',
  },
  {
    slug: 'alpahirt-bergsalsiz',
    category: 'low-carb',
    diets: ['omnivore'],
    exclusions: [],
    taste: 'savoury',
  },
  {
    slug: 'darvida-nature',
    category: 'snack',
    diets: ['omnivore', 'vegetarian', 'vegan'],
    exclusions: ['gluten'],
    taste: 'savoury',
  },
];

const categoryOrder: ProductCategory[] = ['protein', 'getraenk', 'low-carb', 'snack'];

const goalScores: Record<AdvisorProfile['goal'], Record<ProductCategory, number>> = {
  balanced: { protein: 70, getraenk: 55, 'low-carb': 68, snack: 86 },
  satiety: { protein: 82, getraenk: 42, 'low-carb': 84, snack: 74 },
  recovery: { protein: 88, getraenk: 38, 'low-carb': 76, snack: 54 },
  endurance: { protein: 62, getraenk: 78, 'low-carb': 48, snack: 82 },
  hydration: { protein: 28, getraenk: 88, 'low-carb': 24, snack: 32 },
};

const reasons: Record<AdvisorProfile['goal'], Record<ProductCategory, string>> = {
  balanced: {
    protein: 'Proteinformat für eine süsse Pause; die vollständige Nährwertbewertung steht noch aus.',
    getraenk: 'Passt als Getränk zum Moment, ist aber keine wasserbasierte erste Wahl.',
    'low-carb': 'Herzhafte Option mit kurzer Zutatenliste und viel Eiweiss pro 100 g.',
    snack: 'Vegane Vollkornoption für eine unkomplizierte Alltagspause.',
  },
  satiety: {
    protein: 'Enthält 13 g Protein pro Packung und passt zum süssen Geschmacksprofil.',
    getraenk: 'Ein Getränk ergänzt die Pause, ersetzt aber keinen sättigenden Snack.',
    'low-carb': 'Herzhaftes Proteinformat; Portionsenergie und Salz bleiben wichtige Grenzen.',
    snack: 'Vollkorn und Nahrungsfasern machen es zur naheliegenden Snackoption.',
  },
  recovery: {
    protein: 'Der stärkste Kategorien-Match, mit 13 g aber unter der 20-g-Schwelle für einen Recovery-Claim.',
    getraenk: 'Kann die Pause ergänzen, liefert aber keinen belegten Recovery-Beitrag.',
    'low-carb': 'Eiweissreich pro 100 g, die Menge pro Verkaufspackung muss noch bestätigt werden.',
    snack: 'Praktische Kohlenhydratoption, aber kein eigenständiger Recovery-Snack.',
  },
  endurance: {
    protein: 'Eher nach als während der Aktivität; nicht als Ausdauer-Fuel qualifiziert.',
    getraenk: 'Das Getränkeformat passt, ist aber kein verifiziertes Sportgetränk.',
    'low-carb': 'Herzhaft und kompakt, während langer Belastung jedoch wenig praktisch.',
    snack: 'Kohlenhydrathaltige, gut portionierbare Option rund um längere Aktivität.',
  },
  hydration: {
    protein: 'Kann neben einem Getränk stehen, unterstützt das Flüssigkeitsziel selbst aber nicht.',
    getraenk: 'Trifft die Getränkekategorie; für tägliche Hydration bleibt Wasser die erste Wahl.',
    'low-carb': 'Herzhafte Ergänzung, aber kein Match für das eigentliche Flüssigkeitsziel.',
    snack: 'Snackoption neben dem Getränk, ohne eigenes Hydrationsversprechen.',
  },
};

export function recommendSnacks(profile: AdvisorProfile): AdvisorResult {
  if (!profile.ageInScope) {
    return {
      state: 'none',
      title: 'Der Finder ist für Erwachsene von 18 bis 65 gedacht.',
      intro: 'Ausserhalb dieses Rahmens zeigen wir bewusst keine persönliche Rangliste.',
      recommendations: [],
    };
  }

  const selectedExclusions = profile.allergies.filter((item) => item !== 'none');
  const available = candidates.filter(
    (candidate) =>
      candidate.diets.includes(profile.diet) &&
      !selectedExclusions.includes('other') &&
      !candidate.exclusions.some((item) => selectedExclusions.includes(item)),
  );

  const recommendations = available
    .map((candidate) => {
      let score = goalScores[profile.goal][candidate.category];
      if (profile.taste !== 'either') score += candidate.taste === profile.taste ? 8 : -5;
      if (candidate.drink && profile.drink !== 'either') score += candidate.drink === profile.drink ? 6 : -6;
      if (profile.occasion === 'during') score += candidate.category === 'getraenk' ? 7 : candidate.category === 'low-carb' ? -8 : 0;
      if (profile.occasion === 'after' && candidate.category === 'protein') score += 6;
      if (profile.duration === 'long' && candidate.category === 'snack') score += 4;

      return {
        slug: candidate.slug,
        score: Math.max(20, Math.min(96, score)),
        reason: reasons[profile.goal][candidate.category],
        category: candidate.category,
      };
    })
    .sort(
      (a, b) =>
        b.score - a.score || categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
    )
    .slice(0, 5)
    .map(({ category: _category, ...recommendation }) => recommendation);

  return recommendations.length
    ? {
        state: 'ranked',
        title: 'Deine besten Matches',
        intro: 'Der Fit-Score ordnet Ziel, Moment und Vorlieben ein. Er ist kein Gesundheits- oder Wirksamkeitswert.',
        recommendations,
      }
    : {
        state: 'none',
        title: 'Kein Produkt passiert alle Filter.',
        intro: 'Passe einen Filter an oder prüfe die Zutaten direkt am Automaten.',
        recommendations: [],
      };
}
