import { test as base } from "@playwright/test";
import { SauceLoginPage } from "../pages/SauceLoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { OpenSourcePage } from "../pages/OpenSourcePage";

type PageFixtures = {
  sauceLoginPage: SauceLoginPage;
  openSourcePage: OpenSourcePage;
  registerPage: RegisterPage;
};

export const test = base.extend<PageFixtures>({
  sauceLoginPage: async ({ page }, use) => {
    const sauceLoginPage = new SauceLoginPage(page);
    await use(sauceLoginPage);
  },
  openSourcePage: async ({ page }, use) => {
    const openSourcePage = new OpenSourcePage(page);
    await use(openSourcePage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});

export { expect } from "@playwright/test";

/*
playwright bize hazir verdigi test fonksiyonunu base olarak import ettik
ardindan extend ile sauceLoginPage adında bir custom fixture ekledik
bu fixture artik test fonksiyonlarimiz tarafindan tanınacak {sauceLoginPage} seklinde kullanabileceğiz*/