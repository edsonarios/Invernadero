import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoreoComponent } from './monitoreo.component';
import { SensoresComponent } from './sensores/sensores.component';
import { CamarasComponent } from './camaras/camaras.component';
import { TemperatureComponent } from './sensores/temperature/temperature.component';
import { TemperatureDraggerComponent } from './sensores/temperature/temperature-dragger/temperature-dragger.component';
import { ElectricityComponent } from './sensores/electricity/electricity.component';
import { ElectricityChartComponent } from './sensores/electricity/electricity-chart/electricity-chart.component';

import { SecurityCamerasComponent } from './camaras/security-cameras/security-cameras.component';
import { ActuadoresComponent } from './actuadores/actuadores.component';


const routes: Routes = [{
  path: '',
  component: MonitoreoComponent,
  children: [
  {
    path: 'sensores',
    component: SensoresComponent,
  }, 
  {
    path: 'camaras',
    component: CamarasComponent,
  },
  {
    path: 'actuadores',
    component: ActuadoresComponent,
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
  SensoresComponent,
  CamarasComponent,
  ActuadoresComponent,
  SecurityCamerasComponent,
  TemperatureComponent,
  TemperatureDraggerComponent,
  ElectricityComponent,
  ElectricityChartComponent, 
 

];
