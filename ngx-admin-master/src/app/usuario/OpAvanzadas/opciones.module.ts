import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { OpcionesComponent } from './opciones.component';
import { HttpClientModule } from '@angular/common/http';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
}from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatusCardComponent } from './status-card/status-card.component';



@NgModule({
  imports: [
    ThemeModule,
    NgbModule,
    NbCardModule,
    FormsModule,
    NbCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    OpcionesComponent,
    StatusCardComponent,
  ],
  providers:[],
  bootstrap:[OpcionesComponent]
})
export class OpcionesModule { }