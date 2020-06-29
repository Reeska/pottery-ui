import { newE2EPage } from '@stencil/core/testing';

describe('ui-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-navbar></ui-navbar>');

    const element = await page.find('ui-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
