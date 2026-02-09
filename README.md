# The Quotient Series (Author Site)

This repo contains the Astro-based author site for The Quotient Series.

## Local dev

```bash
npm install
npm run dev
```

## Deploy

GitHub Pages deploys on push to `main` using the workflow in `.github/workflows/deploy.yml`.

If your repo name is not `repo`, update `base` in `astro.config.mjs` to `/<repo-name>` and (optionally) set `site` to `https://<username>.github.io`.
