import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly pageTitle;
  readonly checkoutButton;
  readonly firstNameInput;
  readonly lastNameInput;
  readonly postalCodeInput;
  readonly continueButton;
  readonly finishButton;
  readonly backToProductsButton;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.checkoutButton = page.locator("//button[@id='checkout']");
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator("//input[@id='continue']");
    this.finishButton = page.locator("//button[@id='finish']");
    this.backToProductsButton = page.locator("//button[@id='back-to-products']");
  }

  async expectCartPage() {
    await expect(this.pageTitle).toHaveText('Your Cart');
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }

  async expectCheckoutInformationPage() {
    await expect(this.pageTitle).toHaveText('Checkout: Your Information');
  }

  async fillShippingInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
  }

  async expectOverviewPage() {
    await expect(this.pageTitle).toHaveText('Checkout: Overview');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async expectCompletePage() {
    await expect(this.pageTitle).toHaveText('Checkout: Complete!');
  }

  async returnToProducts() {
    await this.backToProductsButton.click();
  }
}
