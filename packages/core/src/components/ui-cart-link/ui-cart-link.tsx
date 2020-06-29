import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ui-cart-link',
  styleUrl: 'ui-cart-link.scss',
  shadow: true,
})
export class UiCartLink {
  @Prop() count: number;

  render() {
    return <button class="cart-link">
      <span role="img" aria-label="">🛒</span>
      <span class="label">Cart</span>
      <span class="badge">{this.count}</span>
    </button>
  }
}
