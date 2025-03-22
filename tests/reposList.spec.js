import { test, expect } from '@playwright/test';

test.describe('Repository List Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display a list of repositories', async ({ page }) => {
    const repoList = page.locator('.repo-list li');
    await expect(repoList).toHaveCount(30); 
  });

  test('should navigate to repository details page', async ({ page }) => {
    const firstRepo = page.locator('.repo-list li a').first();
    await firstRepo.click();

    await expect(page).toHaveURL(/\/repo\/\d+/);
    await expect(page.locator('h1')).toContainText('gdapi-php');
  });
});

test.describe('Repository Details Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/repo/4967118'); 
  });
});