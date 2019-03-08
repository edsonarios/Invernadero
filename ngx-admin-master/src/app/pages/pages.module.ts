import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PagesComponent } from './pages.component';

// IMPORTAR LOS MODULOS PARA LLAMAMIENTO DE DATOS
import { InfoModule } from './info/info.module';
import { ReporteModule } from './reporte/reporte.module';
import { ProductoModule } from './producto/producto.module';
import { ProfileModule } from './profile/profile.module';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

// INSTANCIAR LOS MODULOS PARA PODER USARLOS
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ReporteModule,
    ProductoModule,
    HttpModule,
    ProfileModule,
    InfoModule
  
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}

