import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesComponent } from './componentes.component';

import { ComponentesAgregarControladorComponent } from './componentes_agregar_controlador/componentes_agregar_controlador.component';
import { ComponentesAgregarPinComponent } from './componentes_agregar_pin/componentes_agregar_pin.component';





const routes: Routes = [{
  path: '',
  component: ComponentesComponent,
  children: [
  {
    path: 'Controlador',
    component: ComponentesAgregarControladorComponent,
  }, 
  {
    path: 'Pin',
    component: ComponentesAgregarPinComponent,
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
export class ComponentesRoutingModule { }

export const routedComponents = [
  ComponentesComponent,
  ComponentesAgregarControladorComponent,
  ComponentesAgregarPinComponent,



];
