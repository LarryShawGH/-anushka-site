# Anushka Shah — Artist Portfolio (v2)

Modern marketing site for **Anushka Shah** (actor, playwright, poet). Built as a preview before replacing [anushkashahactor.com](https://www.anushkashahactor.com/).

## Preview URL

After GitHub Pages is enabled (**Settings → Pages → Source: GitHub Actions**):

**https://larryshawgh.github.io/anushka-site/**

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5174

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero, intro, skills, quick links |
| `/about` | Bio (from live site) + contact form |
| `/portfolio` | Credits & filterable projects |
| `/reel` | Reel placeholder (add Vimeo/YouTube URLs in `src/data/site.ts`) |
| `/headshots` | Headshots from reference site + resume download slots |
| `/contact` | Booking / collaboration form |

## Content & images

- Copy adapted from [anushkashahactor.com](https://www.anushkashahactor.com/)
- Photos downloaded to `public/images/` from Squarespace CDN
- Resume PDFs: add files under `public/downloads/` and wire buttons in `HeadshotsPage.tsx`

## Deploy

Push to `main` — the workflow builds `dist/` and deploys via GitHub Actions.

```bash
git push origin main
```

## Feedback → production

1. Share the GitHub Pages preview link for review
2. Iterate on copy, reel embeds, and resume PDFs
3. Point `anushkashahactor.com` DNS to GitHub Pages or Vercel when ready
