import { NgModule } from '@angular/core';

import { DemoComponent } from './demo.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './demo-routing.module';
import { ThemeModule } from '../../@theme/theme.module';


const PAGES_COMPONENTS = [
  DemoComponent,

];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
 
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class DemoModule {
}