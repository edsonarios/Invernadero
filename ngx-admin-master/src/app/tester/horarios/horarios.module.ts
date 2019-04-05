import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { HorariosComponent } from './horarios.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    HorariosComponent,
  ],
})
export class HorariosModule { }

