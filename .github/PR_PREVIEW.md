# PR preview workflow (notes)

- This repository's GitHub Pages should be configured to serve from the `gh-pages` branch (root) for the previews created by the workflow to be publicly accessible.
- To change this setting: Repository → Settings → Pages → Source → choose `gh-pages` branch and `/ (root)`, then save.
- The preview workflow publishes previews under: `preview/pr-<number>/` on the `gh-pages` branch. Example public preview URL:
  `https://the-ones-spain.github.io/website/preview/pr-123/`
- The workflow included in PR #1 will copy the repository files (excluding `.git` and the `.github` folder) into `gh-pages/preview/pr-<number>/`. If your site requires a build step (for example a static-site generator), the workflow can be adjusted to run that build before publishing the built artifacts — tell me the build command and output folder and I'll update the workflow accordingly.
- If you prefer provider previews (Netlify / Vercel), those can be used instead — they provide per-PR previews automatically but require connecting the repo to those services.
- I can change the Pages setting to `gh-pages` for you if you grant me permission to update repository settings; otherwise please set Pages to `gh-pages` (root) after this PR is merged.
