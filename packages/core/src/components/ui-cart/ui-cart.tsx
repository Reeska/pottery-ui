import {
  Component,
  Host,
  h,
  Prop,
} from '@stencil/core'
import { Book } from '../../models/book.type'

@Component({
  tag: 'ui-cart',
  styleUrl: 'ui-cart.scss',
  shadow: true,
})
export class UiCart {
  @Prop() items: Book[]
  @Prop() total: number
  @Prop() totalWithPromo: number

  render() {
    console.log('this.totalWithPromo', this.totalWithPromo)
    return (
      <Host>
        <h1>Cart</h1>
        {!this.items.length
          ? <p>No items in your cart.</p>
          :
          <table class="items">
            <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {this.items.map(book =>
              <tr key={book.isbn}>
                <td>{book.title}</td>
                <td class="price">{book.price} $</td>
              </tr>,
            )}
            </tbody>
            <tfoot>
            <tr>
              <td>Total</td>
              <td class="price total">{this.total} $</td>
            </tr>
            {this.totalWithPromo && (
              <tr>
                <td>Total with promo</td>
                <td class="price total">{this.totalWithPromo} $</td>
              </tr>
            )}
            </tfoot>
          </table>
        }
      </Host>
    )
  }

}
