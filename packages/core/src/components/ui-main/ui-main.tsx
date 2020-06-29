import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-main',
  styleUrl: 'ui-main.scss',
  shadow: true,
})
export class UiMain {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
