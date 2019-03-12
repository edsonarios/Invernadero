import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { InfoComponent } from './info.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    InfoComponent,
  ],
})
export class InfoModule { }
