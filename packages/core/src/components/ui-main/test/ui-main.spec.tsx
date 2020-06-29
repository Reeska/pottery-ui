import { newSpecPage } from '@stencil/core/testing';
import { UiMain } from './ui-main';

describe('ui-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiMain],
      html: `<ui-main></ui-main>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-main>
    `);
  });
});
