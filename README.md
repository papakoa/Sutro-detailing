Sutro Detailing — mobile car detailing marketing site (San Francisco). Next.js (App Router) + Tailwind CSS v4 + Framer Motion, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Content

- `lib/data.ts` — pricing, add-ons, reviews, team bios, benefits, and contact info. Edit copy here, not in components.
- Reviews and team bios are placeholders — swap in real content in `lib/data.ts` once collected.
- Photos are placeholder slots (`components/shared/PlaceholderImage.tsx`) until real photography exists. To add a real photo: drop the file into `public/images/` using the filename already referenced in `lib/data.ts` / the relevant component, then pass it as the `src` prop.
- Booking form (`components/home/BookingForm.tsx`) posts to the existing Formspree endpoint — field names must stay in sync with the Formspree form config if that ever changes.
