# Contributing — Simple editing instructions

This document explains the easiest ways for a non-technical contributor (for example, your dad) to make content changes so the website updates automatically.

Recommended (no Git knowledge needed)
- Edit the Google Sheet that powers the site (preferred).
  1. Open the project Google Sheet (ask the project maintainer for the link).
  2. Sign in with a Google account and edit cells directly — Google auto-saves.
  3. If the site reads the sheet via CSV, changes are visible immediately after refreshing the site.
  4. If asked to publish the sheet: File → Publish to web → choose the worksheet → CSV → Copy link and send it to the maintainer to update the site config.

Quick web edits (if you must edit repo files)
- Use GitHub's web editor (github.com).
  1. Open the repository page and navigate to the file to edit (for example `data/nh-ai-courses.md`).
  2. Click the pencil icon to edit the file in the browser.
  3. Enter a short commit message (e.g., "Update course info") and choose "Commit directly to the main branch." Click "Commit changes."
  4. Wait a few minutes for GitHub Pages to deploy; then refresh the public site.

Optional GUI option (if comfortable)
- Install GitHub Desktop, clone the repository, open files in a simple editor (Notepad or VS Code), commit, and click "Push" in GitHub Desktop. This is slightly more technical but avoids the command line.

Tips for non-technical editors
- Always include a short description of what you changed in the commit message.
- If you're editing data, update the `Date` or `LastVerified` column so we can track freshness.
- If anything looks broken or you are unsure, stop and ask the maintainer — it's safer than guessing.

If you need help
- Ask the maintainer to add you as an editor for the Google Sheet, or request they make the change and commit on your behalf.

---
Small note for maintainers: If you want, I can wire a simple "Edit" form (hosted) that writes to the Google Sheet, or set up a Git-backed CMS. Ask me which you prefer.
