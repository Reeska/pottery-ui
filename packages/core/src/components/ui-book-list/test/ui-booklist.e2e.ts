import { newE2EPage } from '@stencil/core/testing';

describe('ui-booklist', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-booklist></ui-booklist>');

    const element = await page.find('ui-booklist');
    expect(element).toHaveClass('hydrated');
  });
});
