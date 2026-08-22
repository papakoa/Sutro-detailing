export const contact = {
  phone: "(415) 999-6187",
  phoneHref: "+14159996187",
  email: "sutrodetailing@gmail.com",
  // Handle unconfirmed — the old site had no Instagram link. Swap in the real one.
  instagramHandle: "@sutrodetailing",
  instagramUrl: "https://instagram.com/sutrodetailing",
  area: "San Francisco, CA",
  formspreeEndpoint: "https://formspree.io/f/mrenbywd",
};

export type PricingTier = {
  id: "classic" | "premium" | "luxury";
  badge: string;
  name: string;
  sedanPrice: number;
  largePrice: number;
  sedanDuration: string;
  largeDuration: string;
  features: string[];
  featured?: boolean;
  image: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "classic",
    badge: "Tier 01",
    name: "Classic",
    sedanPrice: 75,
    largePrice: 90,
    sedanDuration: "~1 hr",
    largeDuration: "~1.5 hrs",
    features: [
      "Exterior hand wash & dry",
      "Wheel & tire cleaning",
      "Window cleaning (exterior)",
      "Tire shine",
    ],
    image: "/images/package-classic.jpg",
  },
  {
    id: "premium",
    badge: "Tier 02 · Most popular",
    name: "Premium",
    sedanPrice: 150,
    largePrice: 180,
    sedanDuration: "~2 hrs",
    largeDuration: "2–3 hrs",
    featured: true,
    features: [
      "Everything in Classic package",
      "Full interior vacuum & wipe-down",
      "Dashboard & console detailing",
      "Interior window cleaning",
      "Door jambs & trim clean",
    ],
    image: "/images/package-premium.jpg",
  },
  {
    id: "luxury",
    badge: "Tier 03",
    name: "Luxury",
    sedanPrice: 225,
    largePrice: 255,
    sedanDuration: "~2.5 hrs",
    largeDuration: "2.5–3.5 hrs",
    features: [
      "Everything in Premium package",
      "Hand wax coat application",
      "Clay bar",
    ],
    image: "/images/package-luxury.jpg",
  },
];

export type ServiceOption = {
  id: "exterior" | "interior" | "wax";
  name: string;
  blurb: string;
  features: string[];
  sedanPrice: number;
  largePrice: number;
};

// À la carte services for the booking form — priced so any one, two, or all
// three add up consistently with the package prices above (all three =
// the Luxury package price, for either vehicle size).
export const services: ServiceOption[] = [
  {
    id: "exterior",
    name: "Exterior",
    blurb: "Wash, wheels, tires, windows",
    features: [
      "Exterior hand wash & dry",
      "Wheel & tire cleaning",
      "Window cleaning (exterior)",
      "Tire shine",
    ],
    sedanPrice: 75,
    largePrice: 90,
  },
  {
    id: "interior",
    name: "Interior",
    blurb: "Vacuum, dash, interior windows, jambs",
    features: [
      "Full interior vacuum & wipe-down",
      "Dashboard & console detailing",
      "Interior window cleaning",
      "Door jambs & trim clean",
    ],
    sedanPrice: 75,
    largePrice: 90,
  },
  {
    id: "wax",
    name: "Wax Coat",
    blurb: "Hand wax + clay bar",
    features: ["Hand wax coat application", "Clay bar"],
    sedanPrice: 75,
    largePrice: 75,
  },
];

export type Addon = {
  id: "pet_hair" | "heavy_soil" | "headlight_restoration";
  name: string;
  note?: string;
  price: number;
};

export const addons: Addon[] = [
  { id: "pet_hair", name: "Pet hair removal", price: 30 },
  {
    id: "heavy_soil",
    name: "Heavy Soil / Extra Mess Fee",
    note: "For heavily soiled interiors",
    price: 30,
  },
  {
    id: "headlight_restoration",
    name: "Headlight restoration",
    note: "Restores clarity to foggy or yellowed headlights",
    price: 150,
  },
];

export type Review = {
  name: string;
  vehicle: string;
  quote: string;
  rating: number;
};

// Placeholder reviews — swap in real customer quotes once collected.
export const reviews: Review[] = [
  {
    name: "Jordan M.",
    vehicle: "Tesla Model 3",
    quote:
      "Booked in under a minute and my car looked showroom new by the time they left. Insanely convenient.",
    rating: 5,
  },
  {
    name: "Priya S.",
    vehicle: "BMW X5",
    quote:
      "They came right to my building's garage. The interior detail was worth every penny.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    vehicle: "Audi Q5",
    quote:
      "Professional, on time, and the difference after the Luxury package was night and day.",
    rating: 5,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

// Placeholder bios — replace with Koa & Brad's real backgrounds.
export const team: TeamMember[] = [
  {
    name: "Koa",
    role: "Co-Founder",
    bio: "Add Koa's bio here — background, what drew you to detailing, what you focus on day to day.",
    image: "/images/team-koa.jpg",
  },
  {
    name: "Brad",
    role: "Co-Founder",
    bio: "Add Brad's bio here — background, what drew you to detailing, what you focus on day to day.",
    image: "/images/team-brad.jpg",
  },
];

export const benefits = [
  {
    title: "Protects your investment",
    description:
      "Regular detailing preserves paint, leather, and resale value against sun, salt, and daily wear.",
  },
  {
    title: "We come to you",
    description:
      "No dropping off, no waiting rooms — we detail in your driveway, garage, or office lot.",
  },
  {
    title: "Pride of ownership",
    description:
      "A clean car feels like a new car. Small ritual, big difference in how you feel behind the wheel.",
  },
];

// Brief origin-story placeholder, loosely inspired by the door-to-door hustle
// in the founders' own notes — personalize with the real story.
export const story = {
  heading: "How Sutro Detailing started",
  paragraphs: [
    "Sutro Detailing started the way most small businesses do — going door to door around San Francisco, one car and one referral at a time.",
    "Koa and Brad built the business on a simple idea: detailing should be effortless for the customer. No shop to drive to, no waiting around — just a showroom-clean car wherever you already are.",
    "That same door-to-door hustle is still the foundation today, just with a few more tools (and a lot more five-star washes) along the way.",
  ],
};
