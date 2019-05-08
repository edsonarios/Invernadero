import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { ServiciosComponent } from './servicios.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   ServiciosComponent,

    
  ],
})
export class ServiciosModule {

}
