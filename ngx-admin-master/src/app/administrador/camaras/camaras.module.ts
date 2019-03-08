import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { CamarasComponent } from './camaras.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   CamarasComponent,

    
  ],
})
export class CamarasModule {

}
