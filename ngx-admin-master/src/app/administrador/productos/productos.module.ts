import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  ProductosRoutingModule, routedComponents } from './productos-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ProductosRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProductosModule { }
