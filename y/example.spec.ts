import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { ProductsPage } from './pages/ProductsPage';
import { CheckoutPage } from './pages/CheckoutPage';

test('Saucedemo End to End', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.expectVisible();
  await productsPage.sortLowToHigh();
  await productsPage.addSecondItemToCart();
  await productsPage.openCart();

  await checkoutPage.expectCartPage();
  await checkoutPage.goToCheckout();
  await checkoutPage.expectCheckoutInformationPage();
  await checkoutPage.fillShippingInformation('Sandesh', 'G', '07304');
  await checkoutPage.continueToOverview();

  await checkoutPage.expectOverviewPage();
  await checkoutPage.finishCheckout();
  await checkoutPage.expectCompletePage();
  await checkoutPage.returnToProducts();
});