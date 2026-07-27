# Talha Ahmed — Video Editor Portfolio

A production-ready, single-page portfolio site: dark luxury theme, glassmorphism,
GSAP scroll animations, Lenis smooth scrolling, a Three.js ambient particle
background, custom cursor, animated stats, a masonry project grid with a
before/after slider, and a working contact form.

Built as plain HTML/CSS/JS (no build step) so it deploys anywhere in seconds.

## File structure

```
portfolio/
├── index.html      → all markup + SEO meta + JSON-LD
├── style.css        → design tokens, layout, animations
├── script.js         → content data + all interactivity
├── assets/            → put your images/video/CV here
└── README.md
```

## 1. Replace placeholder content

All copy lives in two places:

- **`index.html`** — hero headline, about text, contact details, social links.
- **`script.js`** — top of the file has plain JS arrays for `SERVICES`, `TOOLS_SOFTWARE`,
  `TOOLS_AI`, `SKILLS`, `PROJECTS`, `TESTIMONIALS`, `PRICING`, `TIMELINE`, `FAQS`.
  Edit these arrays directly — the page re-renders from them automatically.

### Images & video to add to `/assets`
- `hero-photo.jpg` — replace the `.hero-photo` placeholder in `index.html` with
  `<img src="assets/hero-photo.jpg" alt="Talha Ahmed">` inside `.hero-photo`.
- `Talha-Ahmed-CV.pdf` — the "Download CV" button already points to
  `/assets/Talha-Ahmed-CV.pdf`.
- `og-cover.jpg` (1200×630) — social share image, referenced in the `<meta>` tags.
- Project thumbnails — swap each `.project-card .thumb` background for a real
  image or embedded video/GIF.

### Real phone/social links
Update in `index.html`:
- WhatsApp: replace `920000000000` in the two `wa.me` links with your number
  (country code, no `+` or spaces).
- Email: replace `hello@talhaahmed.com`.
- LinkedIn / Instagram / Discord: replace the `#` hrefs in the contact socials
  and footer.

## 2. Contact form (EmailJS)

The form currently opens the visitor's email client with a pre-filled message
(zero backend required). To send silently via [EmailJS](https://www.emailjs.com) instead:

1. Create a free EmailJS account, an email service, and a template.
2. Add before `</body>` in `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script>emailjs.init('YOUR_PUBLIC_KEY');</script>
   ```
3. In `script.js`, inside the `contactForm` submit handler, replace the
   `mailto:` fallback with:
   ```js
   emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { name, email, type, message });
   ```

## 3. Deployment

### Vercel (recommended)
```bash
npm i -g vercel
cd portfolio
vercel
```
No config needed — Vercel auto-detects a static site.

### Netlify
Drag the `portfolio` folder into [app.netlify.com/drop](https://app.netlify.com/drop),
or via CLI:
```bash
npm i -g netlify-cli
netlify deploy --dir=portfolio --prod
```

### GitHub Pages
```bash
git init && git add . && git commit -m "init"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Then enable Pages in the repo settings, pointing at the `main` branch root.

## 4. SEO checklist (already wired up)

- Descriptive `<title>` and meta description targeting "video editor",
  "freelance video editor", "AI video editor", etc.
- Open Graph + Twitter Card tags — just add `assets/og-cover.jpg`.
- `Person` JSON-LD schema in the `<head>`.
- Semantic headings (`h1` → `h2` → `h3`), alt text placeholders, and a single
  `h1` in the hero.
- Update `<link rel="canonical">` and the two `og:url` values to your real domain.
- Add a `sitemap.xml` and `robots.txt` once the domain is live (not included,
  since the final URL isn't known yet).

## 5. Performance & accessibility notes

- Fonts load via `@import` in `style.css`; for best performance, self-host or
  switch to `<link rel="preload">` once you finalize which weights you use.
- `prefers-reduced-motion` is respected — all animation/transition durations
  collapse for users who request it.
- Custom cursor auto-disables on touch/narrow viewports (≤860px).
- All interactive elements have visible focus states.

## 6. Want a Next.js / React / TypeScript version instead?

This build intentionally skips a framework so it has zero build step and
deploys instantly. If you'd like it ported to Next.js + TypeScript + Tailwind +
Framer Motion + shadcn/ui (matching the original brief's tech stack) for
easier long-term component development, just ask — the content model above
maps directly onto React components.
