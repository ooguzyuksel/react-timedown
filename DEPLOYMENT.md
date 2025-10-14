# Deployment Guide

This document explains how to deploy Storybook and Documentation sites for React Timedown.

## Architecture Overview

```
📦 React Timedown Project
├── 📚 Storybook (Component Playground)
│   └── Deployed to: GitHub Pages
│   └── URL: https://ooguzyuksel.github.io/react-timedown
│
└── 📄 Documentation Site (Marketing/Docs)
    └── Deployed to: Netlify
    └── URL: https://react-timedown.netlify.app
```

## Why Two Sites?

1. **Storybook** = Developer-focused, interactive component examples
2. **Docs** = User-focused, marketing, quick start, and guides

## Storybook Deployment (GitHub Pages)

### Automatic Deployment

Storybook is automatically deployed via GitHub Actions on every push to main/master.

### Setup Steps

1. **Enable GitHub Pages:**
   ```bash
   # Go to your GitHub repo
   # Settings → Pages
   # Source: GitHub Actions
   ```

2. **Push to trigger deployment:**
   ```bash
   git push origin main
   ```

3. **Visit your Storybook:**
   ```
   https://ooguzyuksel.github.io/react-timedown
   ```

### Manual Deployment

```bash
# Build Storybook
yarn build-storybook

# The output is in storybook-static/
# You can deploy this folder manually to any static hosting
```

## Documentation Site Deployment (Netlify)

### Automatic Deployment (Recommended)

**Via Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Click "Deploy"

**Your site will be live at:** `https://react-timedown.netlify.app`

### Manual Deployment via CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Your site will be at: https://react-timedown.netlify.app
```

### Custom Domain

1. Go to Netlify Dashboard → Your Project → Domain Settings
2. Click "Add custom domain"
3. Add your domain (e.g., `react-timedown.com`)
4. Update DNS records as instructed by Netlify
5. Netlify will automatically provision SSL certificate

## Environment Variables

No environment variables are required for either deployment.

## Build Commands

```bash
# Build Storybook
yarn build-storybook
# Output: storybook-static/

# Build Docs
yarn docs:build
# Output: docs/dist/

# Build NPM package
yarn build
# Output: dist/
```

## Linking Between Sites

The documentation site already includes links to Storybook:

```typescript
// In docs/src/App.tsx
<a href="https://ooguzyuksel.github.io/react-timedown">
  View Interactive Examples
</a>
```

**After deployment, update these URLs to your actual Storybook URL.**

## Troubleshooting

### Storybook 404 on GitHub Pages

If you get 404 errors, check:
1. GitHub Pages is enabled in repository settings
2. Source is set to "GitHub Actions"
3. Workflow has completed successfully

### Docs Build Fails

Check:
1. All dependencies are installed: `yarn install`
2. Build works locally: `yarn docs:build`
3. Node version matches (v20 recommended)

### Links Don't Work

Update Storybook URL in `docs/src/App.tsx` after deployment:
```typescript
// Replace this:
https://ooguzyuksel.github.io/react-timedown

// With your actual Storybook URL
```

## Continuous Deployment

Both sites automatically deploy on push to main/master:

- **Storybook**: GitHub Actions → GitHub Pages
- **Docs**: Netlify → Netlify CDN

No manual intervention needed after initial setup!

Once you connect your GitHub repo to Netlify, every push will automatically:
1. Detect changes via webhook
2. Run `yarn docs:build`
3. Deploy to Netlify CDN
4. Update your live site ✨

## Monitoring

- **GitHub Actions**: Check `.github/workflows/deploy-storybook.yml` runs
- **Netlify**: Check dashboard for deployment status and logs

## Cost

- **GitHub Pages**: Free
- **Netlify**: Free for personal projects (100GB bandwidth/month)

Total cost: **$0** 🎉

