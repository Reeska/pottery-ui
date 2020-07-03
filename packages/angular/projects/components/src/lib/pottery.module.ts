import {NgModule} from '@angular/core';
import {DIRECTIVES} from './directives';

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES]
})
export class PotteryModule {
}
