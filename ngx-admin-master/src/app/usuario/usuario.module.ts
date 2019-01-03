import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';

import { ReporteModule } from './reporte/reporte.module';
import { InfoModule } from './info/info.module';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ThemeModule } from '../@theme/theme.module';


const PAGES_COMPONENTS = [
  UsuarioComponent,
  
];

@NgModule({
  imports: [
    UsuarioRoutingModule,
    ThemeModule,
    ReporteModule,
    InfoModule,
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class UsuarioModule {
}
