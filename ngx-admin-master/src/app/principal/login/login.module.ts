import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   LoginComponent,

    
  ],
})
export class LoginModule {

}
