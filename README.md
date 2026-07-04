# Yogesh — Portfolio

A personal portfolio built with Next.js (App Router) and Tailwind CSS, featuring
an About page (education) and a Projects page.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Editing content

- **About page / Education:** `app/page.js` — edit the `courses` array
- **Projects page:** `app/projects/page.js` — edit the `projects` array
- **Colors & fonts:** `tailwind.config.js`
- **Nav / logo initials:** `app/components/Nav.js`

## Deploying to Vercel

### Option A — via GitHub (recommended)
1. Create a new repository on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com, click **Add New > Project**, and import the repo.
3. Vercel auto-detects Next.js — leave the default settings and click **Deploy**.
4. Your site will be live at `your-project.vercel.app`.

### Option B — via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Run `vercel --prod` to deploy to production.
