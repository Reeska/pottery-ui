import { newSpecPage } from '@stencil/core/testing';
import { UiCart } from './ui-cart';

describe('ui-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiCart],
      html: `<ui-cart></ui-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-cart>
    `);
  });
});
