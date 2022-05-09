import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePy from '@angular/common/locales/es';
import { ModalComponent } from './modal/modal.component';
registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class SharedModule { }
