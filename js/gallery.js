/* js/gallery.js
   Renders a grid gallery from a JS array of image filenames
   Images are expected under: img/gallery/<filename>
*/
(function(){
    // List of images with metadata (title, category)
    var galleryImages = [
        { file: "IMG-20241116-WA0007-EDIT.jpg", title: "This is Us 1", category: "this-is-us" },
        { file: "IMG-20240411-WA0021.jpg", title: "This is Us 2", category: "this-is-us" },
        { file: "IMG-20250908-WA0030.jpg", title: "This is Us 3", category: "this-is-us" },
        { file: "IMG_20251008_093736.jpg", title: "This is Us 4", category: "this-is-us" },
        { file: "IMG_20240408_211942.jpg", title: "This is Us 5", category: "this-is-us" },
        { file: "IMG-20240413-WA0022.jpg", title: "This is Us 6", category: "this-is-us" },
        { file: "IMG-20240407-WA0034.jpg", title: "This is Us 7", category: "this-is-us" },
        { file: "1733313042480-EDIT.jpg", title: "This is Us 8", category: "this-is-us" },
        { file: "IMG-20240413-WA0017.jpg", title: "This is Us 9", category: "this-is-us" },
        { file: "IMG-20240413-WA0016.jpg", title: "This is Us 10", category: "this-is-us" },
        { file: "IMG_20241108_132646.jpg", title: "This is Us 11", category: "this-is-us" },
        { file: "IMG-20241009-WA0020.jpg", title: "This is Us 12", category: "this-is-us" },
        { file: "IMG-20240413-WA0038.jpg", title: "This is Us 13", category: "this-is-us" },
        { file: "IMG-20240410-WA0022.jpg", title: "This is Us 14", category: "this-is-us" },
        { file: "IMG_20251009_092941.jpg", title: "This is Us 15", category: "this-is-us" }
    ];

    function renderGallery() {
        var container = document.querySelector('#js-gallery-root .js-gallery-grid');
        if(!container) return;
        var root = document.querySelector('#js-gallery-root');

        // Render items with overlay and data-category for isotope
        galleryImages.forEach(function(img){
            var item = document.createElement('div');
            item.className = 'gallery-item post-box ' + (img.category ? img.category : 'uncategorized');
            item.setAttribute('data-category', img.category || 'uncategorized');

            var markup = '' +
                '<div class="team-item">' +
                    '<div class="team-item-inner">' +
                        '<div class="team-box">' +
                            '<div class="image-works">' +
                                '<div class="hover-effect hover-effect-team"></div>' +
                                '<div class="icon-works">' +
                                    '<a class="popup-photo-gallery-open" href="img/gallery/' + img.file + '" title="' + img.title + '"></a>' +
                                '</div>' +
                                '<img alt="' + img.title + '" src="img/gallery/' + img.file + '" loading="lazy">' +
                                '<div class="overlay"><div class="meta">' + img.title + '</div></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

            item.innerHTML = markup;
            container.appendChild(item);
        });

        // Helper to mark gallery ready for tests
        function markReady() {
            try { if (root) root.setAttribute('data-gallery-ready', '1'); } catch(e){}
        }

        // After images are appended, initialize imagesLoaded + Isotope when available
        var isotopeInitialized = false;
        var fallbackTimer = null;
        var iso = null;
        var itemsForWidth = null;

        // simple debounce helper
        function debounce(fn, wait) {
            var t = null;
            return function() {
                var ctx = this, args = arguments;
                clearTimeout(t);
                t = setTimeout(function(){ fn.apply(ctx, args); }, wait || 100);
            };
        }

        function initIsotopeAndMark() {
            if (window.imagesLoaded && window.Isotope) {
                imagesLoaded(container, function() {
                    try {
                        // Make sure container is block so Isotope can compute widths
                        container.style.display = 'block';

                        // Compute target columns to size items so Isotope's masonry knows column widths
                        var cols = 1;
                        var w = window.innerWidth || document.documentElement.clientWidth;
                        if (w >= 1400) cols = 5;
                        else if (w >= 1100) cols = 4;
                        else if (w >= 768) cols = 3;
                        else if (w >= 480) cols = 2;
                        else cols = 1;

                        itemsForWidth = container.querySelectorAll('.gallery-item');
                        itemsForWidth.forEach(function(it){
                            it.style.width = (100 / cols) + '%';
                            it.style.boxSizing = 'border-box';
                        });

                        iso = new Isotope(container, {
                            itemSelector: '.gallery-item',
                            layoutMode: 'masonry',
                            transitionDuration: '0.36s',
                            masonry: { columnWidth: '.gallery-item', gutter: 0 }
                        });

                        // Recalculate column widths on resize
                        var recalcColumns = debounce(function(){
                            try {
                                var w2 = window.innerWidth || document.documentElement.clientWidth;
                                var newCols = 1;
                                if (w2 >= 1400) newCols = 5;
                                else if (w2 >= 1100) newCols = 4;
                                else if (w2 >= 768) newCols = 3;
                                else if (w2 >= 480) newCols = 2;
                                else newCols = 1;

                                if (!itemsForWidth || itemsForWidth.length === 0) return;
                                itemsForWidth.forEach(function(it){
                                    it.style.width = (100 / newCols) + '%';
                                    it.style.boxSizing = 'border-box';
                                });

                                if (iso && iso.layout) iso.layout();
                            } catch (e) {
                                // ignore resize errors
                            }
                        }, 150);

                        window.addEventListener('resize', recalcColumns);
                        window.addEventListener('orientationchange', recalcColumns);

                        // Filter buttons
                        var filters = document.querySelectorAll('#js-gallery-root .gallery-filter li');
                        filters.forEach(function(btn){
                            btn.addEventListener('click', function(){
                                filters.forEach(function(b){ b.classList.remove('active'); });
                                btn.classList.add('active');
                                var filter = btn.getAttribute('data-filter');
                                iso.arrange({ filter: filter });
                            });
                        });

                        isotopeInitialized = true;
                        markReady();
                    } catch (e) {
                        // If Isotope init fails, fall back to grid
                        if (root) root.classList.add('use-grid');
                        markReady();
                    }
                });
            } else if (window.imagesLoaded) {
                imagesLoaded(container, function() {
                    // no isotope available, use grid fallback
                    if (root) root.classList.add('use-grid');
                    markReady();
                });
            } else {
                // fallback: if not initialized in 1s, enable grid fallback and mark ready
                fallbackTimer = setTimeout(function(){
                    if (!isotopeInitialized && root) root.classList.add('use-grid');
                    markReady();
                }, 1000);
            }
        }

        initIsotopeAndMark();
    }

    // Run the renderer safely and add fallbacks for load/DOMContentLoaded
    function safeRender() {
        try {
            renderGallery();
        } catch (err) {
            if (window && window.console && window.console.error) {
                console.error('Gallery render error:', err);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', safeRender);
        window.addEventListener('load', safeRender);
    } else {
        // document already interactive/complete
        safeRender();
        window.addEventListener('load', safeRender);
    }
})();
