# Deployment Guide

## Deploy to Vercel

1. Push the project to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the repository.
4. Use these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

## Deploy to Netlify

1. Push the project to GitHub.
2. Open Netlify and choose **Add new site**.
3. Import the repository.
4. Use these settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click **Deploy site**.

## Deploy to GitHub Pages

Install the GitHub Pages helper:

```bash
npm install --save-dev gh-pages
```

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then run:

```bash
npm run deploy
```

For GitHub Pages under a repository subpath, configure Vite's `base` value in `vite.config.js`.
