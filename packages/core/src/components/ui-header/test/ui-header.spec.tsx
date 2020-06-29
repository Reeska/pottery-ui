import { newSpecPage } from '@stencil/core/testing';
import { UiHeader } from './ui-header';

describe('ui-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiHeader],
      html: `<ui-header></ui-header>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-header>
    `);
  });
});
