import { test } from '@playwright/test';

test('Book search using dropdown', async ({ page }) => {
  // Navigates to the home page of the website
  await page.goto('https://onlinelibrary.wiley.com/');

   // Click the dropdown
   await page.click('#accordionHeader-1');

   // Wait for the dropdown items to appear
   await page.waitForSelector('a[href="/topic/browse/000018"]', { timeout: 5000 });
 
   // Click one of item in the dropdown
   await page.click('a[href="/topic/browse/000018"]');
});