import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
//Name: US100201_Customer_Login
//Description:Login with Customer information
//Acceptance Criteria: As Customer, I should be able to log in to the application
//username: standard_user
//password: secret_sauce
//https://www.saucedemo.com/

test("As Customer, I should be able to log in to the application", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Page Object Model Usage", async ({ page }) => {
  const sauceLoginPage: SauceLoginPage = new SauceLoginPage(page);
  await sauceLoginPage.gotoLoginPage();
  await sauceLoginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
