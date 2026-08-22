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
      "Exterior hand wash & dry",
      "Wheel & tire cleaning",
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
      "Full interior vacuum & wipe-down",
      "Dashboard & console detailing",
      "Interior window cleaning",
      "Door jambs & trim clean",
    ],
    sedanImage: "/images/jobs/job-09.jpg",
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
      "Hand wax coat application",
      "Clay bar",
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

export type JobPhoto = {
  src: string;
  alt: string;
};

// Real job photos (Audi SQ5, Ford Bronco, BMW M2 Competition), spot-checked
// for accurate captions and for visible license plates. An earlier batch of
// 14 photos from the original export is intentionally excluded — several
// had unredacted plates.
export const jobPhotos: JobPhoto[] = [
  { src: "/images/jobs/job-15.jpg", alt: "Audi SQ5 — rear, after detail" },
  { src: "/images/jobs/job-16.jpg", alt: "Audi SQ5 — side, before detail" },
  { src: "/images/jobs/job-17.jpg", alt: "Audi SQ5 — door detail, before" },
  { src: "/images/jobs/job-18.jpg", alt: "Audi SQ5 — hood, before detail" },
  { src: "/images/jobs/job-19.jpg", alt: "Audi SQ5 — rear interior, before" },
  { src: "/images/jobs/job-20.jpg", alt: "Audi SQ5 — rear interior, before" },
  { src: "/images/jobs/job-21.jpg", alt: "Audi SQ5 — rear interior, after" },
  { src: "/images/jobs/job-22.jpg", alt: "Audi SQ5 — rear interior detail" },
  { src: "/images/jobs/job-23.jpg", alt: "Audi SQ5 — front interior, after" },
  { src: "/images/jobs/job-24.jpg", alt: "Audi SQ5 — console detail" },
  { src: "/images/jobs/job-25.jpg", alt: "Audi SQ5 — trunk, after detail" },
  { src: "/images/jobs/job-26.jpg", alt: "Audi SQ5 — side, foam wash" },
  { src: "/images/jobs/job-27.jpg", alt: "Audi SQ5 — front, foam wash" },
  { src: "/images/jobs/job-28.jpg", alt: "Audi SQ5 — side, after detail" },
  { src: "/images/jobs/job-29.jpg", alt: "Audi SQ5 — rear, after detail" },
  { src: "/images/jobs/job-30.jpg", alt: "Audi SQ5 — front, after detail" },
  { src: "/images/jobs/job-31.jpg", alt: "Audi SQ5 — hood detail" },
  { src: "/images/jobs/job-32.jpg", alt: "Audi SQ5 — hood detail" },
  { src: "/images/jobs/job-33.jpg", alt: "Audi SQ5 — front 3/4, after detail" },
  { src: "/images/jobs/job-34.jpg", alt: "Ford Bronco — rear, before detail" },
  { src: "/images/jobs/job-35.jpg", alt: "Ford Bronco — trunk, after detail" },
  { src: "/images/jobs/job-36.jpg", alt: "Ford Bronco — trunk, before detail" },
  { src: "/images/jobs/job-37.jpg", alt: "Ford Bronco — front interior, after" },
  { src: "/images/jobs/job-38.jpg", alt: "Ford Bronco — rear interior, after" },
  { src: "/images/jobs/job-39.jpg", alt: "Ford Bronco — rear interior, after" },
  { src: "/images/jobs/job-40.jpg", alt: "Ford Bronco — front interior, after" },
  { src: "/images/jobs/job-41.jpg", alt: "Ford Bronco — side profile" },
  { src: "/images/jobs/job-42.jpg", alt: "Ford Bronco — rear 3/4, after detail" },
  { src: "/images/jobs/job-43.jpg", alt: "Ford Bronco — front interior, before" },
  { src: "/images/jobs/job-44.jpg", alt: "Ford Bronco — rear interior, before" },
  { src: "/images/jobs/job-45.jpg", alt: "Ford Bronco — front interior, before" },
  { src: "/images/jobs/job-46.jpg", alt: "Ford Bronco — rear interior, before" },
  { src: "/images/jobs/job-47.jpg", alt: "BMW M2 Competition — rear 3/4, after" },
  { src: "/images/jobs/job-48.jpg", alt: "BMW M2 Competition — rear, after detail" },
  { src: "/images/jobs/job-49.jpg", alt: "BMW M2 Competition — rear, before detail" },
  { src: "/images/jobs/job-50.jpg", alt: "BMW M2 Competition — side profile" },
  { src: "/images/jobs/job-51.jpg", alt: "BMW M2 Competition — trunk, after detail" },
  { src: "/images/jobs/job-52.jpg", alt: "BMW M2 Competition — front 3/4" },
  { src: "/images/jobs/job-53.jpg", alt: "BMW M2 Competition — trunk, before detail" },
  { src: "/images/jobs/job-54.jpg", alt: "BMW M2 Competition — windshield detail" },
  { src: "/images/jobs/job-55.jpg", alt: "BMW M2 Competition — wheel detail, before" },
  { src: "/images/jobs/job-56.jpg", alt: "BMW M2 Competition — front 3/4, before" },
  { src: "/images/jobs/job-57.jpg", alt: "BMW M2 Competition — front, before detail" },
];
