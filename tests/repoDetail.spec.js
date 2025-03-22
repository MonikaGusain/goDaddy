import { test, expect } from '@playwright/test';

test.describe('Repository Details Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the repository details page directly
    await page.goto('/repo/4967118'); // Replace with a valid repository ID
  });

  test('should display the repository title', async ({ page }) => {
    const repoTitle = page.locator('h1');
    await expect(repoTitle).toContainText('gdapi-php'); // Replace with expected repo name
  });

  test('should display the repository description', async ({ page }) => {
    const repoDescription = page.locator('p').first();
    await expect(repoDescription).toContainText('A PHP client for Go Daddy® REST APIs'); // Replace with expected description
  });

  test('should have a valid link to the GitHub repository', async ({ page }) => {
    const repoLink = page.locator('a[href*="github.com"]');
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute('href', 'https://github.com/godaddy/gdapi-php'); // Replace with expected URL
  });

  test('should display the repository language', async ({ page }) => {
    const repoLanguage = page.locator('text=Language:').locator('..'); // Adjust selector based on your app's structure
    await expect(repoLanguage).toContainText('PHP'); // Replace with expected language
  });

  test('should display repository stats (forks, open issues, watchers)', async ({ page }) => {
    const forks = page.locator('text=Forks:').locator('..'); // Adjust selector based on your app's structure
    await expect(forks).toContainText('15'); // Replace with expected number of forks

    const openIssues = page.locator('text=Open Issues:').locator('..');
    await expect(openIssues).toContainText('2'); // Replace with expected number of open issues

    const watchers = page.locator('text=Watchers:').locator('..');
    await expect(watchers).toContainText('31'); // Replace with expected number of watchers
  });
});