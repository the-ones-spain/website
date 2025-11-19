# The Ones - Portfolio Website Development Guide

## Project Overview
Static HTML5 portfolio site with video backgrounds, interactive carousels, and smooth animations. No build step required—edit HTML/CSS/JS directly.

## Architecture

### Tech Stack (jQuery-based, no build system)
- **jQuery 3.7.1** + **Bootstrap 3.3.7** (grid only)
- **Swiper 4.4.0** for hero video sliders with parallax
- **Owl Carousel 2.2.1** for team/news galleries
- **PhotoSwipe 4.1.1** + **Magnific Popup 1.1.0** for image lightboxes
- **Ionicons 2.0.0** for UI icons
- All plugins bundled in `css/plugins.css` and `js/plugins.js`

### Page Structure Pattern
Single-page app using **hash-based routing** (`#page-home`, `#page-services`, `#page-works`, `#page-contact`):
- Navigation triggers smooth scroll to sections via `js/main.js` anchor handler
- Circular menu (`.round-menu-wrapper`) toggles side panel (`.panel-from-right`)
- Each section wrapped in `.lower-page` or `.upper-page` with `.extra-margin-container`

### Key HTML Patterns
```html
<!-- Section wrapper (all content pages) -->
<div class="lower-page bg-color-1" id="page-services">
  <div class="container-fluid nopadding">
    <div class="extra-margin-container">
      <div class="section-heading"><span>01.</span> Title</div>
      <!-- Content here -->
    </div>
  </div>
</div>

<!-- Video background (hero sections) -->
<video playsinline autoplay muted loop>
  <source src="media/video/video.mp4" type="video/mp4">
</video>

<!-- Owl Carousel pattern -->
<div class="owl-carousel popup-photo-gallery" id="owl-carousel-team">
  <div class="post-box"><!-- item content --></div>
</div>
<div class="owl-nav owl-nav-custom-team"></div>
```

### CSS Organization (`css/style.css`)
- 43 numbered sections (see file header index)
- Background images set via classes: `.img-fullwidth-works-1` through `.img-fullwidth-works-5`
- Color system: `.bg-color-1` (white), `.bg-color-2` (light), `.bg-color-3` (dark)
- Spacing classes: `.divider-xl`, `.divider-l`, `.divider-m`, etc.
- Responsive breakpoints in Owl Carousel configs (not CSS media queries)

### JavaScript Initialization (`js/main.js`)
All plugins initialized in `$(window).on("load", ...)` or `$(function() {...})`:
- **Swiper**: `var swiper1 = new Swiper(".swiper-container.swiper1", {...})`
- **Owl Carousel**: `$("#owl-carousel-team").owlCarousel({responsive: {...}})`
- **Form validation**: `$("form#form").on("submit", ...)` with `.requiredField` class checks
- **Scroll effects**: `.round-menu`, `.to-top-arrow` classes toggle at 100px scroll

## Development Workflows

### Adding Team Members / News Items
1. Clone existing `.post-box` div in `#owl-carousel-team` or `#owl-carousel-news-*`
2. Update image src: `img/about/team/X.jpg` or `img/news/X.jpg`
3. Change title, role, social links (Ionicons: `ion-social-twitter`, `ion-social-instagram`)
4. Carousel auto-adjusts (responsive config: 1→2→3 items)

### Adding New Section
1. Copy existing `.lower-page` block
2. Add unique `id="page-newname"` for hash routing
3. Update `<nav class="navigation-menu">` with new `<a href="#page-newname">` link
4. Increment section number: `<span>05.</span> New Section`
5. Add spacing: `<div class="divider-xl"></div>` between major blocks

### Modifying Hero Video
1. Place MP4 in `media/video/` (optimize: <10MB, H.264 codec)
2. Update `<source src="media/video/yourfile.mp4">` in `.swiper-slide`
3. Ensure `playsinline autoplay muted loop` attributes for mobile autoplay

### Contact Form Setup
- **Note**: Form posts to `contact.php` (not included—add PHP backend or use service like Formspree)
- Validation in `js/main.js`: `.requiredField` class triggers error spans
- Email regex: `/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/`

### WhatsApp Floating Button
Located at bottom of `index.html`:
```javascript
var phone = '34600000000'; // Update with your international number (no +)
var message = "Hi! I'm interested...";
```
Button styled via inline `<style>` in `<head>` (green circle, fixed position)

## Deployment

### GitHub Pages (Automated)
- **Main site**: Push to `main` branch → `.github/workflows/static.yml` deploys to Pages
- **PR Previews**: Every PR gets preview at `https://the-ones-spain.github.io/website/preview/pr-<number>/`
  - Auto-deployed via `.github/workflows/pr-preview.yml`
  - Cleaned up via `.github/workflows/pr-preview-cleanup.yml` on PR close
  - Bot comments preview URL on each PR

### Manual Deployment
- No build step—copy entire repo to web host
- **PHP requirement**: If using contact form, needs PHP server (or replace with static form service)
- Compress videos before deploying (`media/video/*.mp4`)

## Common Tasks

### Change Brand Colors
1. Update `.bg-color-1`, `.bg-color-2`, `.bg-color-3` in `css/style.css`
2. Modify `.section-header-color` for heading colors
3. Update `.hover-effect` overlay colors

### Adjust Carousel Speed/Autoplay
Edit `js/main.js` Owl Carousel configs:
```javascript
autoplay: false,        // Enable/disable
autoplayTimeout: 5000,  // Milliseconds per slide
smartSpeed: 450,        // Transition speed
```

### Add Custom Icons
- Use Ionicons 2.0.0 classes: `<i class="ion-*"></i>`
- Full list: https://ionic.io/ionicons/v2
- Already loaded via `css/plugins.css`

### Responsive Behavior
- Mobile (<768px): Single carousel item, hamburger menu
- Tablet (768-1240px): 2 carousel items
- Desktop (>1240px): 3 carousel items (team) or 2 (news)
- Adjust in `responsive: {...}` objects in `js/main.js`

## File Locations Reference
```
index.html                      # Main page (single HTML file)
css/
  style.css                     # All custom styles (6600+ lines)
  plugins.css                   # Bundled 3rd-party CSS
  mobile-fix.css                # Mobile-specific patches
js/
  main.js                       # All custom JS (11 sections)
  plugins.js                    # Bundled jQuery/Swiper/Owl/PhotoSwipe
img/
  about/team/                   # Team member photos
  works/                        # Portfolio images (works-1.jpg to works-5.jpg)
  background/testimonials.jpg   # Testimonial section background
media/video/                    # Hero/works videos (MP4 format)
photoswipe/                     # Lightbox gallery plugin assets
```

## Debugging Tips
- Check browser console for JS errors (common: missing images, video codecs)
- Swiper not working? Verify `.swiper-container-wrapper > .swiper-container > .swiper-wrapper` nesting
- Carousel not initializing? Ensure unique IDs (`#owl-carousel-team` vs `#owl-carousel-news-1`)
- Hash routing not scrolling? Check for typos in `#page-*` IDs vs `<a href="#page-*">` links
