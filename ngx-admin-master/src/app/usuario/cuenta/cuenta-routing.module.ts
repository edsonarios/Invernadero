import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaComponent } from './cuenta.component';
import { CuentaEditarComponent } from './cuenta_editar/cuenta_editar.component';
import { CuentaPerfilComponent } from './cuenta_perfil/cuenta_perfil.component';



const routes: Routes = [{
  path: '',
  component: CuentaComponent,
  children: [
  {
    path: 'Editar',
    component: CuentaEditarComponent,
  }, 
  {
    path: 'Perfil',
    component: CuentaPerfilComponent,
  },
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaRoutingModule { }

export const routedComponents = [
  CuentaComponent,
  CuentaEditarComponent,
  CuentaPerfilComponent,


];
