import { test, expect } from "../../fixtures/pageFixtures";
import { FakerHelper } from "../../utils/testDataHelper";

test("Page Object Model Usage", async ({ sauceLoginPage, page }) => {
  await sauceLoginPage.gotoLoginPage();
  await sauceLoginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Register Test", async ({ registerPage }) => {
  await registerPage.goto();
  const user = FakerHelper.createUser();
  await registerPage.fillForm(user);
  await registerPage.acceptPrivacyPolicy();
  await registerPage.clickContinueButton();
  //bu kullanim hard code
  // await expect(page.getByText("Your Account Has Been Created!")).toBeVisible();
  await registerPage.assertRegistrationSuccess();
});

test("positive login test", async ({ openSourcePage }) => {
  await openSourcePage.goto();
  await openSourcePage.login();
  await expect(openSourcePage.dashboard).toBeVisible();
});