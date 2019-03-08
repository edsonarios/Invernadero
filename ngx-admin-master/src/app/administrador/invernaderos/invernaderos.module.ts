import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  InvernaderosRoutingModule, routedComponents } from './invernaderos-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    InvernaderosRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class InvernaderosModule { }
