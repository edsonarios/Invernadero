import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { fundido } from '../../animation';
@Component({
   selector: 'ngx-usuario-prueba',
   styleUrls: ['./prueba.component.scss'],
   templateUrl: './prueba.component.html',
   animations: [fundido],
})
export class PruebaComponent {
   Val = 0;

   constructor(private router: Router) {
      // console.log('PRUEBA COMPONENT CARGADO');
   }
}
