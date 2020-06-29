# ui-book



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `bookTitle` | `book-title` |             | `string` | `undefined` |
| `cover`     | `cover`      |             | `string` | `undefined` |
| `isbn`      | `isbn`       |             | `string` | `undefined` |
| `price`     | `price`      |             | `number` | `undefined` |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `addToCart` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ui-book-list](../ui-book-list)

### Depends on

- [ui-button](../ui-button)

### Graph
```mermaid
graph TD;
  ui-book --> ui-button
  ui-book-list --> ui-book
  style ui-book fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
