import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TesterComponent } from './tester.component';

import { CuentasComponent } from './cuentas/cuentas.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { ControlManualComponent } from './control_manual/control_manual.component';
import { HorariosComponent } from './horarios/horarios.component';
import { NotificacionesComponent } from '../tester/notificaciones/notificaciones.component';

const routes: Routes = [{
  path: '',
  component: TesterComponent,
  children: [
    {
      path: 'Cuentas',
      component: CuentasComponent,
    },
    {
      path: 'Monitoreo',
      component: MonitoreoComponent,
    },{
      path: 'Control_Manual',
      component: ControlManualComponent,
    },{
      path: 'Horarios',
      component: HorariosComponent,
    },{
      path: 'Notificaciones',
      component: NotificacionesComponent,
    },
    {
      path: '',
      redirectTo: 'Cuentas',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesterRoutingModule {
}