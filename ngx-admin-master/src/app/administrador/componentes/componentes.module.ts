import { NgModule } from '@angular/core';

//import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import {  ComponentesRoutingModule, routedComponents } from './componentes-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ComponentesRoutingModule,
   // ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ComponentesModule { }
