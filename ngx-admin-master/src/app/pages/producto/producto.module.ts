import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductoComponent } from './producto.component';
import { AddProductoComponent } from './complements/add/add.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
   ProductoComponent,
	AddProductoComponent,


    
  ],
})
export class ProductoModule { }
