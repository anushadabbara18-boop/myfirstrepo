import { expect, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle;
  readonly sortSelect;
  readonly cartButton;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.sortSelect = page.locator('//select[@class="product_sort_container"]');
    this.cartButton = page.locator("//div[@id='shopping_cart_container']");
  }

  async expectVisible() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async sortLowToHigh() {
    await this.sortSelect.selectOption({ value: 'lohi' });
  }

  async addSecondItemToCart() {
    await this.page.click("//div[@class='inventory_list']/div[2]//button");
  }

  async openCart() {
    await this.cartButton.click();
  }
}
