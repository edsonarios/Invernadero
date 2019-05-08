import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  CuentaRoutingModule, routedComponents } from './cuenta-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CuentaRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CuentaModule { }
