import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
//apartado de productos
import { ControladorComponent } from './controlador.component';
import { AddControladorComponent } from './add/add.component';

@NgModule({
  imports: [
    ThemeModule,

    NgxEchartsModule,
  ],
  declarations: [
	ControladorComponent,
	AddControladorComponent
	
    
  ],
})
export class ControladorModule {
}
