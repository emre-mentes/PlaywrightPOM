import { test, expect } from "@playwright/test";
import { SnackAttackPage } from "../../pages/SnackAttackPage";

test("positive login test", async ({ page }) => {
  const snack = new SnackAttackPage(page);

  await snack.goto();

  await snack.loginButton.click()
});


