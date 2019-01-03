import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlManualComponent } from './control_manual.component';
import { ControlManualActuadoresComponent } from './control_manual_actuadores/control_manual_actuadores.component';
import { ControlManualHorariosComponent } from './control_manual_horarios/control_manual_horarios.component';
import { StatusCardComponent } from './control_manual_actuadores/status-card/status-card.component';
import { StatusCardOffComponent } from './control_manual_actuadores/status-card-off/status-card-off.component';



const routes: Routes = [{
  path: '',
  component: ControlManualComponent,
  children: [
  {
    path: 'Actuadores',
    component: ControlManualActuadoresComponent,
  }, 
  {
    path: 'Horarios',
    component: ControlManualHorariosComponent,
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
  ControlManualActuadoresComponent,
  ControlManualHorariosComponent,
  StatusCardComponent,
  StatusCardOffComponent


];
