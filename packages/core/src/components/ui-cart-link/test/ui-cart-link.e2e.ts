import { newE2EPage } from '@stencil/core/testing';

describe('ui-cart-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-cart-link></ui-cart-link>');

    const element = await page.find('ui-cart-link');
    expect(element).toHaveClass('hydrated');
  });
});
