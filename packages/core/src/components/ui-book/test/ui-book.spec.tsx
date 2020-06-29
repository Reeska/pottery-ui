import { newSpecPage } from '@stencil/core/testing';
import { UiBook } from '../ui-book';

describe('ui-book', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiBook],
      html: `<ui-book></ui-book>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-book>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-book>
    `);
  });
});
