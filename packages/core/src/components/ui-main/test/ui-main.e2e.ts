import { newE2EPage } from '@stencil/core/testing';

describe('ui-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-main></ui-main>');

    const element = await page.find('ui-main');
    expect(element).toHaveClass('hydrated');
  });
});
