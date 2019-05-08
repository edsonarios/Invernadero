import { NgModule } from '@angular/core';

import { AdministradorComponent } from './administrador.component';

import { ReportesModule } from './reportes/reportes.module';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { ThemeModule } from '../@theme/theme.module';


const PAGES_COMPONENTS = [
  AdministradorComponent,
];

@NgModule({
  imports: [
    AdministradorRoutingModule,
    ThemeModule,
    ReportesModule,
    
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class AdministradorModule {
}
