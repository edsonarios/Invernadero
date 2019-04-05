import { NgModule } from '@angular/core';
import { NbBadgeModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CuentasComponent } from './cuentas.component';


@NgModule({
  imports: [
    ThemeModule,
    NbBadgeModule
  ],
  declarations: [
    CuentasComponent,
  ],
})
export class CuentasModule { }

