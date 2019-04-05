import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ReportesComponent } from './reportes.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ReportesComponent,
  ],
})
export class ReportesModule { }
