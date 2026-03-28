import { Locator, Page } from "@playwright/test";

export class SauceLoginPage {
  private readonly page: Page;
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameTextBox = page.getByPlaceholder("Username");
    this.passwordTextBox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator("h3");
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(
    username: string = "standard_user",
    password: string = "secret_sauce",
  ) {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}