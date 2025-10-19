# The Ones - Portfolio Website

A modern, interactive portfolio template featuring multiple layout variations, video backgrounds, and sophisticated animations.

## Features

- Multiple page layout variants
- Video backgrounds with HTML5
- Responsive design
- Interactive animations
- PhotoSwipe image galleries
- Contact form functionality

## GitHub Actions Workflows

### Static Site Deployment
The main site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### PR Preview System
Every pull request gets its own preview deployment:

- **Automatic Deployment**: When you open a PR or push new commits, a preview is automatically deployed to `https://<owner>.github.io/<repo>/preview/pr-<number>/`
- **PR Comments**: A bot will comment on your PR with the preview URL
- **Automatic Updates**: The preview updates automatically when you push new commits
- **Automatic Cleanup**: When the PR is closed or merged, the preview is automatically removed

The preview deployments are published to the `gh-pages` branch under the `preview/pr-<number>` directory structure.

## Development

This is a static HTML website with no build step required. Simply edit the HTML, CSS, and JavaScript files directly.

### File Structure

- `index.html` - Main landing page
- `css/` - Stylesheets
- `js/` - JavaScript files
- `img/` - Images and assets
- `media/` - Video content
- `fonts/` - Custom fonts
- `photoswipe/` - Image gallery plugin

## License

See LICENSE and MIT-License directories for licensing information.
