# Dr. Maya Reynolds Therapy Website

A Next.js + Tailwind CSS implementation for the Grow My Therapy internship assignment.

## What is included

- Responsive homepage inspired by the supplied Conejo Valley counseling template
- New sage / cream / clay visual theme
- Maya Reynolds profile-based copy
- 3 profile-relevant service cards
- About section
- Approach / modalities section
- Custom "Our Office" section
- FAQ accordion
- Contact/CTA section
- Responsive mobile navigation
- SEO metadata

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Important image note

The assignment profile supplied Google Drive image IDs. The page currently references those public Drive files directly:

- Maya portrait: `1koVGhvD8mkiRXRukqrklo0HbB48p9PIa`
- Office image 1: `1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW`
- Office image 2: `1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy`

If the Drive permissions prevent browser loading, download the images from the provided Drive links, place them in `public/images/`, and replace the three URLs in `app/page.js` with local paths such as `/images/maya.jpg`.

## Deployment

Push this repository to GitHub and import it into Vercel. The project uses standard Next.js scripts, so no special build command is required beyond the default:

- Build command: `npm run build`
- Output: Next.js default

