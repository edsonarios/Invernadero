import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './administrador-menu';

@Component({
   selector: 'ngx-adinistrador',
   templateUrl: './administrador.component.html',
})
export class AdministradorComponent {
   menu = MENU_ITEMS;
   constructor(private router: Router) {
      console.log('SALUDOS DESD EL ADMINISTRADOR');
      /*	if (localStorage.getItem('status')==null) {
  		this.router.navigate(['/Principal/Inicio']);
  		window.alert('usted no tiene acceso');
  	}*/
   }
}
