# ui-booklist



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `books`  | --        |             | `Book[]` | `[]`        |
| `search` | `search`  |             | `string` | `undefined` |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `addToCart` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [ui-book](../ui-book)

### Graph
```mermaid
graph TD;
  ui-book-list --> ui-book
  ui-book --> ui-button
  style ui-book-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
