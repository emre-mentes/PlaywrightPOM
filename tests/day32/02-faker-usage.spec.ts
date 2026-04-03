import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/RegisterPage";
import { FakerHelper } from "../../utils/testDataHelper";

test("Register Test", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();

  const user = FakerHelper.createUser();

  await registerPage.fillForm(user);
  await registerPage.acceptPrivacyPolicy();
  await registerPage.clickContinueButton();
  //bu kullanim hard code
  // await expect(page.getByText("Your Account Has Been Created!")).toBeVisible();
  await registerPage.assertRegistrationSuccess();
});