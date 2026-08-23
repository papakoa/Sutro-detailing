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
  vehicle?: string;
  quote: string;
  rating: number;
};

// Real Google reviews, transcribed verbatim from screenshots — names and
// quotes must not be altered.
export const reviews: Review[] = [
  {
    name: "Pink Tru",
    quote:
      "Sutro Detailing did such a great job on my car! They were friendly, easy to communicate with, and paid attention to all the little details. My car looked and felt so clean afterward. I also loved the convenience of having them come to me. I would definitely use them again!",
    rating: 5,
  },
  {
    name: "Kenneth Jenq",
    quote:
      "Professional and courteous. Great team making my car interiors spotless. Highly recommended as all the dust and mess my kids made are all gone",
    rating: 5,
  },
  {
    name: "Dave",
    quote:
      "These guys detailed my car after I took it on a camping trip. My car was dirty inside and out and by the time they finished working on it, it looked as good and sparkly as the day I first purchased it. I'd definitely hire these guys again in the future.",
    rating: 5,
  },
  {
    name: "Denise Laugesen",
    vehicle: "Porsche Cayenne",
    quote:
      "I was extremely happy with the level of care they it into my Porsche Cayenne. I highly recommend this team my car never looked so good",
    rating: 5,
  },
  {
    name: "mats leckie",
    quote:
      "Sutro detailing went above and beyond on cleaning my car which was in terrible shape prior to their work. Highly recommend.",
    rating: 5,
  },
  {
    name: "Dao Chung",
    quote: "Absolute stellar job by these young men, 10/10 would recommend!!",
    rating: 5,
  },
  {
    name: "Pamela Chan",
    quote:
      "Great car wash both inside and out! I've never seen my car so shiny. Koa and Bradley were very professional and did a fantastic job. Super convenient that they traveled to me and washed my car right in my driveway.",
    rating: 5,
  },
  {
    name: "Edgar Ho",
    quote:
      "Easy to schedule, great customer service and very thorough work! Will definitely book them again!",
    rating: 5,
  },
  {
    name: "Tony Liu",
    quote:
      "Brad and Koa were great. Very punctual. Extremely detailed and thorough in their work. Highly recommend.",
    rating: 5,
  },
];

export const reviewSummary = {
  average: 5.0,
};

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

export const story = {
  heading: "How Sutro Detailing started",
  paragraphs: [
    "Sutro Detailing started with two high school students, a bucket, some sponges, and a hose — going door to door for neighbors willing to give them a shot. Years and hundreds of cars later, we've refined that hustle into a craft: every detail is built to make your car look like it just rolled off the dealership lot.",
    "Along the way, we built the business around one simple idea — detailing should be effortless for the customer. No shop to drive to. No waiting around. We bring showroom-clean straight to your driveway.",
  ],
};
