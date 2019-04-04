import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PrincipalComponent } from './principal.component';


import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactosComponent } from './contactos/contactos.component';
import { QuienesSomosComponent } from './quienes_somos/quienes_somos.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';

//app/principa/pages.module#PagesModule
const routes: Routes = [  
{ path: 'Demo', loadChildren: 'app/principal/demo/demo.module#DemoModule' },
{
  path: '',
  component: PrincipalComponent,
  children: [
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'Contactos',
    component: ContactosComponent,
  },
  {
    path: 'AcercaNosotros',
    component: QuienesSomosComponent,
  },
  {
    path: 'Servicios',
    component: ServiciosComponent,
  },
  {
    path: 'Productos',
    component: ProductosComponent,
  },
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {
}
