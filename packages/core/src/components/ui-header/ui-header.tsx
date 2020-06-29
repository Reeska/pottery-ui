import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-header',
  styleUrl: 'ui-header.scss',
  shadow: true,
})
export class UiHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
