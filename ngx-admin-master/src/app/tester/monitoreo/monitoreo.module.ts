import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { MonitoreoComponent } from './monitoreo.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    MonitoreoComponent,
  ],
})
export class MonitoreoModule { }

