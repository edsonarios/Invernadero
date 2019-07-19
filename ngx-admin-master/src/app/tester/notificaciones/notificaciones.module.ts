import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { NotificacionesComponent } from './notificaciones.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    NotificacionesComponent,
  ],
})
export class NotificacionesModule { }

