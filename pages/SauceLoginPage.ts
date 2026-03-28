import { Locator, Page } from "@playwright/test";

export class SauceLoginPage {
  private readonly page: Page;
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameTextBox = page.getByPlaceholder("Username");
    this.passwordTextBox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(){
   await this.userNameTextBox.fill("standard_user");
   await this.passwordTextBox.fill("secret_sauce");
   await this.loginButton.click(); 
  }


}