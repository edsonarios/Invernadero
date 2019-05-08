import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ReporteComponent } from './reporte.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ReporteComponent,
  ],
})
export class ReporteModule { }
