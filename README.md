# Karan Goel Portfolio

A public portfolio combining selected projects, work experience, an interactive career timeline, education highlights and a downloadable resume. Built with React, TypeScript and Vite; no backend or live GitHub API is required.

## Development

Use Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

Validate and build:

```bash
npm run typecheck
npm run build
npm run preview
```

The static output is in `frontend/dist/`. Relative asset paths support GitHub Pages and other static hosts.

## Content

Edit `frontend/data.ts` for experience, projects, education and career milestones; edit `frontend/App.tsx` for introductory copy. Replace `frontend/public/Karan_Goel_Resume.pdf` when updating the resume.

Public claims were reconciled with the final resume and supporting records in October 2026. Keep individual ownership distinct from team projects. Add outcomes or metrics only when supported by evidence. Private career analysis and source records are kept outside this repository.

## Deployment

`.github/workflows/deploy.yml` installs dependencies and runs the production build (including the prebuild type check), then publishes to GitHub Pages on pushes to `master` or manual workflow dispatch. GitHub Pages must use GitHub Actions as its deployment source. Feature branches can be reviewed before merging to `master`.
