import { Component } from '@angular/core';

@Component({
   selector: 'ngx-usuario-cuenta',
   template: ` <router-outlet></router-outlet> `,
})
export class CuentaComponent {
   constructor() {
      console.log('CUENTA CARGADA CON EXITO');
   }
}
