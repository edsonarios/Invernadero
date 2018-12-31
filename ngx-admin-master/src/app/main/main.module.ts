import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';

// IMPORTAR LOS MODULOS PARA LLAMAMIENTO DE DATOS

import { LoginModule } from './login/login.module';

import { MainRoutingModule } from './main-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  MainComponent,
];

// INSTANCIAR LOS MODULOS PARA PODER USARLOS
@NgModule({
  imports: [
    MainRoutingModule,
    ThemeModule,
    LoginModule,
 
  
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class MainModule {
}

