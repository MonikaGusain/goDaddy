import { test, expect } from '@playwright/test';

test.describe('Repository Details Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/repo/4967118'); 
  });

  test('should display the repository title', async ({ page }) => {
    const repoTitle = page.locator('h1');
    await expect(repoTitle).toContainText('gdapi-php'); 
  });

  test('should display the repository description', async ({ page }) => {
    const repoDescription = page.locator('p').first();
    await expect(repoDescription).toContainText('A PHP client for Go Daddy® REST APIs');
  });

  test('should have a valid link to the GitHub repository', async ({ page }) => {
    const repoLink = page.locator('a[href*="github.com"]');
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute('href', 'https://github.com/godaddy/gdapi-php'); 
  });

  test('should display the repository language', async ({ page }) => {
    const repoLanguage = page.locator('text=Language:').locator('..'); 
    await expect(repoLanguage).toContainText('PHP'); 
  });

  test('should display repository stats (forks, open issues, watchers)', async ({ page }) => {
    const forks = page.locator('text=Forks:').locator('..'); 
    await expect(forks).toContainText('15');

    const openIssues = page.locator('text=Open Issues:').locator('..');
    await expect(openIssues).toContainText('2'); 

    const watchers = page.locator('text=Watchers:').locator('..');
    await expect(watchers).toContainText('31'); 
  });
});