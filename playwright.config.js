import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where your tests will be stored
  fullyParallel: true, // Run tests in parallel
  retries: 2, // Retry failed tests twice
  workers: process.env.CI ? 1 : undefined, // Use 1 worker in CI, otherwise use all available cores
  reporter: 'html', // Generate an HTML report
  use: {
    baseURL: 'http://localhost:3000', // Base URL for your app
    trace: 'on-first-retry', // Capture traces on first retry
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});