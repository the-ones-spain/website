const { test } = require('@playwright/test');

test('debug gallery layout', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.waitForSelector('#js-gallery-root[data-gallery-ready="1"]', { timeout: 15000 });

  const info = await page.$$eval('#js-gallery-root .js-gallery-grid .gallery-item', (els) => {
    return els.slice(0, 10).map((el) => {
      const img = el.querySelector('img');
      const rect = el.getBoundingClientRect();
      const imgRect = img ? img.getBoundingClientRect() : null;
      return {
        outerRect: { w: rect.width, h: rect.height },
        imgRect: imgRect ? { w: imgRect.width, h: imgRect.height, top: imgRect.top, left: imgRect.left } : null,
        naturalWidth: img ? img.naturalWidth : null,
        naturalHeight: img ? img.naturalHeight : null,
        computedDisplay: window.getComputedStyle(el).display,
        computedVisibility: window.getComputedStyle(el).visibility,
        parentDisplay: window.getComputedStyle(el.parentElement).display,
        inlineStyle: el.getAttribute('style')
      };
    });
  });

  console.log('GALLERY DEBUG:', JSON.stringify(info, null, 2));
  const rootRect = await page.$eval('#js-gallery-root', el => el.getBoundingClientRect());
  console.log('GALLERY ROOT RECT:', JSON.stringify({ top: rootRect.top, left: rootRect.left, width: rootRect.width, height: rootRect.height }));
});
