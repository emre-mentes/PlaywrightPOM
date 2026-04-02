import { Page } from "playwright";

export class RegisterPage {
  private readonly page: Page;
  private readonly firstNameInput;
  private readonly lastNameInput;
  private readonly emailInput;
  private readonly telephoneInput;
  private readonly passwordInput;
  private readonly passwordConfirmInput;
  private readonly privacyPolicyLabel;
  private readonly registerButton;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByLabel("First Name");
    this.lastNameInput = page.getByLabel("Last Name");
    this.emailInput = page.getByLabel("E-Mail");
    this.telephoneInput = page.getByLabel("Telephone");
    this.passwordInput = page.getByLabel("Password", { exact: true });
    this.passwordConfirmInput = page.getByLabel("Password Confirm");
    this.privacyPolicyLabel = page.locator("label[for='input-agree']");
    this.registerButton = page.getByRole("button", { name: "Continue" });
  }

  async goto() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );
  }

  async fillForm(user: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    password: string;
  }) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.telephoneInput.fill(user.telephone);
    await this.passwordInput.fill(user.password);
    await this.passwordConfirmInput.fill(user.password);
  }
}