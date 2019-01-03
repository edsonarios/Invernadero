import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  ProductoRoutingModule, routedComponents } from './producto-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ProductoRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProductoModule { }
