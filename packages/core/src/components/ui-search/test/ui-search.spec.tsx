import { newSpecPage } from '@stencil/core/testing';
import { UiSearch } from './ui-search';

describe('ui-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiSearch],
      html: `<ui-search></ui-search>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-search>
    `);
  });
});
