import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTtileComponent } from './httile/httile.component';
import { HttiledosComponent } from './httiledos/httiledos.component';
import { HttiletresComponent } from './httiletres/httiletres.component';
import { HttilecuatroComponent } from './httilecuatro/httilecuatro.component';

@NgModule({
  declarations: [
    HTtileComponent,
    HttiledosComponent,
    HttiletresComponent,
    HttilecuatroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HTtileComponent,
    HttiledosComponent,
    HttiletresComponent,
    HttilecuatroComponent
  ]
})
export class ComponentsModule { }
