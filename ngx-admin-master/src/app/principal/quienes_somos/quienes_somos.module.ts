import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { QuienesSomosComponent } from './quienes_somos.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   QuienesSomosComponent,

    
  ],
})
export class QuienesSomosModule {

}
