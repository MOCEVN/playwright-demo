import { test, expect } from '@playwright/test';

test('Home page links are visible', async ({ page }) => {
  await page.goto('/'); // Homepage
  await expect(page.getByText('About')).toBeVisible();
  await expect(page.getByText('Contact')).toBeVisible();
});

test('Navigate to About page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');           // Klik op de link
  await expect(page).toHaveURL('/about');   // URL check
  await expect(page.locator('h1')).toContainText('About'); // H1 check
});

test('Navigate to Contact page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Contact');         // Klik op de link
  await expect(page).toHaveURL('/contact'); // URL check
  await expect(page.locator('h1')).toContainText('Contact'); // H1 check
});
