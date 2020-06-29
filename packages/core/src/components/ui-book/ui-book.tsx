import {Component, h, Event, Prop, EventEmitter, Host} from '@stencil/core';

@Component({
  tag: 'ui-book',
  styleUrl: 'ui-book.scss',
  shadow: true,
})
export class UiBook {
  @Prop() isbn: string;
  @Prop() bookTitle: string;
  @Prop() cover: string;
  @Prop() price: number;
  @Event() addToCart: EventEmitter<string>

  handleAddToCart = () => {
    this.addToCart.emit(this.isbn)
  }

  render() {
    return (
      <Host>
        <img class="book__cover" src={this.cover} alt="book cover"/>
        <div class="book__panel">
          <h3 class="book__title">{this.bookTitle}</h3>
          <div class="book__price">{this.price} $</div>
          <div class="book__cart">
            <ui-button onClick={this.handleAddToCart}>Add to cart</ui-button>
          </div>
        </div>
      </Host>
    );
  }
}
