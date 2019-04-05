import { NgModule } from '@angular/core';
import { NbBadgeModule } from '@nebular/theme';
//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  InvernaderosRoutingModule, routedComponents } from './invernaderos-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    InvernaderosRoutingModule,
    NbBadgeModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class InvernaderosModule { }
