import {Component, EventEmitter, Event, h, Prop} from '@stencil/core';

const ENTER_KEY = "Enter"

@Component({
  tag: 'ui-search',
  styleUrl: 'ui-search.scss',
  shadow: true,
})
export class UiSearch {
  @Prop() value: string;
  @Event() valueChanged: EventEmitter<string>;
  @Event() enterPressed: EventEmitter<void>;

  onChange = (event: KeyboardEvent) => {
    const value = (event.currentTarget as HTMLInputElement).value;
    if (event.key === ENTER_KEY) {
      this.enterPressed.emit()
    } else {
      this.valueChanged.emit(value)
    }
  }

  render() {
    return <input
      class="input"
      value={this.value}
      placeholder="Search..."
      onKeyUp={this.onChange}
    />
  }
}
