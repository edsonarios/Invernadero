import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';

import { ProductosCatalogoComponent } from './productos_catalogo/productos_catalogo.component';
import { ProductosAgregarComponent } from './productos_agregar/productos_agregar.component';





const routes: Routes = [{
  path: '',
  component: ProductosComponent,
  children: [
  {
    path: 'Catalogo',
    component: ProductosCatalogoComponent,
  }, 
  {
    path: 'Agregar',
    component: ProductosAgregarComponent,
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
export class ProductosRoutingModule { }

export const routedComponents = [
  ProductosComponent,
  ProductosCatalogoComponent,
  ProductosAgregarComponent,



];
