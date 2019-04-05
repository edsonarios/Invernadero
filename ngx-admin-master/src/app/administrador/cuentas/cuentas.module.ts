import { NgModule } from '@angular/core';
import { NbBadgeModule } from '@nebular/theme';
//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  CuentasRoutingModule, routedComponents } from './cuentas-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CuentasRoutingModule,
    NbBadgeModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CuentasModule { }
