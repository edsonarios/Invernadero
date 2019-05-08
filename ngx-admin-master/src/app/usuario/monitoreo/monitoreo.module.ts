import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { MonitoreoComponent } from './monitoreo.component';
import { D3BarComponent } from './d3-bar.component';
import { ChartSensorCompoent } from './chart/chart.component';
import { SpanComponent } from './chart/span.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule
  ],
  declarations: [
    MonitoreoComponent,
    D3BarComponent,
    ChartSensorCompoent,
    SpanComponent,
    ElectricityComponent,
    ElectricityChartComponent
  ],
  exports:[
  MonitoreoComponent,
  D3BarComponent,
    ChartSensorCompoent,
    SpanComponent,
    ElectricityComponent,
    ElectricityChartComponent
  ],
})
export class MonitoreoModule { }
