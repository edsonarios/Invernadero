import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { NotificacionesComponent } from './notificaciones.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    ThemeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    NotificacionesComponent,
  ],
  providers:[],
  bootstrap:[NotificacionesComponent]
})
export class NotificacionesModule { }

