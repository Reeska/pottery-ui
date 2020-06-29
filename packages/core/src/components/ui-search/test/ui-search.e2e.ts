import { newE2EPage } from '@stencil/core/testing';

describe('ui-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-search></ui-search>');

    const element = await page.find('ui-search');
    expect(element).toHaveClass('hydrated');
  });
});
