import { test } from '@playwright/test';

test('Apply publication type filter', async ({ page }) => {
  // Navigates to the home page of the website
  await page.goto('https://onlinelibrary.wiley.com/results/global-subject-codes/ag70?target=topic-title-results');

   // Click the dropdown
   await page.click('#Books',{ timeout: 5000 });

//    const resultsCount = await page.$$eval('.your-results-selector .result-item', (items) => items.length);
//    console.log(`Number of results after applying filters: ${resultsCount}`);
});