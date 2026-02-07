const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: 'tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    actionTimeout: 10000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: 'python3 -m http.server 8000',
    port: 8000,
    reuseExistingServer: false,
    timeout: 120 * 1000
  }
};
