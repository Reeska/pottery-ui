import {Component, Host, h, Prop, EventEmitter, Event} from '@stencil/core';
import {Book} from '../../models';

@Component({
  tag: 'ui-book-list',
  styleUrl: 'ui-booklist.css',
  shadow: true,
})
export class UiBookList {
  @Prop() search: string;
  @Prop() books: Book[] = [];
  @Event() addToCart: EventEmitter<string>;

  // handleAddToCart = (event: CustomEvent<string>) => {
  //   event.stopPropagation()
  //   this.addToCart.emit(event.detail)
  // }

  render() {
    return (
      <Host>
        <h1>Library</h1>
        {this.search && (
          <p>{this.books.length > 0
            ? 'List filtered with'
            : 'No results for'
          } &laquo; {this.search} &raquo;</p>
        )}
        {this.books.map(book => (
            <ui-book
              key={book.isbn}
              bookTitle={book.title}
              cover={book.cover}
              isbn={book.isbn}
              price={book.price}
            />
          )
        )}
      </Host>
    );
  }

}
