import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoreoComponent } from './monitoreo.component';

import { MonitoreoActuadoresComponent } from './monitoreo_actuadores/monitoreo_actuadores.component';
import { MonitoreoBateriaComponent } from './monitoreo_bateria/monitoreo_bateria.component';
import { MonitoreoCamarasComponent } from './monitoreo_camaras/monitoreo_camaras.component';
import { MonitoreoSensoresComponent } from './monitoreo_sensores/monitoreo_sensores.component';

import { TemperatureComponent } from './monitoreo_sensores/temperature/temperature.component';
import { TemperatureDraggerComponent } from './monitoreo_sensores/temperature/temperature-dragger/temperature-dragger.component';

import { ElectricityComponent } from './monitoreo_sensores/electricity/electricity.component';
import { ElectricityChartComponent } from './monitoreo_sensores/electricity/electricity-chart/electricity-chart.component';

import { SecurityCamerasComponent } from './monitoreo_camaras/security-cameras/security-cameras.component';

import { TrafficComponent } from './monitoreo_bateria/traffic/traffic.component';
import { TrafficChartComponent } from './monitoreo_bateria/traffic/traffic-chart.component';


const routes: Routes = [{
  path: '',
  component: MonitoreoComponent,
  children: [
  {
    path: 'Actuadores',
    component: MonitoreoActuadoresComponent,
  }, 
  {
    path: 'Energia',
    component: MonitoreoBateriaComponent,
  },
  {
    path: 'Camaras',
    component: MonitoreoCamarasComponent,
  },
  {
    path: 'Sensores',
    component: MonitoreoSensoresComponent,
  },
  
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoreoRoutingModule { }

export const routedComponents = [
  MonitoreoComponent,
  MonitoreoActuadoresComponent,
  MonitoreoBateriaComponent,
  MonitoreoCamarasComponent,
  MonitoreoSensoresComponent,
  TemperatureComponent,
  TemperatureDraggerComponent,
  ElectricityComponent,
  ElectricityChartComponent, 
  SecurityCamerasComponent,
    TrafficComponent,
  TrafficChartComponent

];
