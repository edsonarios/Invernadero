import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
//APARTADO PROFILE
import { ProfileComponent } from './profile/profile.component';

//APARTADO DE CONTROLADOR
import { ControladorComponent } from './Controlador/controlador.component';
import { AddControladorComponent } from './Controlador/add/add.component';

//APARTADO DE PRODUCTO
import { ProductoComponent } from './producto/producto.component';
import { AddProductoComponent} from './producto/add/add.component';
import { DetailsProductoComponent } from './producto/details/details.component';
import { EditProductoComponent } from './producto/edit/edit.component';

//APARTADO DE USUARIOS
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddUsuarioComponent } from './usuarios/add/add.component';
import { EditUsuarioComponent } from './usuarios/edit/edit.component';
import { DetailsUsuarioComponent } from './usuarios/details/details.component';

// APARTADO INVERNADERO

import { AddInvComponent } from './usuarios/invernadero/addinv/addinv.component'; 
import { EditInvComponent } from './usuarios/invernadero/editinv/editinv.component';
import { DetailsInvComponent } from './usuarios/invernadero/detailsinv/detailsinv.component';

// APARTADO CAMARAS

import { CamaraComponent } from './usuarios/invernadero/detailsinv/Camaras/camaras.component';
import { AddCamaraComponent } from './usuarios/invernadero/detailsinv/addCamaras/addcamaras.component';

//APARTADO COMPONENTES Y CONTROLADORES

import { AddComponentComponent } from './usuarios/invernadero/component/addcomponent/addcomponent.component';
import { AddControllerComponent } from './usuarios/invernadero/component/addcontroller/addcontroller.component';
import { DetailsComponentComponent } from './usuarios/invernadero/component/detailscomponent/detailscomponent.component';
import { DetailsControllerComponent } from './usuarios/invernadero/component/detailscontroller/detailscontroller.component';
import { EditComponentComponent } from './usuarios/invernadero/component/editcomponent/editcomponent.component';
import { EditControllerComponent } from './usuarios/invernadero/component/editcontroller/editcontroller.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
  //producto
  { path: 'product', component: ProductoComponent},
  { path: 'addproduct', component:AddProductoComponent},
  { path: 'detailsproduct', component:DetailsProductoComponent},
  { path: 'editproduct', component:EditProductoComponent},
  //usuarios
  { path: 'user', component: UsuariosComponent, },
  { path: 'add', component: AddUsuarioComponent, },
  { path: 'edit', component: EditUsuarioComponent, },
  { path: 'details', component: DetailsUsuarioComponent, },
  //invernadero
  { path: 'addinv', component: AddInvComponent, },
  { path: 'editinv', component: EditInvComponent,},
  { path: 'detailsinv', component: DetailsInvComponent, },
  //camaras
    { path: 'camaras', component: CamaraComponent, },
  { path: 'addcamara', component: AddCamaraComponent,},
  
  //componentes y controladores
  { path: 'addcomponent', component: AddComponentComponent, },
  { path: 'addcontroller', component: AddControllerComponent, },
  { path: 'detailscomponent', component: DetailsComponentComponent, },
  { path: 'detailscontroller', component: DetailsControllerComponent, },
  { path: 'editcomponent', component: EditComponentComponent, },
  { path: 'editcontroller', component: EditControllerComponent, },
  //profile
  { path: 'profile', component: ProfileComponent},
  // Controlador
  { path: 'controlador', component: ControladorComponent},
  { path: 'addControlador', component: AddControladorComponent},
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
