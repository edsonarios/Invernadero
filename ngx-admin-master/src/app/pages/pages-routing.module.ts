import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { AjustesComponent } from './profile/ajustes/ajustes.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ProductoComponent } from './producto/producto.component';
import { AddProductoComponent } from './producto/complements/add/add.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'reporte',
    component: ReporteComponent,
  },
  {
    path: 'monitoreo',
    loadChildren: './monitoreo/monitoreo.module#MonitoreoModule',
  },
  {
    path: 'control',
    loadChildren: './controlmanual/controlmanual.module#ControlManualModule',
  },
  {
    path: 'producto',
    component: ProductoComponent,
  },
 {
  path: 'addProducto',
  component: AddProductoComponent,
 },
 {
   path: 'profile',
   component: ProfileComponent,
 },
 {
   path: 'adjust',
   component: AjustesComponent,
 }
 ,{
   path: 'info',
   component: InfoComponent,
 },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
