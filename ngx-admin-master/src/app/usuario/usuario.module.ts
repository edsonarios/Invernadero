import { NgModule } from '@angular/core';


import { UsuarioComponent } from './usuario.component';

import { ReporteModule } from './Reporte/reporte.module';
import { InfoModule } from './info/info.module';
import { MonitoreoModule } from './monitoreo/monitoreo.module';
import { HorariosModule } from './horarios/horarios.module';
import { ControlManualModule } from './control_manual/control_manual.module';

import { PruebaModule } from './Prueba/prueba.module';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { OpcionesModule } from './OpAvanzadas/opciones.module';


const PAGES_COMPONENTS = [
  UsuarioComponent,
];

@NgModule({
  imports: [
    UsuarioRoutingModule,
    ThemeModule,
    ReporteModule,
    InfoModule,
    MonitoreoModule,
    HorariosModule,
    NotificacionesModule,
    OpcionesModule,
    ReporteModule,
    ControlManualModule,

    PruebaModule,

    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class UsuarioModule {
}
