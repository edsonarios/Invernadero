import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';

import { ReporteComponent } from './reporte/reporte.component';
import { InfoComponent } from './info/info.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ControlManualComponent } from './control_manual/control_manual.component';

import { PruebaComponent } from './Prueba/prueba.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

const routes: Routes = [{
  path: '',
  component: UsuarioComponent,
  children: [
    {
      path: 'Reporte',
      component: ReporteComponent,
    },
    {
      path: 'Info',
      component: InfoComponent,
    },
    {
      path: 'Horarios',
      component: HorariosComponent,
    },
    {
      path: 'Control_Manual',
      component: ControlManualComponent,
    },
    {
      path: 'Notificaciones',
      component: NotificacionesComponent,
    },
    {
      path: 'Monitoreo',
      component: MonitoreoComponent,
    },
    {
      path: 'Cuenta',
      loadChildren: './cuenta/cuenta.module#CuentaModule',
    },
    {
      path: 'Dashboard',
      component: PruebaComponent,
    },
    {
      path: '',
      redirectTo: 'Dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {
}
