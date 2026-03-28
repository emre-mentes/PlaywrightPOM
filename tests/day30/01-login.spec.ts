import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

let loginPage: SauceLoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new SauceLoginPage(page);
  await loginPage.gotoLoginPage();
});

test("Page Object Model Usage", async ({ page }) => {
  await loginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("invalid login", async ({ page }) => {
  await loginPage.login("invalid_user", "invalid_password");
  await expect(loginPage.errorMessage).toBeVisible();
});

//Name: US100201_Customer_Login
//Description:Login with Customer information
//Acceptance Criteria: As Customer, I should NOT be able to log in to the application with invalid credentials
//username: invalid_user
//password: invalid_password
//https://www.saucedemo.com/