import { test } from '@playwright/test';

test('Book search using search box', async ({ page }) => {
  // Navigates to the home page of the website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Type 'bio' on search bar
  await page.type('#searchField1', 'bio');

  // Click the search button
  await page.click('.quick-search__button.icon-search');

 
});
