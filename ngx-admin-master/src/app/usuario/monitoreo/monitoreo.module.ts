import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  MonitoreoRoutingModule, routedComponents } from './monitoreo-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    MonitoreoRoutingModule,
    NgxEchartsModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MonitoreoModule { }
