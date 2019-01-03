import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasComponent } from './cuentas.component';

import { CuentasAgregarComponent } from './cuentas_agregar/cuentas_agregar.component';
import { CuentasDetalleComponent } from './cuentas_detalle/cuentas_detalle.component';
import { CuentasEditarComponent } from './cuentas_editar/cuentas_editar.component';
import { CuentasPerfilComponent } from './cuentas_perfil/cuentas_perfil.component';
import { CuentasUsuariosComponent } from './cuentas_usuarios/cuentas_usuarios.component';






const routes: Routes = [{
  path: '',
  component: CuentasComponent,
  children: [
  {
    path: 'Agregar',
    component: CuentasAgregarComponent,
  }, 
  {
    path: 'Detalle',
    component: CuentasDetalleComponent,
  },
   {
    path: 'Editar',
    component: CuentasEditarComponent,
  },
   {
    path: 'Perfil',
    component: CuentasPerfilComponent,
  },
   {
    path: 'Usuarios',
    component: CuentasUsuariosComponent,
  },
 {
      path: '',
      redirectTo: 'Usuarios',
      pathMatch: 'full',
    },
 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentasRoutingModule { }

export const routedComponents = [
  CuentasComponent,
  CuentasAgregarComponent,
  CuentasDetalleComponent,
  CuentasEditarComponent,
  CuentasPerfilComponent,
  CuentasUsuariosComponent,




];
