import { newE2EPage } from '@stencil/core/testing';

describe('ui-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-cart></ui-cart>');

    const element = await page.find('ui-cart');
    expect(element).toHaveClass('hydrated');
  });
});
