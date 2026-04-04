import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
import { FakerHelper } from "../../utils/testDataHelper";

test("Page Object Model Usage", async ({ page }) => {

  const invalidUser = FakerHelper.createInvalidUser();

  const sauceLoginPage: SauceLoginPage = new SauceLoginPage(page);
  await sauceLoginPage.gotoLoginPage();
  await sauceLoginPage.login( invalidUser.username,invalidUser.password );
  await expect(sauceLoginPage.errorMessage).toBeVisible();
});

//Name: US100201_Customer_Login
//Description:Login with Customer information
//Acceptance Criteria: As Customer, I should NOT be able to log in to the application with invalid credentials
//username: invalid_user
//password: invalid_password
//https://www.saucedemo.com/