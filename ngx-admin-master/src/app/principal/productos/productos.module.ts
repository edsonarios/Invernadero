import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductosComponent } from './productos.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   ProductosComponent,

    
  ],
})
export class ProductosModule {

}
