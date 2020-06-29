import {
  Component,
  h,
} from '@stencil/core'

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {

  render() {
    return (
      <button>
        <slot/>
      </button>
    )
  }

}
