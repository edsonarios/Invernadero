import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login.component';




@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
   LoginComponent,

    
  ],
})
export class LoginModule {

}
