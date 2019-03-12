import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvernaderosComponent } from './invernaderos.component';

import { InvernaderosAgregarComponent } from './invernaderos_agregar/invernaderos_agregar.component';
import { InvernaderosDetalleComponent } from './invernaderos_detalle/invernaderos_detalle.component';
import { InvernaderosEditarComponent } from './invernaderos_editar/invernaderos_editar.component';



const routes: Routes = [{
  path: '',
  component: InvernaderosComponent,
  children: [
  {
    path: 'Agregar',
    component: InvernaderosAgregarComponent,
  }, 
  {
    path: 'Detalle',
    component: InvernaderosDetalleComponent,
  },
   {
    path: 'Editar',
    component: InvernaderosEditarComponent,
  },
 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvernaderosRoutingModule { }

export const routedComponents = [
  InvernaderosComponent,
  InvernaderosAgregarComponent,
  InvernaderosDetalleComponent,
  InvernaderosEditarComponent,
 




];
