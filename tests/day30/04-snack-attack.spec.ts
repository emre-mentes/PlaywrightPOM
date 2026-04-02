import { test,expect } from '@playwright/test';

test('positive login test', async ({ page }) => {

  /*https://snackattack.deployedprojects.xyz/
   username "zyruse@mailinator.com
   "
    password "Aa1234567." */
await page.goto('https://snackattack.deployedprojects.xyz/');
await page.locator('path').nth(2).click();
await page.getByRole('textbox', { name: 'Email' }).fill('zyruse@mailinator.com');
await page.getByRole('textbox', { name: 'Password' }).fill('Aa1234567.');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.getByRole('heading', { name: 'Wellcome to Customer Panel' })).toBeVisible();


});