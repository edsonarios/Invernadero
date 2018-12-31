import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
//apartado de productos
import { ProductoComponent } from './producto.component';
import { AddProductoComponent} from './add/add.component';
import { DetailsProductoComponent } from './details/details.component';
import { EditProductoComponent } from './edit/edit.component';
@NgModule({
  imports: [
    ThemeModule,

    NgxEchartsModule,
  ],
  declarations: [
	ProductoComponent,
	AddProductoComponent,
	DetailsProductoComponent,
	EditProductoComponent
   
    
  ],
})
export class ProductoModule {

}
