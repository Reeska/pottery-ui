import { newE2EPage } from '@stencil/core/testing';

describe('ui-book', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-book></ui-book>');

    const element = await page.find('ui-book');
    expect(element).toHaveClass('hydrated');
  });
});
