/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator =  function(cls: any){
    if (opts.inputs) {
      proxyInputs(cls, opts.inputs);
    }
    if (opts.methods) {
      proxyMethods(cls, opts.methods);
    }
    return cls;
  };
  return decorator;
}

import { Components } from '@pottery-ui/core'

export declare interface UiBook extends Components.UiBook {}
@ProxyCmp({inputs: ['bookTitle', 'cover', 'isbn', 'price']})
@Component({ selector: 'ui-book', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['bookTitle', 'cover', 'isbn', 'price'] })
export class UiBook {
  addToCart!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['addToCart']);
  }
}

export declare interface UiBookList extends Components.UiBookList {}
@ProxyCmp({inputs: ['books', 'search']})
@Component({ selector: 'ui-book-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['books', 'search'] })
export class UiBookList {
  addToCart!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['addToCart']);
  }
}

export declare interface UiButton extends Components.UiButton {}

@Component({ selector: 'ui-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class UiButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface UiCart extends Components.UiCart {}
@ProxyCmp({inputs: ['items', 'total', 'totalWithPromo']})
@Component({ selector: 'ui-cart', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['items', 'total', 'totalWithPromo'] })
export class UiCart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface UiCartLink extends Components.UiCartLink {}
@ProxyCmp({inputs: ['count']})
@Component({ selector: 'ui-cart-link', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['count'] })
export class UiCartLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface UiHeader extends Components.UiHeader {}

@Component({ selector: 'ui-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class UiHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface UiMain extends Components.UiMain {}

@Component({ selector: 'ui-main', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class UiMain {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface UiNavbar extends Components.UiNavbar {}

@Component({ selector: 'ui-navbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class UiNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface UiSearch extends Components.UiSearch {}
@ProxyCmp({inputs: ['value']})
@Component({ selector: 'ui-search', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['value'] })
export class UiSearch {
  valueChanged!: EventEmitter<CustomEvent>;
  enterPressed!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged', 'enterPressed']);
  }
}
