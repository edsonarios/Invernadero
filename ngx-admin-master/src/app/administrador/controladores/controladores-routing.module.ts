import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControladoresComponent } from './controladores.component';

import { ControladoresAgregarComponent } from './controladores_agregar/controladores_agregar.component';
import { ControladoresCatalogoComponent } from './controladores_catalogo/controladores_catalogo.component';





const routes: Routes = [{
  path: '',
  component: ControladoresComponent,
  children: [
  {
    path: 'Catalogo',
    component: ControladoresCatalogoComponent,
  }, 
  {
    path: 'Agregar',
    component: ControladoresAgregarComponent,
  },
 {
      path: '',
      redirectTo: 'Catalogo',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControladoresRoutingModule { }

export const routedComponents = [
  ControladoresComponent,
  ControladoresAgregarComponent,
  ControladoresCatalogoComponent,



];
