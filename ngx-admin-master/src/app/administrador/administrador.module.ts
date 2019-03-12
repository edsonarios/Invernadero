import { NgModule } from '@angular/core';

import { AdministradorComponent } from './administrador.component';

import { CamarasModule } from './camaras/camaras.module';


import { AdministradorRoutingModule } from './administrador-routing.module';
import { ThemeModule } from '../@theme/theme.module';


const PAGES_COMPONENTS = [
  AdministradorComponent,
];

@NgModule({
  imports: [
    AdministradorRoutingModule,
    ThemeModule,
    CamarasModule,
    
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class AdministradorModule {
}
