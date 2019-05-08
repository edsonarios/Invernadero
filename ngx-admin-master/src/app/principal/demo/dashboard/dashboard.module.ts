import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';

@NgModule({
  imports: [
    ThemeModule,
     NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    TemperatureComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    TrafficComponent,
    TrafficChartComponent,
  ],
})
export class DashboardModule { 
	Valor=localStorage.getItem('page');
constructor(){

}
}
