import { newSpecPage } from '@stencil/core/testing';
import { UiCartLink } from './ui-cart-link';

describe('ui-cart-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiCartLink],
      html: `<ui-cart-link></ui-cart-link>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-cart-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-cart-link>
    `);
  });
});
