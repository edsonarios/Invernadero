import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { PrincipalComponent } from './principal.component';

// IMPORTAR LOS MODULOS PARA LLAMAMIENTO DE DATOS

import { LoginModule } from './login/login.module';
import { InicioModule } from './inicio/inicio.module';
import { ContactosModule } from './contactos/contactos.module';
import { QuienesSomosModule } from './quienes_somos/quienes_somos.module';
import { ProductosModule } from './productos/productos.module';
import { ServiciosModule } from './servicios/servicios.module';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PrincipalComponent,
];

// INSTANCIAR LOS MODULOS PARA PODER USARLOS
@NgModule({
  imports: [
  NgxEchartsModule,
    PrincipalRoutingModule,
    ThemeModule,
    LoginModule,
    InicioModule,
    ContactosModule,
    QuienesSomosModule,
    ProductosModule,
    ServiciosModule,
 
  
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PrincipalModule {
}

