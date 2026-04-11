# Handcrafted Haven

Handcrafted Haven is a curated marketplace for Curitiba artisans, built with Next.js and Tailwind CSS. The site features:

- Navigation system with shared header links
- Artisan profile pages and list views
- Product catalog grid with filter and search
- Product card UI and dynamic product detail pages
- Customer review sections for products
- Accessible markup, focus states, and screen reader support
- Global theming with shared CSS variables
- GitHub Actions CI pipeline for build and lint checks

## Available Scripts

In the project directory, run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

- `app/` — Application routes and pages
- `components/` — Reusable UI components
- `lib/` — Shared product and artisan data helpers
- `.github/workflows/ci.yml` — Deployment pipeline for GitHub Actions

## Deployment

This repository includes a GitHub Actions workflow that installs dependencies, runs lint, and builds the app on every push and pull request to `main`.

For production deployment, this app is ready for platforms such as Vercel or any container hosting service that supports Next.js.
