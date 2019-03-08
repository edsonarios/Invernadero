import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AdminComponent } from './admin.component';

// IMPORTAR LOS MODULOS PARA LLAMAMIENTO DE DATOS
import { ControladorModule } from './Controlador/controlador.module';
import { ProductoModule } from './producto/producto.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProfileModule } from './profile/profile.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../@theme/theme.module';


const PAGES_COMPONENTS = [
  AdminComponent,
];

// INSTANCIAR LOS MODULOS PARA PODER USARLOS
@NgModule({
  imports: [
   AdminRoutingModule,
    ThemeModule,
    UsuariosModule,
    ProductoModule,
    ControladorModule,
    HttpModule,
    ProfileModule
    
 
  
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class AdminModule {
}
