import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';

import { AjustesComponent } from './ajustes/ajustes.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
   ProfileComponent,
   AjustesComponent

    
  ],
})
export class ProfileModule { }
