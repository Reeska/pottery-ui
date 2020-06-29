import { newSpecPage } from '@stencil/core/testing';
import { UiNavbar } from './ui-navbar';

describe('ui-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiNavbar],
      html: `<ui-navbar></ui-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ui-navbar>
    `);
  });
});
