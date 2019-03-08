import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    ThemeModule,

    NgxEchartsModule,
  ],
  declarations: [
   ProfileComponent
    
  ],
})
export class ProfileModule {

}
