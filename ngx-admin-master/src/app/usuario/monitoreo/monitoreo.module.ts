import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { MonitoreoComponent } from './monitoreo.component';
import { D3BarComponent } from './d3-bar.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule
  ],
  declarations: [
    MonitoreoComponent,
    D3BarComponent,
  ],
})
export class MonitoreoModule { }
