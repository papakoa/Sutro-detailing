export const contact = {
  phone: "(415) 999-6187",
  phoneHref: "+14159996187",
  email: "sutrodetailing@gmail.com",
  // Handle unconfirmed — the old site had no Instagram link. Swap in the real one.
  instagramHandle: "@sutrodetailing",
  instagramUrl: "https://instagram.com/sutrodetailing",
  area: "San Francisco Bay Area",
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
  sedanImage: string;
  largeImage: string;
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
      "Prewash",
      "Contact wash",
      "Hand dry",
      "Tire and rim cleaning",
      "Window cleaning (exterior)",
      "Tire shine",
    ],
    sedanImage: "/images/jobs/job-01.jpg",
    largeImage: "/images/jobs/job-08.jpg",
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
      "Interior vacuum",
      "Full interior wipe-down",
      "Dashboard and console detailing",
      "Mat deep clean",
      "Door jamb cleaning",
      "Interior window cleaning",
    ],
    sedanImage: "/images/jobs/job-03.jpg",
    largeImage: "/images/jobs/job-14.jpg",
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
      "Clay bar treatment",
      "Hand wax coat application",
    ],
    sedanImage: "/images/jobs/job-07.jpg",
    largeImage: "/images/jobs/porsche-macan-luxury.png",
  },
];

export type ServiceOption = {
  id: "exterior" | "interior" | "wax";
  name: string;
  sedanPrice: number;
  largePrice: number;
};

// À la carte services for the booking form — priced so any one, two, or all
// three add up consistently with the package prices above (all three =
// the Luxury package price, for either vehicle size). What each service
// includes is documented on the Price Breakdown page (pricingTiers below),
// not repeated here in the booking form.
export const services: ServiceOption[] = [
  { id: "exterior", name: "Exterior", sedanPrice: 75, largePrice: 90 },
  { id: "interior", name: "Interior", sedanPrice: 75, largePrice: 90 },
  { id: "wax", name: "Wax Coat", sedanPrice: 75, largePrice: 75 },
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

export const team: TeamMember[] = [
  {
    name: "Koa",
    role: "Co-Founder",
    bio: "Began detailing as a senior in high school and fell in love with the process of turning dirty cars into vehicles that looked like they were just pulled out of the dealership. After graduating from St. Ignatius High School, he now attends UCSB pursuing a bachelor's in science.",
    image: "/images/jobs/koa.jpg",
  },
  {
    name: "Brad",
    role: "Co-Founder",
    bio: "Began detailing in high school alongside his friend, and now enjoys finding new ways of improving his craft to produce a better product. After graduating from St. Ignatius High School, he now goes to Santa Clara College where he is majoring in Business.",
    image: "/images/jobs/brad.png",
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
