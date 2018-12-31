import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlManualComponent } from './controlmanual.component';
import { ActuadoresComponent } from './actuadores/actuadores.component';
import { StatusCardComponent } from './actuadores/status-card/status-card.component';
import { StatusCardOffComponent } from './actuadores/status-card-off/status-card-off.component';
import { StatusCardCloseComponent } from './actuadores/status-card-close/status-card-close.component';
import { StatusCardOpenComponent } from './actuadores/status-card-open/status-card-open.component';
import { HorariosComponent } from './horarios/horarios.component';


const routes: Routes = [{
  path: '',
  component: ControlManualComponent,
  children: [
  {
    path: 'actuadores',
    component: ActuadoresComponent,
  }, 
  {
    path: 'horarios',
    component: HorariosComponent,
  },
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlManualRoutingModule { }

export const routedComponents = [
  ControlManualComponent,
  ActuadoresComponent,
  HorariosComponent,
  StatusCardComponent,
  StatusCardOffComponent,
  StatusCardCloseComponent,
  StatusCardOpenComponent,


];
