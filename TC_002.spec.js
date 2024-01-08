import { test } from '@playwright/test';

test('User Login', async ({ page }) => {
  // Navigates to the home page of the website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click the Login/Register button
  await page.click('.show-login',{ timeout: 5000 });
 
  // Type the email
  await page.type('#username', 'yehedahanayake@gmail.com',{ timeout: 5000 });

  // Type the password
  await page.type('#password', 'Yehedaha123@',{ timeout: 5000 });

  // Click the Login
  await page.click('[name="submitButton"]');

 
});
