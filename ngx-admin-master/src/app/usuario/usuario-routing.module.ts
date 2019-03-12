import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { InfoComponent } from './info/info.component';

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
    path: 'Control',
    loadChildren: './control_manual/control_manual.module#ControlManualModule',
    },
    {
    path: 'Producto',
    loadChildren: './producto/producto.module#ProductoModule',
    },
    {
    path: 'Monitoreo',
    loadChildren: './monitoreo/monitoreo.module#MonitoreoModule',
    },
    {
    path: 'Cuenta',
    loadChildren: './cuenta/cuenta.module#CuentaModule',
    },
    {
      path: '',
      redirectTo: 'Producto',
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