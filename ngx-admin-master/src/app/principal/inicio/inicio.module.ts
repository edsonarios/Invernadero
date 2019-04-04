import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { InicioComponent } from './inicio.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   InicioComponent,

    
  ],
})
export class InicioModule {

}
