# The Ones - Portfolio Template Development Guide

## Project Overview
This is "The Ones" - a modern, interactive portfolio template featuring multiple layout variations, video backgrounds, and sophisticated animations. Built on a foundation of HTML5, CSS3, and jQuery with multiple third-party plugins.

## Architecture & File Structure

### Core Template Structure
- **Multiple page variants**: `index.html` (main), `index-02.html`, `index-03.html`, `index-04.html` (layout variations)
- **Blog system**: `blog.html`, `blog-single.html` for content pages
- **Contact processing**: `contact.php` for form handling
- **Asset organization**: `css/`, `js/`, `img/`, `media/`, `fonts/`, `photoswipe/`

### Key Dependencies (loaded via `css/plugins.css` & `js/plugins.js`)
- **jQuery 3.7.1** - Core DOM manipulation
- **Bootstrap 3.3.7** - Grid system and utilities
- **Swiper 4.4.0** - Hero section sliders with parallax
- **Owl Carousel 2.2.1** - Content carousels (team, news, works)
- **Slick 1.6.0** - Fullscreen zoom/fade slideshows
- **PhotoSwipe 4.1.1** - Image gallery lightboxes
- **Magnific Popup 1.1.0** - Modal dialogs and popups
- **Ionicons 2.0.0** - Icon font for UI elements

## Development Patterns

### CSS Architecture (`css/style.css`)
- **Modular organization**: 43 distinct sections (navigation, hero, works, etc.)
- **Responsive design**: Mobile-first approach with breakpoint-specific styles
- **Animation system**: CSS3 transitions with vendor prefixes for smooth interactions
- **Component-based**: Reusable classes like `.testimonials-signature`, `.divider-xl`, `.overlay`

### JavaScript Functionality (`js/main.js`)
1. **Navigation**: Smooth scroll anchoring with hash-based routing
2. **Hero sliders**: Swiper instances with autoplay controls and parallax
3. **Content carousels**: Owl Carousel configurations with responsive breakpoints
4. **Image galleries**: PhotoSwipe and Magnific Popup integrations
5. **Form handling**: Contact form validation and submission
6. **UI effects**: Preloader, scroll indicators, floating elements

### Component Patterns

#### Hero Sections
- Video backgrounds with HTML5 `<video>` elements
- Swiper container structure: `.swiper-container-wrapper > .swiper-container > .swiper-wrapper > .swiper-slide`
- Parallax effects via `data-swiper-parallax` attributes

#### Navigation System
- Circular menu toggle: `.round-menu-wrapper`
- Side panel navigation: `.panel-from-right` with `.navigation-menu`
- Hash-based page routing: `#page-home`, `#page-services`, `#page-works`, `#page-contact`

#### Content Sections
- Consistent structure: `.lower-page` wrapper with `.container-fluid` and `.extra-margin-container`
- Section headers: `.section-heading` with numbered spans
- Content blocks: `.main-text-l` for large text, `.testimonials-signature` for metadata

#### Media Galleries
- Team carousels: `#owl-carousel-team` with responsive item counts (1→2→2→3)
- News carousels: Multiple instances (`#owl-carousel-news-1`, `#owl-carousel-news-2`, etc.)
- Photo galleries: `.popup-photo-gallery` with `.popup-photo-gallery-open` triggers

## Development Workflows

### Adding New Content
1. **New page variants**: Copy existing `index-*.html`, update hero content and navigation
2. **Gallery items**: Add `.post-box` containers within carousel wrappers
3. **Form elements**: Follow `.requiredField` pattern for validation

### Customization Points
- **Colors**: Modify `.bg-color-1`, `.bg-color-2`, `.bg-color-3` classes
- **Typography**: Update Google Fonts imports and font-family declarations
- **Layout spacing**: Adjust `.divider-xl`, `.extra-margin-*` classes
- **Responsive breakpoints**: Modify Owl Carousel responsive configurations

### Asset Management
- **Images**: Store in organized subdirectories (`img/background/`, `img/about/team/`, `img/works/`)
- **Videos**: Place in `media/video/` directory (supports MP4 format)
- **Icons**: Utilize Ionicons classes (`ion-chevron-left`, `ion-plus`, etc.)

## Testing & Browser Support
- Modern browser support with graceful degradation
- Mobile-responsive design tested across device sizes
- Video autoplay compliance (muted, playsinline attributes)
- PhotoSwipe accessibility features (ARIA labels, keyboard navigation)

## Deployment Notes
- **PHP requirement**: Contact form processing requires PHP-enabled server
- **Video optimization**: Compress videos for web delivery
- **Asset optimization**: Minify CSS/JS for production
- **Font loading**: Google Fonts loaded asynchronously

## Common Modifications
- **Brand colors**: Update CSS color variables and background classes
- **Content sections**: Modify `.section-heading` numbers and titles
- **Carousel settings**: Adjust autoplay, timing, and responsive item counts
- **Contact form**: Update `contact.php` email destination and validation rules