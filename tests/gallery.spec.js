const { test, expect } = require('@playwright/test');

test.describe('Gallery', () => {
  test('renders items and opens lightbox', async ({ page }) => {
    await page.goto('http://localhost:8000/');

    // wait for gallery root and grid
    // wait for gallery script to mark readiness
    await page.waitForSelector('#js-gallery-root[data-gallery-ready="1"]', { timeout: 15000 });

    // count items
    const items = await page.$$eval('#js-gallery-root .js-gallery-grid .gallery-item', els => els.length);
    expect(items).toBeGreaterThan(0);

    // capture screenshot for debugging (saved in repo)
    await page.screenshot({ path: 'test-screenshots/gallery.png', fullPage: true });

    // filters were intentionally removed from the gallery; proceed to open a lightbox

    // Try to open the first lightbox anchor
    const anchor = page.locator('#js-gallery-root .js-gallery-grid .popup-photo-gallery-open').first();
    await expect(anchor).toBeVisible();
    // use dispatchEvent to avoid pointer interception by fixed overlays
    await page.evaluate((sel) => {
      const a = document.querySelector(sel);
      if (a) a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    }, '#js-gallery-root .js-gallery-grid .popup-photo-gallery-open');

    // either Magnific Popup (.mfp-wrap) or PhotoSwipe (.pswp) should appear
    const popup = await page.waitForSelector('.mfp-wrap, .pswp', { timeout: 5000 });
    expect(popup).toBeTruthy();

    // close lightbox (try Escape)
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  });
});
