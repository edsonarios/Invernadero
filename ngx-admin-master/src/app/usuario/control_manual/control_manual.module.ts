import { NgModule } from '@angular/core';
import { NbBadgeModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ControlManualComponent } from './control_manual.component';

import { StatusCardComponent } from './status-card/status-card.component';
import { StatusCardOffComponent } from './status-card-off/status-card-off.component';
@NgModule({
  imports: [
    ThemeModule,
    NbBadgeModule,
  ],
  declarations: [
    ControlManualComponent,
    StatusCardComponent,
 	 StatusCardOffComponent,
 	 
  ],
})
export class ControlManualModule { }
