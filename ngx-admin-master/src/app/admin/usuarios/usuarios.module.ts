import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';

// APARTADO DE USUARIOS
import { UsuariosComponent } from './usuarios.component';
import { AddUsuarioComponent } from './add/add.component';
import { EditUsuarioComponent } from './edit/edit.component';
import { DetailsUsuarioComponent } from './details/details.component';

// APARTADO INVERNADERO

import { AddInvComponent } from './invernadero/addinv/addinv.component'; 
import { EditInvComponent } from './invernadero/editinv/editinv.component';
import { DetailsInvComponent } from './invernadero/detailsinv/detailsinv.component';
import { CamaraComponent } from './invernadero/detailsinv/Camaras/camaras.component';
import { AddCamaraComponent } from './invernadero/detailsinv/addCamaras/addcamaras.component';

//APARTADO COMPONENTES Y CONTROLADORES

import { AddComponentComponent } from './invernadero/component/addcomponent/addcomponent.component';
import { AddControllerComponent } from './invernadero/component/addcontroller/addcontroller.component';
import { DetailsComponentComponent } from './invernadero/component/detailscomponent/detailscomponent.component';
import { DetailsControllerComponent } from './invernadero/component/detailscontroller/detailscontroller.component';
import { EditComponentComponent } from './invernadero/component/editcomponent/editcomponent.component';
import { EditControllerComponent } from './invernadero/component/editcontroller/editcontroller.component';

@NgModule({
  imports: [
    ThemeModule,

    NgxEchartsModule,
  ],
  declarations: [
   UsuariosComponent,
   AddUsuarioComponent,
   EditUsuarioComponent,
   DetailsUsuarioComponent,
   AddInvComponent,
   EditInvComponent,
   DetailsInvComponent,
   CamaraComponent,
   AddCamaraComponent,
  AddComponentComponent,
  AddControllerComponent ,
  DetailsComponentComponent,
  DetailsControllerComponent,
  EditComponentComponent,
  EditControllerComponent,
    
  ],
})
export class UsuariosModule {

}
