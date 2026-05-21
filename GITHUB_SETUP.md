# Publish preview to GitHub

## 1. Create the repository

Repository: **https://github.com/LarryShawGH/-anushka-site**

## 2. Push this workspace

```powershell
cd c:\Users\lshah\projects\anushka-site
git remote add origin https://github.com/LarryShawGH/-anushka-site.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. Repo **Settings → Pages**
2. **Build and deployment → Source:** **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)`
4. Wait for the **Deploy to GitHub Pages** workflow on the **Actions** tab (pushes the built `dist/` to `gh-pages`)

Do **not** use branch `main` — that serves the dev source and shows a blank page.

## 4. Share for feedback

Preview URL:

**https://larryshawgh.github.io/-anushka-site/**

The yellow banner marks this as a preview until you point `anushkashahactor.com` here.
