/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Book } from "./models";
import { Book as Book1 } from "./models/book.type";
export namespace Components {
    interface UiBook {
        "bookTitle": string;
        "cover": string;
        "isbn": string;
        "price": number;
    }
    interface UiBookList {
        "books": Book[];
        "search": string;
    }
    interface UiButton {
    }
    interface UiCart {
        "items": Book[];
        "total": number;
        "totalWithPromo": number;
    }
    interface UiCartLink {
        "count": number;
    }
    interface UiHeader {
    }
    interface UiMain {
    }
    interface UiNavbar {
    }
    interface UiSearch {
        "value": string;
    }
}
declare global {
    interface HTMLUiBookElement extends Components.UiBook, HTMLStencilElement {
    }
    var HTMLUiBookElement: {
        prototype: HTMLUiBookElement;
        new (): HTMLUiBookElement;
    };
    interface HTMLUiBookListElement extends Components.UiBookList, HTMLStencilElement {
    }
    var HTMLUiBookListElement: {
        prototype: HTMLUiBookListElement;
        new (): HTMLUiBookListElement;
    };
    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
    }
    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new (): HTMLUiButtonElement;
    };
    interface HTMLUiCartElement extends Components.UiCart, HTMLStencilElement {
    }
    var HTMLUiCartElement: {
        prototype: HTMLUiCartElement;
        new (): HTMLUiCartElement;
    };
    interface HTMLUiCartLinkElement extends Components.UiCartLink, HTMLStencilElement {
    }
    var HTMLUiCartLinkElement: {
        prototype: HTMLUiCartLinkElement;
        new (): HTMLUiCartLinkElement;
    };
    interface HTMLUiHeaderElement extends Components.UiHeader, HTMLStencilElement {
    }
    var HTMLUiHeaderElement: {
        prototype: HTMLUiHeaderElement;
        new (): HTMLUiHeaderElement;
    };
    interface HTMLUiMainElement extends Components.UiMain, HTMLStencilElement {
    }
    var HTMLUiMainElement: {
        prototype: HTMLUiMainElement;
        new (): HTMLUiMainElement;
    };
    interface HTMLUiNavbarElement extends Components.UiNavbar, HTMLStencilElement {
    }
    var HTMLUiNavbarElement: {
        prototype: HTMLUiNavbarElement;
        new (): HTMLUiNavbarElement;
    };
    interface HTMLUiSearchElement extends Components.UiSearch, HTMLStencilElement {
    }
    var HTMLUiSearchElement: {
        prototype: HTMLUiSearchElement;
        new (): HTMLUiSearchElement;
    };
    interface HTMLElementTagNameMap {
        "ui-book": HTMLUiBookElement;
        "ui-book-list": HTMLUiBookListElement;
        "ui-button": HTMLUiButtonElement;
        "ui-cart": HTMLUiCartElement;
        "ui-cart-link": HTMLUiCartLinkElement;
        "ui-header": HTMLUiHeaderElement;
        "ui-main": HTMLUiMainElement;
        "ui-navbar": HTMLUiNavbarElement;
        "ui-search": HTMLUiSearchElement;
    }
}
declare namespace LocalJSX {
    interface UiBook {
        "bookTitle"?: string;
        "cover"?: string;
        "isbn"?: string;
        "onAddToCart"?: (event: CustomEvent<string>) => void;
        "price"?: number;
    }
    interface UiBookList {
        "books"?: Book[];
        "onAddToCart"?: (event: CustomEvent<string>) => void;
        "search"?: string;
    }
    interface UiButton {
    }
    interface UiCart {
        "items"?: Book[];
        "total"?: number;
        "totalWithPromo"?: number;
    }
    interface UiCartLink {
        "count"?: number;
    }
    interface UiHeader {
    }
    interface UiMain {
    }
    interface UiNavbar {
    }
    interface UiSearch {
        "onEnterPressed"?: (event: CustomEvent<void>) => void;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "ui-book": UiBook;
        "ui-book-list": UiBookList;
        "ui-button": UiButton;
        "ui-cart": UiCart;
        "ui-cart-link": UiCartLink;
        "ui-header": UiHeader;
        "ui-main": UiMain;
        "ui-navbar": UiNavbar;
        "ui-search": UiSearch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ui-book": LocalJSX.UiBook & JSXBase.HTMLAttributes<HTMLUiBookElement>;
            "ui-book-list": LocalJSX.UiBookList & JSXBase.HTMLAttributes<HTMLUiBookListElement>;
            "ui-button": LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
            "ui-cart": LocalJSX.UiCart & JSXBase.HTMLAttributes<HTMLUiCartElement>;
            "ui-cart-link": LocalJSX.UiCartLink & JSXBase.HTMLAttributes<HTMLUiCartLinkElement>;
            "ui-header": LocalJSX.UiHeader & JSXBase.HTMLAttributes<HTMLUiHeaderElement>;
            "ui-main": LocalJSX.UiMain & JSXBase.HTMLAttributes<HTMLUiMainElement>;
            "ui-navbar": LocalJSX.UiNavbar & JSXBase.HTMLAttributes<HTMLUiNavbarElement>;
            "ui-search": LocalJSX.UiSearch & JSXBase.HTMLAttributes<HTMLUiSearchElement>;
        }
    }
}
