import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

import credentials from "../../test-data/login-test-data.json";

for (const user of credentials) {
  test(`login testi ${user.username}`, async ({ page }) => {
    const loginPage: SauceLoginPage = new SauceLoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
}
