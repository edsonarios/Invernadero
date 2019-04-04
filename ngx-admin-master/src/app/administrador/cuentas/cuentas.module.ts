import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  CuentasRoutingModule, routedComponents } from './cuentas-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CuentasRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CuentasModule { }
