import { Locator, Page } from "@playwright/test";


export class SauceLoginPage {

    readonly page:Page;
    userNameTextBox: Locator;
    passwordTextBox: Locator;
    loginButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.userNameTextBox = page.getByPlaceholder("Username");
      this.passwordTextBox = page.getByPlaceholder("Password");
      this.loginButton = page.getByRole("button", { name: "Login" });

      

    }






}