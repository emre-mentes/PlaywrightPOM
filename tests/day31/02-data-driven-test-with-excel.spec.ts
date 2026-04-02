import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
import { getExcelData } from "../../utils/excelHelper";

const testData = getExcelData("test-data/loginTestData.xlsx");

for (const data of testData) {

  test(`login testi ${data.username}`, async ({ page }) => {

    const loginPage: SauceLoginPage = new SauceLoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(data.username, data.password);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  });
}
