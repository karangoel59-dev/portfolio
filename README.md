# Karan Goel Portfolio

This repository contains a personal portfolio site built with React, TypeScript, and Vite. It is designed to run locally for development and to be published as a static site on GitHub Pages.

## Features

- Responsive portfolio layout
- Resume-style content sections
- Static site generation for GitHub Pages
- Local development server with frontend and backend support

## Project Structure

- `frontend/`: React frontend application
- `backend/`: Node.js backend for proxy-related functionality
- `.github/workflows/`: GitHub Actions workflow for publishing to GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Start the local development environment:

```bash
npm run dev
```

Build the static production site:

```bash
npm run build
```

## GitHub Pages Deployment

The site is configured to build as a static app and publish to GitHub Pages.

1. Push changes to the `main` branch.
2. Ensure GitHub Pages is enabled in the repository settings.
3. Select the GitHub Actions deployment source.
4. The workflow in `.github/workflows/deploy.yml` will publish the site automatically.

## Notes

The frontend build output is generated in `frontend/dist/` and is suitable for static hosting.
