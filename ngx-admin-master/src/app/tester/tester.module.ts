import { NgModule } from '@angular/core';

import { TesterComponent } from './tester.component';

import { CuentasModule} from './cuentas/cuentas.module';
import { MonitoreoModule } from './monitoreo/monitoreo.module';
import { ControlManualModule } from './control_manual/control_manual.module';
import { HorariosModule } from './horarios/horarios.module';



import { TesterRoutingModule } from './tester-routing.module';
import { ThemeModule } from '../@theme/theme.module';


const PAGES_COMPONENTS = [
  TesterComponent,
];

@NgModule({
  imports: [
    TesterRoutingModule,
    ThemeModule,
    CuentasModule,
    MonitoreoModule,
    ControlManualModule,
    HorariosModule
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class TesterModule {
}
