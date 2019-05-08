import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { ContactosComponent } from './contactos.component';




@NgModule({
  imports: [
    ThemeModule,
   
  ],
  declarations: [
   ContactosComponent,

    
  ],
})
export class ContactosModule {

}
