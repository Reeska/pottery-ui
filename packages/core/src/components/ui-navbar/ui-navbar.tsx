import {Component, h} from '@stencil/core';

@Component({
  tag: 'ui-navbar',
  styleUrl: 'ui-navbar.scss',
  shadow: true,
})
export class UiNavbar {

  render() {
    return (
      <div class="navbar-container">
        <slot/>
      </div>
    );
  }
}
