import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { PruebaComponent } from './prueba.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { MonitoreoModule } from '../monitoreo/monitoreo.module';
import { ControlManualModule } from '../control_manual/control_manual.module';


@NgModule({
  imports: [
    ThemeModule,
    MonitoreoModule,
    ControlManualModule,
  ],
  declarations: [
    PruebaComponent,
    RoomsComponent,
    RoomSelectorComponent,
  ],
})
export class PruebaModule { }
