import { newE2EPage } from '@stencil/core/testing';

describe('ui-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-header></ui-header>');

    const element = await page.find('ui-header');
    expect(element).toHaveClass('hydrated');
  });
});
