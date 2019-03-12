import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './producto.component';
import { ProductoAgregarComponent } from './producto_agregar/producto_agregar.component';
import { ProductoListarComponent } from './producto_listar/producto_listar.component';



const routes: Routes = [{
  path: '',
  component: ProductoComponent,
  children: [
  {
    path: 'Agregar',
    component: ProductoAgregarComponent,
  }, 
  {
    path: 'Listar',
    component: ProductoListarComponent,
  },
  {
      path: '',
      redirectTo: 'Listar',
      pathMatch: 'full',
    },
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRoutingModule { }

export const routedComponents = [
  ProductoComponent,
  ProductoAgregarComponent,
  ProductoListarComponent,


];
