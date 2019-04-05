import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdministradorComponent } from './administrador.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [{
  path: '',
  component: AdministradorComponent,
  children: [
    {
    path: 'Controladores',
    loadChildren: './controladores/controladores.module#ControladoresModule',
    },

     {
    path: 'Cuentas',
    loadChildren: './cuentas/cuentas.module#CuentasModule',
    },
    {
    path: 'Invernaderos',
    loadChildren: './invernaderos/invernaderos.module#InvernaderosModule',
    },
    {
    path: 'Componentes',
    loadChildren: './componentes/componentes.module#ComponentesModule',
    },
     {
      path: 'Reportes',
      component: ReportesComponent,
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
export class AdministradorRoutingModule {
}