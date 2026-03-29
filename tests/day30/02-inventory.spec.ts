import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
import { SauceInventoryPage } from "../../pages/SauceInventoryPage";

test("inventory item test", async ({ page }) => {
  // Test Senaryosu:
  // 1. Login sayfasına git
  const loginPage = new SauceLoginPage(page);
  await loginPage.gotoLoginPage();
  // 2. "standard_user" kullanıcı adı ve "secret_sauce" şifresi ile giriş yap
  await loginPage.login();

  // 3. Dizinin uzunluğunun 6 olduğunu doğrula
  const inventoryPage = new SauceInventoryPage(page);
  await expect(inventoryPage.inventoryItems).toHaveCount(6);
});
