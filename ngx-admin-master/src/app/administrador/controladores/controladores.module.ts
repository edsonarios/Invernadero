import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  ControladoresRoutingModule, routedComponents } from './controladores-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ControladoresRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ControladoresModule { }
