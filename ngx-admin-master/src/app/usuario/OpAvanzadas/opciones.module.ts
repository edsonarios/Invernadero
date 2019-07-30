import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { OpcionesComponent } from './opciones.component';
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
    OpcionesComponent,
  ],
  providers:[],
  bootstrap:[OpcionesComponent]
})
export class OpcionesModule { }