import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ControlManualComponent } from './control_manual.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ControlManualComponent,
  ],
})
export class ControlManualModule { }

