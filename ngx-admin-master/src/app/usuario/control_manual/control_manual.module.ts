import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  ControlManualRoutingModule, routedComponents } from './control_manual-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ControlManualRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ControlManualModule { }
